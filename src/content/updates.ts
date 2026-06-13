import type { LocalizedText } from "./types";

export type SiteUpdate = {
    date: string;
    message: LocalizedText;
    commit: string;
};

export const updatesLabels = {
    title: { ja: "更新", en: "Updates" } satisfies LocalizedText,
    commitLink: { ja: "コミットを見る", en: "View commit" } satisfies LocalizedText,
} as const;

const GITHUB_REPO = "https://github.com/Narcissus-tazetta/Portfolio";

export function commitUrl(sha: string): string {
    return `${GITHUB_REPO}/commit/${sha}`;
}

export const siteUpdates: SiteUpdate[] = [
    {
        date: "2026-04-16",
        commit: "793a7d627b5bb4d7645ca34f9514bc0329d6711b",
        message: {
            ja: "README を更新し、新しいリポジトリのセクションを追加",
            en: "Updated README and added a section for new repositories",
        },
    },
    {
        date: "2026-03-19",
        commit: "be33b82fc24040e27006a126c93836e1db2114f8",
        message: {
            ja: "卒業に合わせて、公開中の作品だけに整理",
            en: "Trimmed the list to active projects ahead of graduation",
        },
    },
    {
        date: "2026-03-06",
        commit: "955e57349024979008459d647cb9a5f9d1f0b594",
        message: {
            ja: "LiveWallpaper を追加",
            en: "Added LiveWallpaper",
        },
    },
    {
        date: "2026-02-05",
        commit: "c72efcb1e2e061d922934da81e0344c90f0881b2",
        message: {
            ja: "music-autoplay の取扱説明書ページを追加",
            en: "Added the music-autoplay instruction manual site",
        },
    },
    {
        date: "2025-12-20",
        commit: "e5b6148e30aa29c358762f9271c0c72a23641ca3",
        message: {
            ja: "ポートフォリオサイトを公開",
            en: "Portfolio site published",
        },
    },
];
