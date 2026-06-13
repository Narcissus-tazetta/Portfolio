import type { Project } from "./types";

export const projects: Project[] = [
    {
        id: "music-autoplay",
        title: "music-autoplay",
        description: {
            ja: "自動で音楽を再生するWebアプリ",
            en: "Auto-playing music web app with sleek playback flow.",
        },
        href: "https://github.com/Narcissus-tazetta/music-autoplay",
        tags: ["Web", "Audio", "Automation"],
        impact: {
            ja: "ワンクリックで再生",
            en: "One-click playback experience",
        },
        thumbnail: "/works/music-autoplay.png",
        kind: "commissioned",
        category: "app",
    },
    {
        id: "auto-attendance",
        title: "AutoAttendanceForm",
        description: {
            ja: "自動で出席フォームを出してくれる拡張機能",
            en: "Browser extension that submits attendance forms fast.",
        },
        href: "https://github.com/Narcissus-tazetta/AutoAttendanceForm",
        tags: ["Extension", "Productivity"],
        impact: {
            ja: "毎日の提出を自動化",
            en: "Automates daily submissions",
        },
        thumbnail: "/works/auto-attendance.png",
        kind: "personal",
        category: "extension",
    },
    {
        id: "classroom-enhancer",
        title: "Classroom-Enhancer",
        description: {
            ja: "Google Classroomを見やすく、便利にする拡張機能",
            en: "Enhances Google Classroom with clarity and speed.",
        },
        href: "https://github.com/Narcissus-tazetta/Classroom-Enhancer",
        tags: ["Extension", "UI"],
        impact: {
            ja: "Classroom の作業を整理",
            en: "Cleaner classroom workflow",
        },
        thumbnail: "/works/classroom-enhancer.png",
        kind: "personal",
        category: "extension",
    },
    {
        id: "discord-command-chart",
        title: "discord-command-chart",
        description: {
            ja: "Discordのコマンドを一覧表示するWebページ",
            en: "Web page that lists Discord commands instantly.",
        },
        href: "https://narcissus-tazetta.github.io/discord-command-chart/",
        tags: ["Web", "Docs"],
        impact: {
            ja: "コマンドをすぐ確認",
            en: "Readable command catalog",
        },
        thumbnail: "/works/discord-command-chart.png",
        kind: "personal",
        category: "web",
    },
    {
        id: "music-autoplay-manual",
        title: "music-autoplay-instruction-manual",
        description: {
            ja: "music-autoplayの取扱説明書をまとめたwebページ",
            en: "Instruction site for the music-autoplay project.",
        },
        href: "https://narcissus-tazetta.github.io/music-autoplay-instruction-manual/",
        tags: ["Web", "Guide"],
        impact: {
            ja: "使い方をわかりやすく案内",
            en: "Clear user onboarding",
        },
        thumbnail: "/works/music-autoplay-manual.png",
        kind: "commissioned",
        category: "web",
    },
    {
        id: "live-wallpaper",
        title: "LiveWallPaper",
        description: {
            ja: "Macで動く壁紙を提供します",
            en: "Animated wallpapers for macOS.",
        },
        href: "https://github.com/Narcissus-tazetta/LiveWallpaper",
        tags: ["Desktop", "Media"],
        impact: {
            ja: "デスクトップを動的に",
            en: "Dynamic desktop visuals",
        },
        thumbnail: "/works/live-wallpaper-poster.png",
        thumbnailAnimated: "/works/live-wallpaper.gif",
        animateOnHover: true,
        thumbnailAspect: "800 / 523",
        thumbnailFit: "contain",
        kind: "personal",
        category: "app",
    },
    {
        id: "youtube-discord-bot",
        title: "YouTube-Notification-Discord-bot",
        description: {
            ja: "DiscordでYoutubeの通知を送信するBotです",
            en: "Discord bot that posts YouTube notifications.",
        },
        href: "https://github.com/Narcissus-tazetta/YouTube-Notification-Discord-bot",
        tags: ["Bot", "Discord"],
        impact: {
            ja: "チャンネルへリアルタイム通知",
            en: "Realtime channel alerts",
        },
        thumbnail: "/works/youtube-discord-bot.png",
        kind: "personal",
        category: "bot",
    },
    {
        id: "discord-vc-bot",
        title: "Discord-VC-Bot",
        description: {
            ja: "DiscordのVCチャンネルを追加してくれる便利なbotです。",
            en: "Bot that creates voice channels on demand.",
        },
        href: "https://discord.com/oauth2/authorize?client_id=1487820490822254723&permissions=19923984&integration_type=0&scope=bot+applications.commands",
        tags: ["Bot", "Voice"],
        impact: {
            ja: "VC を即座に作成",
            en: "Instant VC creation",
        },
        thumbnail: "/works/discord-vc-bot.png",
        kind: "personal",
        category: "bot",
    },
];

export function projectHasMedia(project: Project): boolean {
    return project.thumbnail.startsWith("/works/");
}

export const personalProjects = projects
    .filter((project) => project.kind === "personal")
    .sort((a, b) => {
        if (a.id === "live-wallpaper") return -1;
        if (b.id === "live-wallpaper") return 1;
        return 0;
    });
export const commissionedProjects = projects.filter((project) => project.kind === "commissioned");

export const homeHighlights = ["live-wallpaper", "classroom-enhancer"]
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => project !== undefined);
