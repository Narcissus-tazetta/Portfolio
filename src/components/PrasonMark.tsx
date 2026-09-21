import type { SVGProps } from "react";

/** A single, gently inclined line with a uniform width. */
export default function PrasonMark(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 32" fill="none" aria-hidden="true" focusable="false" {...props}>
            <path d="M8 29L16 3" stroke="currentColor" strokeWidth="3" />
        </svg>
    );
}
