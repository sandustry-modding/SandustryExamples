import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Active scene id. */
export function register(): void {
  note("scene", String(api.scene.getActive()));
}
