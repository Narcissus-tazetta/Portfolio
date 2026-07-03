import type { LocalizedText } from "./types";

export const uiLabels = {
    github: { ja: "GitHub", en: "GitHub" } satisfies LocalizedText,
    email: { ja: "メール", en: "Email" } satisfies LocalizedText,
    contact: { ja: "Contact", en: "Contact" } satisfies LocalizedText,
    aboutLink: { ja: "About", en: "About" } satisfies LocalizedText,
    skipToContent: { ja: "メインコンテンツへスキップ", en: "Skip to main content" } satisfies LocalizedText,
    openMenu: { ja: "メニューを開く", en: "Open menu" } satisfies LocalizedText,
    closeMenu: { ja: "メニューを閉じる", en: "Close menu" } satisfies LocalizedText,
    switchToLight: { ja: "ライトモードに切り替え", en: "Switch to light mode" } satisfies LocalizedText,
    switchToDark: { ja: "ダークモードに切り替え", en: "Switch to dark mode" } satisfies LocalizedText,
    languageJa: { ja: "日本語", en: "Japanese" } satisfies LocalizedText,
    languageEn: { ja: "英語", en: "English" } satisfies LocalizedText,
    titleSuffix: { ja: "Prason", en: "Prason" } satisfies LocalizedText,
} as const;
