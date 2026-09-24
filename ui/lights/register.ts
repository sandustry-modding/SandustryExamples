import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Short light at the player. */
export function register(): void {
  addAction({
    id: "lights",
    label: "Flash light",
    run: () => {
      const pos = api.player.getPositionAtWorld();
      api.lights.temporary.createAtWorld(pos.x, pos.y, {
        durationMs: 250,
        size: 80,
        decay: 1,
        dedupKey: "examples-flash",
      });
      note("lights", "flash");
    },
  });
  note("lights", "overlay");
}
