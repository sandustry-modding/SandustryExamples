import { ELEMENT, WORKER_BUFFER } from "../../shared/ids.ts";

/**
 * Worker-thread `sandkit.api`.
 * Probe once on worker 0 into a shared buffer.
 * Do not log from `worker:update:post`.
 */
export function registerWorker(api: WorkerSandkitApi): void {
  if (api.worker.getIndex() !== 0) return;

  const buffer = api.shared.buffers.require(WORKER_BUFFER, {
    type: "uint32",
    length: 1,
  });
  api.elements.getTypeById(ELEMENT);
  api.grid.isCellEmptyAtCell(0, 0);
  buffer[0] = 1;
}
