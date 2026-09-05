import type { Project } from "./types";

export const projects: Project[] = [
    {
        id: "music-autoplay",
        title: "music-autoplay",
        description: {
            ja: "Web + サーバー + Chrome 拡張で動く、YouTube 楽曲リクエスト＋自動再生システム",
            en: "Full-stack YouTube music request and auto-play — web app, server, and Chrome extension.",
        },
        context: {
            ja: "キャンパスのキャンパス長が作って欲しいと言っていたので作った。自分でもあった方がいいとも思った。",
            en: "The campus leader asked me to build it, and I thought it would be useful for me too.",
        },
        href: "https://music-auto-play.onrender.com",
        detailLayout: "github-demo",
        links: {
            github: "https://github.com/Narcissus-tazetta/music-autoplay",
            demo: "https://music-auto-play.onrender.com",
        },
        tags: ["Full-stack", "Web", "Extension", "Real-time"],
        impact: {
            ja: "Web・サーバー・拡張機能でリクエストから再生までを自動化",
            en: "Automates request-to-playback across web, server, and extension",
        },
        techStack: ["TypeScript", "Bun", "Express", "Socket.IO", "React", "Tailwind CSS", "Browser Extensions"],
        features: [
            {
                ja: "Express + Socket.IO のサーバーでキュー管理とリアルタイム同期",
                en: "Express + Socket.IO server for queue management and real-time sync",
            },
            {
                ja: "Web から YouTube URL を送信し、共有キューに追加",
                en: "Submit YouTube URLs from the web to a shared queue",
            },
            {
                ja: "Chrome 拡張が動画終了後に次の曲を自動再生",
                en: "Chrome extension auto-plays the next track when a video ends",
            },
            {
                ja: "再生履歴の検索・期間絞り込み、管理者によるキュー管理",
                en: "Playback history with filters and admin queue controls",
            },
            {
                ja: "Render 上で本番運用",
                en: "Production deployment on Render",
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
        techStack: ["Svelte"],
        thumbnail: "/works/music-autoplay-manual.png",
        kind: "commissioned",
        category: "web",
    },
    {
        id: "questionnaire",
        title: "Questionnaire",
        description: {
            ja: "Discordサーバーで、アンケート担当者を毎日ランダムに1人選出するBot",
            en: "Discord bot that randomly picks one daily questionnaire-duty person.",
        },
        context: {
            ja: "必要そうだったので作った。",
            en: "It seemed like something we needed, so I made it.",
        },
        href: "https://github.com/Narcissus-tazetta/Questionnaire",
        detailLayout: "github-only",
        links: {
            github: "https://github.com/Narcissus-tazetta/Questionnaire",
        },
        tags: ["Bot", "Discord", "Automation"],
        impact: {
            ja: "抽選から担当ロール付与、告知までを自動化",
            en: "Automates the daily draw, role assignment, and announcement",
        },
        techStack: ["TypeScript", "Bun", "Cloudflare", "Discord"],
        features: [
            {
                ja: "前日に募った参加者から、指定時刻に自動で1人抽選",
                en: "Automatically draws one person at a set time from those who entered the day before",
            },
            {
                ja: "当選者に担当ロールを付与し、告知チャンネルへ結果を投稿",
                en: "Grants the duty role to the winner and posts the result to an announcement channel",
            },
            {
                ja: "毎日自動参加できる/autoモードや、担当者のやり直し(/reroll)に対応",
                en: "Supports an auto-entry mode and a /reroll command to redo the draw",
            },
            {
                ja: "Cloudflare Workers + D1 + Durable Object アラームで定刻実行",
                en: "Runs on schedule via Cloudflare Workers, D1, and a Durable Object alarm",
            },
        ],
        thumbnail: "/works/questionnaire.png",
        thumbnailAspect: "886 / 126",
        kind: "commissioned",
        category: "bot",
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
        thumbnailAnimated: "/works/live-wallpaper.mp4",
        animateOnHover: true,
        thumbnailAspect: "800 / 523",
        thumbnailFit: "contain",
        kind: "personal",
        category: "app",
    },
    {
        id: "ceyrad",
        title: "Ceyrad",
        description: {
            ja: "Apple Music で再生中の曲を Discord のステータス（Rich Presence）に表示する macOS / Windows 対応デスクトップアプリ",
            en: "A desktop app for macOS and Windows that shows your Apple Music track as Discord Rich Presence.",
        },
        context: {
            ja: "同じようなことをする既存のアプリがなぜかエネルギー使用率が高かったので、軽量な代替として自作した。",
            en: "Other apps that did the same thing used surprisingly high energy for some reason, so I built a lighter alternative.",
        },
        href: "https://github.com/Narcissus-tazetta/Ceyrad",
        detailLayout: "github-release",
        links: {
            github: "https://github.com/Narcissus-tazetta/Ceyrad",
            release: "https://github.com/Narcissus-tazetta/Ceyrad/releases",
        },
        tags: ["Desktop", "macOS", "Windows", "Discord"],
        impact: {
            ja: "ポーリングなしのイベント駆動設計で、低負荷なままステータスを同期",
            en: "Event-driven design keeps status in sync without polling or heavy energy use",
        },
        techStack: ["Swift", "Rust", "AppKit", "AppleScript", "Discord RPC", "Sparkle"],
        features: [
            {
                ja: "macOS / Windows の両方で動作",
                en: "Runs on both macOS and Windows",
            },
            {
                ja: "曲名・アーティスト・アルバムアートと再生進捗バーを表示",
                en: "Shows title, artist, album art, and a playback progress bar",
            },
            {
                ja: "最大2つのボタンを設置（曲 / アーティスト / アルバムページ、カスタム URL、リポジトリ）",
                en: "Up to 2 configurable buttons (song / artist / album page, custom URL, repository)",
            },
            {
                ja: "Apple Music が起動していないときは何もしない、ポーリングなしの完全イベント駆動",
                en: "Does nothing when Apple Music isn't running — fully event-driven, no polling",
            },
            {
                ja: "Sparkle によるアプリ内自動アップデート",
                en: "In-app auto-updates via Sparkle",
            },
        ],
        thumbnail: "/works/ceyrad.png",
        thumbnailAspect: "800 / 523",
        kind: "personal",
        category: "app",
    },
    {
        id: "xaeronav",
        title: "XaeroNav",
        description: {
            ja: "Xaero's World Map / Minimap 上に、実際に歩ける経路を描く Minecraft クライアント MOD",
            en: "A Minecraft client mod that draws a walkable route on Xaero's World Map and Minimap.",
        },
        context: {
            ja: "ほしいと思ったから！",
            en: "I wanted it for myself!",
        },
        href: "https://github.com/Narcissus-tazetta/XaeroNav",
        detailLayout: "github-release",
        links: {
            github: "https://github.com/Narcissus-tazetta/XaeroNav",
            release: "https://github.com/Narcissus-tazetta/XaeroNav/releases",
        },
        tags: ["Minecraft", "Mod", "Pathfinding"],
        impact: {
            ja: "地形を実際に辿るA*探索で、地図上に最短ルートを可視化",
            en: "A* search over real terrain visualizes the shortest walkable route on the map",
        },
        techStack: ["Java", "Minecraft", "Fabric", "NeoForge"],
        features: [
            {
                ja: "歩く・登る・泳ぐ・梯子・隙間跳び・掘削・設置橋渡しまで含めたA*経路探索",
                en: "A* pathfinding covering walking, climbing, swimming, ladders, gap jumps, digging, and block bridging",
            },
            {
                ja: "経路をワールド内・Xaero's World Map・Xaero's Minimapの3箇所に描画",
                en: "Renders the route in-world, on Xaero's World Map, and on Xaero's Minimap",
            },
            {
                ja: "遠距離は粗いルート探索と詳細探索を組み合わせた3段階解決",
                en: "Long-distance routes resolve in three stages, from coarse map data down to detailed exploration",
            },
            {
                ja: "エリトラ滑空中は地形を避ける3D空中経路に自動切り替え",
                en: "Automatically switches to a 3D flight route that avoids terrain while gliding with an elytra",
            },
            {
                ja: "溶岩隣接・水没・落下ダメージなどの危険区間を色分け表示",
                en: "Highlights hazardous sections like lava-adjacent digs, flooding, and fall damage in distinct colors",
            },
        ],
        thumbnail: "/works/xaeronav.png",
        thumbnailAspect: "796 / 662",
        kind: "personal",
        category: "extension",
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
        detailLayout: "github-only",
        links: {
            github: "https://github.com/Narcissus-tazetta/YouTube-Notification-Discord-bot",
        },
        tags: ["Bot", "Discord"],
        impact: {
            ja: "チャンネルへリアルタイム通知",
            en: "Realtime channel alerts",
        },
        thumbnail: "/works/youtube-discord-bot.webp",
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
        detailLayout: "github-invite",
        links: {
            github: "https://github.com/Narcissus-tazetta/Discord-VC-Bot",
            invite: "https://discord.com/oauth2/authorize?client_id=1487820490822254723&permissions=19923984&integration_type=0&scope=bot+applications.commands",
        },
        tags: ["Bot", "Voice"],
        impact: {
            ja: "VC を即座に作成",
            en: "Instant VC creation",
        },
        thumbnail: "/works/discord-vc-bot.png",
        kind: "personal",
        category: "bot",
    },
    {
        id: "zzz-discord-reminder",
        title: "zzz-discord-reminder",
        description: {
            ja: "ゼンレスゾーンゼロのデイリー任務未消化をDiscordに通知するBot",
            en: "Discord bot that reminds you about unfinished Zenless Zone Zero daily missions.",
        },
        context: {
            ja: "ZZZのデイリー忘れがちなので、通知するbotを作った。",
            en: "I kept forgetting my ZZZ dailies, so I built a bot that notifies me.",
        },
        href: "https://github.com/Narcissus-tazetta/zzz-discord-reminder",
        detailLayout: "github-only",
        links: {
            github: "https://github.com/Narcissus-tazetta/zzz-discord-reminder",
        },
        tags: ["Bot", "Discord", "Automation"],
        impact: {
            ja: "任務の消化忘れを自動で検知して通知",
            en: "Automatically flags missed missions before reset",
        },
        techStack: ["Python", "GitHub Actions", "Discord Webhook"],
        thumbnail: "/works/zzz-discord-reminder.png",
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

const personalProjectOrder = ["live-wallpaper", "ceyrad"];
export const personalProjects = projects
    .filter((project) => project.kind === "personal")
    .sort((a, b) => {
        const aIndex = personalProjectOrder.indexOf(a.id);
        const bIndex = personalProjectOrder.indexOf(b.id);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
    });
export const commissionedProjects = projects.filter((project) => project.kind === "commissioned");

export const homeHighlights = ["live-wallpaper", "music-autoplay"]
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => project !== undefined);
