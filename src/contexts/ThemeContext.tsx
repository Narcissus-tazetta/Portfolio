import { useSyncExternalStore, type ReactNode } from "react";
import {
    getSystemTheme,
    resolveTheme,
    usePreferencesStore,
    type ResolvedTheme,
    type Theme,
} from "../stores/portfolioStore";

function subscribeSystemTheme(onStoreChange: () => void) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", onStoreChange);
    return () => mediaQuery.removeEventListener("change", onStoreChange);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    return children;
}

export function useTheme() {
    const theme = usePreferencesStore((state) => state.theme);
    const setTheme = usePreferencesStore((state) => state.setTheme);
    const systemTheme = useSyncExternalStore(subscribeSystemTheme, getSystemTheme, () => "dark" as const);
    const resolvedTheme: ResolvedTheme = resolveTheme(theme, systemTheme);

    return { theme, resolvedTheme, setTheme } satisfies {
        theme: Theme;
        resolvedTheme: ResolvedTheme;
        setTheme: (theme: Theme) => void;
    };
}

export type { ResolvedTheme, Theme };
