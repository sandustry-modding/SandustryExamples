import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Active hotbar action, on demand. */
export function register(): void {
  addAction({
    id: "action",
    label: "Read active action",
    run: () => {
      const active = api.action.getActive();
      note("action", String(active));
    },
  });
  note("action", "overlay");
}
