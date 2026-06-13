import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AccentProvider } from "./contexts/AccentContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { bootstrapApp } from "./lib/initialLoader";
import "./index.css";

if (typeof document !== "undefined") {
    document.title = "Prasonのポートフォリオ";
}

void bootstrapApp(() => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <ThemeProvider>
                <AccentProvider>
                    <LanguageProvider>
                        <BrowserRouter basename={import.meta.env.BASE_URL}>
                            <App />
                        </BrowserRouter>
                    </LanguageProvider>
                </AccentProvider>
            </ThemeProvider>
        </StrictMode>,
    );
});
