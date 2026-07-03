import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectImageAlt } from "../lib/projectImageAlt";
import type { Project } from "../content/types";
import { useLanguage } from "../contexts/LanguageContext";
import ProjectMedia from "./ProjectMedia";

const cardClassName =
    "group block overflow-hidden rounded-xl border border-border/15 transition-colors hover:border-accent/40";

export default function WorkHighlight({ project }: { project: Project }) {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const isDetailPage = project.detailLayout !== "external";
    const imageAlt = projectImageAlt(project, t(project.description));

    const handlers = {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        onFocus: () => setIsHovered(true),
        onBlur: () => setIsHovered(false),
    };

    const content = (
        <>
            <ProjectMedia project={project} imageAlt={imageAlt} active={isHovered} />
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
            <Link to={`/works/${project.id}`} className={cardClassName} {...handlers}>
                {content}
            </Link>
        );
    }

    return (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className={cardClassName} {...handlers}>
            {content}
        </a>
    );
}
