import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { getReducedMotionPreference, subscribeReducedMotion } from "../lib/subscribeSystemTheme";
import { observeScrollReveal } from "../lib/scrollRevealObserver";

const DEFAULT_STAGGER_MS = 70;
const MAX_STAGGER_MS = 280;

type ScrollRevealElement = "div" | "section" | "li" | "ul" | "article";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    staggerIndex?: number;
    staggerMs?: number;
    variant?: "default" | "subtle";
    as?: ScrollRevealElement;
};

export default function ScrollReveal({
    children,
    className = "",
    staggerIndex = 0,
    staggerMs = DEFAULT_STAGGER_MS,
    variant = "default",
    as: Tag = "div",
}: ScrollRevealProps) {
    const ref = useRef<HTMLElement>(null);
    const prefersReducedMotion = useSyncExternalStore(
        subscribeReducedMotion,
        getReducedMotionPreference,
        () => false,
    );
    const [visible, setVisible] = useState(prefersReducedMotion);

    useEffect(() => {
        if (prefersReducedMotion) {
            setVisible(true);
            return;
        }

        const element = ref.current;
        if (!element) {
            return;
        }

        return observeScrollReveal(element, setVisible);
    }, [prefersReducedMotion]);

    const delayMs = Math.min(staggerIndex * staggerMs, MAX_STAGGER_MS);
    const style = (
        visible ? { "--scroll-reveal-delay": `${delayMs}ms` } : {}
    ) as CSSProperties;

    return (
        <Tag
            ref={ref as never}
            className={`scroll-reveal ${variant === "subtle" ? "scroll-reveal--subtle" : ""} ${
                visible ? "scroll-reveal--visible" : ""
            } ${className}`.trim()}
            style={style}
        >
            {children}
        </Tag>
    );
}
