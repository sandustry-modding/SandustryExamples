import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Factory level and one process count. */
export function register(): void {
  const level = api.factory.getLevel();
  const shakes = api.factory.getProcessCount("shakeWetSand");
  note("factory", `level ${level}, shakes ${shakes}`);
}
