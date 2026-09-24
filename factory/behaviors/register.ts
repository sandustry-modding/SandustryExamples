import { STRUCTURE } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Conveyor behavior on the beacon structure id. */
export function register(): void {
  api.structureBehaviors.registerConveyorType(STRUCTURE, { runWith: "right" });
  note("behaviors", STRUCTURE);
}
