import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import { SkipLink } from "./SkipLink";

export default function Layout() {
    return (
        <div className="min-h-screen font-body text-foreground">
            <SkipLink />
            <Navbar />
            <main id="main-content" className="pt-16" tabIndex={-1}>
                <Outlet />
            </main>
            <SiteFooter />
        </div>
    );
}
