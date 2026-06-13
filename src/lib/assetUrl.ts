/**
 * Resolve a public asset path for GitHub Pages subpath deploys.
 * Content stores paths like "/avatar.png"; BASE_URL adds "/Portfolio/" when needed.
 */
export function assetUrl(path: string): string {
    const normalized = path.replace(/^\//, "");
    const base = import.meta.env.BASE_URL;
    return `${base}${normalized}`;
}
