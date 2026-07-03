import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import {
    consumeThemeApplyOptions,
    getSystemTheme,
    syncPreferencesToDOM,
    syncResolvedTheme,
    usePreferencesStore,
} from "../stores/portfolioStore";
import { subscribeSystemTheme } from "../lib/subscribeSystemTheme";

export default function PreferencesSync() {
    const theme = usePreferencesStore((state) => state.theme);
    const systemTheme = useSyncExternalStore(subscribeSystemTheme, getSystemTheme, () => "dark" as const);

    useLayoutEffect(() => {
        syncPreferencesToDOM();
    }, []);

    useEffect(() => {
        syncResolvedTheme(theme, systemTheme, consumeThemeApplyOptions());
    }, [theme, systemTheme]);

    return null;
}
