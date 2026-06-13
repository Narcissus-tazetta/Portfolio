import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

interface ThemeContextType {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
        return stored;
    }
    return "system";
}

function resolveTheme(theme: Theme): ResolvedTheme {
    return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(theme: Theme): ResolvedTheme {
    const root = window.document.documentElement;
    const resolved = resolveTheme(theme);

    root.classList.remove("light", "dark");
    root.classList.add(resolved);

    return resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => resolveTheme(getStoredTheme()));

    const setTheme = (nextTheme: Theme) => {
        localStorage.setItem(STORAGE_KEY, nextTheme);
        setThemeState(nextTheme);
        setResolvedTheme(applyTheme(nextTheme));
    };

    useEffect(() => {
        setResolvedTheme(applyTheme(theme));
    }, [theme]);

    useEffect(() => {
        if (theme !== "system") {
            return;
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            setResolvedTheme(applyTheme("system"));
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
