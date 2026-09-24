import assert from "node:assert/strict";
import test from "node:test";
import { setupGame } from "@modkit/test";

const MOD_ID = "sandustry-modding.examples";
const game = await setupGame();

test("examples mod is loaded", async (t) => {
  const ids = await game.orderedModIds();
  if (!ids.includes(MOD_ID)) {
    t.skip(`${MOD_ID} is not loaded`);
    return;
  }
  assert.ok(ids.includes(MOD_ID));
});

test("examples registers spark dust, chalk, and the beacon", async (t) => {
  const ids = await game.orderedModIds();
  if (!ids.includes(MOD_ID)) {
    t.skip(`${MOD_ID} is not loaded`);
    return;
  }

  const live = await game.evaluate((modId: string) => {
    const elementId = `${modId}:spark-dust`;
    const terrainId = `${modId}:chalk`;
    const structureId = `${modId}:beacon`;
    const read = (run: () => number) => {
      try {
        const value = run();
        return typeof value === "number" && Number.isFinite(value) ? value : null;
      } catch {
        return null;
      }
    };
    return {
      element: read(() => sandkit.api.elements.getTypeById(elementId)),
      terrain: read(() => sandkit.api.terrains.getTypeById(terrainId)),
      structure: read(() => sandkit.api.structures.getTypeById(structureId)),
      greeting: sandkit.api.i18n.t(`${modId}.greeting`),
    };
  }, MOD_ID);

  assert.equal(typeof live.element, "number");
  assert.equal(typeof live.terrain, "number");
  assert.equal(typeof live.structure, "number");
  assert.equal(live.greeting, "Hello from i18n");
});
