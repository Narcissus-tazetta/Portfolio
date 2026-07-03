import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import { navigation } from "../content/navigation";
import { profile, social } from "../content/profile";
import { uiLabels } from "../content/ui";
import { useLanguage } from "../contexts/LanguageContext";
import { useLogoAccentToggle } from "../hooks/useLogoAccentToggle";

function navLinkClassName({ isActive }: { isActive: boolean }) {
    return [
        "font-sans text-xs uppercase tracking-[0.06em] transition-colors",
        isActive ? "text-accent-soft" : "text-muted hover:text-accent-soft",
    ].join(" ");
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { language, setLanguage, t } = useLanguage();
    const { handleLogoClick } = useLogoAccentToggle();

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", onKeyDown);
        menuRef.current?.querySelector<HTMLElement>("a,button")?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [menuOpen]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/25 bg-nav/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <NavLink
                    to="/"
                    onClick={handleLogoClick}
                    className="font-brand text-2xl leading-none text-foreground select-none"
                >
                    {profile.displayName}
                </NavLink>

                <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
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
                        rel="noopener noreferrer"
                        aria-label={t(uiLabels.github)}
                        className="text-muted transition-colors hover:text-foreground"
                    >
                        <GithubIcon className="h-4 w-4" />
                    </a>

                    <ThemeToggle />

                    <div className="flex items-center rounded-full border border-accent/25 p-0.5 text-xs" role="group" aria-label="Language">
                        <button
                            type="button"
                            onClick={() => setLanguage("ja", { animate: true })}
                            aria-pressed={language === "ja"}
                            aria-label={t(uiLabels.languageJa)}
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
                            onClick={() => setLanguage("en", { animate: true })}
                            aria-pressed={language === "en"}
                            aria-label={t(uiLabels.languageEn)}
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
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? t(uiLabels.closeMenu) : t(uiLabels.openMenu)}
                        onClick={() => setMenuOpen((open) => !open)}
                        className="text-muted transition-colors hover:text-foreground md:hidden"
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {menuOpen ? (
                <nav
                    id="mobile-nav"
                    ref={menuRef}
                    className="border-t border-accent/25 px-6 py-4 md:hidden"
                    aria-label="Main"
                >
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
