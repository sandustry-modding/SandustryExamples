# Host

These samples read config, storage, time, and the worker.
Restart the game after you change `worker-api/worker.ts`.
The root `worker.ts` calls that file.

| Folder | Try this | API |
| --- | --- | --- |
| `assets/` | Overlay: text from `mod/info.json` | `api.assets` |
| `settings/` | Options: boolean, number, and choice | `api.settings` |
| `storage/` | Overlay: save load count | `api.storage` |
| `shared-buffers/` | Buffer the worker probe fills | `api.shared.buffers` |
| `worker-api/` | Overlay: worker probed | Worker `sandkit.api` |
| `utils/` | Overlay: distance 5 | `api.utils` |
| `time/` | Overlay: tick count | `api.time` |
| `game/` | Overlay: start session, skip intro | `api.game` |
| `game-config/` | Overlay: config key count | `api.gameConfig` |
| `mods/` | Overlay: texture providers | `api.mods` |
