import { useState } from "react";
import { Github, Menu, Moon, Sun, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigation } from "../content/navigation";
import { profile, social } from "../content/profile";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

function navLinkClassName({ isActive }: { isActive: boolean }) {
    return [
        "font-sans text-xs uppercase tracking-[0.2em] transition-colors",
        isActive ? "text-accent-soft" : "text-muted hover:text-accent-soft",
    ].join(" ");
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/25 bg-nav/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <NavLink to="/" className="font-brand text-2xl leading-none text-foreground">
                    {profile.displayName}
                </NavLink>

                <nav className="hidden items-center gap-6 md:flex">
                    {navigation.map((item) => (
                        <NavLink key={item.path} to={item.path} className={navLinkClassName}>
                            {t(item.label)}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href={social.github.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="text-muted transition-colors hover:text-foreground"
                    >
                        <Github className="h-4 w-4" />
                    </a>

                    <button
                        type="button"
                        aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="text-muted transition-colors hover:text-foreground"
                    >
                        {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>

                    <div className="flex items-center rounded-full border border-accent/25 p-0.5 text-xs">
                        <button
                            type="button"
                            onClick={() => setLanguage("ja")}
                            className={`rounded-full px-2 py-1 transition-colors ${
                                language === "ja"
                                    ? "bg-accent-muted text-accent-soft"
                                    : "text-muted hover:text-accent-soft"
                            }`}
                        >
                            JA
                        </button>
                        <button
                            type="button"
                            onClick={() => setLanguage("en")}
                            className={`rounded-full px-2 py-1 transition-colors ${
                                language === "en"
                                    ? "bg-accent-muted text-accent-soft"
                                    : "text-muted hover:text-accent-soft"
                            }`}
                        >
                            EN
                        </button>
                    </div>

                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((open) => !open)}
                        className="text-muted transition-colors hover:text-foreground md:hidden"
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {menuOpen ? (
                <nav className="border-t border-accent/25 px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={navLinkClassName}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t(item.label)}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            ) : null}
        </header>
    );
}
