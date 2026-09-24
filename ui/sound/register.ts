import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Play a vanilla UI sound from the overlay. */
export function register(): void {
  addAction({
    id: "sound",
    label: "Play click",
    run: () => {
      api.sound.play("click");
      note("sound", "played");
    },
  });
  note("sound", "overlay");
}
