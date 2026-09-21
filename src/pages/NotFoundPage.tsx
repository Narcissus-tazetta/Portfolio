import { onInitialLoaderHidden } from "../lib/initialLoader";
import { useEffect, useState } from "react";
import { Motorbike } from "lucide-react";
import { Link } from "react-router-dom";
import { notFoundPage } from "../content/notFound";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function NotFoundPage() {
    const { t } = useLanguage();
    const [isParked, setIsParked] = useState(false);

    useDocumentMeta({
        title: notFoundPage.title,
        description: notFoundPage.description,
    });

    useEffect(() => {
        return onInitialLoaderHidden(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsParked(true));
            });
        });
    }, []);

    return (
        <div className="site-shell not-found-page">
            <p className="micro-label">A small detour.</p>
            <div className="not-found-number" aria-hidden="true">4<em>0</em>4</div>
            <h1 className="text-2xl leading-relaxed text-foreground">{t(notFoundPage.title)}</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{t(notFoundPage.description)}</p>

            <div className="mt-10">
                <div className="relative">
                    <div
                        aria-hidden="true"
                        className={`not-found-bike absolute top-0 h-5 w-5 -translate-y-full text-accent-soft md:h-6 md:w-6 ${
                            isParked ? "not-found-bike--parked" : ""
                        }`}
                    >
                        <Motorbike className="h-full w-full" strokeWidth={1.5} />
                    </div>
                    <div className="border-t border-accent/25" aria-hidden="true" />
                </div>
                <Link
                    to="/"
                    className="font-sans mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.06em] text-muted transition-colors hover:text-accent-soft"
                >
                    {t(notFoundPage.backHome)} →
                </Link>
            </div>
        </div>
    );
}
