import { Workstream, Milestone } from "./types";

export const WORKSTREAMS: Workstream[] = [
  { id: "research-analysis", label: "Research & Analysis", shortLabel: "Research", color: "#1B2A6B", colorSoft: "#E3E7F5" },
  { id: "gtm-strategy", label: "GTM Strategy & Planning", shortLabel: "GTM Strategy", color: "#E2233B", colorSoft: "#FBE3E7" },
  { id: "marcomms-development", label: "Multi-Channel MarComms Development", shortLabel: "MarComms", color: "#0F7A3D", colorSoft: "#E1F3E8" },
  { id: "creative-ideation", label: "Creative Concept & Ideation", shortLabel: "Creative Ideation", color: "#B8860B", colorSoft: "#F7EDD9" },
  { id: "asset-production", label: "Creative Campaign Assets & Content Production", shortLabel: "Asset Production", color: "#5B3A8E", colorSoft: "#EBE3F3" },
  { id: "execution-support", label: "Campaign Execution Support & Digital Amplification", shortLabel: "Execution Support", color: "#0E7C86", colorSoft: "#DFF1F2" },
];

export const MILESTONES: Milestone[] = [
  {
    id: "soft-launch",
    label: "Soft Launch",
    date: "2026-10-12",
    kind: "hard-gate",
    note:
      "2nd week of October 2026. This is Uzo's own addition on top of the Execution Partner's proposal, which the Execution Partner has not seen or approved — the source document treats October alone as a single 'Official Product Launch,' with no soft/main split. Exact day not stated anywhere; placed on the Monday of the 2nd full week. [UZO TO CONFIRM]",
  },
  {
    id: "main-launch",
    label: "Main Launch",
    date: "2026-12-01",
    kind: "hard-gate",
    note:
      "December 2026. Also Uzo's own addition, not reviewed by the Execution Partner. The source proposal frames December as retention/handover (Month 4), not a second launch event. No exact day is stated anywhere; placed as a working placeholder. [UZO TO CONFIRM]",
  },
];

export const PROGRAMME_START = "2026-09-01";
export const PROGRAMME_END = "2026-12-31";
