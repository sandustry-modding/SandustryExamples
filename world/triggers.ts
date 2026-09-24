import { TRIGGER } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;
const INTERVAL_TICKS = 300;

let fires = 0;

/** Interval writes a counter. It does not log. */
export function register(): void {
  api.triggers.register(TRIGGER, {
    interval: INTERVAL_TICKS,
    callback: () => {
      fires += 1;
      note("triggers", String(fires));
    },
  });
  note("triggers", "0");
}
