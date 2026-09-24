export type GalleryAction = {
  id: string;
  label: string;
  run: () => void;
};

const actions: GalleryAction[] = [];

/** Live sample readouts. The overlay renders this map. */
export const status: Record<string, string> = {};

export function note(key: string, value: string): void {
  status[key] = value;
}

export function addAction(action: GalleryAction): void {
  actions.push(action);
}

export function listActions(): readonly GalleryAction[] {
  return actions;
}
