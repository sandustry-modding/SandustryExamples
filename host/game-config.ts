import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Read the merged config object size. */
export function register(): void {
  const all = api.gameConfig.getAll();
  note("gameConfig", `${Object.keys(all).length} keys`);
}
