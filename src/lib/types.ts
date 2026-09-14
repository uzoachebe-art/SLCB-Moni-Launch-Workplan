export type AaarrrStage =
  | "awareness"
  | "acquisition"
  | "activation"
  | "retention"
  | "referral"
  | "revenue";

export type WorkstreamId =
  | "research-analysis"
  | "gtm-strategy"
  | "marcomms-development"
  | "creative-ideation"
  | "asset-production"
  | "execution-support";

export type FlagType = "conflict" | "data-required" | "assumed" | "uzo-to-confirm";

export interface Flag {
  type: FlagType;
  note: string;
}

export interface Activity {
  id: string;
  workstream: WorkstreamId;
  title: string;
  deliverables?: string[];
  governingStakeholders: string;
  start: string; // ISO date
  end: string; // ISO date
  aaarrr: AaarrrStage[];
  dependsOn?: string[];
  flags?: Flag[];
  monthLabel: string; // e.g. "Month 1 - Sep 2026" for matrix display
}

export interface Workstream {
  id: WorkstreamId;
  label: string;
  shortLabel: string;
  color: string;
  colorSoft: string;
}

export interface Milestone {
  id: string;
  label: string;
  date: string;
  kind: "hard-gate" | "related";
  note?: string;
}

export interface Risk {
  id: string;
  risk: string;
  impact: string;
  mitigation: string;
}

export interface Assumption {
  id: string;
  name: string;
  description: string;
  implication: string;
  unresolved?: boolean;
}
