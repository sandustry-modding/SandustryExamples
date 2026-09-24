import type { ReactNode } from "react";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Keep the resources HUD and add nothing visible at boot. */
export function register(): void {
  api.ui.overrides.register("resources", (Original) => {
    return sandkit.react.createElement?.(Original, null) as ReactNode;
  });
  note("overrides", "resources");
}
