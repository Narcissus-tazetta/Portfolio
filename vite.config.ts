import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split("/")[1] : "";
const base = repo ? `/${repo}/` : "/";

function copy404Plugin() {
    return {
        name: "copy-404",
        closeBundle() {
            const distDir = join(process.cwd(), "dist");
            const indexPath = join(distDir, "index.html");

            if (!existsSync(indexPath)) {
                return;
            }

            copyFileSync(indexPath, join(distDir, "404.html"));
        },
    };
}

export default defineConfig({
    base,
    plugins: [react(), copy404Plugin()],
    server: { port: 8204 },
});
