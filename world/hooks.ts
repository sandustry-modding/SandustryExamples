import { note } from "../shared/gallery.ts";

const api = sandkit.api;

let escapes = 0;

/** `input:escape` stays open for the pause menu. A modify hook passes movement through. */
export function register(): void {
  api.hooks.intercept("input:escape", () => {
    escapes += 1;
    note("hooks", `escape ${escapes}`);
  });

  api.hooks.modify("player:movement:prepare", (args) => args);

  note("hooks", "registered");
}
