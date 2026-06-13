import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { bootstrapApp } from "./lib/initialLoader";
import { AppProviders } from "./providers/AppProviders";
import "./index.css";

if (typeof document !== "undefined") {
    document.title = "Prasonのポートフォリオ";
}

void bootstrapApp(() => {
    const root = document.getElementById("root");
    if (!root) {
        throw new Error("Root element #root was not found");
    }

    createRoot(root).render(
        <StrictMode>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <AppProviders>
                    <App />
                </AppProviders>
            </BrowserRouter>
        </StrictMode>,
    );
});
