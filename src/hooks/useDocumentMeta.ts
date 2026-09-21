import { useEffect } from "react";
import { site } from "../content/profile";
import { uiLabels } from "../content/ui";
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

function upsertLink(rel: string, href: string, hreflang?: string) {
    const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
    let element = document.querySelector<HTMLLinkElement>(selector);

    if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        if (hreflang) {
            element.hreflang = hreflang;
        }
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
    const suffix = t(uiLabels.titleSuffix);
    const pageTitle = t(title);
    const resolvedTitle = pageTitle.includes(suffix) ? pageTitle : `${pageTitle} — ${suffix}`;
    const resolvedDescription = description ? t(description) : t(site.description);
    const jaUrl = buildAbsoluteUrl(path);
    const enUrl = `${jaUrl}?lang=en`;
    const pageUrl = language === "ja" ? jaUrl : enUrl;
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
        upsertLink("canonical", pageUrl);
        upsertLink("alternate", jaUrl, "ja");
        upsertLink("alternate", enUrl, "en");
        upsertLink("alternate", jaUrl, "x-default");
    }, [resolvedTitle, resolvedDescription, pageUrl, jaUrl, enUrl, imageUrl, language]);
}
