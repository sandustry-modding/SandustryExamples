import { BINDING, NAME_KEY, PLATINUM } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Collector payout. Gold is 1. Platinum pays 2, like liquidGold. */
const COLLECTABLE_VALUE = 2;

/** Solid that the Collector can admit after the patch sample. Press P to paint. */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.platinum]: "Platinum",
  });

  const { elementType } = api.elements.register({
    id: PLATINUM,
    nameKey: NAME_KEY.platinum,
    interactions: [
      { kind: "structure", structures: [sandkit.enums.StructureType.Collector] },
      { kind: "structure", structures: ["smelter"] },
    ],
    density: 300,
    matterType: sandkit.enums.MatterType.Solid,
    metaColor: 0xd3e5ef,
    colors: {
      variants: [
        [211, 229, 239],
        [180, 200, 220],
        [160, 180, 200],
      ],
    },
    collectable: { value: COLLECTABLE_VALUE },
  } as Parameters<typeof api.elements.register>[0]);

  api.elements.updateDefinition(elementType, {
    collectable: { value: COLLECTABLE_VALUE },
  } as Parameters<typeof api.elements.updateDefinition>[1]);

  api.discoveries.addElementByType(elementType);

  api.input.registerBinding(BINDING.paint, ["KeyP"], {
    displayName: "Paint Platinum",
    category: "Examples",
    handlers: {
      down: () => {
        const cell = api.input.getMouseCellPosition();
        api.elements.createAtCell(cell.x, cell.y, elementType);
        note("platinum", `painted ${cell.x},${cell.y}`);
      },
    },
  });

  note("platinum", `value ${COLLECTABLE_VALUE}`);
}
