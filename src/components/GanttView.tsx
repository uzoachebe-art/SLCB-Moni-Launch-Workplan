"use client";

import { useMemo, useState } from "react";
import { Activity, Workstream } from "@/lib/types";
import { MILESTONES } from "@/lib/workstreams";
import { MONTH_LABELS, monthsBetween, monthIndexOf, parseISO, formatDate } from "@/lib/dateUtils";
import { AAARRR_META } from "@/lib/aaarrrMeta";
import { FlagBadgeRow } from "./FlagBadge";
import { activityById } from "@/lib/data";

const COL_WIDTH = 130; // px per month (wider — only a 4-month window)
const ROW_HEIGHT = 44;
const LABEL_WIDTH = 220;

const GRID_START = { year: 2026, month: 8 }; // September 2026 (bars start mid-month, from the 15th)
const GRID_END = { year: 2027, month: 0 }; // January 2027 — the grid is open-ended beyond this, not a hard stop

function packRows(activities: Activity[]): { activity: Activity; row: number }[] {
  const sorted = [...activities].sort((a, b) => a.start.localeCompare(b.start));
  const rowEnds: string[] = [];
  const placed: { activity: Activity; row: number }[] = [];
  for (const a of sorted) {
    let row = rowEnds.findIndex((occupiedUntil) => occupiedUntil < a.start);
    if (row === -1) {
      row = rowEnds.length;
      rowEnds.push(a.end);
    } else {
      rowEnds[row] = a.end;
    }
    placed.push({ activity: a, row });
  }
  return placed;
}

