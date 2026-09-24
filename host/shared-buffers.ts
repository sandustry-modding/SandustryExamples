import { WORKER_BUFFER } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Shared buffer the worker probe fills. */
export function register(): void {
  const buffer = api.shared.buffers.ensure(WORKER_BUFFER, {
    type: "uint32",
    length: 1,
  });
  note("shared", `len ${buffer.length}`);
}
