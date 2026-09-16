"use client";

import { AaarrrStage, Workstream } from "@/lib/types";
import { AAARRR_META, AAARRR_ORDER } from "@/lib/aaarrrMeta";

export type ViewMode = "gantt" | "matrix" | "risks" | "pm";

export function ViewToggle({ view, onChange }: { view: ViewMode; onChange: (v: ViewMode) => void }) {
  const opts: { key: ViewMode; label: string }[] = [
    { key: "gantt", label: "Gantt / Timeline" },
    { key: "matrix", label: "Matrix / Table" },
    { key: "risks", label: "Risks & Assumptions" },
    { key: "pm", label: "Project Management" },
  ];
  return (
    <div className="inline-flex rounded-lg border border-gray-300 bg-white p-0.5 text-sm flex-wrap">
      {opts.map((o) => (
        <button
          key={o.key}
          onClick={() => onChange(o.key)}
          className={`px-3 py-1.5 rounded-md font-medium transition-colors ${view === o.key ? "bg-navy text-white" : "text-gray-600 hover:bg-gray-100"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function WorkstreamFilter({
  workstreams,
  selected,
  onChange,
}: {
  workstreams: Workstream[];
  selected: Set<string>;
  onChange: (s: Set<string>) => void;
}) {
  function toggle(id: string) {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onChange(next);
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {workstreams.map((ws) => {
        const active = selected.has(ws.id);
        return (
          <button
            key={ws.id}
            onClick={() => toggle(ws.id)}
            className={`text-xs font-medium px-2 py-1 rounded-full border flex items-center gap-1.5 transition-opacity ${active ? "opacity-100" : "opacity-40"}`}
            style={{ borderColor: ws.color, backgroundColor: active ? ws.colorSoft : "white" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ws.color }} />
            {ws.shortLabel}
          </button>
        );
      })}
    </div>
  );
}

export function AaarrrFilter({
  selected,
  onChange,
}: {
  selected: Set<AaarrrStage>;
  onChange: (s: Set<AaarrrStage>) => void;
}) {
  function toggle(stage: AaarrrStage) {
    const next = new Set(selected);
    if (next.has(stage)) next.delete(stage);
    else next.add(stage);
    onChange(next);
  }
  return (
    <div className="flex flex-wrap gap-1.5">
      {AAARRR_ORDER.map((stage) => {
        const active = selected.has(stage);
        return (
          <button
            key={stage}
            onClick={() => toggle(stage)}
            title={AAARRR_META[stage].priority}
            className={`text-xs font-bold px-2 py-1 rounded-full border border-navy transition-opacity ${active ? "opacity-100 bg-navy text-white" : "opacity-40 bg-white text-navy"}`}
          >
            {AAARRR_META[stage].short}
          </button>
        );
      })}
    </div>
  );
}

export function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-600">
      <span className="border-l border-gray-300 pl-0 sm:pl-4 flex items-center gap-1.5">
        <span className="w-3 border-t-2 border-brandred inline-block" /> Launch milestone (Uzo&apos;s addition — not in source proposal)
      </span>
      <span className="flex items-center gap-1">⛓ Has dependency</span>
      <span className="flex items-center gap-1">
        <span className="w-2.5 h-2.5 rounded border-2 border-brandred inline-block" /> Flagged item — click badge for detail
      </span>
    </div>
  );
}
