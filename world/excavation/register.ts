import { EXCAVATION } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Dig profile. A gun still has to select it. */
export function register(): void {
  const dune = api.terrains.getTypeById("dune");
  const sand = api.elements.getTypeById("sand");
  api.excavation.registerProfile(EXCAVATION, {
    power: 8,
    terrainRules: [{ cellType: dune, outputElementType: sand }],
  });
  note("excavation", EXCAVATION);
}
