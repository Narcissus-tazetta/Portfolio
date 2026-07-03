import { useEffect } from "react";
import { site } from "../content/profile";
import type { LocalizedText } from "../content/types";
import { useLanguage } from "../contexts/LanguageContext";
import { assetUrl } from "../lib/assetUrl";

type DocumentMetaInput = {
    title: LocalizedText;
    description?: LocalizedText;
    path?: string;
    image?: string;
};

function upsertMeta(name: string, content: string, attribute: "name" | "property" = "name") {
    let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
    }

    element.content = content;
}

function upsertCanonical(href: string) {
    let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!element) {
        element = document.createElement("link");
        element.rel = "canonical";
        document.head.appendChild(element);
    }

    element.href = href;
}

function buildAbsoluteUrl(path: string) {
    const base = site.url.replace(/\/$/, "");
    if (!path) {
        return `${base}/`;
    }

    return `${base}/${path.replace(/^\//, "")}`;
}

function buildImageUrl(image: string) {
    if (image.startsWith("http")) {
        return image;
    }

    const origin = new URL(site.url).origin;
    return `${origin}${assetUrl(image)}`;
}

export function useDocumentMeta({ title, description, path = "", image = "/og.png" }: DocumentMetaInput) {
    const { language, t } = useLanguage();
    const resolvedTitle = t(title);
    const resolvedDescription = description ? t(description) : t(site.description);
    const pageUrl = buildAbsoluteUrl(path);
    const imageUrl = buildImageUrl(image);

    useEffect(() => {
        document.title = resolvedTitle;
        document.documentElement.lang = language;

        upsertMeta("description", resolvedDescription);
        upsertMeta("og:type", "website", "property");
        upsertMeta("og:site_name", "Prason Portfolio", "property");
        upsertMeta("og:url", pageUrl, "property");
        upsertMeta("og:title", resolvedTitle, "property");
        upsertMeta("og:description", resolvedDescription, "property");
        upsertMeta("og:image", imageUrl, "property");
        upsertMeta("og:locale", language === "ja" ? "ja_JP" : "en_US", "property");
        upsertMeta("og:locale:alternate", language === "ja" ? "en_US" : "ja_JP", "property");
        upsertMeta("twitter:card", "summary_large_image");
        upsertMeta("twitter:title", resolvedTitle);
        upsertMeta("twitter:description", resolvedDescription);
        upsertMeta("twitter:image", imageUrl);
        upsertCanonical(pageUrl);
    }, [resolvedTitle, resolvedDescription, pageUrl, imageUrl, language]);
}
