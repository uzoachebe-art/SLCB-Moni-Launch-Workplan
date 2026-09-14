"use client";

import { useMemo, useState } from "react";
import { ALL_ACTIVITIES, RISKS, ASSUMPTIONS } from "@/lib/data";
import { WORKSTREAMS, MILESTONES } from "@/lib/workstreams";
import { AaarrrStage } from "@/lib/types";
import { GanttView } from "@/components/GanttView";
import { MatrixView } from "@/components/MatrixView";
import { RiskView } from "@/components/RiskView";
import { ViewToggle, ViewMode, WorkstreamFilter, AaarrrFilter, Legend } from "@/components/Controls";
import { formatDate } from "@/lib/dateUtils";

export default function Home() {
  const [view, setView] = useState<ViewMode>("gantt");
  const [selectedWs, setSelectedWs] = useState<Set<string>>(new Set(WORKSTREAMS.map((w) => w.id)));
  const [selectedAaarrr, setSelectedAaarrr] = useState<Set<AaarrrStage>>(
    new Set<AaarrrStage>(["awareness", "acquisition", "activation", "retention", "referral", "revenue"])
  );

  const filtered = useMemo(
    () =>
      ALL_ACTIVITIES.filter(
        (a) => selectedWs.has(a.workstream) && a.aaarrr.some((s) => selectedAaarrr.has(s))
      ),
    [selectedWs, selectedAaarrr]
  );

  const visibleWorkstreams = WORKSTREAMS.filter((w) => selectedWs.has(w.id));
  const toConfirmCount = ALL_ACTIVITIES.filter((a) => a.flags?.some((f) => f.type === "uzo-to-confirm")).length;

  return (
    <main className="min-h-screen pb-16">
      <header className="bg-navy text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">SLCB Moni Wallet — Launch Workplan</h1>
              <p className="text-navy-50/90 text-sm mt-1 max-w-3xl">
                Interactive translation of the Execution Partner × Integra Scope of Work (17 Aug 2026) —
                six execution workstreams, Sep–Dec 2026, restated as a queryable Gantt and matrix.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-xs text-navy-50/90 sm:text-right flex-shrink-0">
              <span>{toConfirmCount} items flagged UZO TO CONFIRM</span>
              <span>Soft Launch {formatDate(MILESTONES[0].date)} · Main Launch {formatDate(MILESTONES[1].date)}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2">
          <strong>This tool restates, it does not originate:</strong> every workstream, deliverable, risk,
          and assumption below is the Execution Partner&apos;s own scope of work (&quot;BTV&quot; relabelled
          &quot;Execution Partner&quot; per Uzo&apos;s instruction) — see internal SOURCES.md for the
          original text this was translated from. The Soft Launch (2nd week Oct 2026) / Main Launch (Dec
          2026) milestones are <strong>Uzo&apos;s own addition</strong>, laid on top of a source document
          that treats October alone as a single &quot;Official Product Launch&quot; — the Execution Partner
          has not seen or approved this split.
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
          <ViewToggle view={view} onChange={setView} />
        </div>

        {view !== "risks" && (
          <div className="flex flex-col gap-2">
            <WorkstreamFilter workstreams={WORKSTREAMS} selected={selectedWs} onChange={setSelectedWs} />
            <AaarrrFilter selected={selectedAaarrr} onChange={setSelectedAaarrr} />
          </div>
        )}

        {view !== "risks" && <Legend />}

        {view === "gantt" && <GanttView activities={filtered} workstreams={visibleWorkstreams} />}
        {view === "matrix" && <MatrixView activities={filtered} workstreams={visibleWorkstreams} />}
        {view === "risks" && <RiskView risks={RISKS} assumptions={ASSUMPTIONS} />}

        <footer className="pt-6 text-xs text-gray-400 space-y-1">
          <p>
            Palette (Navy {"#1B2A6B"} / Red {"#E2233B"} / White) matches SLCB&apos;s current documented
            palette, pending final Brand Bible sign-off.
          </p>
          <p>
            Interim milestone: 7,500–9,000 active users by end of Q4 2026, tracked toward the Year-1 target
            of 30,000 active Moni Wallet users by Month 12 — both shown together in the GTM Strategy lane,
            never one without the other.
          </p>
        </footer>
      </div>
    </main>
  );
}
