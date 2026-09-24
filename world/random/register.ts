import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** One roll from the overlay. Boot does not call random. */
export function register(): void {
  addAction({
    id: "random",
    label: "Roll 1–6",
    run: () => {
      note("random", String(api.random.int(1, 6)));
    },
  });
  note("random", "overlay");
}
