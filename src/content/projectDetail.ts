import type { LocalizedText } from "./types";

export const projectDetailLabels = {
    github: { ja: "GitHub", en: "GitHub" } satisfies LocalizedText,
    demo: { ja: "Demo", en: "Demo" } satisfies LocalizedText,
    release: { ja: "Release", en: "Release" } satisfies LocalizedText,
    invite: { ja: "Bot を招待", en: "Invite Bot" } satisfies LocalizedText,
    githubDescription: {
        ja: "ソースコードと README を見る",
        en: "View source code and README",
    } satisfies LocalizedText,
    demoDescription: {
        ja: "公開中のサイトを開く",
        en: "Open the live site",
    } satisfies LocalizedText,
    releaseDescription: {
        ja: "ダウンロードページへ",
        en: "Go to the download page",
    } satisfies LocalizedText,
    inviteDescription: {
        ja: "サーバーに Bot を追加する",
        en: "Add the bot to your server",
    } satisfies LocalizedText,
    backToWorks: { ja: "Works へ戻る", en: "Back to Works" } satisfies LocalizedText,
    tech: { ja: "技術", en: "Tech" } satisfies LocalizedText,
    features: { ja: "主な機能", en: "Features" } satisfies LocalizedText,
} as const;
