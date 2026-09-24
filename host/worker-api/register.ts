import { note } from "../../shared/gallery.ts";

/** Worker probe lives in `worker.ts` in this folder. */
export function register(): void {
  note("worker-api", "worker.js");
}
