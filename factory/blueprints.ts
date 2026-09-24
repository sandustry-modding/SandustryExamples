import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Serialize structures in a 1×1 box at the cursor. */
export function register(): void {
  addAction({
    id: "blueprints",
    label: "Serialize mouse cell",
    run: () => {
      const cell = api.input.getMouseCellPosition();
      const structure = api.structures.getAtCell(cell.x, cell.y);
      const data = structure ? api.blueprints.serializeStructures([structure]) : [];
      note("blueprints", `${data.length} structure`);
    },
  });
  note("blueprints", "overlay");
}
