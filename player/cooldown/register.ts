import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

const timer = { last: 0, time: 1000 };

/** One-second cooldown. Start runs from the overlay. */
export function register(): void {
  addAction({
    id: "cooldown",
    label: "Start cooldown",
    run: () => {
      const started = api.cooldown.start(timer);
      note("cooldown", started ? "started" : "waiting");
    },
  });
  note("cooldown", "overlay");
}
