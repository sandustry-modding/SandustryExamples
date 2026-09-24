import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Asset providers for one kind. */
export function register(): void {
  const providers = api.mods.getProviders("texture");
  note("mods", `${providers.length} texture providers`);
}
