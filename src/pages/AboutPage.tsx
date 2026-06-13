import { Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AboutBuildItemRow from "../components/AboutBuildItemRow";
import TechStackTag from "../components/TechStackTag";
import { aboutPage } from "../content/about";
import { profile, social } from "../content/profile";
import { assetUrl } from "../lib/assetUrl";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <div className="mx-auto max-w-2xl px-6 py-16">
            <header className="border-b border-accent/25 pb-10">
                <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                        <h1 className="font-brand text-5xl leading-none text-foreground md:text-6xl">
                            {profile.displayName}
                        </h1>
                        <p className="font-sans mt-4 text-sm tracking-[0.15em] text-muted">{t(aboutPage.roleLine)}</p>
                    </div>

                    <img
                        src={assetUrl(profile.avatar)}
                        alt=""
                        className="h-24 w-24 shrink-0 rounded-2xl border border-border/15 object-cover md:h-28 md:w-28"
                    />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{t(aboutPage.tagline)}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                    {t(aboutPage.contactBefore)}{" "}
                    <Link
                        to="/contact"
                        className="text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                        Contact
                    </Link>
                    {t(aboutPage.contactAfter) ? ` ${t(aboutPage.contactAfter)}` : null}
                </p>
            </header>

            <div className="mt-12">
                {aboutPage.sections.map((section, index) => (
                    <section
                        key={section.title.en}
                        className={index > 0 ? "border-t border-accent/25 pt-10 mt-10" : undefined}
                    >
                        <h2 className="font-sans text-sm uppercase tracking-[0.35em] text-heading/75">
                            {t(section.title)}
                        </h2>

                        {section.paragraphs ? (
                            <div className="mt-4 space-y-4">
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph.en} className="text-sm leading-relaxed text-muted md:text-base">
                                        {t(paragraph)}
                                    </p>
                                ))}
                            </div>
                        ) : null}

                        {section.items ? (
                            <ul className="mt-4 space-y-4">
                                {section.items.map((item) => (
                                    <AboutBuildItemRow key={item.id} item={item} />
                                ))}
                            </ul>
                        ) : null}

                        {section.tags ? (
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {section.tags.map((tag) => (
                                    <TechStackTag key={tag} name={tag} />
                                ))}
                            </ul>
                        ) : null}
                    </section>
                ))}
            </div>

            <div className="mt-14 flex flex-wrap gap-4 border-t border-accent/25 pt-10">
                <a
                    href={social.github.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                >
                    <Github className="h-4 w-4" />
                    GitHub
                </a>
                <a
                    href={social.email.url}
                    className="font-sans inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                >
                    <Mail className="h-4 w-4" />
                    Email
                </a>
            </div>
        </div>
    );
}
