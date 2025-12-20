import React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function MenuContent() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex flex-col h-full w-full pt-16">
            {/* Theme Settings Section */}
            <div className="flex flex-col gap-6">
                <h2 className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-1">Theme Settings</h2>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => setTheme("light")}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                            theme === "light"
                                ? "bg-slate-100 border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                        }`}
                    >
                        <Sun className="w-5 h-5" />
                        <span>Light Mode</span>
                    </button>

                    <button
                        onClick={() => setTheme("dark")}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                            theme === "dark"
                                ? "bg-slate-100 border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                        }`}
                    >
                        <Moon className="w-5 h-5" />
                        <span>Dark Mode</span>
                    </button>

                    <button
                        onClick={() => setTheme("system")}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                            theme === "system"
                                ? "bg-slate-100 border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                        }`}
                    >
                        <Monitor className="w-5 h-5" />
                        <span>System Auto</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
