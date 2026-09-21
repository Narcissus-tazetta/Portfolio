import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createServer, defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import type { LocalizedText, Project } from "./src/content/types";

type RouteMeta = {
    path: string;
    title: string;
    description: string;
    image: string;
};

const SITE_ORIGIN = "https://prason.dev";

function absoluteUrl(path: string) {
    return path ? `${SITE_ORIGIN}/${path}` : `${SITE_ORIGIN}/`;
}

function escapeAttribute(value: string) {
    return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function replaceMetaContent(html: string, attribute: "name" | "property", key: string, value: string) {
    const pattern = new RegExp(`(<meta\\s+${attribute}="${key}"[^>]*?content=")[^"]*(")`, "s");
    return html.replace(pattern, `$1${escapeAttribute(value)}$2`);
}

function renderHead(template: string, route: RouteMeta) {
    const pageUrl = absoluteUrl(route.path);
    const imageUrl = route.image.startsWith("http") ? route.image : `${SITE_ORIGIN}${route.image}`;

    let html = template
        .replace(/<title>.*?<\/title>/s, `<title>${escapeAttribute(route.title)}</title>`)
        .replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            [
                `<link rel="canonical" href="${pageUrl}" />`,
                `<link rel="alternate" hreflang="ja" href="${pageUrl}" />`,
                `<link rel="alternate" hreflang="en" href="${escapeAttribute(`${pageUrl}?lang=en`)}" />`,
                `<link rel="alternate" hreflang="x-default" href="${pageUrl}" />`,
            ].join("\n        "),
        );

    html = replaceMetaContent(html, "name", "description", route.description);
    html = replaceMetaContent(html, "property", "og:url", pageUrl);
    html = replaceMetaContent(html, "property", "og:title", route.title);
    html = replaceMetaContent(html, "property", "og:description", route.description);
    html = replaceMetaContent(html, "property", "og:image", imageUrl);
    html = replaceMetaContent(html, "name", "twitter:title", route.title);
    html = replaceMetaContent(html, "name", "twitter:description", route.description);
    html = replaceMetaContent(html, "name", "twitter:image", imageUrl);

    // The declared dimensions only describe og.png; a project thumbnail would advertise the wrong box.
    if (route.image !== "/og.png") {
        html = html.replace(/\s*<meta property="og:image:(?:width|height)" content="\d+" \/>/g, "");
    }

    return html;
}

async function collectRoutes(): Promise<RouteMeta[]> {
    const server = await createServer({
        configFile: false,
        logLevel: "error",
        // A private cache keeps this throwaway server from invalidating the
        // optimized deps of a dev server running against the same project.
        cacheDir: join(process.cwd(), "node_modules/.vite-prerender"),
        optimizeDeps: { noDiscovery: true },
        server: { middlewareMode: true },
        appType: "custom",
    });

    try {
        const { site, sectionLabels } = await server.ssrLoadModule("/src/content/profile.ts");
        const { projects } = await server.ssrLoadModule("/src/content/projects.ts");
        const { aboutPage } = await server.ssrLoadModule("/src/content/about.ts");
        const { contactPage } = await server.ssrLoadModule("/src/content/contact.ts");

        const ja = (text: LocalizedText) => text.ja;
        const withSuffix = (title: string) => (title.includes("Prason") ? title : `${title} — Prason`);

        const routes: RouteMeta[] = [
            {
                path: "",
                title: withSuffix(ja(site.title)),
                description: ja(site.description),
                image: "/og.png",
            },
            {
                path: "about",
                title: withSuffix(ja(aboutPage.title)),
                description: ja(aboutPage.tagline),
                image: "/og.png",
            },
            {
                path: "works",
                title: withSuffix("Works"),
                description: ja(sectionLabels.worksIntro),
                image: "/og.png",
            },
            {
                path: "contact",
                title: withSuffix(ja(contactPage.title)),
                description: ja(contactPage.intro),
                image: "/og.png",
            },
        ];

        for (const project of projects as Project[]) {
            if (project.detailLayout === "external" || !project.links) {
                continue;
            }

            routes.push({
                path: `works/${project.id}`,
                title: `${project.title} — Prason`,
                description: ja(project.description),
                image: project.thumbnail,
            });
        }

        return routes;
    } finally {
        await server.close();
    }
}

// GitHub Pages only serves static files, so every shareable route needs its own
// document — otherwise crawlers and link previews all read the home page's tags.
function prerenderRoutesPlugin(): Plugin {
    return {
        name: "prerender-routes",
        async closeBundle() {
            const distDir = join(process.cwd(), "dist");
            const indexPath = join(distDir, "index.html");

            if (!existsSync(indexPath)) {
                return;
            }

            const template = readFileSync(indexPath, "utf8");
            const routes = await collectRoutes();

            for (const route of routes) {
                const html = renderHead(template, route);
                const target = route.path ? join(distDir, route.path, "index.html") : indexPath;
                mkdirSync(dirname(target), { recursive: true });
                writeFileSync(target, html);
            }

            copyFileSync(indexPath, join(distDir, "404.html"));
        },
    };
}

export default defineConfig({
    base: "/",
    plugins: [react(), prerenderRoutesPlugin()],
    server: { port: 8204 },
});
