import { Puzzle } from "lucide-react";
import type { ComponentType } from "react";

function ReactIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" aria-hidden="true">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" fill="none" strokeWidth="1">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    );
}

function TypeScriptIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="#3178C6"
                d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.394 2.394 0 0 0-.537-.5 5.037 5.037 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            />
        </svg>
    );
}

function SwiftIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="#F05138"
                d="M20.693 4.945c.841 1.06 1.326 2.395 1.326 3.832 0 3.483-2.824 6.307-6.307 6.307-1.055 0-2.05-.26-2.923-.719-.287 2.889-2.842 5.165-5.902 5.165-1.654 0-3.16-.67-4.247-1.754C1.48 16.08.8 14.2.8 12.2c0-3.483 2.824-6.307 6.307-6.307.9 0 1.757.19 2.533.533.72-2.653 3.13-4.607 5.993-4.607 1.654 0 3.16.67 4.06 1.126z"
            />
        </svg>
    );
}

function TailwindIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="#06B6D4"
                d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            />
        </svg>
    );
}

function ViteIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 256 257" aria-hidden="true">
            <defs>
                <linearGradient id="vite-logo-a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
                    <stop offset="0%" stopColor="#41D1FF" />
                    <stop offset="100%" stopColor="#BD34FE" />
                </linearGradient>
                <linearGradient id="vite-logo-b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
                    <stop offset="0%" stopColor="#FFBD4F" />
                    <stop offset="100%" stopColor="#FF980E" />
                </linearGradient>
            </defs>
            <path
                fill="url(#vite-logo-a)"
                d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
            />
            <path
                fill="url(#vite-logo-b)"
                d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
            />
        </svg>
    );
}

function ExtensionIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
    return <Puzzle className={`${className} text-accent-soft`} strokeWidth={2} aria-hidden="true" />;
}

const tagIcons: Record<string, ComponentType<{ className?: string }>> = {
    TypeScript: TypeScriptIcon,
    React: ReactIcon,
    Swift: SwiftIcon,
    "Tailwind CSS": TailwindIcon,
    Vite: ViteIcon,
    "Browser Extensions": ExtensionIcon,
};

export default function TechStackTag({ name }: { name: string }) {
    const Icon = tagIcons[name];

    return (
        <li className="font-sans tag-accent inline-flex items-center gap-1.5">
            {Icon ? <Icon /> : null}
            {name}
        </li>
    );
}
