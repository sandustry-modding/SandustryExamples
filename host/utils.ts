import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Distance helper. */
export function register(): void {
  const distance = api.utils.getDistance({ x: 0, y: 0 }, { x: 3, y: 4 });
  note("utils", String(distance));
}
