import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Cell size from the render grid. */
export function register(): void {
  const metrics = api.rendering.getGridMetrics();
  note("rendering", `cell ${metrics.cellSize}`);
}
