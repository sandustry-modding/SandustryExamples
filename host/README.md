# Host

These samples read config, storage, time, and the worker.
Restart the game after you change `worker-api/worker.ts`.
The root `worker.ts` calls that file.

| Sample | Try this | API |
| --- | --- | --- |
| `assets.ts` | Overlay: text from `mod/info.json` | `api.assets` |
| `settings.ts` | Options: boolean, number, and choice | `api.settings` |
| `storage.ts` | Overlay: save load count | `api.storage` |
| `shared-buffers.ts` | Buffer the worker probe fills | `api.shared.buffers` |
| `worker-api/` | Overlay: worker probed | Worker `sandkit.api` |
| `utils.ts` | Overlay: distance 5 | `api.utils` |
| `time.ts` | Overlay: tick count | `api.time` |
| `game.ts` | Overlay: start session, skip intro | `api.game` |
| `game-config.ts` | Overlay: config key count | `api.gameConfig` |
| `mods.ts` | Overlay: texture providers | `api.mods` |
