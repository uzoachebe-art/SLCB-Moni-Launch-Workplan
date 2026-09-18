// Sequencing view: groups every Project Management section into execution-order waves,
// independent of the Phase 0-4 thematic grouping used elsewhere. A "wave" is not a date range —
// it's a dependency position (what must close before the next wave can safely start). Built by
// referencing existing PM section/item ids live, so it can never drift out of sync with the
// Project Management tab's own content.

export interface SequencingStage {
  id: string;
  order: number;
  label: string;
  rationale: string;
  blockedBy?: string[]; // ids of stages that must close first
  sectionIds: string[]; // PM section ids that belong in this wave
  keyGateItemIds?: string[]; // specific PM item ids to call out explicitly in this wave
  concurrent?: boolean; // runs alongside later waves rather than strictly before them
}

export const SEQUENCING_STAGES: SequencingStage[] = [
  {
    id: "wave-1",
    order: 1,
    label: "Wave 1: Foundational Sign-Off",
    rationale:
      "Nothing else in this tab can safely start until the brand platform is approved, the core banking/USSD platform is confirmed stable enough to onboard and pay agents and customers, and the regulatory groundwork for prize draws is in writing. These are the three gates every later wave depends on.",
    sectionIds: ["bf-approval", "p0-regulatory"],
    keyGateItemIds: ["p0-agent-0"],
  },
  {
    id: "wave-2",
    order: 2,
    label: "Wave 2: Build, Train & Validate",
    rationale:
      "Once the brand platform and platform-readiness gates are closed, everything that produces an asset or trains a person can run in parallel: creative production, staff training, internal comms, ambassador onboarding, cultural and language validation, and measurement infrastructure setup. None of these are customer-facing yet.",
    blockedBy: ["wave-1"],
    sectionIds: [
      "bf-values",
      "bf-audience",
      "p0-product",
      "p0-training",
      "p0-internal-comms",
      "p0-cultural",
      "p0-creative",
      "p0-ambassador",
      "p0-measurement",
    ],
  },
  {
    id: "wave-3",
    order: 3,
    label: "Wave 3: Field & Channel Readiness",
    rationale:
      "Agent recruitment is field operations, not a desk task, and depends on the cultural validation of its own scripts (Wave 2) and the platform readiness gate (Wave 1) before a single field officer is sent out. All three recruitment segments (convert competitor agents, recruit new agents, build the referral engine) run together here.",
    blockedBy: ["wave-1", "wave-2"],
    sectionIds: ["p0-agent", "p0-agent-segment-a", "p0-agent-segment-b", "p0-agent-referral"],
  },
  {
    id: "wave-4",
    order: 4,
    label: "Wave 4: Launch Readiness Gate",
    rationale:
      "A single consolidating go/no-go checkpoint. Every exit condition from Waves 1-3 is confirmed together, by one accountable owner, before Phase 1's simultaneous all-channel launch is authorised.",
    blockedBy: ["wave-1", "wave-2", "wave-3"],
    sectionIds: ["p0-gate"],
  },
  {
    id: "wave-5",
    order: 5,
    label: "Wave 5: Ignition Launch (Day 1, All Channels)",
    rationale:
      "The public, customer-facing launch. Radio, SMS, social, branch, agent, PR, and ambassador activity all go live simultaneously, per the source strategy's own 'zero silence, zero gaps' framing. Nothing here can start before Wave 4 closes.",
    blockedBy: ["wave-4"],
    sectionIds: ["p1-launchday", "p1-radio", "p1-sms", "p1-social", "p1-branch", "p1-agent", "p1-pr", "p1-ambassador"],
  },
  {
    id: "wave-6",
    order: 6,
    label: "Wave 6: Sustain & Review (Concurrent From Launch Onward)",
    rationale:
      "This does not run after Wave 5, it runs alongside every wave from launch onward. Placed here in the sequence only because it cannot start before there's a campaign to review. Weekly, monthly, and quarterly reviews are what let every later wave be corrected mid-flight instead of discovered broken at Month 12.",
    blockedBy: ["wave-5"],
    sectionIds: ["p1-review"],
    concurrent: true,
  },
  {
    id: "wave-7",
    order: 7,
    label: "Wave 7: Amplification & Deepening",
    rationale:
      "Geographic expansion, the women's savings-circle track, the WhatsApp bot, SME and youth tracks, and merchant QR expansion all build on proof from the Ignition wave. The source strategy is explicit that this wave doesn't start until Freetown has proven the model.",
    blockedBy: ["wave-5"],
    sectionIds: ["p2-outside", "p2-mamasabi", "p2-whatsapp", "p2-digital", "p3-biznis", "p3-youth", "p3-merchant", "p3-content"],
  },
  {
    id: "wave-8",
    order: 8,
    label: "Wave 8: Month-12 Gate & Category Dominance",
    rationale:
      "A second hard gate, then the final wave: category-claim messaging, public NPS publication, the annual gala, and the cross-border PAPSS announcement. The source strategy pauses the entire campaign for an independent audit here before this wave is authorised.",
    blockedBy: ["wave-7"],
    sectionIds: ["p3-gate", "p4-claim", "p4-nps", "p4-gala", "p4-papss"],
  },
];
