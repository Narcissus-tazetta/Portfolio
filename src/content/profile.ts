import type { LocalizedText } from "./types";

export const site = {
    title: {
        ja: "Prasonのポートフォリオ",
        en: "Prason's Portfolio",
    } satisfies LocalizedText,
    description: {
        ja: "Prason (Narcissus-tazetta) のポートフォリオ。music-autoplay をはじめとする作品を掲載しています。",
        en: "Portfolio of Prason (Narcissus-tazetta), featuring projects such as music-autoplay.",
    } satisfies LocalizedText,
    url: "https://narcissus-tazetta.github.io/Portfolio/",
    lang: "ja",
} as const;

export const profile = {
    displayName: "Prason",
    handle: "Narcissus-tazetta",
    avatar: "/avatar.png",
    hero: {
        ja: "Prasonの\nポートフォリオ",
        en: "Prason's\nPortfolio",
    } satisfies LocalizedText,
    bio: {
        ja: "Webアプリ、ブラウザ拡張、DiscordのBot などを作っています。",
        en: "I build web apps, browser extensions, Discord bots, and more.",
    } satisfies LocalizedText,
    catchphrase: {
        ja: "プログラミング的な思考が楽しいです。",
        en: "I enjoy thinking like a programmer.",
    } satisfies LocalizedText,
    tagline: {
        ja: "Developer",
        en: "Developer",
    } satisfies LocalizedText,
    focus: [
        { ja: "Web App", en: "Web App" },
        { ja: "Extension", en: "Extension" },
        { ja: "Discord Bot", en: "Discord Bot" },
    ],
} as const;

export const social = {
    github: {
        url: "https://github.com/Narcissus-tazetta",
        label: "https://github.com/Narcissus-tazetta",
    },
    email: {
        url: "mailto:ibaragiakira2007@gmail.com?subject=Hello&body=",
        label: "ibaragiakira2007@gmail.com",
    },
} as const;

export const sectionLabels = {
    social: { ja: "Social", en: "Social" } satisfies LocalizedText,
    selectedWorks: { ja: "Selected Works", en: "Selected Works" } satisfies LocalizedText,
    highlights: { ja: "注目の作品", en: "Highlighted Works" } satisfies LocalizedText,
    viewAllWorks: { ja: "すべて見る", en: "View all" } satisfies LocalizedText,
    worksIntro: {
        ja: "個人的に作っているものと、依頼で制作したものです。",
        en: "Personal projects and commissioned work.",
    } satisfies LocalizedText,
    worksPersonal: { ja: "Personal", en: "Personal" } satisfies LocalizedText,
    worksCommissioned: { ja: "Commissioned", en: "Commissioned" } satisfies LocalizedText,
    worksPersonalIntro: {
        ja: "自分の用途や興味から作ったものです。",
        en: "Things I built for my own use and interests.",
    } satisfies LocalizedText,
    worksCommissionedIntro: {
        ja: "依頼を受けて制作したものです。",
        en: "Projects built for clients.",
    } satisfies LocalizedText,
} as const;
