import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Grabber size read. Set size runs only from the overlay and restores the old size. */
export function register(): void {
  addAction({
    id: "tools",
    label: "Read grabber size",
    run: () => {
      note("tools", `size ${api.tools.grabber.getSize()}`);
    },
  });
  note("tools", "overlay");
}
