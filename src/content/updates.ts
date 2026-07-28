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
        date: "2026-07-28",
        commit: "PENDING",
        message: {
            ja: "ceyrad の技術スタックに Rust を追加し、表示を更新",
            en: "Added Rust to ceyrad tech stack and updated its display",
        },
    },
    {
        date: "2026-07-28",
        commit: "PENDING",
        message: {
            ja: "ceyrad の対応OSに Windows を追加",
            en: "Added Windows support to ceyrad platform listing",
        },
    },
    {
        date: "2026-07-21",
        commit: "PENDING",
        message: {
            ja: "Desktop アイコンの表示を調整し、Personal 作品の並び順を変更",
            en: "Adjusted the Desktop icon display and reordered personal projects",
        },
    },
    {
        date: "2026-07-13",
        commit: "db32e2b156c6866f714791824803fc1d2eac004e",
        message: {
            ja: "ceyrad を追加",
            en: "Added ceyrad",
        },
    },
    {
        date: "2026-07-03",
        commit: "fe017a9f936597d51edef2ebc5767d5cf3f5c06c",
        message: {
            ja: "壁紙切り替え時のアニメーションを追加",
            en: "Added a transition animation when switching wallpapers",
        },
    },
    {
        date: "2026-06-16",
        commit: "4ad8d18a5bfa90e4bae59024dffc0d00c6f5314f",
        message: {
            ja: "背景のフェード効果を追加",
            en: "Added a fade effect to the background",
        },
    },
    {
        date: "2026-06-14",
        commit: "d235cbd28e8d06ed569b56194c92b79cd54b0d0b",
        message: {
            ja: "OGP プレビューと 404 ページを追加",
            en: "Added OGP preview and a 404 page",
        },
    },
    {
        date: "2026-06-13",
        commit: "4a31c2337b6b5b14a702527f4c18ceb47c97a4d3",
        message: {
            ja: "ローディング画面と隠し機能を追加",
            en: "Added a loading screen and a hidden feature",
        },
    },
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
