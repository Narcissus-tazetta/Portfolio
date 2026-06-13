import { useCallback, type ReactNode } from "react";
import type { LocalizedText } from "../content/types";
import { translate, usePreferencesStore, type Language } from "../stores/portfolioStore";

export function LanguageProvider({ children }: { children: ReactNode }) {
    return children;
}

export function useLanguage() {
    const language = usePreferencesStore((state) => state.language);
    const setLanguage = usePreferencesStore((state) => state.setLanguage);
    const t = useCallback((text: LocalizedText) => translate(text, language), [language]);

    return { language, setLanguage, t } satisfies {
        language: Language;
        setLanguage: (language: Language) => void;
        t: (text: LocalizedText) => string;
    };
}
