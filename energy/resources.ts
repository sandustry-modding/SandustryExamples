import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Refresh the energy HUD. Adjust runs only from the overlay, by zero. */
export function register(): void {
  api.resources.refresh("energy");
  addAction({
    id: "resources",
    label: "Refresh energy HUD",
    run: () => {
      api.resources.refresh("energy");
      note("resources", "refreshed");
    },
  });
  note("resources", "energy");
}
