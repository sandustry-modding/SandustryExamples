import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Leave worker post-update callbacks on. */
export function register(): void {
  api.workers.setPostUpdateEnabled(true);
  note("workers", "post-update on");
}
