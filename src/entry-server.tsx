import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { AppProviders } from "./providers/AppProviders";

async function streamToString(stream: ReadableStream<Uint8Array>) {
    const chunks: string[] = [];
    const decoder = new TextDecoder();

    for await (const chunk of stream) {
        chunks.push(decoder.decode(chunk, { stream: true }));
    }

    return chunks.join("");
}

// prerender() waits for the lazy page chunks, which renderToString would leave as a Suspense fallback.
export async function renderRoute(url: string) {
    const { prelude } = await prerender(
        <StaticRouter location={url} basename={import.meta.env.BASE_URL}>
            <AppProviders>
                <App />
            </AppProviders>
        </StaticRouter>,
    );

    return streamToString(prelude);
}
