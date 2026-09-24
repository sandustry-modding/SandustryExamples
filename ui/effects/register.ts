import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Particles at the player, from the overlay. */
export function register(): void {
  addAction({
    id: "effects",
    label: "Particles at player",
    run: () => {
      const pos = api.player.getPositionAtWorld();
      api.effects.createParticlesAtWorld(pos.x, pos.y, { count: 8 });
      note("effects", "spawned");
    },
  });
  note("effects", "overlay");
}
