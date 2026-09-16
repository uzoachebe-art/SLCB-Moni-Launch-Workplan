"use client";

import { useMemo, useState } from "react";
import { PmPhase } from "@/lib/data/projectManagement";
import { AaarrrStage } from "@/lib/types";
import { AAARRR_META } from "@/lib/aaarrrMeta";
import { FlagBadgeRow } from "./FlagBadge";

export function ProjectManagementView({
  phases,
  selectedAaarrr,
}: {
  phases: PmPhase[];
  selectedAaarrr: Set<AaarrrStage>;
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const filteredPhases = useMemo(
    () =>
      phases
        .map((phase) => ({
          ...phase,
          sections: phase.sections
            .map((section) => ({
              ...section,
              items: section.items.filter((item) => item.aaarrr.some((s) => selectedAaarrr.has(s))),
            }))
            .filter((section) => section.items.length > 0),
        }))
        .filter((phase) => phase.sections.length > 0),
    [phases, selectedAaarrr]
  );

  function toggleCollapse(id: string) {
    setCollapsed((c) => ({ ...c, [id]: !c[id] }));
  }
  function toggleChecked(id: string) {
    setChecked((c) => ({ ...c, [id]: !c[id] }));
  }

  return (
    <div className="space-y-4">
      <div className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
        What needs to be done, grouped by campaign phase — not a timeline. Source: the 18-month
        &quot;Watch It Grow&quot; campaign strategy. Checkboxes are for your own reading session only —
        they are not saved.
      </div>

      {filteredPhases.map((phase) => (
        <div key={phase.id} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
          <button
            onClick={() => toggleCollapse(phase.id)}
            className="w-full text-left px-4 py-3 bg-navy text-white flex items-center justify-between"
          >
            <span className="font-semibold text-sm">{phase.label}</span>
            <span className="text-xs">{collapsed[phase.id] ? "▸ expand" : "▾ collapse"}</span>
          </button>
          {!collapsed[phase.id] && (
            <div className="p-4 space-y-4">
              <p className="text-xs text-gray-500 italic">{phase.intro}</p>
              {phase.sections.map((section) => (
                <div key={section.id}>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">
                    {section.label}
                  </h4>
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item.id} className="flex items-start gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={!!checked[item.id]}
                          onChange={() => toggleChecked(item.id)}
                          className="mt-1 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <span className={checked[item.id] ? "text-gray-400 line-through" : "text-gray-800"}>
                            {item.text}
                          </span>
                          {item.owner && <span className="text-gray-400 text-xs"> — {item.owner}</span>}
                          <div className="flex flex-wrap items-center gap-1 mt-1">
                            {item.aaarrr.map((s) => (
                              <span key={s} className="text-[9px] font-bold bg-navy-50 text-navy px-1 rounded" title={AAARRR_META[s].priority}>
                                {AAARRR_META[s].short}
                              </span>
                            ))}
                          </div>
                          <FlagBadgeRow flags={item.flags} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
