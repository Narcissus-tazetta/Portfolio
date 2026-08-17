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
        date: "2026-08-16",
        commit: "fa64f0eddf8e4df4118cfc23381d4efe43dec01f",
        message: {
            ja: "ロゴのフォントを Ephesis から Pixelify Sans に変更",
            en: "Changed the logo font from Ephesis to Pixelify Sans",
        },
    },
    {
        date: "2026-08-15",
        commit: "db71c0d6fa13c2f2e4795adfb42795b4139f37c5",
        message: {
            ja: "zzz-discord-reminder の画像を中央寄せに変更",
            en: "Centered the zzz-discord-reminder image",
        },
    },
    {
        date: "2026-08-14",
        commit: "4a94603d0cb41542bb2df79f0f4c0282c91a71bf",
        message: {
            ja: "youtube-discord-bot と discord-vc-bot に個別ページを追加",
            en: "Added dedicated pages for youtube-discord-bot and discord-vc-bot",
        },
    },
    {
        date: "2026-08-13",
        commit: "ed63373e43b221406e4aa023610dc8c7ae4aba1b",
        message: {
            ja: "zzz-discord-reminder を Works に追加",
            en: "Added zzz-discord-reminder to Works",
        },
    },
    {
        date: "2026-08-12",
        commit: "a33462f727e9b5b8c65fd74bb7d4214d95b6531e",
        message: {
            ja: "music-autoplay-instruction-manual の技術スタックに Svelte を追加",
            en: "Added Svelte to the music-autoplay-instruction-manual tech stack",
        },
    },
    {
        date: "2026-08-02",
        commit: "e972c6b9d5470af874e3b5a4cb6e28fa3401a38e",
        message: {
            ja: "言語設定をブラウザの言語設定に追従するように変更",
            en: "Made the language setting follow the browser's language",
        },
    },
    {
        date: "2026-08-01",
        commit: "ec6872d5a2ff7e7102532828ed3c80fdde742f7e",
        message: {
            ja: "About の技術スタックに Rust を追加し、Desktop の説明に ceyrad を追加",
            en: "Added Rust to the About tech stack and ceyrad to the Desktop description",
        },
    },
    {
        date: "2026-07-28",
        commit: "701b024ce3625bd8064bb6288f603d7a37e08272",
        message: {
            ja: "ceyrad の技術スタックに Rust を追加し、表示を更新",
            en: "Added Rust to ceyrad tech stack and updated its display",
        },
    },
    {
        date: "2026-07-28",
        commit: "701b024ce3625bd8064bb6288f603d7a37e08272",
        message: {
            ja: "ceyrad の対応OSに Windows を追加",
            en: "Added Windows support to ceyrad platform listing",
        },
    },
    {
        date: "2026-07-21",
        commit: "afd95fc58d576f569e8838334c06f9fc2a4245db",
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
