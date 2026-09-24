import type { ReactNode } from "react";
import { modinfo } from "../modinfo.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Docked label on the hotbar region. */
export function register(): void {
  api.ui.regions.mount("hotbar", `${modinfo.id}:label`, {
    placement: "docked",
    order: 50,
    render: () => sandkit.react.createElement?.("span", null, "Examples") as ReactNode,
  });
  note("regions", "hotbar");
}
