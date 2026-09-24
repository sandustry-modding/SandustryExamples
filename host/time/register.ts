import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Game clock. */
export function register(): void {
  note("time", `${api.time.getTick()} ticks`);
}
