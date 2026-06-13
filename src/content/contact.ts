import type { LocalizedText } from "./types";

export const contactPage = {
    title: { ja: "Contact", en: "Contact" } satisfies LocalizedText,
    intro: {
        ja: "お仕事のご相談や質問など、お気軽にどうぞ。",
        en: "Feel free to reach out for work inquiries or questions.",
    } satisfies LocalizedText,
    githubDescription: {
        ja: "作品のコードや更新は GitHub で公開しています。",
        en: "Project code and updates are on GitHub.",
    } satisfies LocalizedText,
    emailDescription: {
        ja: "メールでのお問い合わせも受け付けています。",
        en: "You can also reach me by email.",
    } satisfies LocalizedText,
} as const;
