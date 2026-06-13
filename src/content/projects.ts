import type { Project } from "./types";

export const projects: Project[] = [
    {
        id: "music-autoplay",
        title: "music-autoplay",
        description: {
            ja: "キャンパス向けの YouTube 楽曲リクエスト＋自動再生システム",
            en: "Campus YouTube music request and auto-play system.",
        },
        context: {
            ja: "キャンパスのキャンパス長が作って欲しいと言っていたので作った。自分でもあった方がいいとも思った。",
            en: "The campus leader asked me to build it, and I thought it would be useful for me too.",
        },
        href: "https://github.com/Narcissus-tazetta/music-autoplay",
        detailLayout: "github-only",
        links: {
            github: "https://github.com/Narcissus-tazetta/music-autoplay",
        },
        tags: ["Web", "Extension", "Real-time"],
        impact: {
            ja: "リクエストから再生までを自動化",
            en: "Automates request-to-playback",
        },
        techStack: ["TypeScript", "React", "Tailwind CSS", "Vite", "Browser Extensions", "Express", "Socket.IO"],
        features: [
            {
                ja: "Web から YouTube URL を送信し、共有キューに追加",
                en: "Submit YouTube URLs from the web to a shared queue",
            },
            {
                ja: "Socket.IO で Web・拡張機能・複数クライアントをリアルタイム同期",
                en: "Real-time sync across web UI, extension, and multiple clients via Socket.IO",
            },
            {
                ja: "Chrome 拡張が動画終了後に次の曲を自動再生",
                en: "Chrome extension auto-plays the next track when a video ends",
            },
            {
                ja: "再生履歴の検索・期間絞り込み、管理者によるキュー管理",
                en: "Playback history with filters and admin queue controls",
            },
        ],
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
        context: {
            ja: "出席フォームを出すのが面倒、という声を受けて作った。",
            en: "Created after hearing that submitting attendance forms was a pain.",
        },
        href: "https://github.com/Narcissus-tazetta/AutoAttendanceForm",
        detailLayout: "github-release",
        links: {
            github: "https://github.com/Narcissus-tazetta/AutoAttendanceForm",
            release: "https://github.com/Narcissus-tazetta/AutoAttendanceForm/releases",
        },
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
        context: {
            ja: "Google Classroom が見にくい、という声が多かったので作った。",
            en: "Built because many people found Google Classroom hard to use.",
        },
        href: "https://github.com/Narcissus-tazetta/Classroom-Enhancer",
        detailLayout: "github-release",
        links: {
            github: "https://github.com/Narcissus-tazetta/Classroom-Enhancer",
            release: "https://github.com/Narcissus-tazetta/Classroom-Enhancer/releases",
        },
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
        context: {
            ja: "コマンドを知りたいのに、毎回調べるのが面倒という人のために作った。",
            en: "For people who wanted Discord commands without looking them up every time.",
        },
        href: "https://narcissus-tazetta.github.io/discord-command-chart/",
        detailLayout: "github-demo",
        links: {
            github: "https://github.com/Narcissus-tazetta/discord-command-chart",
            demo: "https://narcissus-tazetta.github.io/discord-command-chart/",
        },
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
        context: {
            ja: "music-autoplay の取扱説明書。",
            en: "The instruction manual for music-autoplay.",
        },
        href: "https://narcissus-tazetta.github.io/music-autoplay-instruction-manual/",
        detailLayout: "github-demo",
        links: {
            github: "https://github.com/Narcissus-tazetta/music-autoplay-instruction-manual",
            demo: "https://narcissus-tazetta.github.io/music-autoplay-instruction-manual/",
        },
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
            ja: "動画を Mac のデスクトップ壁紙に設定できるネイティブアプリ",
            en: "A native macOS app that sets local videos as live desktop wallpapers.",
        },
        context: {
            ja: "Macで動く壁紙のやつを調べたが自分にしっくりくるものがなかったので自作した。",
            en: "I looked for live wallpapers on Mac but nothing felt right, so I built my own.",
        },
        href: "https://github.com/Narcissus-tazetta/LiveWallpaper",
        detailLayout: "github-release",
        links: {
            github: "https://github.com/Narcissus-tazetta/LiveWallpaper",
            release: "https://github.com/Narcissus-tazetta/LiveWallpaper/releases",
        },
        tags: ["Desktop", "macOS", "Media"],
        impact: {
            ja: "動画でデスクトップを彩り、日常使いでも軽量",
            en: "Animated desktops that stay lightweight for daily use",
        },
        techStack: ["Swift", "SwiftUI", "AppKit", "AVFoundation"],
        features: [
            {
                ja: "手元の動画（mp4 / mov）をデスクトップ壁紙として再生",
                en: "Play local videos (mp4 / mov) as desktop wallpapers",
            },
            {
                ja: "マルチディスプレイ対応、プレイリスト・シャッフル再生",
                en: "Multi-display support with playlists and shuffle playback",
            },
            {
                ja: "他ウィンドウが画面を覆ったときの自動一時停止と除外設定",
                en: "Auto-pause when other windows cover the screen, with per-app exclusions",
            },
            {
                ja: "フレームレート制限（30 / 60 fps）とデコードモードで負荷を調整",
                en: "Frame-rate limits (30 / 60 fps) and decode modes to reduce system load",
            },
            {
                ja: "Sparkle によるアプリ内自動アップデート",
                en: "In-app auto-updates via Sparkle",
            },
        ],
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
            ja: "DiscordでYouTubeの通知を送信するBot",
            en: "Discord bot that posts YouTube notifications.",
        },
        context: {
            ja: "Discord で YouTube の通知を見たい、というニーズに応えて作った。",
            en: "Built for people who wanted YouTube notifications in Discord.",
        },
        href: "https://github.com/Narcissus-tazetta/YouTube-Notification-Discord-bot",
        detailLayout: "external",
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
            ja: "DiscordのVCチャンネルを追加してくれるBot",
            en: "Bot that creates voice channels on demand.",
        },
        context: {
            ja: "他の Bot だとサーバーが重くて使い物にならなかったので、自分で作った。",
            en: "Built my own after other bots made servers too heavy to be practical.",
        },
        href: "https://discord.com/oauth2/authorize?client_id=1487820490822254723&permissions=19923984&integration_type=0&scope=bot+applications.commands",
        detailLayout: "external",
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

export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
}

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

export const homeHighlights = ["live-wallpaper", "music-autoplay"]
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => project !== undefined);
