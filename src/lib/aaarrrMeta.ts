import { AaarrrStage } from "./types";

export const AAARRR_META: Record<AaarrrStage, { label: string; short: string; priority: string }> = {
  awareness: { label: "Awareness", short: "AWR", priority: "Primary launch objective" },
  acquisition: { label: "Acquisition", short: "ACQ", priority: "Secondary launch objective" },
  activation: { label: "Activation", short: "ACT", priority: "Tertiary launch objective" },
  retention: { label: "Retention", short: "RET", priority: "Post-launch objective" },
  referral: { label: "Referral", short: "REF", priority: "Post-launch objective" },
  revenue: { label: "Revenue", short: "REV", priority: "Post-launch objective" },
};

export const AAARRR_ORDER: AaarrrStage[] = [
  "awareness",
  "acquisition",
  "activation",
  "retention",
  "referral",
  "revenue",
];
