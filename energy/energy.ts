import { STRUCTURE } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Beacon is an energy conductor. */
export function register(): void {
  api.energy.registerType(STRUCTURE, "conductor");
  note("energy", "conductor");
}
