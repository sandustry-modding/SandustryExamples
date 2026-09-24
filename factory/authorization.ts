import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Build permission at the cursor. */
export function register(): void {
  addAction({
    id: "authorization",
    label: "Can build at mouse",
    run: () => {
      const cell = api.input.getMouseCellPosition();
      note("authorization", api.authorization.canBuildAtCell(cell.x, cell.y) ? "yes" : "no");
    },
  });
  note("authorization", "overlay");
}
