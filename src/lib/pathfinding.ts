export type Grid = {
    cols: number;
    rows: number;
    walls: Uint8Array;
};

export type SearchNode = {
    index: number;
    g: number;
    f: number;
    parent: number;
};

export type Search = {
    grid: Grid;
    start: number;
    goal: number;
    open: SearchNode[];
    best: Map<number, SearchNode>;
    closed: Uint8Array;
    done: boolean;
    path: number[];
};

const NEIGHBOURS: ReadonlyArray<readonly [number, number, number]> = [
    [1, 0, 1],
    [-1, 0, 1],
    [0, 1, 1],
    [0, -1, 1],
    [1, 1, Math.SQRT2],
    [1, -1, Math.SQRT2],
    [-1, 1, Math.SQRT2],
    [-1, -1, Math.SQRT2],
];

function randomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export function createGrid(cols: number, rows: number): Grid {
    const walls = new Uint8Array(cols * rows);
    const blobs = 5 + randomInt(5);

    for (let blob = 0; blob < blobs; blob += 1) {
        const centreX = randomInt(cols);
        const centreY = randomInt(rows);
        const radius = 1.4 + Math.random() * (Math.min(cols, rows) / 5);

        for (let y = Math.max(0, Math.floor(centreY - radius)); y <= Math.min(rows - 1, Math.ceil(centreY + radius)); y += 1) {
            for (let x = Math.max(0, Math.floor(centreX - radius)); x <= Math.min(cols - 1, Math.ceil(centreX + radius)); x += 1) {
                const dx = x - centreX;
                const dy = (y - centreY) * 1.35;
                if (dx * dx + dy * dy <= radius * radius) {
                    walls[y * cols + x] = 1;
                }
            }
        }
    }

    return { cols, rows, walls };
}

function heuristic(grid: Grid, from: number, to: number) {
    const dx = Math.abs((from % grid.cols) - (to % grid.cols));
    const dy = Math.abs(Math.floor(from / grid.cols) - Math.floor(to / grid.cols));
    return Math.max(dx, dy) + (Math.SQRT2 - 1) * Math.min(dx, dy);
}

function pickFreeCell(grid: Grid, fromColumn: number, toColumn: number) {
    for (let attempt = 0; attempt < 60; attempt += 1) {
        const x = fromColumn + randomInt(Math.max(1, toColumn - fromColumn));
        const y = randomInt(grid.rows);
        const index = y * grid.cols + x;

        if (!grid.walls[index]) {
            return index;
        }
    }

    const fallback = grid.walls.indexOf(0);
    return fallback === -1 ? 0 : fallback;
}

export function createSearch(cols: number, rows: number): Search {
    const grid = createGrid(cols, rows);
    const start = pickFreeCell(grid, 0, Math.max(1, Math.floor(cols * 0.18)));
    const goal = pickFreeCell(grid, Math.floor(cols * 0.78), cols);
    const startNode: SearchNode = { index: start, g: 0, f: heuristic(grid, start, goal), parent: -1 };

    return {
        grid,
        start,
        goal,
        open: [startNode],
        best: new Map([[start, startNode]]),
        closed: new Uint8Array(cols * rows),
        done: false,
        path: [],
    };
}

function tracePath(search: Search, node: SearchNode) {
    const path: number[] = [];
    let current: SearchNode | undefined = node;

    while (current) {
        path.push(current.index);
        current = current.parent === -1 ? undefined : search.best.get(current.parent);
    }

    return path.reverse();
}

/** Expands at most `budget` nodes so the frontier grows across frames rather than in one jump. */
export function stepSearch(search: Search, budget: number) {
    const { grid, goal } = search;

    for (let step = 0; step < budget && !search.done; step += 1) {
        if (search.open.length === 0) {
            search.done = true;
            return;
        }

        let bestAt = 0;
        for (let i = 1; i < search.open.length; i += 1) {
            if (search.open[i].f < search.open[bestAt].f) {
                bestAt = i;
            }
        }

        const current = search.open.splice(bestAt, 1)[0];
        if (search.closed[current.index]) {
            continue;
        }
        search.closed[current.index] = 1;

        if (current.index === goal) {
            search.path = tracePath(search, current);
            search.done = true;
            return;
        }

        const x = current.index % grid.cols;
        const y = Math.floor(current.index / grid.cols);

        for (const [dx, dy, cost] of NEIGHBOURS) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= grid.cols || ny >= grid.rows) {
                continue;
            }

            const next = ny * grid.cols + nx;
            if (grid.walls[next] || search.closed[next]) {
                continue;
            }

            // Cutting a corner between two walls is not a move a traveller could make.
            if (dx !== 0 && dy !== 0 && (grid.walls[y * grid.cols + nx] || grid.walls[ny * grid.cols + x])) {
                continue;
            }

            const g = current.g + cost;
            const known = search.best.get(next);
            if (known && known.g <= g) {
                continue;
            }

            const node: SearchNode = { index: next, g, f: g + heuristic(grid, next, goal), parent: current.index };
            search.best.set(next, node);
            search.open.push(node);
        }
    }
}

export function runSearch(search: Search) {
    while (!search.done) {
        stepSearch(search, 512);
    }
}
