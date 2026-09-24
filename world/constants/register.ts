import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Physics skip-mode constants. */
export function register(): void {
  note("constants", `normal ${api.constants.physics.normal}`);
}
