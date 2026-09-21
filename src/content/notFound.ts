import type { LocalizedText } from "./types";

export const notFoundPage = {
    title: {
        ja: "ページが見つかりません",
        en: "Page not found",
    } satisfies LocalizedText,
    description: {
        ja: "お探しのページは存在しないか、移動した可能性があります。",
        en: "The page you are looking for does not exist or may have moved.",
    } satisfies LocalizedText,
    backHome: { ja: "ホームへ戻る", en: "Back to Home" } satisfies LocalizedText,
} as const;
