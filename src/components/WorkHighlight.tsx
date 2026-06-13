import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectHasMedia } from "../content/projects";
import type { Project } from "../content/types";
import { assetUrl } from "../lib/assetUrl";
import { projectImageAlt } from "../lib/projectImageAlt";
import { useLanguage } from "../contexts/LanguageContext";
import ProjectCategoryIcon from "./ProjectCategoryIcon";

const cardClassName =
    "group block overflow-hidden rounded-xl border border-border/15 transition-colors hover:border-accent/40";

export default function WorkHighlight({ project }: { project: Project }) {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const hasMedia = projectHasMedia(project);
    const isDetailPage = project.detailLayout !== "external";

    const objectClass = project.thumbnailFit === "cover" ? "object-cover" : "object-contain";
    const posterSrc = assetUrl(project.thumbnail);
    const animatedSrc =
        project.animateOnHover && project.thumbnailAnimated ? assetUrl(project.thumbnailAnimated) : null;
    const imageAlt = projectImageAlt(project, t(project.description));

    useEffect(() => {
        if (!animatedSrc) {
            return;
        }

        const preload = new Image();
        preload.src = animatedSrc;
    }, [animatedSrc]);

    const content = (
        <>
            <div
                className="relative flex items-center justify-center overflow-hidden bg-surface"
                style={{ aspectRatio: project.thumbnailAspect ?? "16 / 9" }}
            >
                {hasMedia ? (
                    animatedSrc ? (
                        <>
                            <img
                                src={posterSrc}
                                alt={imageAlt}
                                className={`h-full w-full ${objectClass} transition-opacity duration-300 ${
                                    isHovered ? "opacity-0" : "opacity-100"
                                }`}
                                loading="lazy"
                            />
                            <img
                                src={animatedSrc}
                                alt=""
                                aria-hidden="true"
                                className={`absolute inset-0 h-full w-full ${objectClass} transition-opacity duration-300 ${
                                    isHovered ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        </>
                    ) : (
                        <img
                            src={posterSrc}
                            alt={imageAlt}
                            className={`h-full w-full ${objectClass} transition-transform duration-500 group-hover:scale-[1.01]`}
                            loading="lazy"
                        />
                    )
                ) : (
                    <ProjectCategoryIcon category={project.category} />
                )}
            </div>

            <article className="flex items-start justify-between gap-4 p-5">
                <div className="space-y-1.5">
                    <h3 className="font-sans text-lg font-medium text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted">{t(project.description)}</p>
                    <p className="border-l-2 border-accent/40 pl-3 text-xs leading-relaxed text-subtle">
                        {t(project.context)}
                    </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </article>
        </>
    );

    if (isDetailPage) {
        return (
            <Link
                to={`/works/${project.id}`}
                className={cardClassName}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {content}
            </Link>
        );
    }

    return (
        <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={cardClassName}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            {content}
        </a>
    );
}
