import { useEffect, useSyncExternalStore } from "react";
import { getSystemTheme, syncResolvedTheme, usePreferencesStore } from "../stores/portfolioStore";

function subscribeSystemTheme(onStoreChange: () => void) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", onStoreChange);
    return () => mediaQuery.removeEventListener("change", onStoreChange);
}

export default function PreferencesSync() {
    const theme = usePreferencesStore((state) => state.theme);
    const systemTheme = useSyncExternalStore(subscribeSystemTheme, getSystemTheme, () => "dark" as const);

    useEffect(() => {
        syncResolvedTheme(theme, systemTheme);
    }, [theme, systemTheme]);

    return null;
}
