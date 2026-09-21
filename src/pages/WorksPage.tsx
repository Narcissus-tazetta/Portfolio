import { useState } from "react";
import { projects } from "../content/projects";
import { showcase } from "../content/showcase";
import { sectionLabels } from "../content/profile";
import type { ProjectCategory } from "../content/types";
import WorkHighlight from "../components/WorkHighlight";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const filters = [
    { id: "all", label: {ja:"すべて", en:"All work"} },
    { id: "app", label: {ja:"アプリ", en:"Apps"} },
    { id: "web", label: {ja:"Web", en:"Web"} },
    { id: "extension", label: {ja:"拡張・Mod", en:"Extensions & mods"} },
    { id: "bot", label: {ja:"Bot", en:"Bots"} },
] as const;
const curated = [...showcase.map(entry => projects.find(project => project.id === entry.id)!), ...projects.filter(project => !showcase.some(entry => entry.id === project.id))];

export default function WorksPage() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState<ProjectCategory | "all">("all");
    const visible = curated.filter(project => filter === "all" || project.category === filter);
    useDocumentMeta({ title: {ja:"Works",en:"Works"}, description: sectionLabels.worksIntro, path: "works" });
    return (
        <div className="site-shell interior-page works-page">
            <header className="page-heading collection-heading"><p className="micro-label">The collection / {String(projects.length).padStart(2,"0")} projects</p><h1 className="display-title">Built with<br /><em>curiosity.</em></h1><p className="page-intro">{t(sectionLabels.worksIntro)}</p></header>
            <div className="collection-toolbar"><div className="collection-filters" role="group" aria-label={t({ja:"作品の種類",en:"Project category"})}>{filters.map(item => <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{t(item.label)}<sup>{item.id === "all" ? projects.length : projects.filter(project => project.category === item.id).length}</sup></button>)}</div><span className="micro-label" aria-live="polite">{visible.length} {t({ja:"作品",en:"projects"})}</span></div>
            <div className="collection-grid">{visible.map(project => <WorkHighlight key={project.id} project={project} />)}</div>
        </div>
    );
}
