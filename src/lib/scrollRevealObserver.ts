const INTERSECTION_THRESHOLD = 0.08;
const INTERSECTION_ROOT_MARGIN = "12% 0px 8% 0px";

type ScrollRevealListener = (visible: boolean) => void;

let sharedObserver: IntersectionObserver | null = null;
const listeners = new Map<Element, ScrollRevealListener>();

function getSharedObserver(): IntersectionObserver {
    if (sharedObserver) {
        return sharedObserver;
    }

    sharedObserver = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                listeners.get(entry.target)?.(entry.isIntersecting);
            }
        },
        {
            threshold: INTERSECTION_THRESHOLD,
            rootMargin: INTERSECTION_ROOT_MARGIN,
        },
    );

    return sharedObserver;
}

export function observeScrollReveal(element: Element, listener: ScrollRevealListener): () => void {
    listeners.set(element, listener);
    getSharedObserver().observe(element);

    return () => {
        listeners.delete(element);
        getSharedObserver().unobserve(element);

        if (listeners.size === 0) {
            sharedObserver?.disconnect();
            sharedObserver = null;
        }
    };
}
