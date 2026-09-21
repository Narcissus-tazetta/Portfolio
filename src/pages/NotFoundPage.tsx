import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { notFoundPage } from "../content/notFound";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function NotFoundPage() {
    const { t } = useLanguage();
    useDocumentMeta({ title: notFoundPage.title, description: notFoundPage.description });

    return (
        <section className="site-shell not-found-page" aria-labelledby="not-found-title">
            <p className="micro-label">Error / 404</p>
            <div className="not-found-number" aria-hidden="true">404</div>
            <h1 id="not-found-title" className="text-2xl leading-relaxed text-foreground">{t(notFoundPage.title)}</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{t(notFoundPage.description)}</p>
            <nav className="not-found-actions" aria-label={t({ ja: "ページの移動先", en: "Where to go next" })}>
                <Link to="/" className="underlined-link"><ArrowLeft size={18} aria-hidden="true" />{t(notFoundPage.backHome)}</Link>
                <Link to="/works" className="underlined-link">{t({ ja: "制作実績を見る", en: "Explore projects" })}<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </nav>
        </section>
    );
}
