import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Grower, shaker, and kinetic press recipes. Smelter lives in `element/`. */
export function register(): void {
  const sand = api.elements.getTypeById("sand");
  const wetSand = api.elements.getTypeById("wetSand");
  const water = api.elements.getTypeById("water");

  api.processing.registerGrower({
    input: sand,
    output: wetSand,
    chance: 1,
  });

  api.processing.registerShaker({
    input: wetSand,
    outputsAbove: [{ elementType: sand, chance: 1 }],
    outputsBelow: [{ elementType: water, chance: 1 }],
  });

  api.processing.registerKineticPress({
    input: sand,
    minimumDownwardVelocity: 20,
    outputs: [{ elementType: sand, chance: 1 }],
  });

  note("recipes", "grower, shaker, press");
}
