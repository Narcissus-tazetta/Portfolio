import { commissionedProjects, personalProjects } from "../content/projects";
import { navigation } from "../content/navigation";
import { sectionLabels } from "../content/profile";
import WorksSection from "../components/WorksSection";
import { useLanguage } from "../contexts/LanguageContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const worksNav = navigation.find((item) => item.path === "/works");

export default function WorksPage() {
    const { t } = useLanguage();

    useDocumentMeta({
        title: worksNav?.label ?? sectionLabels.selectedWorks,
        description: sectionLabels.worksIntro,
        path: "works",
    });

    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <header className="max-w-2xl border-b border-accent/25 pb-10">
                <h1 className="font-sans text-xl uppercase tracking-[0.1em] text-heading/75 md:text-2xl">
                    {t(worksNav?.label ?? sectionLabels.selectedWorks)}
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                    {t(sectionLabels.worksIntro)}
                </p>
            </header>

            <div className="mt-12">
                <WorksSection
                    title={sectionLabels.worksCommissioned}
                    intro={sectionLabels.worksCommissionedIntro}
                    projects={commissionedProjects}
                />
                <WorksSection
                    title={sectionLabels.worksPersonal}
                    intro={sectionLabels.worksPersonalIntro}
                    projects={personalProjects}
                    showBorder
                />
            </div>
        </div>
    );
}
