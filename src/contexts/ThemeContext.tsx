import { useSyncExternalStore } from "react";
import {
    getSystemTheme,
    resolveTheme,
    usePreferencesStore,
    type ResolvedTheme,
    type Theme,
} from "../stores/portfolioStore";
import { subscribeSystemTheme } from "../lib/subscribeSystemTheme";

type ThemeApplyOptions = {
    animate?: boolean;
};

export function useTheme() {
    const theme = usePreferencesStore((state) => state.theme);
    const setTheme = usePreferencesStore((state) => state.setTheme);
    const systemTheme = useSyncExternalStore(subscribeSystemTheme, getSystemTheme, () => "dark" as const);
    const resolvedTheme: ResolvedTheme = resolveTheme(theme, systemTheme);

    return {
        theme,
        resolvedTheme,
        setTheme: (nextTheme: Theme, options?: ThemeApplyOptions) => setTheme(nextTheme, options),
    } satisfies {
        theme: Theme;
        resolvedTheme: ResolvedTheme;
        setTheme: (theme: Theme, options?: ThemeApplyOptions) => void;
    };
}

export type { ResolvedTheme, Theme };