export function GanttView({
  activities,
  workstreams,
}: {
  activities: Activity[];
  workstreams: Workstream[];
}) {
  const [selected, setSelected] = useState<Activity | null>(null);

  const months = useMemo(
    () =>
      monthsBetween(
        new Date(Date.UTC(GRID_START.year, GRID_START.month, 1)),
        new Date(Date.UTC(GRID_END.year, GRID_END.month, 1))
      ),
    []
  );
  const gridWidth = months.length * COL_WIDTH;

  const laneData = useMemo(
    () =>
      workstreams.map((ws) => {
        const wsActivities = activities.filter((a) => a.workstream === ws.id);
        const packed = packRows(wsActivities);
        const rowCount = packed.length > 0 ? Math.max(...packed.map((p) => p.row)) + 1 : 0;
        return { ws, packed, rowCount };
      }),
    [activities, workstreams]
  );

  const milestonePositions = MILESTONES.map((m) => ({
    ...m,
    idx: monthIndexOf(parseISO(m.date), GRID_START),
  }));

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
      <div className="px-3 py-2 text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
        Bars sharing a row do not overlap in time; the ⛓ icon marks an activity gated on another.
      </div>
      <div className="flex">
        <div style={{ width: LABEL_WIDTH, flexShrink: 0 }} className="border-r border-gray-200">
          <div style={{ height: 32 }} className="border-b border-gray-200 bg-gray-50" />
          {laneData.map(({ ws, rowCount }) => (
            <div key={ws.id} style={{ minHeight: Math.max(1, rowCount) * ROW_HEIGHT }} className="border-b border-gray-200">
              <div className="px-2 py-1.5 flex items-center gap-1.5 h-full" style={{ backgroundColor: ws.colorSoft }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ws.color }} />
                <span className="text-xs font-semibold text-gray-800">{ws.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto flex-1">
          <div style={{ width: gridWidth, position: "relative" }}>
            <div className="flex border-b border-gray-200 bg-gray-50 sticky top-0 z-10" style={{ height: 32 }}>
              {months.map((m, i) => (
                <div
                  key={i}
                  style={{ width: COL_WIDTH }}
                  className="flex-shrink-0 text-[11px] font-medium text-gray-600 flex items-center justify-center border-r border-gray-100"
                >
                  {MONTH_LABELS[m.month]} {m.year}
                </div>
              ))}
            </div>

            {/* Open-ended marker — the programme continues beyond this grid, not a hard stop */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none border-l-2 border-dashed border-gray-400"
              style={{ left: gridWidth - 1 }}
            >
              <div className="absolute top-8 text-[10px] font-semibold px-1.5 py-0.5 rounded whitespace-nowrap bg-gray-600 text-white">
                ongoing →
              </div>
            </div>

            {milestonePositions.map((m) => (
              <div
                key={m.id}
                className="absolute top-0 bottom-0 z-20 pointer-events-none border-l-2 border-brandred"
                style={{ left: m.idx * COL_WIDTH }}
              >
                <div className="absolute top-8 -translate-x-1/2 text-[10px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap bg-brandred text-white">
                  {m.label}
                </div>
              </div>
            ))}

            {laneData.map(({ ws, packed, rowCount }) => (
              <div key={ws.id} className="border-b border-gray-200 relative" style={{ minHeight: Math.max(1, rowCount) * ROW_HEIGHT, paddingTop: 32 }}>
                {rowCount === 0 && <div style={{ height: ROW_HEIGHT - 32 }} />}
                {packed.map(({ activity: a, row: i }) => {
                  const startIdx = Math.max(0, monthIndexOf(parseISO(a.start), GRID_START));
                  const endIdx = monthIndexOf(parseISO(a.end), GRID_START);
                  const width = Math.max(0.4, endIdx - startIdx) * COL_WIDTH;
                  const left = startIdx * COL_WIDTH;
                  const hasFlags = a.flags && a.flags.length > 0;
                  const hasDeps = a.dependsOn && a.dependsOn.length > 0;
                  return (
                    <div
                      key={a.id}
                      onClick={() => setSelected(a)}
                      title={a.title}
                      className={`absolute rounded cursor-pointer flex items-center px-1.5 overflow-hidden border hover:shadow-md hover:z-10`}
                      style={{
                        left,
                        width,
                        top: i * ROW_HEIGHT + 32 + 4,
                        height: ROW_HEIGHT - 8,
                        backgroundColor: ws.colorSoft,
                        borderColor: hasFlags ? "#E2233B" : ws.color,
                        borderWidth: hasFlags ? 2 : 1,
                      }}
                    >
                      {hasDeps && <span className="text-[10px] mr-1 flex-shrink-0" title="Has dependency">⛓</span>}
                      <span className="text-[10px] font-medium truncate text-gray-800">{a.title}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && <ActivityDetail activity={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ActivityDetail({ activity, onClose }: { activity: Activity; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 bg-black/40 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div className="bg-white rounded-t-xl sm:rounded-xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-4 sm:p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-navy text-sm sm:text-base">{activity.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-lg leading-none flex-shrink-0">✕</button>
        </div>
        <div className="mt-2 text-xs text-gray-600 grid grid-cols-2 gap-x-3 gap-y-1">
          <div><span className="text-gray-400">Governing:</span> {activity.governingStakeholders}</div>
          <div><span className="text-gray-400">Window:</span> {activity.monthLabel}</div>
          <div><span className="text-gray-400">Start:</span> {formatDate(activity.start)}</div>
          <div><span className="text-gray-400">End:</span> {formatDate(activity.end)}</div>
        </div>
        {activity.deliverables && activity.deliverables.length > 0 && (
          <div className="mt-3">
            <div className="text-xs font-semibold text-gray-700">Deliverables</div>
            <ul className="list-disc list-inside text-xs text-gray-600 mt-1 space-y-0.5">
              {activity.deliverables.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        )}
        {activity.dependsOn && activity.dependsOn.length > 0 && (
          <div className="mt-3">
            <div className="text-xs font-semibold text-gray-700">Depends on</div>
            <ul className="list-disc list-inside text-xs text-gray-600 mt-1">
              {activity.dependsOn.map((id) => {
                const dep = activityById(id);
                return <li key={id}>{dep ? dep.title : id}</li>;
              })}
            </ul>
          </div>
        )}
        <div className="mt-3">
          <div className="text-xs font-semibold text-gray-700">AAARRR stage(s)</div>
          {activity.aaarrr.length > 0 ? (
            <div className="flex flex-wrap gap-1 mt-1">
              {activity.aaarrr.map((s) => (
                <span key={s} className="text-[10px] font-medium bg-navy-50 text-navy px-1.5 py-0.5 rounded">
                  {AAARRR_META[s].label} · {AAARRR_META[s].priority}
                </span>
              ))}
            </div>
          ) : (
            <div className="text-xs text-gray-400 mt-1">
              Not applicable — AAARRR tags apply only within Asset Production &amp; Rollout and Campaign
              Execution Support.
            </div>
          )}
        </div>
        <FlagBadgeRow flags={activity.flags} />
      </div>
    </div>
  );
}
