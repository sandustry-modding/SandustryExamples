/**
 * Simulation workers. Restart the game after you change this file.
 */
import { registerWorker as registerWorkerApi } from "./host/worker-api/worker.ts";

const api = sandkit.api;

let booted = false;

function boot(): void {
  if (booted) return;
  registerWorkerApi(api);
  booted = true;
}

try {
  boot();
} catch {
  api.events.on("worker:update:post", () => {
    try {
      boot();
    } catch {
      /* main registration may still be in flight */
    }
  });
}
