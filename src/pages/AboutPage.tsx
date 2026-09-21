import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileAvatar from "../components/ProfileAvatar";
import ScrollReveal from "../components/ScrollReveal";
import AboutBuildItemRow from "../components/AboutBuildItemRow";
import TechStackTag from "../components/TechStackTag";
import { aboutPage } from "../content/about";
import { profile } from "../content/profile";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function AboutPage() {
    const { t } = useLanguage();
    useDocumentMeta({title:aboutPage.title,description:aboutPage.tagline,path:"about"});
    return (
        <div className="site-shell interior-page about-page">
            <header className="about-masthead"><div><p className="micro-label chapter-kicker">A person behind the projects</p><h1 className="display-title">Hi, I'm<br /><em>{profile.displayName}.</em></h1><p className="about-handle micro-label">@{profile.handle}</p></div><div className="about-masthead-photo"><ProfileAvatar className="about-portrait" /><span className="micro-label">Code / Games / Skiing / Motorcycles</span></div></header>
            <div className="about-introduction"><span className="micro-label">About me</span><p>{t({ja:"日常の「面倒」を、\nコードで少し楽にする。",en:"Making everyday hassles\na little easier with code."})}</p></div>
            <div className="about-sections">{aboutPage.sections.map((section,index) => <ScrollReveal key={section.title.en} as="section" variant="subtle" className="about-section"><h2><span className="micro-label">0{index+1}</span>{t(section.title)}</h2><div>
                {section.paragraphs && <div className="about-paragraphs">{section.paragraphs.map(paragraph => <p key={paragraph.en}>{t(paragraph)}</p>)}</div>}
                {section.items && <ul className="about-build-list">{section.items.map(item => <li key={item.id}><AboutBuildItemRow item={item} /></li>)}</ul>}
                {section.tags && <ul className="flex flex-wrap gap-2">{section.tags.map(tag => <TechStackTag key={tag} name={tag} />)}</ul>}
            </div></ScrollReveal>)}</div>
            <Link to="/works" className="all-projects-link"><span>{t({ja:"つくってきたものを見る",en:"See what I've been making"})}</span><ArrowUpRight strokeWidth={1.25} /></Link>
        </div>
    );
}
