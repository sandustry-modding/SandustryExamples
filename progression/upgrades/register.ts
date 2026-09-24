import { NAME_KEY, UPGRADE, UPGRADE_CATEGORY, UPGRADE_ITEM } from "../../shared/ids.ts";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

/** One category and one upgrade. */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.upgradeCategory]: "Examples",
    [NAME_KEY.upgrade]: "Reach",
  });

  api.upgrades.registerCategory({
    id: UPGRADE_CATEGORY,
    nameKey: NAME_KEY.upgradeCategory,
  });

  api.upgrades.register({
    itemId: UPGRADE_ITEM,
    categoryId: UPGRADE_CATEGORY,
    upgrade: {
      id: UPGRADE,
      nameKey: NAME_KEY.upgrade,
      maxLevel: 1,
      costs: [1],
    },
  });

  note("upgrades", `${api.upgrades.getLevelById(UPGRADE_ITEM, UPGRADE)}`);
}
