import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import WorksPage from "./pages/WorksPage";
import { useUiStore } from "./stores/portfolioStore";

const PAGE_FADE_MS = 180;

function App() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const pageVisible = useUiStore((state) => state.pageVisible);
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
        <div className={`page-transition ${pageVisible ? "page-transition--visible" : "page-transition--hidden"}`}>
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
        </div>
    );
}

export default App;
