import type { LocalizedText } from "./types";

export type SiteUpdate = {
    date: string;
    message: LocalizedText;
};

export const updatesLabels = {
    title: { ja: "更新", en: "Updates" } satisfies LocalizedText,
} as const;

export const siteUpdates: SiteUpdate[] = [
    {
        date: "2026-04-16",
        message: {
            ja: "README を更新し、新しいリポジトリのセクションを追加",
            en: "Updated README and added a section for new repositories",
        },
    },
    {
        date: "2026-03-19",
        message: {
            ja: "卒業に合わせて、公開中の作品だけに整理",
            en: "Trimmed the list to active projects ahead of graduation",
        },
    },
    {
        date: "2026-03-06",
        message: {
            ja: "LiveWallpaper を追加",
            en: "Added LiveWallpaper",
        },
    },
    {
        date: "2026-02-05",
        message: {
            ja: "music-autoplay の取扱説明書ページを追加",
            en: "Added the music-autoplay instruction manual site",
        },
    },
    {
        date: "2025-12-20",
        message: {
            ja: "ポートフォリオサイトを公開",
            en: "Portfolio site published",
        },
    },
];
