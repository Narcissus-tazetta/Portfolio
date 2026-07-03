import type { Language } from "../stores/portfolioStore";
import { useUiStore } from "../stores/portfolioStore";
import { getReducedMotionPreference } from "./subscribeSystemTheme";

export const LANGUAGE_FADE_MS = 560;

let languageTransitionToken = 0;

function delay(ms: number) {
    return new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
    });
}

export async function applyLanguageWithTransition(language: Language, onApply: (language: Language) => void) {
    if (getReducedMotionPreference()) {
        onApply(language);
        return;
    }

    const token = ++languageTransitionToken;
    const { setPageVisible, setSlowPageFade } = useUiStore.getState();
    const halfFade = LANGUAGE_FADE_MS / 2;

    setSlowPageFade(true);
    setPageVisible(false);

    await delay(halfFade);
    if (token !== languageTransitionToken) {
        return;
    }

    onApply(language);

    await delay(16);
    if (token !== languageTransitionToken) {
        return;
    }

    setPageVisible(true);

    await delay(LANGUAGE_FADE_MS);
    if (token !== languageTransitionToken) {
        return;
    }

    setSlowPageFade(false);
}
