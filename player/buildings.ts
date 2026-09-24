import { STRUCTURE } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Unlock the beacon. `structure/` also unlocks it. This folder is the buildings call. */
export function register(): void {
  api.player.buildings.unlockById(STRUCTURE);
  note("buildings", STRUCTURE);
}
