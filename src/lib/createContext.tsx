import { createContext, use, type ReactNode } from "react";

export function createContextHook<T>(displayName: string) {
    const Context = createContext<T | null>(null);
    Context.displayName = displayName;

    function Provider({ value, children }: { value: T; children: ReactNode }) {
        return <Context value={value}>{children}</Context>;
    }

    function useContextHook(): T {
        const value = use(Context);
        if (value === null) {
            throw new Error(`${displayName} must be used within its Provider`);
        }
        return value;
    }

    return { Provider, useContext: useContextHook };
}
