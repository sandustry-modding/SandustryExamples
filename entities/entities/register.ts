import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Spawn a shinelet at the player, from the overlay. */
export function register(): void {
  addAction({
    id: "entities",
    label: "Spawn shinelet",
    run: () => {
      const pos = api.player.getPositionAtWorld();
      const entity = api.entities.spawnAtWorld("shinelet", pos.x, pos.y);
      note("entities", String(entity.id));
    },
  });
  note("entities", `${api.entities.getAllByType("shinelet").length} live`);
}
