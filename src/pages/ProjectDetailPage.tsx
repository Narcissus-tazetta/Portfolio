import { useEffect, useState } from "react";
import { ArrowUpRight, Globe, Package } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import GithubIcon from "../components/icons/GithubIcon";
import ProjectLinkCard from "../components/ProjectLinkCard";
import TechStackTag from "../components/TechStackTag";
import { projectDetailLabels } from "../content/projectDetail";
import { getProjectById, projectHasMedia } from "../content/projects";
import { useLanguage } from "../contexts/LanguageContext";
import { assetUrl } from "../lib/assetUrl";
import { projectImageAlt } from "../lib/projectImageAlt";
import ProjectCategoryIcon from "../components/ProjectCategoryIcon";

export default function ProjectDetailPage() {
    const { projectId } = useParams();
    const { t } = useLanguage();
    const project = projectId ? getProjectById(projectId) : undefined;
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (project) {
            document.title = `${project.title} — Prason`;
        }

        return () => {
            document.title = "Prasonのポートフォリオ";
        };
    }, [project]);

    if (!project || project.detailLayout === "external" || !project.links) {
        return <Navigate to="/works" replace />;
    }

    const hasMedia = projectHasMedia(project);
    const objectClass = project.thumbnailFit === "cover" ? "object-cover" : "object-contain";
    const posterSrc = assetUrl(project.thumbnail);
    const animatedSrc =
        project.animateOnHover && project.thumbnailAnimated ? assetUrl(project.thumbnailAnimated) : null;
    const imageAlt = projectImageAlt(project, t(project.description));

    return (
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-2xl flex-col px-6 py-16">
            <div
                className="relative mb-8 overflow-hidden rounded-xl border border-border/15 bg-surface"
                style={{ aspectRatio: project.thumbnailAspect ?? "16 / 9" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                        <img src={posterSrc} alt={imageAlt} className={`h-full w-full ${objectClass}`} />
                    )
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <ProjectCategoryIcon category={project.category} />
                    </div>
                )}
            </div>

            <header className="border-b border-accent/25 pb-8">
                <h1 className="font-sans text-xl font-medium text-foreground md:text-2xl">{project.title}</h1>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{t(project.description)}</p>
                <p className="mt-3 border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-subtle">
                    {t(project.context)}
                </p>
            </header>

            {project.techStack?.length ? (
                <section className="mt-8">
                    <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                        {t(projectDetailLabels.tech)}
                    </h2>
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((name) => (
                            <TechStackTag key={name} name={name} />
                        ))}
                    </ul>
                </section>
            ) : null}

            {project.features?.length ? (
                <section className="mt-8">
                    <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                        {t(projectDetailLabels.features)}
                    </h2>
                    <ul className="mt-4 space-y-2">
                        {project.features.map((feature) => (
                            <li
                                key={feature.en}
                                className="border-l-2 border-accent/25 pl-3 text-sm leading-relaxed text-subtle"
                            >
                                {t(feature)}
                            </li>
                        ))}
                    </ul>
                </section>
            ) : null}

            <div className="mt-8 space-y-4">
                <ProjectLinkCard
                    href={project.links.github}
                    icon={<GithubIcon className="h-5 w-5 text-accent-soft" />}
                    label={t(projectDetailLabels.github)}
                    description={t(projectDetailLabels.githubDescription)}
                    meta={project.links.github.replace("https://", "")}
                />

                {project.detailLayout === "github-demo" && project.links.demo ? (
                    <ProjectLinkCard
                        href={project.links.demo}
                        icon={<Globe className="h-5 w-5 text-accent-soft" strokeWidth={1.75} />}
                        label={t(projectDetailLabels.demo)}
                        description={t(projectDetailLabels.demoDescription)}
                        meta={project.links.demo.replace("https://", "")}
                    />
                ) : null}

                {project.detailLayout === "github-release" && project.links.release ? (
                    <ProjectLinkCard
                        href={project.links.release}
                        icon={<Package className="h-5 w-5 text-accent-soft" strokeWidth={1.75} />}
                        label={t(projectDetailLabels.release)}
                        description={t(projectDetailLabels.releaseDescription)}
                        meta={project.links.release.replace("https://", "")}
                    />
                ) : null}
            </div>

            <div className="mt-auto border-t border-accent/25 pt-10">
                <Link
                    to="/works"
                    className="font-sans inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent-soft"
                >
                    {t(projectDetailLabels.backToWorks)}
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
