import { PLATINUM } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** Collector value for the platinum element. Admission still needs the patch sample. */
export function register(): void {
  const elementType = api.elements.getTypeById(PLATINUM);
  const value = api.collector.getValueByType(elementType);
  note("collector", String(value));
}
