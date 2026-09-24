import { ELEMENT, TERRAIN } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Dedicated discovery calls. Element and terrain folders also add their types. */
export function register(): void {
  api.discoveries.addElementByType(api.elements.getTypeById(ELEMENT));
  api.discoveries.addTerrainByType(api.terrains.getTypeById(TERRAIN));
  note("discoveries", "element + terrain");
}
