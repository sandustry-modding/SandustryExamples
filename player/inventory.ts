import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Inventory query. Add runs only from the overlay. */
export function register(): void {
  addAction({
    id: "inventory",
    label: "Has grabber",
    run: () => {
      const has = api.player.inventory.hasById("grabber");
      note("inventory", has ? "yes" : "no");
    },
  });
  note("inventory", "overlay");
}
