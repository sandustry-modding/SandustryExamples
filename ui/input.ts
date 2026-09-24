import { BINDING } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Bound key label. The handler does not toast. */
export function register(): void {
  api.input.registerBinding(BINDING.input, ["KeyT"], {
    displayName: "Examples action",
    category: "Examples",
    handlers: {
      down: () => {
        const key = api.input.getDisplayKey(BINDING.input, "T");
        note("input", `fired (${key})`);
      },
    },
  });
  note("input", api.input.getDisplayKey(BINDING.input, "T"));
}
