import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Active map and the available list. `maps.start` is not called at boot. */
export function register(): void {
  const active = api.maps.getActive();
  const available = api.maps.getAvailable();
  note("maps", active?.id ?? `${available.length} available`);
}
