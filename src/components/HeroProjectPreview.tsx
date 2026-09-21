import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../content/projects";
import { showcase } from "../content/showcase";
import { useLanguage } from "../contexts/LanguageContext";
import { projectImageAlt } from "../lib/projectImageAlt";
import ProjectMedia from "./ProjectMedia";

const featured = showcase.flatMap(entry => {
    const project = projects.find(item => item.id === entry.id);
    return project ? [{ entry, project }] : [];
});

export default function HeroProjectPreview() {
    const { t } = useLanguage();
    const [selected, setSelected] = useState(0);
    const { entry, project } = featured[selected];

    return (
        <div className="hero-preview">
            <div className="hero-preview-top micro-label">
                <span>{t({ ja: "Selected work — 技術と体験", en: "Selected work — Engineering & experience" })}</span>
                <span>{entry.number} / 04</span>
            </div>
            <Link to={`/works/${project.id}`} className={`hero-preview-link hero-preview-link--${entry.tone}`}>
                <div className="hero-preview-media">
                    <ProjectMedia
                        key={project.id}
                        project={project}
                        imageAlt={projectImageAlt(project, t(project.description))}
                        loading="eager"
                        active={false}
                    />
                </div>
                <div className="hero-preview-caption">
                    <span><span className="micro-label">{entry.discipline}</span><strong>{project.title}</strong></span>
                    <span className="hero-preview-arrow"><ArrowUpRight size={22} aria-hidden="true" /></span>
                </div>
            </Link>
            <div className="hero-preview-selector" role="group" aria-label={t({ ja: "作品プレビューを選択", en: "Choose a project preview" })}>
                {featured.map(({ entry: option, project: item }, index) => (
                    <button key={item.id} type="button" aria-pressed={index === selected} aria-label={item.title} onClick={() => setSelected(index)}>
                        <span className="micro-label">{option.number}</span><span>{item.title}</span>
                    </button>
                ))}
            </div>
            <p className="sr-only" aria-live="polite">{project.title}: {t(project.description)}</p>
        </div>
    );
}
