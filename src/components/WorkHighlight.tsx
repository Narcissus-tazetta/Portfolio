import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projectHasMedia } from "../content/projects";
import type { Project } from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { useLanguage } from "../contexts/LanguageContext";
import ProjectCategoryIcon from "./ProjectCategoryIcon";

export default function WorkHighlight({ project }: { project: Project }) {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const hasMedia = projectHasMedia(project);

    const objectClass = project.thumbnailFit === "cover" ? "object-cover" : "object-contain";
    const imageSrc = assetUrl(
        project.animateOnHover && isHovered && project.thumbnailAnimated
            ? project.thumbnailAnimated
            : project.thumbnail,
    );

    return (
        <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-xl border border-border/15 transition-colors hover:border-accent/40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            <div
                className="flex items-center justify-center bg-surface"
                style={{ aspectRatio: project.thumbnailAspect ?? "16 / 9" }}
            >
                {hasMedia ? (
                    <img
                        src={imageSrc}
                        alt=""
                        className={`h-full w-full ${objectClass} transition-transform duration-500 group-hover:scale-[1.01]`}
                        loading="lazy"
                    />
                ) : (
                    <ProjectCategoryIcon category={project.category} />
                )}
            </div>

            <article className="flex items-start justify-between gap-4 p-5">
                <div className="space-y-1">
                    <h3 className="font-sans text-lg font-medium text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted">{t(project.description)}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </article>
        </a>
    );
}
