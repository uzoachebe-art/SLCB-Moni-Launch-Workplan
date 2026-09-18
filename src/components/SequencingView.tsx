"use client";

import { useMemo, useState } from "react";
import { SEQUENCING_STAGES } from "@/lib/data/sequencing";
import { PmPhase, PmItem } from "@/lib/data/projectManagement";

function flattenSections(phases: PmPhase[]) {
  const map = new Map<string, { label: string; phaseLabel: string; items: PmItem[] }>();
  for (const phase of phases) {
    for (const section of phase.sections) {
      map.set(section.id, { label: section.label, phaseLabel: phase.label, items: section.items });
    }
  }
  return map;
}

function flattenItems(phases: PmPhase[]) {
  const map = new Map<string, PmItem>();
  for (const phase of phases) {
    for (const section of phase.sections) {
      for (const item of section.items) {
        map.set(item.id, item);
      }
    }
  }
  return map;
}

export function SequencingView({ phases }: { phases: PmPhase[] }) {
  const sectionMap = useMemo(() => flattenSections(phases), [phases]);
  const itemMap = useMemo(() => flattenItems(phases), [phases]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ "wave-1": true });
  const stageLabelById = useMemo(
    () => Object.fromEntries(SEQUENCING_STAGES.map((s) => [s.id, s.label])),
    []
  );

  function toggle(id: string) {
    setExpanded((e) => ({ ...e, [id]: !e[id] }));
  }

  return (
    <div className="space-y-4">
      <div className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
        Execution order, not a timeline: what has to close before the next wave can safely start.
        Every section listed here lives in the Project Management tab; nothing is duplicated, this
        view just reorders it by dependency instead of by phase theme.
      </div>

      <div className="relative">
        {SEQUENCING_STAGES.sort((a, b) => a.order - b.order).map((stage, idx) => {
          const isLast = idx === SEQUENCING_STAGES.length - 1;
          return (
            <div key={stage.id} className="relative pl-10">
              {!isLast && (
                <div className="absolute left-4 top-9 bottom-0 w-0.5 bg-gray-200" aria-hidden />
              )}
              <div
                className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${stage.concurrent ? "bg-sky-600" : "bg-navy"}`}
              >
                {stage.order}
              </div>
              <div className="border border-gray-200 rounded-lg bg-white mb-4 overflow-hidden">
                <button
                  onClick={() => toggle(stage.id)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100"
                >
                  <div>
                    <span className="font-semibold text-sm text-gray-800">{stage.label}</span>
                    {stage.concurrent && (
                      <span className="ml-2 text-[9px] font-bold uppercase tracking-wide bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">
                        Runs concurrently
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">{expanded[stage.id] ? "collapse" : "expand"}</span>
                </button>
                {expanded[stage.id] && (
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-gray-600 italic">{stage.rationale}</p>

                    {stage.blockedBy && stage.blockedBy.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 text-xs">
                        <span className="text-gray-400">Blocked by:</span>
                        {stage.blockedBy.map((bid) => (
                          <span key={bid} className="bg-brandred-50 text-brandred-dark border border-brandred rounded px-1.5 py-0.5 text-[10px] font-semibold">
                            {stageLabelById[bid] ?? bid}
                          </span>
                        ))}
                      </div>
                    )}

                    {stage.keyGateItemIds && stage.keyGateItemIds.length > 0 && (
                      <div className="bg-amber-50 border border-amber-200 rounded p-2 space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-wide text-amber-800">Key gate called out from a later-listed section</div>
                        {stage.keyGateItemIds.map((iid) => {
                          const item = itemMap.get(iid);
                          if (!item) return null;
                          return (
                            <div key={iid} className="text-xs text-amber-900">
                              {item.text}
                              {item.owner && <span className="text-amber-600"> ({item.owner})</span>}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-2">
                      {stage.sectionIds.map((sid) => {
                        const section = sectionMap.get(sid);
                        if (!section) return null;
                        return (
                          <div key={sid} className="border border-gray-100 rounded px-2.5 py-2 bg-gray-50">
                            <div className="text-xs font-semibold text-gray-700">{section.label}</div>
                            <div className="text-[10px] text-gray-400">{section.phaseLabel} · {section.items.length} item{section.items.length === 1 ? "" : "s"}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
