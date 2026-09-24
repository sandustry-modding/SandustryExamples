import { modinfo } from "../../modinfo.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Save bag. Load count stays on the overlay. */
export function register(): void {
  const bag = api.storage.ensure(modinfo.id);
  const loadCount = typeof bag.loadCount === "number" ? bag.loadCount + 1 : 1;
  bag.loadCount = loadCount;
  api.storage.set(modinfo.id, "lastLoadedAt", Date.now());
  note("storage", String(loadCount));
}
