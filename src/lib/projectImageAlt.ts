import type { Project } from "../content/types";

export function projectImageAlt(project: Project, description: string): string {
    return `${project.title} — ${description}`;
}
