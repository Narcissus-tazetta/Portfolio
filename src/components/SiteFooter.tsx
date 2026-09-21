import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { commitUrl, siteUpdates, updatesLabels } from "../content/updates";
import { contactPage } from "../content/contact";
import { profile, social } from "../content/profile";
import { uiLabels } from "../content/ui";
import { useLanguage } from "../contexts/LanguageContext";

export default function SiteFooter() {
    const { t } = useLanguage();
    const isContactPage = useLocation().pathname === "/contact";
    return (
        <footer className="site-footer">
            <div className="site-shell footer-contact-inner">
                {!isContactPage && <>
                <div className="footer-topline"><p className="micro-label">Have something in mind?</p><p>{t(contactPage.intro)}</p></div>
                <Link to="/contact" className="footer-contact-link"><span>Let's <em>talk.</em></span><ArrowUpRight strokeWidth={1} aria-hidden="true" /></Link>
                </>}
                <div className="footer-bottom">
                    <Link to="/" className="footer-brand">{profile.displayName}.</Link>
                    <span className="micro-label footer-handle">{profile.handle}</span>
                    <div className="footer-socials"><a href={social.github.url} target="_blank" rel="noopener noreferrer">{t(uiLabels.github)}<ArrowUpRight size={15} aria-hidden="true" /></a><a href={social.email.url}>{t(uiLabels.email)}<ArrowUpRight size={15} aria-hidden="true" /></a></div>
                </div>
                <details className="footer-journal"><summary className="micro-label">{t(updatesLabels.title)} / Changelog</summary><ul>{siteUpdates.map(update => <li key={`${update.date}-${update.message.en}`} className="update-row"><time className="micro-label" dateTime={update.date}>{update.date.replaceAll("-", ".")}</time><a href={commitUrl(update.commit)} target="_blank" rel="noopener noreferrer">{t(update.message)}<span className="sr-only"> — {t(updatesLabels.commitLink)}</span></a></li>)}</ul></details>
            </div>
        </footer>
    );
}
