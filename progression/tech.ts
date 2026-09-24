import { NAME_KEY, TECH } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Definition plus a node under Signal Devices. */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.tech]: "Example research",
    [NAME_KEY.techDescription]: "Gallery tech node.",
  });

  const definition = {
    nameKey: NAME_KEY.tech,
    descriptionKey: NAME_KEY.techDescription,
    cost: 1,
  };

  api.tech.registerDefinition(TECH, definition);
  api.tech.registerNode(TECH, definition, {
    parentId: sandkit.enums.Tech.SignalDevices,
  });
  note("tech", TECH);
}
