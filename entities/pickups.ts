import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Spawn an orb pickup at the player, from the overlay. */
export function register(): void {
  addAction({
    id: "pickups",
    label: "Spawn orb",
    run: () => {
      const pos = api.player.getPositionAtWorld();
      const pickup = api.pickups.spawnAtWorld(sandkit.enums.PickupType.Orb, pos.x, pos.y);
      note("pickups", String(pickup.id));
    },
  });
  note("pickups", "overlay");
}
