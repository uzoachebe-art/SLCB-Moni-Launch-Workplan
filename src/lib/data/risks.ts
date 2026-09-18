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
];
