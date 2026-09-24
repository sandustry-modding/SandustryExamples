import { addAction, note } from "../../shared/gallery.ts";

const api = sandkit.api;

/**
 * Grid reads and a keyed mutate.
 * `api.world` is a deprecated alias of `api.grid`. Use `api.grid`.
 */
export function register(): void {
  const empty = api.grid.isCellEmptyAtCell(0, 0);
  note("grid", empty ? "0,0 empty" : "0,0 filled");

  addAction({
    id: "grid",
    label: "Read mouse cell",
    run: () => {
      const cell = api.input.getMouseCellPosition();
      const id = api.grid.getCellIdAtCell(cell.x, cell.y);
      note("grid", `${cell.x},${cell.y} id ${id}`);
    },
  });
}
