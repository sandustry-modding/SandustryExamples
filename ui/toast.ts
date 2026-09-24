import { BINDING } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

const COOLDOWN_MS = 2000;
let lastAt = 0;

/** One toast from Y, with a cooldown. It does not fire at boot. */
export function register(): void {
  api.input.registerBinding(BINDING.toast, ["KeyY"], {
    displayName: "Show toast",
    category: "Examples",
    handlers: {
      down: () => {
        const now = Date.now();
        if (now - lastAt < COOLDOWN_MS) return;
        lastAt = now;
        api.ui.toast("Examples toast", {});
        note("toast", "sent");
      },
    },
  });
  note("toast", "press Y");
}
