"use client";

import { useState } from "react";
import { Risk, Assumption } from "@/lib/types";

export function RiskView({ risks, assumptions }: { risks: Risk[]; assumptions: Assumption[] }) {
  const [tab, setTab] = useState<"risks" | "assumptions">("risks");

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setTab("risks")}
          className={`px-4 py-2.5 text-sm font-medium border-b-2 ${tab === "risks" ? "border-brandred text-brandred" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
          Risks &amp; Mitigation ({risks.length})
        </button>
        <button
          onClick={() => setTab("assumptions")}
          className={`px-4 py-2.5 text-sm font-medium border-b-2 ${tab === "assumptions" ? "border-brandred text-brandred" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
          Assumptions &amp; Dependencies ({assumptions.length})
        </button>
      </div>

      {tab === "risks" ? (
        <div className="divide-y divide-gray-100">
          {risks.map((r) => (
            <div key={r.id} className="p-4">
              <div className="font-semibold text-sm text-gray-800">{r.risk}</div>
              <div className="text-xs text-gray-500 mt-1">{r.impact}</div>
              <div className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded px-2 py-1 mt-2 inline-block">
                <span className="font-semibold">Mitigation:</span> {r.mitigation}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {assumptions.map((a) => (
            <div key={a.id} className="p-4">
              <div className="flex items-center gap-2">
                <div className="font-semibold text-sm text-gray-800">{a.name}</div>
                {a.unresolved && (
                  <span className="text-[10px] font-bold uppercase tracking-wide border border-brandred bg-brandred-50 text-brandred-dark rounded px-1.5 py-0.5">
                    Open — not resolved
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500 mt-1">{a.description}</div>
              <div className="text-xs text-navy bg-navy-50 rounded px-2 py-1 mt-2 inline-block">
                <span className="font-semibold">Implication:</span> {a.implication}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
