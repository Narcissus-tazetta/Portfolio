import React from "react";
import { ArrowUpRight, Github, Mail, Slack } from "lucide-react";
import SidebarDrawer from "./components/SidebarDrawer";

// --- Main App Component ---
function App() {
    return (
        <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-slate-900 selection:text-white dark:selection:bg-slate-100 dark:selection:text-slate-900 font-sans transition-colors duration-300">
            {/* Sidebar (Drawer) */}
            <SidebarDrawer />

            {/* Main Content */}
            <main className="w-full px-6 md:px-12 pt-24 pb-40">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    {/* Hero Section (Left on Desktop) */}
                    <div className="lg:col-span-7 space-y-12">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                            Prasonの
                            <br />
                            ポートフォリオ
                        </h1>

                        <div className="inline-flex flex-col gap-3">
                            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                                Social
                            </span>
                            <a
                                className="group inline-flex items-center gap-3 text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                                href="https://github.com/Narcissus-tazetta"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                                <span className="underline decoration-1 decoration-slate-200 dark:decoration-slate-700 underline-offset-4 group-hover:decoration-slate-400 dark:group-hover:decoration-slate-500 transition-all">
                                    https://github.com/Narcissus-tazetta
                                </span>
                            </a>
                            <a
                                className="group inline-flex items-center gap-3 text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                                href="https://n-highschool.slack.com/team/U04VDPX7ZHV"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Slack className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                                <span className="underline decoration-1 decoration-slate-200 dark:decoration-slate-700 underline-offset-4 group-hover:decoration-slate-400 dark:group-hover:decoration-slate-500 transition-all">
                                    https://n-highschool.slack.com/team/U04VDPX7ZHV
                                </span>
                            </a>
                            <a
                                className="group inline-flex items-center gap-3 text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                                href="mailto:clownfish11621@gmail.com?subject=Hello&body="
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Mail className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                                <span className="underline decoration-1 decoration-slate-200 dark:decoration-slate-700 underline-offset-4 group-hover:decoration-slate-400 dark:group-hover:decoration-slate-500 transition-all">
                                    clownfish11621@gmail.com
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Works Section (Right on Desktop) */}
                    <div className="lg:col-span-5 lg:pt-4">
                        <div className="lg:sticky lg:top-32">
                            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                                Selected Works
                            </h2>

                            <div className="flex flex-col">
                                {/* Project Item 1 */}
                                <a
                                    className="group block py-6 border-b border-slate-100 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 transition-colors duration-500"
                                    href="https://github.com/Narcissus-tazetta/music-autoplay"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <article className="flex items-start justify-between gap-4">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                                music-autoplay
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 font-light text-sm group-hover:translate-x-1 transition-transform duration-300 delay-75">
                                                自動で音楽を再生するWebアプリ
                                            </p>
                                        </div>
                                        <ArrowUpRight className="w-6 h-6 text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-slate-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </article>
                                </a>

                                {/* Project Item 2 */}
                                <a
                                    className="group block py-6 border-b border-slate-100 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 transition-colors duration-500"
                                    href="https://github.com/Narcissus-tazetta/AutoAttendanceForm"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <article className="flex items-start justify-between gap-4">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                                AutoAttendanceForm
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 font-light text-sm group-hover:translate-x-1 transition-transform duration-300 delay-75">
                                                自動で出席フォームを出してくれる拡張機能
                                            </p>
                                        </div>
                                        <ArrowUpRight className="w-6 h-6 text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-slate-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </article>
                                </a>

                                {/* Project Item 3 */}
                                <a
                                    className="group block py-6 border-b border-slate-100 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 transition-colors duration-500"
                                    href="https://github.com/Narcissus-tazetta/Classroom-Enhancer"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <article className="flex items-start justify-between gap-4">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                                Classroom-Enhancer
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 font-light text-sm group-hover:translate-x-1 transition-transform duration-300 delay-75">
                                                Google Classroomを見やすく、便利にする拡張機能
                                            </p>
                                        </div>
                                        <ArrowUpRight className="w-6 h-6 text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-slate-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </article>
                                </a>

                                {/* Project Item 4 */}
                                <a
                                    className="group block py-6 border-b border-slate-100 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-100 transition-colors duration-500"
                                    href="https://narcissus-tazetta.github.io/discord-command-chart/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <article className="flex items-start justify-between gap-4">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                                discord-command-chart
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 font-light text-sm group-hover:translate-x-1 transition-transform duration-300 delay-75">
                                                Discordのコマンドを一覧表示するWebページ
                                            </p>
                                        </div>
                                        <ArrowUpRight className="w-6 h-6 text-slate-300 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-slate-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </article>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default App;
