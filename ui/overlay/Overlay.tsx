import { useEffect, useState } from "react";
import {
  FixedAnchor,
  HotkeyBadge,
  Interactive,
  OverlayRoot,
  SectionHeading,
  UiBox,
} from "@modkit/ui";
import { listActions, status } from "../../shared/gallery.ts";
import { WORKER_BUFFER } from "../../shared/ids.ts";

const TOGGLE_CODE = "KeyE";

export function Overlay() {
  const [open, setOpen] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (!event.altKey || event.code !== TOGGLE_CODE) return;
      event.preventDefault();
      event.stopPropagation();
      setOpen((value) => !value);
    }
    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timer = window.setInterval(() => setTick((value) => value + 1), 500);
    return () => window.clearInterval(timer);
  }, [open]);

  const api = sandkit.api;
  api.ui.navigation.useFocusScope({
    id: "examples-overlay",
    active: open,
    priority: 10,
  });

  if (!open) return null;

  const worker = api.shared.buffers.get(WORKER_BUFFER);
  const rows = Object.entries(status).sort(([a], [b]) => a.localeCompare(b));
  if (worker) rows.push(["worker", worker[0] === 1 ? "probed" : "waiting"]);

  return (
    <OverlayRoot>
      <FixedAnchor anchor="top-left">
        <Interactive>
          <api.ui.components.Panel title="Examples">
            <UiBox className="bg-black bg-opacity-85 p-4 shadow-lg card-2 w-[28rem] text-white max-h-[70vh] overflow-auto">
              <SectionHeading size="md">Examples</SectionHeading>
              <p className="text-sm opacity-80 mb-3 underline">
                Press <HotkeyBadge>Alt</HotkeyBadge>+<HotkeyBadge>E</HotkeyBadge> to close.
              </p>
              <ul className="text-xs mb-3 space-y-1">
                {rows.map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-1">
                {listActions().map((action) => (
                  <api.ui.components.Button
                    key={action.id}
                    onClick={() => {
                      action.run();
                      setTick(tick + 1);
                    }}
                  >
                    {action.label}
                  </api.ui.components.Button>
                ))}
              </div>
            </UiBox>
          </api.ui.components.Panel>
        </Interactive>
      </FixedAnchor>
    </OverlayRoot>
  );
}
