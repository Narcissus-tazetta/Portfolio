import { type ReactNode } from "react";
import { usePreferencesStore } from "../stores/portfolioStore";

export function AccentProvider({ children }: { children: ReactNode }) {
    return children;
}

export function useAccent() {
    const isPurple = usePreferencesStore((state) => state.accentPurple);
    const togglePurple = usePreferencesStore((state) => state.toggleAccentPurple);

    return { isPurple, togglePurple };
}
