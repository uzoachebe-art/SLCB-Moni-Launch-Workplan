"use client";

import { useMemo, useState } from "react";
import { ALL_ACTIVITIES, RISKS, ASSUMPTIONS } from "@/lib/data";
import { WORKSTREAMS } from "@/lib/workstreams";
import { AaarrrStage } from "@/lib/types";
import { GanttView } from "@/components/GanttView";
import { MatrixView } from "@/components/MatrixView";
import { RiskView } from "@/components/RiskView";
import { ProjectManagementView } from "@/components/ProjectManagementView";
import { SequencingView } from "@/components/SequencingView";
import { PM_PHASES } from "@/lib/data/projectManagement";
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
          <h1 className="text-xl sm:text-2xl font-bold">SLCB Moni Wallet: Launch Workplan</h1>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
          <ViewToggle view={view} onChange={setView} />
        </div>

        {(view === "gantt" || view === "matrix") && (
          <div className="flex flex-col gap-2">
            <WorkstreamFilter workstreams={WORKSTREAMS} selected={selectedWs} onChange={setSelectedWs} />
            <AaarrrFilter selected={selectedAaarrr} onChange={setSelectedAaarrr} />
          </div>
        )}
        {view === "pm" && <AaarrrFilter selected={selectedAaarrr} onChange={setSelectedAaarrr} />}

        {(view === "gantt" || view === "matrix") && <Legend />}

        {view === "gantt" && <GanttView activities={filtered} workstreams={visibleWorkstreams} />}
        {view === "matrix" && <MatrixView activities={filtered} workstreams={visibleWorkstreams} />}
        {view === "risks" && <RiskView risks={RISKS} assumptions={ASSUMPTIONS} />}
        {view === "pm" && <ProjectManagementView phases={PM_PHASES} selectedAaarrr={selectedAaarrr} />}
        {view === "sequencing" && <SequencingView phases={PM_PHASES} />}
      </div>
    </main>
  );
}
