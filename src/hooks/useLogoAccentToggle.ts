import { useRef } from "react";
import { useAccent } from "../contexts/AccentContext";

export const LOGO_CLICKS_REQUIRED = 3;
export const LOGO_CLICK_RESET_MS = 1200;

export function useLogoAccentToggle() {
    const { togglePurple } = useAccent();
    const clickCountRef = useRef(0);
    const clickTimerRef = useRef<number | undefined>(undefined);

    const handleLogoClick = (event: { preventDefault: () => void }) => {
        clickCountRef.current += 1;
        window.clearTimeout(clickTimerRef.current);
        clickTimerRef.current = window.setTimeout(() => {
            clickCountRef.current = 0;
        }, LOGO_CLICK_RESET_MS);

        if (clickCountRef.current >= LOGO_CLICKS_REQUIRED) {
            clickCountRef.current = 0;
            togglePurple();
            event.preventDefault();
        }
    };

    return { handleLogoClick };
}
