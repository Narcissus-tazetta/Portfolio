import { siteUpdates, updatesLabels } from "../content/updates";
import { useLanguage } from "../contexts/LanguageContext";

function formatUpdateDate(date: string, language: "ja" | "en"): string {
    const parsed = new Date(`${date}T00:00:00`);

    return new Intl.DateTimeFormat(language === "ja" ? "ja-JP" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(parsed);
}

export default function SiteFooter() {
    const { language, t } = useLanguage();

    return (
        <footer className="border-t border-accent/25">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <h2 className="font-sans text-xs uppercase tracking-[0.35em] text-muted">
                    {t(updatesLabels.title)}
                </h2>
                <ul className="mt-6 space-y-3">
                    {siteUpdates.map((update) => (
                        <li
                            key={update.date}
                            className="flex flex-col gap-1 text-sm leading-relaxed sm:flex-row sm:items-baseline sm:gap-4"
                        >
                            <time
                                dateTime={update.date}
                                className="font-sans shrink-0 text-xs uppercase tracking-[0.15em] text-subtle"
                            >
                                {formatUpdateDate(update.date, language)}
                            </time>
                            <span className="text-muted">{t(update.message)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
