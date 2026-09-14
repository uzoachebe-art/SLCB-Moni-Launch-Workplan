"use client";

import { useState } from "react";
import { Flag } from "@/lib/types";

const FLAG_META: Record<Flag["type"], { label: string; className: string }> = {
  conflict: { label: "HARD GATE", className: "bg-amber-100 text-amber-900 border-amber-400" },
  "data-required": { label: "DATA REQUIRED", className: "bg-brandred-50 text-brandred-dark border-brandred" },
  assumed: { label: "ASSUMED", className: "bg-purple-100 text-purple-900 border-purple-400" },
  "uzo-to-confirm": { label: "UZO TO CONFIRM", className: "bg-sky-100 text-sky-900 border-sky-400" },
};

export function FlagBadge({ flag }: { flag: Flag }) {
  const [open, setOpen] = useState(false);
  const meta = FLAG_META[flag.type];
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className={`text-[10px] font-bold uppercase tracking-wide border rounded px-1.5 py-0.5 leading-none ${meta.className}`}
      >
        {meta.label}
      </button>
      {open && (
        <div
          className="absolute z-30 top-full left-0 mt-1 w-64 sm:w-80 rounded-md border border-gray-300 bg-white p-2.5 text-xs text-gray-800 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {flag.note}
        </div>
      )}
    </div>
  );
}

export function FlagBadgeRow({ flags }: { flags?: Flag[] }) {
  if (!flags || flags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {flags.map((f, i) => (
        <FlagBadge key={i} flag={f} />
      ))}
    </div>
  );
}
