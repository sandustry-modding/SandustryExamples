import { modinfo } from "../modinfo.ts";

const ns = `${modinfo.id}:`;

export const ELEMENT = ns + "spark-dust";
export const PLATINUM = ns + "platinum";
export const TERRAIN = ns + "chalk";
export const STRUCTURE = ns + "beacon";
export const STRUCTURE_SPRITE = ns + "beacon-sprite";
export const SCANNER = ns + "scanner";
export const SCANNER_SPRITE = ns + "scanner-sprite";
export const SPRITE = ns + "demo";
export const TRIGGER = ns + "heartbeat";
export const ITEM = ns + "token";
export const PROJECTILE = ns + "pellet";
export const TECH = ns + "research";
export const UPGRADE_ITEM = ns + "upgrade-item";
export const UPGRADE = ns + "reach";
export const UPGRADE_CATEGORY = ns + "category";
export const EXCAVATION = ns + "profile";
export const WORKER_BUFFER = ns + "worker-probe";

export const NAME_KEY = {
  element: `${modinfo.id}.element.name`,
  platinum: `${modinfo.id}.platinum.name`,
  terrain: `${modinfo.id}.terrain.name`,
  structure: `${modinfo.id}.structure.name`,
  scanner: `${modinfo.id}.scanner.name`,
  greeting: `${modinfo.id}.greeting`,
  item: `${modinfo.id}.item.name`,
  tech: `${modinfo.id}.tech.name`,
  techDescription: `${modinfo.id}.tech.description`,
  upgradeCategory: `${modinfo.id}.upgrade.category`,
  upgrade: `${modinfo.id}.upgrade.name`,
} as const;

export const BINDING = {
  toast: `${modinfo.id}.toast`,
  prompt: `${modinfo.id}.prompt`,
  teleport: `${modinfo.id}.teleport`,
  paint: `${modinfo.id}.paint`,
  schedule: `${modinfo.id}.schedule`,
  input: `${modinfo.id}.input`,
} as const;
