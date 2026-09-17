"use client";

import { useMemo, useState } from "react";
import { Activity, Workstream } from "@/lib/types";
import { formatDate } from "@/lib/dateUtils";
import { AAARRR_META } from "@/lib/aaarrrMeta";
import { FlagBadgeRow } from "./FlagBadge";

type SortKey = "workstream" | "title" | "start";

export function MatrixView({
  activities,
  workstreams,
}: {
  activities: Activity[];
  workstreams: Workstream[];
}) {
  const [sortKey, setSortKey] = useState<SortKey>("workstream");
  const [sortAsc, setSortAsc] = useState(true);
  const wsMap = useMemo(() => Object.fromEntries(workstreams.map((w) => [w.id, w])), [workstreams]);
  // Proposal order (Research -> GTM -> MarComms -> Creative -> Asset Production -> Execution Support),
  // not alphabetical; matches the source's own Execution Framework & Workstream Matrix sequence.
  const wsOrder = useMemo(() => Object.fromEntries(workstreams.map((w, i) => [w.id, i])), [workstreams]);

  const sorted = useMemo(() => {
    const copy = [...activities];
    copy.sort((a, b) => {
      if (sortKey === "workstream") {
        const cmp = (wsOrder[a.workstream] ?? 0) - (wsOrder[b.workstream] ?? 0);
        return sortAsc ? cmp : -cmp;
      }
      let av: string, bv: string;
      switch (sortKey) {
        case "start":
          av = a.start;
          bv = b.start;
          break;
        default:
          av = a.title;
          bv = b.title;
      }
      const cmp = av.localeCompare(bv);
      return sortAsc ? cmp : -cmp;
    });
    return copy;
  }, [activities, sortKey, sortAsc, wsOrder]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc((s) => !s);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  const headerBtn = (key: SortKey, label: string) => (
    <button
      onClick={() => toggleSort(key)}
      className="flex items-center gap-1 text-left font-semibold text-[11px] uppercase tracking-wide text-gray-600 hover:text-navy"
    >
      {label} {sortKey === key ? (sortAsc ? "▲" : "▼") : ""}
    </button>
  );

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-3 py-2 w-40">{headerBtn("workstream", "Workstream")}</th>
              <th className="text-left px-3 py-2">Deliverables</th>
              <th className="text-left px-3 py-2 w-36">{headerBtn("start", "Execution Window")}</th>
              <th className="text-left px-3 py-2 w-52">Governing Stakeholders</th>
              <th className="text-left px-3 py-2 w-40">AAARRR Stage</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((a) => {
              const ws = wsMap[a.workstream];
              return (
                <tr key={a.id} className="border-b border-gray-100 align-top hover:bg-gray-50">
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ws?.color }} />
                      <span className="text-gray-700">{ws?.shortLabel}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="font-medium text-gray-800">{a.title}</div>
                    {a.deliverables && (
                      <ul className="list-disc list-inside text-gray-500 mt-1 space-y-0.5">
                        {a.deliverables.map((d, i) => <li key={i}>{d}</li>)}
                      </ul>
                    )}
                    <FlagBadgeRow flags={a.flags} />
                  </td>
                  <td className="px-3 py-2 text-gray-600 whitespace-nowrap">
                    {formatDate(a.start)} → {formatDate(a.end)}
                    <div className="text-gray-400">{a.monthLabel}</div>
                  </td>
                  <td className="px-3 py-2 text-gray-600">{a.governingStakeholders}</td>
                  <td className="px-3 py-2">
                    {a.aaarrr.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {a.aaarrr.map((s) => (
                          <span key={s} className="text-[9px] font-bold bg-navy-50 text-navy px-1 rounded" title={AAARRR_META[s].priority}>
                            {AAARRR_META[s].short}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-300">N/A</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y divide-gray-100">
        {sorted.map((a) => {
          const ws = wsMap[a.workstream];
          return (
            <div key={a.id} className="p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ws?.color }} />
                <span className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold">{ws?.shortLabel}</span>
              </div>
              <div className="font-medium text-sm text-gray-800">{a.title}</div>
              {a.deliverables && (
                <ul className="list-disc list-inside text-xs text-gray-500 mt-1 space-y-0.5">
                  {a.deliverables.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              )}
              <div className="text-xs text-gray-600 mt-2">{formatDate(a.start)} → {formatDate(a.end)} <span className="text-gray-400">({a.monthLabel})</span></div>
              <div className="text-xs text-gray-500 mt-1">Governing: {a.governingStakeholders}</div>
              {a.aaarrr.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {a.aaarrr.map((s) => (
                    <span key={s} className="text-[9px] font-bold bg-navy-50 text-navy px-1 rounded">{AAARRR_META[s].short}</span>
                  ))}
                </div>
              )}
              <FlagBadgeRow flags={a.flags} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
