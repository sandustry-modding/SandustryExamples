import { note } from "../shared/gallery.ts";

const api = sandkit.api;

/** Static files under `mod/`. */
export function register(): void {
  const badgeUrl = api.assets.getUrl("badge.png");
  const infoUrl = api.assets.getUrl("info.json");
  note("assets", badgeUrl);

  void fetch(infoUrl)
    .then((response) => response.json() as Promise<{ message?: string }>)
    .then((info) => {
      note("assets", info.message ?? "mod asset loaded");
    })
    .catch(() => {
      note("assets", "info.json failed");
    });
}
