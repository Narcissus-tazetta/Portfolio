import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import MenuContent from "./MenuContent";

export default function SidebarDrawer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !isMenuOpen) {
                setIsMenuOpen(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    return (
        <div className="fixed top-6 right-6 md:top-10 md:right-10 z-50">
            <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <Dialog.Trigger asChild>
                    <button
                        aria-label="Open menu"
                        className="p-2 text-slate-900 dark:text-slate-100 hover:opacity-60 transition-opacity rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        <Menu className="h-8 w-8" />
                    </button>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-slate-900/20 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

                    <Dialog.Content className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-2xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
                        <Dialog.Title className="sr-only">Menu</Dialog.Title>
                        <Dialog.Description className="sr-only">Navigation menu and theme settings</Dialog.Description>

                        <div className="flex flex-col h-full">
                            <div className="flex justify-end mb-4">
                                <Dialog.Close asChild>
                                    <button
                                        aria-label="Close menu"
                                        className="p-2 -mr-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </Dialog.Close>
                            </div>

                            <MenuContent />
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
