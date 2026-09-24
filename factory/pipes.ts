import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Pipe query at the cursor. */
export function register(): void {
  addAction({
    id: "pipes",
    label: "Pipe at mouse",
    run: () => {
      const cell = api.input.getMouseCellPosition();
      const present = api.pipes.isAtCell(cell.x, cell.y);
      note("pipes", present ? "pipe" : "none");
    },
  });
  note("pipes", "overlay");
}
