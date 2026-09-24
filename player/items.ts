import { ITEM, NAME_KEY } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Custom inventory item. */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.item]: "Example Token",
  });
  api.items.register({
    id: ITEM,
    nameKey: NAME_KEY.item,
  });
  note("items", ITEM);
}
