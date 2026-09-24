import { BINDING } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Defer a grid mutate until the player presses G. */
export function register(): void {
  api.input.registerBinding(BINDING.schedule, ["KeyG"], {
    displayName: "Schedule grid mutate",
    category: "Examples",
    handlers: {
      down: () => {
        api.schedule.nextTick(() => {
          api.grid.mutate(() => {
            note("schedule", "grid.mutate ran");
          });
        });
        note("schedule", "queued");
      },
    },
  });
  note("schedule", "press G");
}
