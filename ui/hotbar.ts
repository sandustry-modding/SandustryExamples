import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Extra hotbar bank source. The overlay can read bank counts. */
export function register(): void {
  api.ui.hotbar.createBankSource({
    bankOffset: 1,
    minimumBankCount: 2,
  });
  note("hotbar", `banks ${api.ui.hotbar.getBankCount()}`);
}
