import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { useUiStore } from "./stores/portfolioStore";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const WorksPage = lazy(() => import("./pages/WorksPage"));

const PAGE_FADE_MS = 180;

function App() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const pageVisible = useUiStore((state) => state.pageVisible);
    const slowPageFade = useUiStore((state) => state.slowPageFade);
    const setPageVisible = useUiStore((state) => state.setPageVisible);

    useEffect(() => {
        if (location.key === displayLocation.key) {
            return;
        }

        setPageVisible(false);

        const timer = window.setTimeout(() => {
            setDisplayLocation(location);
            window.scrollTo(0, 0);
            setPageVisible(true);
        }, PAGE_FADE_MS);

        return () => window.clearTimeout(timer);
    }, [location, displayLocation.key, setPageVisible]);

    return (
        <div
            className={[
                "page-transition",
                pageVisible ? "page-transition--visible" : "page-transition--hidden",
                slowPageFade ? "page-transition--slow" : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <Suspense fallback={null}>
                <Routes location={displayLocation}>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/works" element={<WorksPage />} />
                        <Route path="/works/:projectId" element={<ProjectDetailPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
