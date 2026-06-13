import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LocalizedText } from "../content/types";

export type Language = "ja" | "en";
export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const LANGUAGE_KEY = "portfolio-language";
const THEME_KEY = "portfolio-theme";
const ACCENT_KEY = "portfolio-accent-purple";

function isLanguage(value: string | null): value is Language {
    return value === "ja" || value === "en";
}

function isTheme(value: string | null): value is Theme {
    return value === "light" || value === "dark" || value === "system";
}

function readLegacyLanguage(): Language {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    return isLanguage(stored) ? stored : "ja";
}

function readLegacyTheme(): Theme {
    const stored = localStorage.getItem(THEME_KEY);
    return isTheme(stored) ? stored : "system";
}

function readLegacyAccentPurple(): boolean {
    return localStorage.getItem(ACCENT_KEY) === "1";
}

function applyLanguage(language: Language) {
    document.documentElement.lang = language;
    localStorage.setItem(LANGUAGE_KEY, language);
}

function applyTheme(resolvedTheme: ResolvedTheme) {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolvedTheme);
}

function applyAccentPurple(accentPurple: boolean) {
    document.documentElement.classList.toggle("accent-purple", accentPurple);
    if (accentPurple) {
        localStorage.setItem(ACCENT_KEY, "1");
    } else {
        localStorage.removeItem(ACCENT_KEY);
    }
}

export function getSystemTheme(): ResolvedTheme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveTheme(theme: Theme, systemTheme: ResolvedTheme = getSystemTheme()): ResolvedTheme {
    return theme === "system" ? systemTheme : theme;
}

interface PreferencesState {
    language: Language;
    theme: Theme;
    accentPurple: boolean;
    setLanguage: (language: Language) => void;
    setTheme: (theme: Theme) => void;
    toggleAccentPurple: () => void;
}

export const usePreferencesStore = create<PreferencesState>()(
    persist(
        (set) => ({
            language: readLegacyLanguage(),
            theme: readLegacyTheme(),
            accentPurple: readLegacyAccentPurple(),
            setLanguage: (language) => {
                applyLanguage(language);
                set({ language });
            },
            setTheme: (theme) => {
                localStorage.setItem(THEME_KEY, theme);
                set({ theme });
            },
            toggleAccentPurple: () =>
                set((state) => {
                    const accentPurple = !state.accentPurple;
                    applyAccentPurple(accentPurple);
                    return { accentPurple };
                }),
        }),
        {
            name: "portfolio-preferences",
            partialize: (state) => ({
                language: state.language,
                theme: state.theme,
                accentPurple: state.accentPurple,
            }),
            onRehydrateStorage: () => (state) => {
                if (!state) {
                    return;
                }

                applyLanguage(state.language);
                applyAccentPurple(state.accentPurple);
                applyTheme(resolveTheme(state.theme));
            },
        },
    ),
);

export function translate(text: LocalizedText, language: Language): string {
    return text[language];
}

interface UiState {
    pageVisible: boolean;
    setPageVisible: (visible: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
    pageVisible: true,
    setPageVisible: (pageVisible) => set({ pageVisible }),
}));

const initialPreferences = usePreferencesStore.getState();
applyLanguage(initialPreferences.language);
applyAccentPurple(initialPreferences.accentPurple);
applyTheme(resolveTheme(initialPreferences.theme));

export function syncResolvedTheme(theme: Theme, systemTheme: ResolvedTheme) {
    applyTheme(resolveTheme(theme, systemTheme));
}
