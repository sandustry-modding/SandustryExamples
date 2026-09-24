import { STRUCTURE } from "../shared/ids.ts";
import { note } from "../shared/gallery.ts";

const api = sandkit.api;

const HEAT_CANNON_TYPES = [
  "heatCannonUp",
  "heatCannonDown",
  "heatCannonLeft",
  "heatCannonRight",
] as const;

/** Heat-cannon targets, plus a sender and an interactable on the beacon. */
export function register(): void {
  for (const structureType of HEAT_CANNON_TYPES) {
    api.signals.targets.register(structureType, (structure, input) => {
      const payload = input as { inputCount?: number; combined?: boolean };
      api.structures.processing.setEnabledAtCell(
        structure.x,
        structure.y,
        payload.inputCount === 0 || payload.combined === true,
      );
    });
  }

  api.signals.registerSenderType(STRUCTURE, () => false);

  api.signals.interactables.register(STRUCTURE, (structure) => {
    const data = structure.data as { on?: boolean };
    data.on = data.on !== true;
    api.structures.update(structure);
    note("signals", data.on ? "on" : "off");
  });

  note("signals", "heat cannons + beacon");
}
