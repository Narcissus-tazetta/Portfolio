import type { LocalizedText } from "./types";

export const notFoundPage = {
    title: {
        ja: "404 ページが見つかりません :<",
        en: "404 Page not found :<",
    } satisfies LocalizedText,
    description: {
        ja: "お探しのページは存在しないか、移動した可能性があります。",
        en: "The page you are looking for does not exist or may have moved.",
    } satisfies LocalizedText,
    backHome: { ja: "Home へ戻る", en: "Back to Home" } satisfies LocalizedText,
    bikeAction: {
        ja: "バイクを線の右端まで走らせる",
        en: "Ride the bike to the right end of the line",
    } satisfies LocalizedText,
} as const;
