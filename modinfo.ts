import { defineModInfo } from "@modkit/modinfo";

export const modinfo = defineModInfo({
  manifestVersion: 1,
  id: "sandustry-modding.examples",
  name: "Examples",
  version: "0.1.0",
  apiVersion: 1,
  gameVersion: { minimum: "0.5.5" },
  entry: "main.js",
  workerEntry: "worker.js",
  author: "sandustry-modding",
  description: "One gallery mod. Each folder is a Sandkit sample.",
  dependencies: [],
  loadOrder: 0,
  configSchema: {
    enabled: {
      type: "boolean",
      default: true,
      labelKey: "Mod enabled",
      descriptionKey: "Turn the mod off without unsubscribing.",
    },
    showToast: {
      type: "boolean",
      default: false,
      labelKey: "Toast on settings change",
      descriptionKey: "Show a toast when a setting below changes.",
    },
    volume: {
      type: "number",
      default: 50,
      min: 0,
      max: 100,
      step: 5,
      labelKey: "Volume (slider)",
      descriptionKey: "Number with min and max. Options shows a range slider plus a number box.",
    },
    retryCount: {
      type: "number",
      default: 3,
      labelKey: "Retry count (number only)",
      descriptionKey: "Number without min and max. Options shows a number box only.",
    },
    priority: {
      type: "choice",
      default: "normal",
      labelKey: "Priority",
      descriptionKey: "Choice field. Options shows a select list.",
      options: [
        { value: "low", labelKey: "Low" },
        { value: "normal", labelKey: "Normal" },
        { value: "high", labelKey: "High" },
      ],
    },
  },
});
