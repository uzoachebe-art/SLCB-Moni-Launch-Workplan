import { Risk, Assumption } from "../types";

export const RISKS: Risk[] = [
  {
    id: "risk-1",
    risk: "Misalignment Between Brand & Product UX",
    impact: "Messaging, tone, or visual design may conflict with the interface, leading to an inconsistent experience.",
    mitigation: "Conduct joint review sessions; maintain a unified design and tone guide.",
  },
  {
    id: "risk-2",
    risk: "Delay in Asset Handoffs or Approvals",
    impact: "Late content or design handoffs can push back timelines.",
    mitigation: "Set clear deadlines, assign approval owners, and track progress via shared project management tools.",
  },
  {
    id: "risk-3",
    risk: "Limited Access to User Data",
    impact: "Insufficient analytics may affect targeting, personalization, and performance measurement.",
    mitigation: "Secure full analytics access early; centralize reporting and monitoring.",
  },
  {
    id: "risk-4",
    risk: "Technical Downtime or Bugs",
    impact: "Platform or AI failures affect user experience, campaign tracking, and adoption.",
    mitigation: "Implement uptime monitoring, rapid escalation protocols, and incident response procedures.",
  },
  {
    id: "risk-5",
    risk: "Inconsistent Campaign Performance",
    impact: "Early campaigns may underperform, slowing growth momentum.",
    mitigation: "A/B testing, creative optimization, and iterative adjustments based on analytics.",
  },
  {
    id: "risk-6",
    risk: "Low User Adoption / Engagement",
    impact: "Users may not engage with the platform or AI features.",
    mitigation: "Provide onboarding guidance, tutorials, nudges, and feedback loops to improve adoption.",
  },
  {
    id: "risk-7",
    risk: "Data Privacy & Compliance Breaches",
    impact: "Improper handling of personal data could result in legal and reputational risks.",
    mitigation: "Implement data handling protocols, regular audits, and staff training on compliance.",
  },
  {
    id: "risk-8",
    risk: "Integration Failures",
    impact: "CRM, email, or analytics tools fail to integrate with the platform.",
    mitigation: "Conduct early integration testing, document dependencies, and maintain fallback workflows.",
  },
  {
    id: "risk-9",
    risk: "Competitor Agents See No Reason to Switch (Segment A)",
    impact: "\"Why add a second wallet when Orange Money / Afrimoney already works for me?\" is the objection field officers meet most often, and risks stalling conversion of competitor agents entirely.",
    mitigation: "Frame SLCB Moni as an addition, not a replacement. Field officers are scripted to never counter-argue a competitor's value. Owner: Field Officers.",
  },
  {
    id: "risk-10",
    risk: "Recruitment Campaign Outruns Platform Readiness",
    impact: "Mi Yone Teller is still under process review and CBS has no real-time integration; a recruitment push ahead of platform readiness risks onboarding agents onto a system that cannot reliably process or pay them.",
    mitigation: "Confirm the platform readiness gate with the Head of Digital Technology before any field push begins. Owner: Head of Digital Technology.",
  },
  {
    id: "risk-11",
    risk: "Referral Fraud in the Agent Referral Engine (Segment C)",
    impact: "Agents may name non-genuine referrals purely to claim the first-tier reward.",
    mitigation: "Two-tier reward structure (logged referral plus converted agent) plus a non-performer guardrail that forfeits the reward if the referred agent underperforms. Owner: Agent Network Coordinators.",
  },
  {
    id: "risk-12",
    risk: "Non-Literate Agents Excluded by Written-Only Materials (Segment A)",
    impact: "Written comparison sheets and scripts alone exclude a meaningful share of the target agent population who cannot read them.",
    mitigation: "Mandatory dual-channel onboarding design: a pictogram flow for non-literate agents alongside the written comparison sheet. Owner: Digital Squad.",
  },
  {
    id: "risk-13",
    risk: "Agent Recruitment Scripts Used Before Cultural Validation (Segments A/B)",
    impact: "Field content deployed without validation risks the same cultural and linguistic missteps flagged elsewhere in this programme.",
    mitigation: "[ASSUMED] Content held until cultural consultant sign-off, per standing SLCB convention across this programme. Owner: Cultural Consultant.",
  },
  {
    id: "risk-14",
    risk: "Referral Bonus Quantum Undefined (Segment C)",
    impact: "No verified programme budget figure exists for the referral bonus; the mechanic cannot be finalized or communicated to agents without one.",
    mitigation: "Confirm the bonus quantum with the CFO and Head of Digital Banking before finalizing the mechanic. Owner: CFO.",
  },
];

