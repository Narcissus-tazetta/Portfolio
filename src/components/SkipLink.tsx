import { uiLabels } from "../content/ui";
import { useLanguage } from "../contexts/LanguageContext";

export function SkipLink() {
    const { t } = useLanguage();

    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-accent/40 focus:bg-page focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
        >
            {t(uiLabels.skipToContent)}
        </a>
    );
}
