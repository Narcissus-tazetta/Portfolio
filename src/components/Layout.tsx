import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="min-h-screen font-body text-foreground">
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
        </div>
    );
}
