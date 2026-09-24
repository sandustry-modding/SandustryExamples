import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Burn check at the cursor. Burn runs only from the overlay. */
export function register(): void {
  addAction({
    id: "fire",
    label: "Burn mouse cell",
    run: () => {
      const cell = api.input.getMouseCellPosition();
      const can = api.fire.canBurnElementAtCell(cell.x, cell.y);
      if (can) api.fire.burnElementAtCell(cell.x, cell.y);
      note("fire", can ? `burned ${cell.x},${cell.y}` : `cannot burn ${cell.x},${cell.y}`);
    },
  });
  note("fire", "overlay");
}
