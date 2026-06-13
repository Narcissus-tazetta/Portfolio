import { Mail } from "lucide-react";
import GithubIcon from "../components/icons/GithubIcon";
import { Link } from "react-router-dom";
import { homeHighlights } from "../content/projects";
import { profile, sectionLabels, social } from "../content/profile";
import WorkHighlight from "../components/WorkHighlight";
import { assetUrl } from "../lib/assetUrl";
import { useLanguage } from "../contexts/LanguageContext";

export default function HomePage() {
    const { t } = useLanguage();

    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <section className="max-w-2xl border-b border-accent/25 pb-16">
                <div className="flex items-start gap-5">
                    <img
                        src={assetUrl(profile.avatar)}
                        alt={profile.displayName}
                        className="h-16 w-16 shrink-0 rounded-2xl border border-border/15 object-cover"
                    />

                    <div className="min-w-0">
                        <p className="font-sans text-xs uppercase tracking-[0.35em] text-subtle">
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
                <ul className="mt-6 flex flex-wrap gap-2">
                    {profile.focus.map((item) => (
                        <li key={item.en} className="font-sans tag-accent">
                            {t(item)}
                        </li>
                    ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href={social.github.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-sans inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                    >
                        <GithubIcon className="h-4 w-4" />
                        GitHub
                    </a>
                    <a
                        href={social.email.url}
                        className="font-sans inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                    >
                        <Mail className="h-4 w-4" />
                        Email
                    </a>
                    <Link
                        to="/about"
                        className="font-sans inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                    >
                        About →
                    </Link>
                </div>
            </section>

            <section className="mt-16">
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-accent/25 pb-4">
                    <h2 className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-muted">
                        {t(sectionLabels.highlights)}
                    </h2>
                    <Link
                        to="/works"
                        className="font-sans text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                    >
                        {t(sectionLabels.viewAllWorks)} →
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {homeHighlights.map((project) => (
                        <WorkHighlight key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
