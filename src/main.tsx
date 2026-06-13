import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";

if (typeof document !== "undefined") document.title = "Prasonのポートフォリオ";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <BrowserRouter basename={import.meta.env.BASE_URL}>
                    <App />
                </BrowserRouter>
            </LanguageProvider>
        </ThemeProvider>
    </React.StrictMode>
);
