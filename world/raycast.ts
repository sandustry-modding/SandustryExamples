import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Ray from the player, on demand. */
export function register(): void {
  addAction({
    id: "raycast",
    label: "Raycast right",
    run: () => {
      const pos = api.player.getPositionAtWorld();
      const hit = api.raycast.castFromWorld(pos.x, pos.y, 0, 200);
      note("raycast", hit ? `hit ${hit.distance}` : "miss");
    },
  });
  note("raycast", "overlay");
}
