import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import ProjectMedia from "../components/ProjectMedia";
import TechStackTag from "../components/TechStackTag";
import { projectDetailLabels } from "../content/projectDetail";
import { getProjectById, projects } from "../content/projects";
import { showcase } from "../content/showcase";
import { site } from "../content/profile";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { projectImageAlt } from "../lib/projectImageAlt";

export default function ProjectDetailPage() {
    const { projectId } = useParams();
    const { language, t } = useLanguage();
    const project = projectId ? getProjectById(projectId) : undefined;
    const editorial = showcase.find(entry => entry.id === projectId);
    const [isHovered, setIsHovered] = useState(false);
    useDocumentMeta(project ? { title: {ja:`${project.title} — Prason`,en:`${project.title} — Prason`}, description: project.description, path:`works/${project.id}`, image:language === "en" && project.thumbnailEn ? project.thumbnailEn : project.thumbnail } : {title:site.title});
    if (!project || project.detailLayout === "external" || !project.links) return <Navigate to="/works" replace />;
    const ordered = [...showcase.map(entry => getProjectById(entry.id)!), ...projects.filter(item => !showcase.some(entry => entry.id === item.id))];
    const next = ordered[(ordered.findIndex(item => item.id === project.id)+1)%ordered.length];
    const secondaryLink = project.links.demo ?? project.links.release ?? project.links.invite;
    const secondaryLabel = project.links.demo ? {ja:"サイトを見る",en:"Live site"} : project.links.release ? {ja:"リリースを見る",en:"Releases"} : {ja:"Discord に追加",en:"Add to Discord"};
    return (
        <div className="site-shell interior-page project-page">
            <Link to="/works" className="project-back micro-label"><ArrowLeft size={14} />{t(projectDetailLabels.backToWorks)}</Link>
            <header className="project-heading"><p className="micro-label">{editorial?.discipline ?? project.tags.join(" / ")}</p><h1 className="project-title">{project.title}</h1><div className="project-heading-bottom"><p>{t(project.description)}</p><div className="project-actions"><a href={project.links.github} target="_blank" rel="noopener noreferrer" className="underlined-link">GitHub<ArrowUpRight size={16} /></a>{secondaryLink && <a href={secondaryLink} target="_blank" rel="noopener noreferrer" className="underlined-link">{t(secondaryLabel)}<ArrowUpRight size={16} /></a>}</div></div></header>
            <div className={`project-visual project-visual--${editorial?.tone ?? "silver"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><ProjectMedia project={project} imageAlt={projectImageAlt(project,t(project.description))} loading="eager" active={isHovered} /></div>
            <div className="project-overview"><div><p className="micro-label">01 / Overview</p><h2>{t(editorial?.headline ?? project.impact)}</h2></div><div><p className="project-overview-lead">{t(editorial?.summary ?? project.impact)}</p><p className="project-origin">{t(project.context)}</p>{editorial && <p className="project-engineering">{t(editorial.engineering)}</p>}</div></div>
            {project.techStack?.length ? <section className="project-technical"><h2 className="micro-label">02 / {t(projectDetailLabels.tech)}</h2><ul className="flex flex-wrap gap-2">{project.techStack.map(name => <TechStackTag key={name} name={name} />)}</ul></section> : null}
            {project.features?.length ? <section className="project-technical"><h2 className="micro-label">03 / {t(projectDetailLabels.features)}</h2><ul className="project-feature-list">{project.features.map((feature,index) => <li key={feature.en}><span className="micro-label">{String(index+1).padStart(2,"0")}</span><p>{t(feature)}</p></li>)}</ul></section> : null}
            <Link to={`/works/${next.id}`} className="next-project"><span><span className="micro-label">{t({ja:"次のプロジェクト",en:"Next project"})}</span><strong>{next.title}</strong></span><ArrowUpRight strokeWidth={1} /></Link>
        </div>
    );
}
