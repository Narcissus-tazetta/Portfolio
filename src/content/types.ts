export type LocalizedText = {
    ja: string;
    en: string;
};

export type ProjectCategory = "app" | "extension" | "web" | "bot";

export type ProjectKind = "personal" | "commissioned";

export type Project = {
    id: string;
    title: string;
    description: LocalizedText;
    href: string;
    tags: string[];
    impact: LocalizedText;
    thumbnail: string;
    thumbnailAnimated?: string;
    animateOnHover?: boolean;
    thumbnailAspect?: string;
    thumbnailFit?: "cover" | "contain";
    featured?: boolean;
    kind: ProjectKind;
    category: ProjectCategory;
};

export type NavItem = {
    path: string;
    label: LocalizedText;
};
