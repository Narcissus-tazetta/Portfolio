import { useEffect, useRef } from "react";
import { createSearch, runSearch, stepSearch, type Search } from "../lib/pathfinding";
import { getReducedMotionPreference, subscribeReducedMotion } from "../lib/subscribeSystemTheme";

const CELL_SIZE = 26;
const EXPANSIONS_PER_FRAME = 7;
const PATH_CELLS_PER_FRAME = 0.9;
const HOLD_FRAMES = 150;
const FADE_PER_FRAME = 0.04;

type Palette = {
    accent: string;
    foreground: string;
};

// Canvas fillStyle understands no color-mix(), so layer alpha is applied via globalAlpha.
const ALPHA = { wall: 0.1, visited: 0.22, frontier: 0.55, path: 1, marker: 1 };

function readPalette(): Palette {
    const styles = getComputedStyle(document.documentElement);

    return {
        accent: styles.getPropertyValue("--accent").trim() || "#bda4fa",
        foreground: styles.getPropertyValue("--foreground").trim() || "#eeedf7",
    };
}

export default function HeroPathfinding() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) {
            return;
        }

        let palette = readPalette();
        let search: Search | null = null;
        let pathProgress = 0;
        let holdCounter = 0;
        let fade = 1;
        let frame = 0;
        let onScreen = true;
        let width = 0;
        let height = 0;

        const reset = () => {
            const cols = Math.max(8, Math.round(width / CELL_SIZE));
            const rows = Math.max(6, Math.round(height / CELL_SIZE));
            search = createSearch(cols, rows);
            pathProgress = 0;
            holdCounter = 0;
            fade = 1;
        };

        const draw = () => {
            if (!search) {
                return;
            }

            const { grid } = search;
            const cellWidth = width / grid.cols;
            const cellHeight = height / grid.rows;
            const inset = Math.min(cellWidth, cellHeight) * 0.16;

            context.clearRect(0, 0, width, height);

            const paint = (index: number) => {
                const x = (index % grid.cols) * cellWidth;
                const y = Math.floor(index / grid.cols) * cellHeight;
                context.fillRect(x + inset, y + inset, cellWidth - inset * 2, cellHeight - inset * 2);
            };

            context.fillStyle = palette.foreground;
            context.globalAlpha = ALPHA.wall * fade;
            for (let index = 0; index < grid.walls.length; index += 1) {
                if (grid.walls[index]) {
                    paint(index);
                }
            }

            context.fillStyle = palette.accent;
            context.globalAlpha = ALPHA.visited * fade;
            for (let index = 0; index < search.closed.length; index += 1) {
                if (search.closed[index] && !grid.walls[index]) {
                    paint(index);
                }
            }

            context.globalAlpha = ALPHA.frontier * fade;
            for (const node of search.open) {
                paint(node.index);
            }

            const visible = search.path.slice(0, Math.max(2, Math.floor(pathProgress)));
            if (visible.length > 1) {
                context.globalAlpha = ALPHA.path * fade;
                context.strokeStyle = palette.accent;
                context.shadowColor = palette.accent;
                context.shadowBlur = Math.min(cellWidth, cellHeight) * 0.9;
                context.lineWidth = Math.max(2, Math.min(cellWidth, cellHeight) * 0.22);
                context.lineJoin = "round";
                context.lineCap = "round";
                context.beginPath();

                visible.forEach((index, order) => {
                    const x = (index % grid.cols) * cellWidth + cellWidth / 2;
                    const y = Math.floor(index / grid.cols) * cellHeight + cellHeight / 2;
                    if (order === 0) {
                        context.moveTo(x, y);
                    } else {
                        context.lineTo(x, y);
                    }
                });

                context.stroke();
                context.shadowBlur = 0;

                const head = visible[visible.length - 1];
                context.globalAlpha = ALPHA.marker * fade;
                context.fillStyle = palette.foreground;
                context.beginPath();
                context.arc(
                    (head % grid.cols) * cellWidth + cellWidth / 2,
                    Math.floor(head / grid.cols) * cellHeight + cellHeight / 2,
                    Math.max(2.5, Math.min(cellWidth, cellHeight) * 0.2),
                    0,
                    Math.PI * 2,
                );
                context.fill();
            }

            context.globalAlpha = 1;

            // Softens the top and bottom edges; a CSS mask cannot do this without a
            // second mask layer, and mask-composite is unreliable across engines.
            const edges = context.createLinearGradient(0, 0, 0, height);
            edges.addColorStop(0, "rgba(0,0,0,1)");
            edges.addColorStop(0.16, "rgba(0,0,0,0)");
            edges.addColorStop(0.8, "rgba(0,0,0,0)");
            edges.addColorStop(1, "rgba(0,0,0,1)");
            context.globalCompositeOperation = "destination-out";
            context.fillStyle = edges;
            context.fillRect(0, 0, width, height);
            context.globalCompositeOperation = "source-over";
        };

        const advance = () => {
            if (!search) {
                return;
            }

            if (!search.done) {
                stepSearch(search, EXPANSIONS_PER_FRAME);
                return;
            }

            if (pathProgress < search.path.length) {
                pathProgress += PATH_CELLS_PER_FRAME;
                return;
            }

            holdCounter += 1;
            if (holdCounter <= HOLD_FRAMES) {
                return;
            }

            // Dissolving the solved board reads as one continuous loop; a hard
            // clear looks like the animation broke.
            fade -= FADE_PER_FRAME;
            if (fade <= 0) {
                reset();
            }
        };

        const renderStatic = () => {
            reset();
            if (search) {
                runSearch(search);
                pathProgress = search.path.length;
            }
            draw();
        };

        const tick = () => {
            frame = requestAnimationFrame(tick);
            if (!onScreen || document.hidden) {
                return;
            }

            advance();
            draw();
        };

        let animating = false;

        const stop = () => {
            cancelAnimationFrame(frame);
            animating = false;
        };

        const start = () => {
            if (animating || width === 0) {
                return;
            }
            animating = true;
            frame = requestAnimationFrame(tick);
        };

        const applyMotionPreference = () => {
            stop();
            if (width === 0) {
                return;
            }

            if (getReducedMotionPreference()) {
                renderStatic();
                return;
            }

            reset();
            start();
        };

        const resizeObserver = new ResizeObserver((entries) => {
            const box = entries[0]?.contentRect;
            if (!box || box.width === 0 || box.height === 0) {
                stop();
                width = 0;
                return;
            }

            const ratio = window.devicePixelRatio || 1;
            width = box.width;
            height = box.height;
            canvas.width = Math.round(width * ratio);
            canvas.height = Math.round(height * ratio);
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
            applyMotionPreference();
        });

        resizeObserver.observe(canvas);

        const visibilityObserver = new IntersectionObserver((entries) => {
            onScreen = entries[0]?.isIntersecting ?? true;
        });
        visibilityObserver.observe(canvas);

        // The palette lives in CSS custom properties, so a theme swap has to be read back.
        const themeObserver = new MutationObserver(() => {
            palette = readPalette();
        });
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        const unsubscribeMotion = subscribeReducedMotion(applyMotionPreference);

        return () => {
            stop();
            resizeObserver.disconnect();
            visibilityObserver.disconnect();
            themeObserver.disconnect();
            unsubscribeMotion();
        };
    }, []);

    return (
        <div className="hero-visual" aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    );
}
