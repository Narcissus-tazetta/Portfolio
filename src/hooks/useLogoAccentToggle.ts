import { useRef } from "react";
import { LOGO_CLICK_RESET_MS, LOGO_CLICKS_REQUIRED, useAccent } from "../contexts/AccentContext";

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
