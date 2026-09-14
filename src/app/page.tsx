"use client";

import { useMemo, useState } from "react";
import { ALL_ACTIVITIES, RISKS, ASSUMPTIONS } from "@/lib/data";
import { WORKSTREAMS } from "@/lib/workstreams";
import { AaarrrStage } from "@/lib/types";
import { GanttView } from "@/components/GanttView";
import { MatrixView } from "@/components/MatrixView";
import { RiskView } from "@/components/RiskView";
import { ViewToggle, ViewMode, WorkstreamFilter, AaarrrFilter, Legend } from "@/components/Controls";

export default function Home() {
  const [view, setView] = useState<ViewMode>("gantt");
  const [selectedWs, setSelectedWs] = useState<Set<string>>(new Set(WORKSTREAMS.map((w) => w.id)));
  const [selectedAaarrr, setSelectedAaarrr] = useState<Set<AaarrrStage>>(
    new Set<AaarrrStage>(["awareness", "acquisition", "activation", "retention", "referral", "revenue"])
  );

  const filtered = useMemo(
    () =>
      ALL_ACTIVITIES.filter(
        (a) => selectedWs.has(a.workstream) && (a.aaarrr.length === 0 || a.aaarrr.some((s) => selectedAaarrr.has(s)))
      ),
    [selectedWs, selectedAaarrr]
  );

  const visibleWorkstreams = WORKSTREAMS.filter((w) => selectedWs.has(w.id));

  return (
    <main className="min-h-screen pb-16">
      <header className="bg-navy text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5">
          <h1 className="text-xl sm:text-2xl font-bold">SLCB Moni Wallet — Launch Workplan</h1>
        </div>
      </header>

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
            of 30,000 active Moni Wallet users by Month 12 — always shown together, never one without the other.
          </p>
          <p>
            AAARRR stage tags apply only within Asset Production &amp; Rollout and Campaign Execution
            Support, where the granular customer-facing actions sit — not on upstream strategy/planning
            work.
          </p>
        </footer>
      </div>
    </main>
  );
}
