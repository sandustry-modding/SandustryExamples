import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Sand plus water becomes wet sand. */
export function register(): void {
  const sandType = api.elements.getTypeById("sand");
  const waterType = api.elements.getTypeById("water");
  const wetSandType = api.elements.getTypeById("wetSand");

  api.reactions.registerContact({
    inputA: sandType,
    inputB: waterType,
    outputA: wetSandType,
    outputB: null,
    orientation: "any",
  });

  note("reaction", "sand + water");
}
