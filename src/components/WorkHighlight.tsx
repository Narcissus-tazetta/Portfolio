import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectImageAlt } from "../lib/projectImageAlt";
import type { Project } from "../content/types";
import { useLanguage } from "../contexts/LanguageContext";
import ProjectMedia from "./ProjectMedia";

export default function WorkHighlight({ project }: { project: Project }) {
    const { t } = useLanguage();
    const cardClassName = "work-highlight group";
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
            <div className="work-image">
                <ProjectMedia project={project} imageAlt={imageAlt} active={isHovered} />
                <span className="work-open" aria-hidden="true"><ArrowUpRight size={24} /></span>
            </div>
            <article className="work-copy">
                <div className="work-topline micro-label">
                    <span>{project.tags.slice(0, 2).join(" / ")}</span>
                    <span>{t(project.kind === "personal" ? { ja: "個人開発", en: "Personal" } : { ja: "依頼制作", en: "Commissioned" })}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="work-description">{t(project.description)}</p>
                <p className="work-context">{t(project.impact)}</p>
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
