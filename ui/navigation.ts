import { note } from "../shared/gallery.ts";

/** Focus scope hooks run inside the overlay. */
export function register(): void {
  note("navigation", "overlay");
}
