import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Placement helpers. Cancel runs only from the overlay. */
export function register(): void {
  addAction({
    id: "building",
    label: "Cancel placement",
    run: () => {
      api.building.cancelPlacement();
      note("building", "cancelled");
    },
  });
  note("building", "overlay");
}
