import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/works" element={<WorksPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    );
}

export default App;
