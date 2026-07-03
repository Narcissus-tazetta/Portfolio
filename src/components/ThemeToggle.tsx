import { Moon, Sun } from "lucide-react";
import { uiLabels } from "../content/ui";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import type { ResolvedTheme } from "../stores/portfolioStore";

function oppositeTheme(resolved: ResolvedTheme): "light" | "dark" {
    return resolved === "dark" ? "light" : "dark";
}

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const { t } = useLanguage();
    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            aria-label={t(isDark ? uiLabels.switchToLight : uiLabels.switchToDark)}
            onClick={() => setTheme(oppositeTheme(resolvedTheme), { animate: true })}
            className="theme-toggle text-muted transition-colors hover:text-foreground"
        >
            <span className="theme-toggle-icon relative inline-flex h-4 w-4" aria-hidden="true">
                <Sun
                    className={`theme-toggle-icon__glyph absolute inset-0 h-4 w-4 ${
                        isDark ? "theme-toggle-icon__glyph--hidden" : "theme-toggle-icon__glyph--visible"
                    }`}
                />
                <Moon
                    className={`theme-toggle-icon__glyph absolute inset-0 h-4 w-4 ${
                        isDark ? "theme-toggle-icon__glyph--visible" : "theme-toggle-icon__glyph--hidden"
                    }`}
                />
            </span>
        </button>
    );
}
