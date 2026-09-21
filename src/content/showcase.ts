import type { LocalizedText } from "./types";

export const showcase = [
    {
        id: "xaeronav", number: "01", tone: "forest", discipline: "Pathfinding / Java",
        headline: { ja: "最短の、その先へ。\n歩きやすい道を探す。", en: "Beyond the shortest path.\nA better way to travel." },
        summary: { ja: "「Minecraft にナビがあったら」。数学的な最適さと、人が移動するときの楽さ。その両方を目指した経路探索 MOD。", en: "What if Minecraft had navigation? A pathfinding mod pursuing both mathematical efficiency and routes that feel easier to travel." },
        engineering: { ja: "3段階の A* 探索と、地形を避ける3D空中経路。アルゴリズムを遊びの体験へ。", en: "Three-stage A* search and terrain-aware 3D flight paths. Algorithms made playable." },
        detail: "Java · Fabric · NeoForge · A*",
    },
    {
        id: "live-wallpaper", number: "02", tone: "silver", discipline: "Native macOS / Swift",
        headline: { ja: "デスクトップに、\n動きのある日常を。", en: "A desktop.\nA little more alive." },
        summary: { ja: "動画を壁紙にする。その体験を、Mac に自然に馴染むネイティブアプリに。", en: "Local videos become living wallpapers, in an app that feels right at home on the Mac." },
        engineering: { ja: "ウィンドウに隠れたら自動停止。再生体験と軽量さを両立する設計。", en: "Automatically pauses behind other windows. Designed for expressive desktops and a lighter footprint." },
        detail: "SwiftUI · AVFoundation · AppKit",
    },
    {
        id: "ceyrad", number: "03", tone: "violet", discipline: "Desktop / Swift + Rust",
        headline: { ja: "音楽をつなぐ。\n負荷は増やさずに。", en: "Your music, shared.\nWithout the overhead." },
        summary: { ja: "Apple Music の「今聴いている」を Discord へ。macOS と Windows に対応。", en: "Your now-playing Apple Music track, on Discord. Built for both macOS and Windows." },
        engineering: { ja: "ポーリングを使わないイベント駆動。音楽が止まっているときは、アプリも余計な仕事をしない。", en: "Event-driven, without polling. When Apple Music isn't running, neither is the busywork." },
        detail: "Swift · Rust · Discord RPC",
    },
    {
        id: "music-autoplay", number: "04", tone: "sand", discipline: "Full-stack / TypeScript",
        headline: { ja: "リクエストから再生まで、\nひとつながりに。", en: "From a request\nto the next track." },
        summary: { ja: "キャンパスからの依頼で制作。Web・サーバー・Chrome 拡張が連動する楽曲リクエストシステム。", en: "Built for a campus request. A music queue connecting a web app, a server, and a Chrome extension." },
        engineering: { ja: "Socket.IO でキューを同期。曲が終わると拡張機能が次の曲へつなぐ。", en: "A shared queue synchronized with Socket.IO. The extension takes playback from one track to the next." },
        detail: "React · TypeScript · Bun · Socket.IO",
    },
] satisfies Array<{
    id: string; number: string; tone: string; discipline: string;
    headline: LocalizedText; summary: LocalizedText; engineering: LocalizedText; detail: string;
}>;

export const capabilities = [
    { number: "01", name: "Interfaces & systems", skills: "React / TypeScript / Bun / Tailwind CSS", description: { ja: "画面からサーバー、ブラウザ拡張まで。使う人の動線を、ひとつの仕組みとしてつくる。", en: "From interfaces to servers and browser extensions. Building the whole path into one coherent system." } },
    { number: "02", name: "Native & efficient", skills: "Swift / SwiftUI / AppKit / Rust", description: { ja: "OS に馴染む操作感と、無駄に動かない設計。日常で使い続けられるアプリを。", en: "At home on the OS, thoughtful about resources. Native software made for everyday use." } },
    { number: "03", name: "Logic & automation", skills: "Java / Python / Discord / Cloudflare", description: { ja: "地形を読む探索から、日々のタスクの自動化まで。複雑な処理を使いやすい体験に変える。", en: "From terrain-aware search to everyday automation. Turning complex logic into useful experiences." } },
] satisfies Array<{ number: string; name: string; skills: string; description: LocalizedText }>;
