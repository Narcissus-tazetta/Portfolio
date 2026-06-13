import type { LocalizedText } from "./types";

export type AboutBuildItem = {
    id: "web" | "extension" | "bot" | "desktop";
    label: LocalizedText;
    description: LocalizedText;
    appIcon?: string;
};

export type AboutSection = {
    title: LocalizedText;
    paragraphs?: LocalizedText[];
    items?: AboutBuildItem[];
    tags?: string[];
};

export const aboutPage = {
    title: { ja: "About", en: "About" } satisfies LocalizedText,
    roleLine: { ja: "学生 / デベロッパー", en: "Student / Developer" } satisfies LocalizedText,
    tagline: {
        ja: "適当にプログラミングしている人",
        en: "Someone who programs in their spare time.",
    } satisfies LocalizedText,
    contactBefore: {
        ja: "お仕事などのお問い合わせは",
        en: "For work and other inquiries, visit the",
    } satisfies LocalizedText,
    contactAfter: {
        ja: "から",
        en: "page.",
    } satisfies LocalizedText,
    sections: [
        {
            title: { ja: "自己紹介", en: "About me" } satisfies LocalizedText,
            paragraphs: [
                {
                    ja: "Webアプリや拡張機能、Bot を個人的に作っています。",
                    en: "I personally build web apps, browser extensions, and bots.",
                },
                {
                    ja: "日常の「面倒」を、コードで少し楽にするのが好きです。",
                    en: "I like making everyday hassles a little easier with code.",
                },
                {
                    ja: "趣味はプログラミングだけではなく、ゲームやスキー、バイクなど、いろいろやっています。",
                    en: "Outside of programming, I enjoy games, skiing, riding my bike, and more.",
                },
            ],
        },
        {
            title: { ja: "なぜ作るのか", en: "Why I build" } satisfies LocalizedText,
            paragraphs: [
                {
                    ja: "誰かが「めんどくさい」と感じていることを、効率化して使いやすくするのが楽しくて、それが作り続ける理由です。",
                    en: "I keep building because I enjoy making tedious things faster and easier for people to use.",
                },
            ],
        },
        {
            title: { ja: "作っているもの", en: "What I build" } satisfies LocalizedText,
            items: [
                {
                    id: "web",
                    label: { ja: "Web App", en: "Web Apps" },
                    description: {
                        ja: "music-autoplay など、ブラウザで動くアプリ",
                        en: "Browser-based apps such as music-autoplay",
                    },
                },
                {
                    id: "extension",
                    label: { ja: "Extension", en: "Extensions" },
                    description: {
                        ja: "Firefox と Chrome 向けの拡張機能（出席フォーム、Google Classroom など）",
                        en: "Firefox and Chrome extensions for attendance forms, Google Classroom, and more",
                    },
                },
                {
                    id: "bot",
                    label: { ja: "Discord Bot", en: "Discord Bots" },
                    description: {
                        ja: "通知や VC 作成など、Discord 上で動く Bot",
                        en: "Bots for notifications, voice channels, and more on Discord",
                    },
                },
                {
                    id: "desktop",
                    label: { ja: "Desktop", en: "Desktop" },
                    description: {
                        ja: "LiveWallPaper など、macOS 向けのアプリ",
                        en: "macOS apps such as LiveWallPaper",
                    },
                    appIcon: "/livewallpaper-icon.png",
                },
            ],
        },
        {
            title: { ja: "技術スタック", en: "Tech stack" } satisfies LocalizedText,
            tags: ["TypeScript", "React", "Swift", "Tailwind CSS", "Vite", "Browser Extensions"],
        },
    ] satisfies AboutSection[],
} as const;
