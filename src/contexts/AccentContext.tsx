import { usePreferencesStore } from "../stores/portfolioStore";

export function useAccent() {
    const isPurple = usePreferencesStore((state) => state.accentPurple);
    const togglePurple = usePreferencesStore((state) => state.toggleAccentPurple);

    return { isPurple, togglePurple };
}
