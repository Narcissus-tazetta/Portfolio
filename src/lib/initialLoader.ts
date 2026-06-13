const MAX_LOADER_DELAY_MS = 30_000;

let currentProgress = 0;

export function getLoaderDelayMs(): number {
    const value = new URLSearchParams(window.location.search).get("loaderMs");
    if (!value) {
        return 0;
    }

    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        return 0;
    }

    return Math.min(parsed, MAX_LOADER_DELAY_MS);
}

export function setLoaderProgress(percent: number) {
    currentProgress = Math.min(100, Math.max(0, Math.round(percent)));

    const bar = document.getElementById("initial-loader-bar");
    const label = document.getElementById("initial-loader-percent");
    const loader = document.getElementById("initial-loader");

    if (bar) {
        bar.style.width = `${currentProgress}%`;
    }

    if (label) {
        label.textContent = `${currentProgress}%`;
    }

    if (loader) {
        loader.setAttribute("aria-valuenow", String(currentProgress));
    }
}

function animateProgress(from: number, to: number, durationMs: number) {
    const start = performance.now();

    return new Promise<void>((resolve) => {
        function tick(now: number) {
            const elapsed = now - start;
            const t = durationMs <= 0 ? 1 : Math.min(1, elapsed / durationMs);
            setLoaderProgress(from + (to - from) * t);

            if (t < 1) {
                requestAnimationFrame(tick);
                return;
            }

            resolve();
        }

        requestAnimationFrame(tick);
    });
}

function waitForPaint() {
    return new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => resolve());
        });
    });
}

export function hideInitialLoader() {
    const loader = document.getElementById("initial-loader");
    if (!loader || loader.classList.contains("initial-loader--hidden")) {
        return;
    }

    loader.classList.add("initial-loader--hidden");
    window.setTimeout(() => loader.remove(), 400);
}

export async function bootstrapApp(render: () => void) {
    setLoaderProgress(5);

    const delay = getLoaderDelayMs();
    if (delay > 0) {
        await animateProgress(5, 70, delay);
    } else {
        await animateProgress(5, 55, 180);
    }

    render();
    await animateProgress(currentProgress, 88, 160);
    await waitForPaint();
    await animateProgress(currentProgress, 100, 220);
    await new Promise((resolve) => window.setTimeout(resolve, 280));
    hideInitialLoader();
}
