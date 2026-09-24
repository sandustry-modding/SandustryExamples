import { NAME_KEY, STRUCTURE, STRUCTURE_SPRITE } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;
const Block = sandkit.enums.CellType.Block;

/** Buildable beacon. Debug → Building → Example Beacon. Sprite: `mod/beacon.png`. */
export async function register(): Promise<void> {
  api.i18n.register("en", {
    [NAME_KEY.structure]: "Example Beacon",
  });

  await api.sprites.loadFromMod(STRUCTURE_SPRITE, "beacon.png");

  api.structures.register({
    id: STRUCTURE,
    name: "Example Beacon",
    categoryKey: "logistics",
    buildModes: [{ type: "single" }],
    variants: [{ id: STRUCTURE, angles: [0] }],
    render: {
      imageName: STRUCTURE_SPRITE,
      size: { width: 16, height: 16 },
    },
    shape: [
      [Block, Block, Block, Block],
      [Block, Block, Block, Block],
      [Block, Block, Block, Block],
      [Block, Block, Block, Block],
    ],
  });

  api.structures.registerVariant(
    STRUCTURE,
    { id: `${STRUCTURE}:vertical`, angles: [-90, 90] },
    {
      addBuildMode: {
        type: "line",
        directions: ["vertical"],
        spanTiles: 4,
      },
    },
  );

  api.structures.registerPlacementConfig({
    structureId: STRUCTURE,
    fields: [
      {
        type: "integer",
        id: "channel",
        labelKey: "Channel",
        default: 1,
        min: 1,
        max: 8,
      },
    ],
  });

  api.player.buildings.unlockById(STRUCTURE);
  note("structure", STRUCTURE);
}
