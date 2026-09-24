import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Complete a named objective only from the overlay. Boot does not call this. */
export function register(): void {
  addAction({
    id: "progression-complete",
    label: "Complete objective all",
    run: () => {
      const ok = api.progression.complete({ id: "all", domain: "objective" });
      note("progression", ok ? "completed" : "skipped");
    },
  });
  note("progression", "overlay");
}
