import { safe } from "@modkit/utils";
import { note } from "../../shared/gallery.ts";

const api = sandkit.api;

type SettingSnapshot = {
  showToast: boolean;
  volume: number;
  retryCount: number;
  priority: string;
};

function readSettings(): SettingSnapshot {
  const showToast = safe(() => api.settings.get("showToast"));
  const volume = safe(() => api.settings.get("volume"));
  const retryCount = safe(() => api.settings.get("retryCount"));
  const priority = safe(() => api.settings.get("priority"));
  return {
    showToast: typeof showToast === "boolean" ? showToast : false,
    volume: typeof volume === "number" ? volume : 50,
    retryCount: typeof retryCount === "number" ? retryCount : 3,
    priority: typeof priority === "string" ? priority : "normal",
  };
}

function formatSnapshot(values: SettingSnapshot): string {
  return `toast=${values.showToast} volume=${values.volume} retries=${values.retryCount} priority=${values.priority}`;
}

/** Reads every `configSchema` field. Toasts only when Toast on settings change is on. */
export function register(): void {
  const publish = (prefix: string, values: SettingSnapshot) => {
    const message = `${prefix} — ${formatSnapshot(values)}`;
    note("settings", message);
    if (values.showToast) api.ui.toast(message, {});
  };

  publish("Settings", readSettings());
  api.settings.onChange(() => {
    publish("Settings changed", readSettings());
  });
}
