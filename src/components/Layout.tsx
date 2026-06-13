import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

export default function Layout() {
    return (
        <div className="min-h-screen font-body text-foreground">
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
            <SiteFooter />
        </div>
    );
}
