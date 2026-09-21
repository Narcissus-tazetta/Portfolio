import type { LocalizedText } from "./types";
import { getEmailAddress } from "../lib/obfuscatedEmail";

export const site = {
    title: {
        ja: "Prasonのポートフォリオ",
        en: "Prason's Portfolio",
    } satisfies LocalizedText,
    description: {
        ja: "Prason (Narcissus-tazetta) のポートフォリオ。music-autoplay をはじめとする作品を掲載しています。",
        en: "Portfolio of Prason (Narcissus-tazetta), featuring projects such as music-autoplay.",
    } satisfies LocalizedText,
    url: "https://prason.dev/",
} as const;

export const profile = {
    displayName: "Prason",
    handle: "Narcissus-tazetta",
    avatar: "/icon.webp",
} as const;

const emailAddress = getEmailAddress();

export const social = {
    github: {
        url: "https://github.com/Narcissus-tazetta",
    },
    email: {
        url: `mailto:${emailAddress}?subject=Hello&body=`,
        label: emailAddress,
    },
} as const;

export const sectionLabels = {
    worksIntro: {
        ja: "個人的に作っているものと、依頼で制作したものです。",
        en: "Personal projects and commissioned work.",
    } satisfies LocalizedText,
} as const;
