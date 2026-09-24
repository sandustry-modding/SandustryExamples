import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Snap the camera back to the player. */
export function register(): void {
  addAction({
    id: "camera",
    label: "Snap camera",
    run: () => {
      api.camera.snapToPlayer();
      note("camera", "snapped");
    },
  });
  note("camera", "overlay");
}
