import type { LocalizedText, Project } from "../content/types";
import ScrollReveal from "../components/ScrollReveal";
import WorkHighlight from "../components/WorkHighlight";
import { useLanguage } from "../contexts/LanguageContext";

function sectionClassName(showBorder?: boolean) {
    return [showBorder ? "border-t border-accent/25 pt-10 mt-10" : "", "scroll-reveal-stagger-grid"]
        .filter(Boolean)
        .join(" ");
}

export default function WorksSection({
    title,
    intro,
    projects,
    showBorder,
}: {
    title: LocalizedText;
    intro: LocalizedText;
    projects: Project[];
    showBorder?: boolean;
}) {
    const { t } = useLanguage();

    return (
        <ScrollReveal as="section" variant="subtle" className={sectionClassName(showBorder)}>
            <h2 className="font-sans text-base uppercase tracking-[0.35em] text-heading/75 md:text-lg">
                {t(title)}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{t(intro)}</p>

            <div className="scroll-reveal-grid mt-8 grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <WorkHighlight key={project.id} project={project} />
                ))}
            </div>
        </ScrollReveal>
    );
}
