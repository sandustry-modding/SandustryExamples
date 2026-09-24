import { addAction, note } from "../shared/gallery.ts";

const api = sandkit.api;

/** `game.start` restarts the session. It runs only from the overlay. */
export function register(): void {
  addAction({
    id: "game",
    label: "Start session (skip intro)",
    run: () => {
      api.game.start({ skipIntro: true });
    },
  });
  note("game", "overlay");
}
