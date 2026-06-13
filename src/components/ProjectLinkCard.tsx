import type { ReactNode } from "react";

export default function ProjectLinkCard({
    href,
    icon,
    label,
    description,
    meta,
}: {
    href: string;
    icon: ReactNode;
    label: string;
    description: string;
    meta: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-4 rounded-xl border border-border/15 p-6 transition-colors hover:border-accent/40"
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/15 bg-surface-muted/5">
                {icon}
            </div>
            <div className="min-w-0 flex-1">
                <p className="font-sans text-sm text-foreground">{label}</p>
                <p className="mt-1 text-sm text-subtle">{description}</p>
                <p className="mt-2 truncate text-xs text-subtle">{meta}</p>
            </div>
        </a>
    );
}
