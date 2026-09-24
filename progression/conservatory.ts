import { STRUCTURE } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Append the beacon to the Signal Devices conservatory unlock. */
export function register(): void {
  api.tech.conservatory.appendUnlock(sandkit.enums.Tech.SignalDevices, {
    structures: [STRUCTURE],
  });
  note("conservatory", STRUCTURE);
}
