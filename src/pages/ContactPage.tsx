import { ArrowUpRight, Mail } from "lucide-react";
import GithubIcon from "../components/icons/GithubIcon";
import { contactPage } from "../content/contact";
import { social } from "../content/profile";
import { uiLabels } from "../content/ui";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function ContactPage() {
    const { t } = useLanguage();
    useDocumentMeta({title:contactPage.title,description:contactPage.intro,path:"contact"});
    return (
        <div className="site-shell interior-page contact-page">
            <header className="contact-heading"><p className="micro-label chapter-kicker">A conversation is a good start.</p><h1 className="display-title">Say <em>hello.</em><span className="contact-star" aria-hidden="true">✳</span></h1><p className="page-intro">{t(contactPage.intro)}</p></header>
            <div className="contact-directory">
                <a href={social.email.url} className="contact-directory-row"><span className="contact-directory-icon"><Mail strokeWidth={1.4} /></span><span><span className="micro-label">01 / {t(uiLabels.email)}</span><strong>{social.email.label.split("@")[0]}<wbr />@{social.email.label.split("@")[1]}</strong><span className="contact-directory-description">{t(contactPage.emailDescription)}</span></span><ArrowUpRight className="contact-directory-arrow" strokeWidth={1} /></a>
                <a href={social.github.url} target="_blank" rel="noopener noreferrer" className="contact-directory-row"><span className="contact-directory-icon"><GithubIcon /></span><span><span className="micro-label">02 / GitHub</span><strong>Narcissus-tazetta</strong><span className="contact-directory-description">{t(contactPage.githubDescription)}</span></span><ArrowUpRight className="contact-directory-arrow" strokeWidth={1} /></a>
            </div>
        </div>
    );
}
