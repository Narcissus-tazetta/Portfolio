import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "portfolio-accent-purple";

interface AccentContextType {
    isPurple: boolean;
    togglePurple: () => void;
}

const AccentContext = createContext<AccentContextType | undefined>(undefined);

function getStoredPurple(): boolean {
    return localStorage.getItem(STORAGE_KEY) === "1";
}

function applyPurpleClass(isPurple: boolean) {
    document.documentElement.classList.toggle("accent-purple", isPurple);
    if (isPurple) {
        localStorage.setItem(STORAGE_KEY, "1");
    } else {
        localStorage.removeItem(STORAGE_KEY);
    }
}

export function AccentProvider({ children }: { children: ReactNode }) {
    const [isPurple, setIsPurple] = useState(() => getStoredPurple());

    useEffect(() => {
        applyPurpleClass(isPurple);
    }, [isPurple]);

    const togglePurple = () => {
        setIsPurple((current) => !current);
    };

    return <AccentContext.Provider value={{ isPurple, togglePurple }}>{children}</AccentContext.Provider>;
}

export function useAccent() {
    const context = useContext(AccentContext);
    if (context === undefined) {
        throw new Error("useAccent must be used within an AccentProvider");
    }
    return context;
}

export const LOGO_CLICKS_REQUIRED = 3;
export const LOGO_CLICK_RESET_MS = 1200;
