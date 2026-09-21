import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../content/types";
import type { showcase } from "../content/showcase";
import { useLanguage } from "../contexts/LanguageContext";
import { projectImageAlt } from "../lib/projectImageAlt";
import ProjectMedia from "./ProjectMedia";

type ShowcaseEntry = (typeof showcase)[number];
export default function ShowcaseProject({ project, entry }: { project: Project; entry: ShowcaseEntry }) {
    const { t } = useLanguage();
    const [active, setActive] = useState(false);
    return (
        <article className={`case-study case-study--${entry.tone}`}>
            <div className="case-meta micro-label"><span>/{entry.number}</span><span>{entry.discipline}</span><span>{t(project.kind === "personal" ? { ja: "個人開発", en: "Personal project" } : { ja: "依頼制作", en: "Commissioned" })}</span></div>
            <Link to={`/works/${project.id}`} className="case-stage group" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onFocus={() => setActive(true)} onBlur={() => setActive(false)} aria-label={`${project.title} — ${t({ja: "作品の詳細", en: "Project details"})}`}>
                <div className="case-stage-title" aria-hidden="true"><span className="micro-label">{entry.number} / Selected project</span><span>{project.title}</span></div>
                <div className="case-screen"><ProjectMedia project={project} imageAlt={projectImageAlt(project, t(project.description))} active={active} /></div>
                <span className="case-view"><ArrowUpRight size={23} aria-hidden="true" /><span>{t({ja: "詳しく見る", en: "Explore"})}</span></span>
                <span className="case-stage-foot micro-label">{entry.detail}</span>
            </Link>
            <div className="case-story">
                <div><h3>{t(entry.headline)}</h3></div>
                <div><p>{t(entry.summary)}</p><p className="case-engineering">{t(entry.engineering)}</p></div>
            </div>
        </article>
    );
}
