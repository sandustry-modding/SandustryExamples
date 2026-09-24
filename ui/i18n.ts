import { NAME_KEY } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Register a string and read it with `i18n.t`. */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.greeting]: "Hello from i18n",
  });
  note("i18n", api.i18n.t(NAME_KEY.greeting));
}
