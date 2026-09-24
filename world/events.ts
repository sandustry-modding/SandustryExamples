import { note } from "../shared/gallery.ts";

const api = sandkit.api;

let ready = 0;
let placed = 0;

/** Counts `game:ready` and `building:placed`. No toast. */
export function register(): void {
  api.events.on("game:ready", () => {
    ready += 1;
    note("events", `ready ${ready}, placed ${placed}`);
  });

  api.events.on("building:placed", () => {
    placed += 1;
    note("events", `ready ${ready}, placed ${placed}`);
  });

  note("events", "listening");
}
