import { getReducedMotionPreference } from "./subscribeSystemTheme";

type ResolvedTheme = "light" | "dark";

const THEME_WIPE_MS = 880;

function applyResolvedTheme(resolved: ResolvedTheme) {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);
}

function getResolvedThemeFromDom(): ResolvedTheme {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function applyThemeToDom(resolved: ResolvedTheme, animate = false) {
    if (getResolvedThemeFromDom() === resolved) {
        return;
    }

    if (!animate || getReducedMotionPreference() || typeof document.startViewTransition !== "function") {
        applyResolvedTheme(resolved);
        return;
    }

    document.documentElement.classList.add("theme-wipe-transition", `theme-wipe-transition--to-${resolved}`);

    const transition = document.startViewTransition(() => {
        applyResolvedTheme(resolved);
    });

    void transition.finished.finally(() => {
        document.documentElement.classList.remove("theme-wipe-transition", `theme-wipe-transition--to-${resolved}`);
    });
}

export { applyResolvedTheme, THEME_WIPE_MS };
