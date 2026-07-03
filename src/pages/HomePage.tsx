import { ArrowUpRight, Mail } from "lucide-react";
import GithubIcon from "../components/icons/GithubIcon";
import ProfileAvatar from "../components/ProfileAvatar";
import { Link } from "react-router-dom";
import { homeHighlights } from "../content/projects";
import { profile, sectionLabels, site, social } from "../content/profile";
import { uiLabels } from "../content/ui";
import WorkHighlight from "../components/WorkHighlight";
import ScrollReveal from "../components/ScrollReveal";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function HomePage() {
    const { t } = useLanguage();

    useDocumentMeta({
        title: site.title,
        description: site.description,
    });

    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <section className="max-w-2xl border-b border-accent/25 pb-16">
                <div className="flex items-start gap-5">
                    <ProfileAvatar className="h-24 w-24 shrink-0 rounded-2xl border border-border/15 object-cover md:h-28 md:w-28" />

                    <div className="min-w-0">
                        <p className="font-sans text-xs uppercase tracking-[0.1em] text-subtle">
                            {t(profile.tagline)} · {profile.handle}
                        </p>
                        <h1 className="font-brand mt-3 text-6xl leading-none text-foreground md:text-7xl">
                            {profile.displayName}
                        </h1>
                    </div>
                </div>

                <blockquote className="mt-6 border-l-[3px] border-accent-soft pl-4 text-sm leading-relaxed text-muted md:text-base">
                    {t(profile.catchphrase)}
                </blockquote>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{t(profile.bio)}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                        href={social.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans inline-flex items-center gap-2 text-xs uppercase tracking-[0.06em] text-muted transition-colors hover:text-foreground"
                    >
                        <GithubIcon className="h-4 w-4" />
                        {t(uiLabels.github)}
                    </a>
                    <span className="h-3.5 w-px shrink-0 bg-foreground/15" aria-hidden="true" />
                    <a
                        href={social.email.url}
                        className="font-sans inline-flex items-center gap-2 text-xs uppercase tracking-[0.06em] text-muted transition-colors hover:text-foreground"
                    >
                        <Mail className="h-4 w-4" />
                        {t(uiLabels.email)}
                    </a>
                    <span className="h-3.5 w-px shrink-0 bg-foreground/15" aria-hidden="true" />
                    <Link
                        to="/about"
                        className="font-sans inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.06em] text-muted transition-colors hover:text-foreground"
                    >
                        {t(uiLabels.aboutLink)}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                </div>
            </section>

            <ScrollReveal as="section" variant="subtle" className="scroll-reveal-stagger-grid mt-16">
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-accent/25 pb-4">
                    <h2 className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-muted">
                        {t(sectionLabels.highlights)}
                    </h2>
                    <Link
                        to="/works"
                        className="font-sans text-xs uppercase tracking-[0.06em] text-muted transition-colors hover:text-foreground"
                    >
                        {t(sectionLabels.viewAllWorks)} →
                    </Link>
                </div>

                <div className="scroll-reveal-grid grid gap-6 md:grid-cols-2">
                    {homeHighlights.map((project) => (
                        <WorkHighlight key={project.id} project={project} />
                    ))}
                </div>
            </ScrollReveal>
        </div>
    );
}
