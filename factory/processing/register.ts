import { NAME_KEY, SCANNER, SCANNER_SPRITE } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;
const SIZE = 4;

/** Periodic processor on a 4×4 scanner. Occupied-cell count stays on the overlay. */
export async function register(): Promise<void> {
  api.i18n.register("en", {
    [NAME_KEY.scanner]: "Example Scanner",
  });

  await api.sprites.loadFromMod(SCANNER_SPRITE, "processor.png");

  const shape = Array.from({ length: SIZE }, () => Array.from({ length: SIZE }, () => 1));

  api.structures.register({
    id: SCANNER,
    name: "Example Scanner",
    categoryKey: "logistics",
    buildModes: [{ type: "rectangular" }],
    shape,
    render: {
      imageName: SCANNER_SPRITE,
      size: { width: 64, height: 64 },
    },
  });

  api.structures.processing.register(SCANNER, {
    structureType: SCANNER,
    intervalMs: 1000,
    process(structure, context) {
      let filled = 0;
      for (let dy = 0; dy < SIZE; dy += 1) {
        for (let dx = 0; dx < SIZE; dx += 1) {
          if (!context.isCellEmptyAtCell(structure.x + dx, structure.y + dy)) {
            filled += 1;
          }
        }
      }
      note("processing", `${filled}/${SIZE * SIZE} at ${structure.x},${structure.y}`);
    },
  });

  note("processing", "registered");
}
