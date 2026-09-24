import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Circle pattern size. Dig is not called at boot. */
export function register(): void {
  const circle = api.patterns.createCircle(3);
  note("patterns", `${circle.length}×${circle[0]?.length ?? 0}`);
}
