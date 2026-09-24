import { SPRITE } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** `mod/sprite.png`. */
export async function register(): Promise<void> {
  await api.sprites.loadFromMod(SPRITE, "sprite.png");
  const loaded = api.sprites.getById(SPRITE) !== undefined;
  note("sprites", loaded ? "loaded" : "missing");
}
