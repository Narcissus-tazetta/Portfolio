import { Mail } from "lucide-react";
import GithubIcon from "../components/icons/GithubIcon";
import { contactPage } from "../content/contact";
import { social } from "../content/profile";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className="mx-auto max-w-2xl px-6 py-16">
            <header className="border-b border-accent/25 pb-10">
                <h1 className="font-sans text-sm uppercase tracking-[0.35em] text-heading/75">
                    {t(contactPage.title)}
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{t(contactPage.intro)}</p>
            </header>

            <div className="mt-12 space-y-4">
                <a
                    href={social.github.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-border/15 p-6 transition-colors hover:border-accent/40"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/15 bg-surface-muted/5">
                        <GithubIcon className="h-5 w-5 text-accent-soft" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="font-sans text-sm text-foreground">GitHub</p>
                        <p className="mt-1 text-sm text-subtle">{t(contactPage.githubDescription)}</p>
                        <p className="mt-2 truncate text-xs text-subtle">{social.github.label}</p>
                    </div>
                </a>

                <a
                    href={social.email.url}
                    className="group flex items-start gap-4 rounded-xl border border-border/15 p-6 transition-colors hover:border-accent/40"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/15 bg-surface-muted/5">
                        <Mail className="h-5 w-5 text-accent-soft" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="font-sans text-sm text-foreground">Email</p>
                        <p className="mt-1 text-sm text-subtle">{t(contactPage.emailDescription)}</p>
                        <p className="mt-2 truncate text-xs text-subtle">{social.email.label}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
