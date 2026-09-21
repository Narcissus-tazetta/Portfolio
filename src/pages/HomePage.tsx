import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroPathfinding from "../components/HeroPathfinding";
import ProfileAvatar from "../components/ProfileAvatar";
import ScrollReveal from "../components/ScrollReveal";
import ShowcaseProject from "../components/ShowcaseProject";
import { projects } from "../content/projects";
import { capabilities, showcase } from "../content/showcase";
import { profile, site } from "../content/profile";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function HomePage() {
    const { t } = useLanguage();
    useDocumentMeta({ title: site.title, description: site.description });
    return (
        <div className="portfolio-home">
            <section className="atelier-hero" aria-labelledby="home-title">
                <div className="hero-grid" aria-hidden="true" />
                <HeroPathfinding />
                <div className="site-shell hero-inner">
                    <div className="hero-copy">
                    <div className="hero-byline micro-label"><span className="tiny-cross" aria-hidden="true" />{profile.displayName} / Independent developer</div>
                    <h1 id="home-title" className="atelier-title"><span>Curiosity,</span><span>made <em>useful.</em></span></h1>
                    <div className="hero-note"><span className="micro-label">Algorithms. Systems. Everyday experience.</span><p>{t({ ja: "アルゴリズムから、使う人の体験まで。\n「こうだったら便利」を、仕組みからつくる。", en: "From algorithms to the experience of using them.\nBuilding the systems behind “this could be better.”" })}</p></div>
                    </div>
                    <div className="hero-bottom"><a href="#selected-work" className="scroll-cue"><span className="scroll-circle"><ArrowDown size={18} /></span><span className="micro-label">Explore selected work</span></a><span className="hero-index micro-label">Interfaces / Native / Automation</span></div>
                </div>
            </section>

            <section id="selected-work" className="site-shell work-chapter" aria-labelledby="selected-title">
                <ScrollReveal as="div" className="chapter-heading">
                    <div><p className="micro-label chapter-kicker">01 — Selected projects</p><h2 id="selected-title">Works with<br /><em>a purpose.</em></h2></div>
                    <div className="chapter-aside"><span className="chapter-count">(04)</span><p>{t({ ja: "小さな不便を見つけて、仕組みから考える。\n発想と技術をかたちにした、4つのプロジェクト。", en: "Finding the small frictions. Rethinking the system.\nFour projects that turn ideas into something useful." })}</p></div>
                </ScrollReveal>
                <div className="case-studies">{showcase.map(entry => {
                    const project = projects.find(item => item.id === entry.id);
                    return project ? <ScrollReveal key={entry.id} as="div" variant="subtle"><ShowcaseProject project={project} entry={entry} /></ScrollReveal> : null;
                })}</div>
                <Link to="/works" className="all-projects-link"><span>{t({ja: "すべてのプロジェクト", en: "The full collection"})}<sup>{String(projects.length).padStart(2,"0")}</sup></span><ArrowUpRight strokeWidth={1.25} /></Link>
            </section>

            <section className="capabilities-section" aria-labelledby="capabilities-title">
                <div className="site-shell capabilities-layout">
                    <div className="capabilities-intro"><p className="micro-label chapter-kicker">02 — The way I build</p><h2 id="capabilities-title">Different tools.<br /><em>One mindset.</em></h2><p>{t({ja: "見た目だけでなく、仕組みも心地よく。\nつくるものに合わせて、技術を選びます。", en: "Thoughtful on the surface. Thoughtful underneath.\nThe right tools for the thing being built."})}</p></div>
                    <div className="capability-list">{capabilities.map(item => <ScrollReveal key={item.number} as="article" className="capability-item"><span className="micro-label">/{item.number}</span><div><h3>{item.name}</h3><p>{t(item.description)}</p><span className="capability-skills micro-label">{item.skills}</span></div></ScrollReveal>)}</div>
                </div>
            </section>

            <section className="site-shell about-chapter" aria-labelledby="about-title">
                <ScrollReveal as="div" className="about-editorial"><div className="about-photo"><ProfileAvatar className="editorial-portrait" /><span className="photo-caption micro-label">Away from the keyboard.</span></div><div className="about-editorial-copy"><p className="micro-label chapter-kicker">03 — Behind the code</p><h2 id="about-title">Always curious.<br /><em>Still exploring.</em></h2><p>{t({ja: "Prason。コードを書いたり、ゲームをしたり。\n雪山を滑ったり、バイクに乗ったり。", en: "Prason. Writing code, playing games.\nSkiing down a mountain, or out on a bike."})}</p><p className="about-secondary">{t({ja: "「こうだったらいいのに」を、自分の手でつくる。そんな小さな好奇心が、次のプロジェクトの始まりです。", en: "That little thought — “what if this worked differently?” — is usually where the next project begins."})}</p><Link to="/about" className="underlined-link">{t({ja: "もう少し、自己紹介", en: "A little more about me"})}<ArrowUpRight size={18} /></Link></div></ScrollReveal>
            </section>
        </div>
    );
}
