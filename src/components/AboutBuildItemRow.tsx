import { AppWindow, Bot, Monitor, Puzzle, type LucideIcon } from "lucide-react";
import type { AboutBuildItem } from "../content/about";
import { assetUrl } from "../lib/assetUrl";
import { useLanguage } from "../contexts/LanguageContext";

const categoryIcons: Record<AboutBuildItem["id"], LucideIcon> = {
    web: AppWindow,
    extension: Puzzle,
    bot: Bot,
    desktop: Monitor,
};

const iconBoxClassName =
    "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/15 bg-surface-muted/5";

export default function AboutBuildItemRow({ item }: { item: AboutBuildItem }) {
    const { t } = useLanguage();
    const Icon = categoryIcons[item.id];
    const useAppIcon = item.id === "desktop" && item.appIcon;

    return (
        <div className="flex items-start gap-4">
            {useAppIcon ? (
                <div className={iconBoxClassName}>
                    <img src={assetUrl(item.appIcon!)} alt={t(item.label)} className="h-full w-full object-cover" />
                </div>
            ) : (
                <div className={iconBoxClassName}>
                    <Icon className="h-5 w-5 text-accent-soft" strokeWidth={1.75} />
                </div>
            )}

            <div className="min-w-0">
                <p className="font-sans text-sm text-foreground">{t(item.label)}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t(item.description)}</p>
            </div>
        </div>
    );
}
