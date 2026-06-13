import type { ReactNode } from "react";
import PreferencesSync from "../components/PreferencesSync";

export function AppProviders({ children }: { children: ReactNode }) {
    return (
        <>
            <PreferencesSync />
            {children}
        </>
    );
}
