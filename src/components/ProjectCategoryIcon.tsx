import { AppWindow, Bot, Globe, Puzzle, type LucideIcon } from "lucide-react";
import type { ProjectCategory } from "../content/types";

const categoryIcons: Record<ProjectCategory, LucideIcon> = {
    app: AppWindow,
    extension: Puzzle,
    web: Globe,
    bot: Bot,
};

export default function ProjectCategoryIcon({
    category,
    className = "h-10 w-10 text-accent-soft",
}: {
    category: ProjectCategory;
    className?: string;
}) {
    const Icon = categoryIcons[category];
    return <Icon className={className} strokeWidth={1.75} aria-hidden="true" />;
}
