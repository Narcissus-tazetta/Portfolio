export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <main className="p-8 bg-white rounded shadow max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Prasonのポートフォリオ</h1>

                <p className="mb-4">
                    GitHub:{" "}
                    <a
                        className="text-blue-600 hover:underline"
                        href="https://github.com/Narcissus-tazetta"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/Narcissus-tazetta
                    </a>
                </p>

                <h2 className="text-lg font-semibold mb-2">作品</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://github.com/Narcissus-tazetta/music-autoplay"
                            target="_blank"
                            rel="noreferrer"
                        >
                            music-autoplay — music-auto-play
                        </a>
                    </li>
                </ul>
            </main>
        </div>
    );
}
