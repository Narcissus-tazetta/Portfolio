import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import PrasonMark from "./PrasonMark";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "../content/navigation";
import { projects } from "../content/projects";
import { profile, social } from "../content/profile";
import { uiLabels } from "../content/ui";
import { useLanguage } from "../contexts/LanguageContext";
import { useLogoAccentToggle } from "../hooks/useLogoAccentToggle";

const desktopNavigation = [navigation[2], navigation[1], navigation[3]];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const { pathname } = useLocation();
    const { language, setLanguage, t } = useLanguage();
    const { handleLogoClick } = useLogoAccentToggle();

    useEffect(() => { setMenuOpen(false); }, [pathname]);
    useEffect(() => {
        if (!menuOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const getFocusable = () => [...(menuRef.current?.querySelectorAll<HTMLElement>("a[href],button") ?? [])];
        getFocusable()[0]?.focus();
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") { setMenuOpen(false); return; }
            if (event.key !== "Tab") return;
            const items = getFocusable();
            const first = items[0], last = items[items.length-1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        };
        const breakpoint = window.matchMedia("(min-width: 768px)");
        const onResize = () => { if (breakpoint.matches) setMenuOpen(false); };
        document.addEventListener("keydown", onKeyDown);
        breakpoint.addEventListener("change", onResize);
        const trigger = triggerRef.current;
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
            breakpoint.removeEventListener("change", onResize);
            trigger?.focus();
        };
    }, [menuOpen]);

    return (
        <>
            <header className="site-nav fixed inset-x-0 top-0 z-50 bg-nav/90 backdrop-blur-md">
                <div className="site-shell nav-inner">
                    <NavLink to="/" onClick={handleLogoClick} className="site-logo"><PrasonMark />{profile.displayName}</NavLink>
                    <nav className="desktop-nav" aria-label={t({ja:"メインナビゲーション",en:"Main navigation"})}>{desktopNavigation.map(item => <NavLink key={item.path} to={item.path} className="nav-link">{t(item.label)}{item.path === "/works" && <sup>{String(projects.length).padStart(2,"0")}</sup>}</NavLink>)}</nav>
                    <div className="nav-preferences">
                        <ThemeToggle />
                        <div className="language-switch" role="group" aria-label="Language">
                            <button type="button" onClick={() => setLanguage("ja", {animate:true})} aria-pressed={language === "ja"} aria-label={t(uiLabels.languageJa)}>JA</button><span aria-hidden="true">/</span><button type="button" onClick={() => setLanguage("en", {animate:true})} aria-pressed={language === "en"} aria-label={t(uiLabels.languageEn)}>EN</button>
                        </div>
                        <button type="button" ref={triggerRef} className="mobile-menu-trigger" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={t(uiLabels.openMenu)} onClick={() => setMenuOpen(true)}><Menu size={20} /></button>
                    </div>
                </div>
            </header>
            {menuOpen && <div id="mobile-nav" ref={menuRef} className="mobile-menu" role="dialog" aria-modal="true" aria-label={t({ja:"ナビゲーション",en:"Navigation"})}>
                <div className="mobile-menu-top"><span className="micro-label">Explore / Prason</span><button type="button" aria-label={t(uiLabels.closeMenu)} onClick={() => setMenuOpen(false)}><X size={24} /></button></div>
                <nav aria-label={t({ja:"メインナビゲーション",en:"Main navigation"})}>{navigation.map((item,index) => <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)}><span className="micro-label">0{index+1}</span><span>{t(item.label)}</span><ArrowUpRight strokeWidth={1} /></NavLink>)}</nav>
                <div className="mobile-menu-bottom"><p className="micro-label">{profile.handle}</p><a href={social.github.url} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={15} /></a><a href={social.email.url}>{t(uiLabels.email)}<ArrowUpRight size={15} /></a></div>
            </div>}
        </>
    );
}
