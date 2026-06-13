export type LocalizedText = {
    ja: string;
    en: string;
};

export type ProjectCategory = "app" | "extension" | "web" | "bot";

export type ProjectKind = "personal" | "commissioned";

export type ProjectDetailLayout = "external" | "github-only" | "github-demo" | "github-release";

export type ProjectLinks = {
    github: string;
    demo?: string;
    release?: string;
};

export type Project = {
    id: string;
    title: string;
    description: LocalizedText;
    context: LocalizedText;
    href: string;
    detailLayout: ProjectDetailLayout;
    links?: ProjectLinks;
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
    techStack?: string[];
    features?: LocalizedText[];
};

export type NavItem = {
    path: string;
    label: LocalizedText;
};
