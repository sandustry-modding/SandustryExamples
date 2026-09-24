import { BINDING } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

type EngineState = {
  shared?: {
    mouse?: {
      worldPosition?: [number, number];
    };
  };
};

/** Press Z to teleport to the cursor. Ctrl+Z is left alone. */
export function register(): void {
  api.input.registerBinding(BINDING.teleport, ["KeyZ"], {
    displayName: "Teleport to cursor",
    category: "Examples",
    handlers: {
      down: () => {
        if (api.input.isCtrlHeld()) return;
        const state = sandkit.engine.state as EngineState | undefined;
        const pos = state?.shared?.mouse?.worldPosition;
        if (!pos) return;
        api.player.setPositionAtWorld(pos[0], pos[1]);
        note("player", `${pos[0]},${pos[1]}`);
      },
    },
  });
  note("player", "press Z");
}
