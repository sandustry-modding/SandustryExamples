# Examples

This is the template gallery mod.
Its id is `sandustry-modding.examples`.
Each file in a category is one Sandkit sample.
Copy that file into your mod when you want that sample.

## Open the gallery

Enable **Examples**.
Load the **Examples** Void save.
F5 **Sandustry** opens the newest save in that world.
Press **Alt+E** for the overlay.
The overlay lists status lines and action buttons.

## Keys

**Alt+E** opens or closes the overlay.
**Y** sends one toast.
The toast waits 2 seconds before it can fire again.
**T** shows the bound key.
**U** opens a prompt.
**Z** teleports the player to the cursor.
Ctrl+Z does not teleport.
**P** paints Platinum at the cursor.
**G** queues a grid mutate.
**F1** uses the Examples row in the management column.

## Quiet boot

Samples do not toast when the mod loads.
They write a status line for the overlay.
Open **Alt+E** to read those lines.
Buttons in the overlay run samples that change the world.

## Layout

Samples sit in category folders.
Each category has a README.
A sample with one file is `name.ts` in that category.
`ui/overlay/` and `host/worker-api/` stay folders because each has more than one file.
`main.ts` only checks `isEnabled()` and calls `register()`.
Do not add other `.ts` files next to `main.ts`.
`shared/` holds ids and overlay state for every sample.
Restart the game after you change `worker.ts` or `patches.ts`.
`patches.ts` is one sample: Collector tiles admit any element with collector value above 0.
Prefer Sandkit before you add a patch.
`sandkit.api` has no `queue` namespace.
That API is engine-only, so this mod does not sample it.

## Groups

| Folder | README |
| --- | --- |
| `world/` | [World and simulation](world/README.md) |
| `factory/` | [Factory](factory/README.md) |
| `energy/` | [Energy](energy/README.md) |
| `ui/` | [UI](ui/README.md) |
| `player/` | [Player](player/README.md) |
| `progression/` | [Progression](progression/README.md) |
| `entities/` | [Entities](entities/README.md) |
| `host/` | [Host](host/README.md) |
| `shared/` | [Shared ids](shared/README.md) |

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
