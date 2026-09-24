import { PROJECTILE, SPRITE } from "../../shared/ids.ts";
import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Register a pellet. Spawn runs from the overlay. */
export function register(): void {
  api.projectiles.register({
    id: PROJECTILE,
    sprite: { id: SPRITE },
    getOptions: () => ({ speed: 4 }),
  });

  addAction({
    id: "projectiles",
    label: "Spawn pellet",
    run: () => {
      const pos = api.player.getPositionAtWorld();
      const blueprint = api.projectiles.createBlueprintById(PROJECTILE);
      const shot = api.projectiles.spawnAtWorld(pos.x, pos.y, 0, blueprint);
      note("projectiles", String(shot.id));
    },
  });
  note("projectiles", PROJECTILE);
}
