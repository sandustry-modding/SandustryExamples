import { BINDING } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Press U to open `api.ui.prompt`. */
export function register(): void {
  api.input.registerBinding(BINDING.prompt, ["KeyU"], {
    displayName: "Show prompt",
    category: "Examples",
    handlers: {
      down: () => {
        void api.ui.prompt("Enter a label:", "Example", "text", "Prompt").then((value) => {
          if (typeof value !== "string" || !value.trim()) return;
          note("prompt", value.trim());
        });
      },
    },
  });
  note("prompt", "press U");
}
