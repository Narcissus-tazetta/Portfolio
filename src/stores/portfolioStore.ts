import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LocalizedText } from "../content/types";
import { applyLanguageWithTransition } from "../lib/languageTransition";
import { applyThemeToDom } from "../lib/themeTransition";

export type Language = "ja" | "en";
export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const PERSIST_KEY = "portfolio-preferences";
const LEGACY_LANGUAGE_KEY = "portfolio-language";
const LEGACY_THEME_KEY = "portfolio-theme";
const LEGACY_ACCENT_KEY = "portfolio-accent-purple";

type ThemeApplyOptions = {
    animate?: boolean;
};

type LanguageApplyOptions = {
    animate?: boolean;
};

let pendingThemeApplyOptions: ThemeApplyOptions | undefined;

function isLanguage(value: unknown): value is Language {
    return value === "ja" || value === "en";
}

function isTheme(value: unknown): value is Theme {
    return value === "light" || value === "dark" || value === "system";
}

function readPersistedState(): { language: Language; theme: Theme; accentPurple: boolean } | null {
    try {
        const raw = localStorage.getItem(PERSIST_KEY);
        if (!raw) {
            return null;
        }

        const parsed = JSON.parse(raw) as { state?: { language?: unknown; theme?: unknown; accentPurple?: unknown } };
        const state = parsed.state;
        if (!state) {
            return null;
        }

        return {
            language: isLanguage(state.language) ? state.language : "ja",
            theme: isTheme(state.theme) ? state.theme : "system",
            accentPurple: Boolean(state.accentPurple),
        };
    } catch {
        return null;
    }
}

function readLegacyState(): { language: Language; theme: Theme; accentPurple: boolean } {
    const language = localStorage.getItem(LEGACY_LANGUAGE_KEY);
    const theme = localStorage.getItem(LEGACY_THEME_KEY);

    return {
        language: isLanguage(language) ? language : "ja",
        theme: isTheme(theme) ? theme : "system",
        accentPurple: localStorage.getItem(LEGACY_ACCENT_KEY) === "1",
    };
}

function readInitialPreferences() {
    return readPersistedState() ?? readLegacyState();
}

function clearLegacyPreferenceKeys() {
    localStorage.removeItem(LEGACY_LANGUAGE_KEY);
    localStorage.removeItem(LEGACY_THEME_KEY);
    localStorage.removeItem(LEGACY_ACCENT_KEY);
}

function applyLanguage(language: Language) {
    document.documentElement.lang = language;
}

function applyAccentPurple(accentPurple: boolean) {
    document.documentElement.classList.toggle("accent-purple", accentPurple);
}

export function getSystemTheme(): ResolvedTheme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveTheme(theme: Theme, systemTheme: ResolvedTheme = getSystemTheme()): ResolvedTheme {
    return theme === "system" ? systemTheme : theme;
}

export function consumeThemeApplyOptions(): ThemeApplyOptions | undefined {
    const options = pendingThemeApplyOptions;
    pendingThemeApplyOptions = undefined;
    return options;
}

interface PreferencesState {
    language: Language;
    theme: Theme;
    accentPurple: boolean;
    setLanguage: (language: Language, options?: LanguageApplyOptions) => void;
    setTheme: (theme: Theme, options?: ThemeApplyOptions) => void;
    toggleAccentPurple: () => void;
}

const initialPreferences = readInitialPreferences();

export const usePreferencesStore = create<PreferencesState>()(
    persist(
        (set) => ({
            language: initialPreferences.language,
            theme: initialPreferences.theme,
            accentPurple: initialPreferences.accentPurple,
            setLanguage: (language, options) => {
                const currentLanguage = usePreferencesStore.getState().language;
                if (language === currentLanguage) {
                    return;
                }

                if (options?.animate) {
                    void applyLanguageWithTransition(language, (nextLanguage) => {
                        applyLanguage(nextLanguage);
                        set({ language: nextLanguage });
                    });
                    return;
                }

                applyLanguage(language);
                set({ language });
            },
            setTheme: (theme, options) => {
                pendingThemeApplyOptions = options;
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
            name: PERSIST_KEY,
            partialize: (state) => ({
                language: state.language,
                theme: state.theme,
                accentPurple: state.accentPurple,
            }),
            onRehydrateStorage: () => (state) => {
                clearLegacyPreferenceKeys();

                if (!state) {
                    return;
                }

                applyLanguage(state.language);
                applyAccentPurple(state.accentPurple);
                applyThemeToDom(resolveTheme(state.theme));
            },
        },
    ),
);

export function translate(text: LocalizedText, language: Language): string {
    return text[language];
}

interface UiState {
    pageVisible: boolean;
    slowPageFade: boolean;
    setPageVisible: (visible: boolean) => void;
    setSlowPageFade: (slow: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
    pageVisible: true,
    slowPageFade: false,
    setPageVisible: (pageVisible) => set({ pageVisible }),
    setSlowPageFade: (slowPageFade) => set({ slowPageFade }),
}));

export function syncPreferencesToDOM() {
    const state = usePreferencesStore.getState();
    applyLanguage(state.language);
    applyAccentPurple(state.accentPurple);
}

export function syncResolvedTheme(theme: Theme, systemTheme: ResolvedTheme, options?: ThemeApplyOptions) {
    applyThemeToDom(resolveTheme(theme, systemTheme), options?.animate ?? false);
}