export const ASSUMPTIONS: Assumption[] = [
  {
    id: "assum-1",
    name: "User Tech Literacy",
    description: "Users are expected to have basic digital, job-search, and AI interaction literacy.",
    implication: "Reduces need for extensive onboarding; allows focus on refining UX and guided workflows.",
  },
  {
    id: "assum-2",
    name: "Stable Platform Infrastructure",
    description: "Backend, AI engine, dashboard, and APIs remain operational during development and campaigns.",
    implication: "Ensures feature rollout, integration work, and marketing activities proceed without delays.",
  },
  {
    id: "assum-3",
    name: "Access to Analytics & Admin Dashboard",
    description: "Shared access to dashboards, analytics, and campaign performance tools.",
    implication: "Enables real-time performance tracking, informed decision-making, and rapid optimization cycles.",
  },
  {
    id: "assum-4",
    name: "Clear Approval Workflow",
    description: "Campaigns, product updates, and communications follow a defined review and approval process.",
    implication: "Minimizes delays and confusion in rollouts or publishing schedules.",
  },
  {
    id: "assum-5",
    name: "Availability of Brand Assets",
    description:
      "Product/brand design files (mobile app UX design, brand style guide, etc.), product/brand documentation (brand platform strategy, product features, etc), brand and content assets are provided on time.",
    implication: "Facilitates alignment between brand messaging, UX design, and product development.",
  },
  {
    id: "assum-6",
    name: "Marketing Tool Integrations",
    description: "Email, CRM, analytics, and automation tools are compatible with SLCB Moni Wallet's backend.",
    implication: "Supports seamless growth campaigns, tracking, and engagement flows.",
  },
  {
    id: "assum-7",
    name: "Data Privacy & Compliance",
    description: "User data collection and storage comply with regulations.",
    implication: "Prevents legal and reputational risks; ensures trust with users.",
    unresolved: true,
  },
  {
    id: "assum-8",
    name: "BTV Contracting and Execution-Window Dates",
    description:
      "The OOH/TV strategy's Phase 1 media-buying start assumes BTV is formally contracted with a Sep-Dec 2026 execution window, referenced elsewhere in this programme but not yet confirmed by a signed SOW.",
    implication: "Confirm signed SOW dates with BTV before any Phase 1 OOH/TV media buying begins.",
    unresolved: true,
  },
  {
    id: "assum-9",
    name: "OOH Vendor Identities and Site Inventory",
    description:
      "Sierra Leone has no public register of OOH vendors, billboard sites, or rate cards. Every OOH recommendation in the source strategy is a location typology, not a named, priced site.",
    implication: "Commission a local OOH site audit via the execution partner to convert location typologies into a named, priced site list before booking.",
    unresolved: true,
  },
  {
    id: "assum-10",
    name: "National FM Radio Station Register",
    description:
      "Only the Bo District FM register has been verified against NATCA's 2025 listing; the Western Area, Bombali, Kono, Kenema, and other districts have not yet been pulled.",
    implication: "Pull the complete NATCA FM radio register by district before finalizing the national radio buy.",
    unresolved: true,
  },
  {
    id: "assum-11",
    name: "TV/Radio Audience Measurement",
    description: "NATCA does not publish ratings or reach data for Sierra Leone's TV and radio stations.",
    implication: "Request audience data directly from stations or commission independent measurement research before finalizing tier-by-tier budget allocation.",
    unresolved: true,
  },
  {
    id: "assum-12",
    name: "Provincial Town Commercial Weight",
    description:
      "The relative traffic and commercial weight of Bo, Kenema, Makeni, Koidu, and Kailahun (versus one another) is assumed, not ground-truthed.",
    implication: "Ground-truth via the execution partner ahead of the Phase 3 hinterland-expansion budget split.",
    unresolved: true,
  },
  {
    id: "assum-13",
    name: "Months 13-18 Contracting Authority",
    description:
      "The OOH/TV strategy's Phase 4 (Sustain & Optimize) runs six months beyond the programme's stated 12-month engagement horizon.",
    implication: "Confirm scope and budget authority for Months 13-18 before Phase 4 of the OOH/TV workplan is finalized.",
    unresolved: true,
  },
  {
    id: "assum-14",
    name: "Digital-Literacy Programme Deadline",
    description:
      "The Digital Banking Strategy names 'by 2027' without a specific date. The digital-literacy programme strategy proposes 31 December 2027 as the working deadline, but if the intended date is 1 January 2027 the required monthly training pace roughly triples.",
    implication: "Confirm the exact completion date with SLCB before the monthly and daily delivery pace is finalized.",
    unresolved: true,
  },
  {
    id: "assum-15",
    name: "Digital-Literacy Baseline (Trained to Date)",
    description: "No figure exists yet for how many people have already been trained under any definition, digital-literacy or otherwise.",
    implication: "Confirm the baseline before finalizing the outstanding monthly requirement; any confirmed baseline lowers it.",
    unresolved: true,
  },
  {
    id: "assum-16",
    name: "Branch Count for Training Delivery",
    description:
      "The cascade training deck and the promotional strategy analysis name different total branch counts, without a reconciled figure between them.",
    implication: "Confirm the correct branch count with SLCB before finalizing the branch-teller share of the digital-literacy delivery plan.",
    unresolved: true,
  },
];
