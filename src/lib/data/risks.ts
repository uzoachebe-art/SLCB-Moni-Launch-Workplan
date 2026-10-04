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
  {
    id: "risk-15",
    risk: "Merchant QR App Late (Merchant Gate 2)",
    impact: "Regional merchant storms cannot scale without QR acceptance, and the existing merchant payment function currently shows no payment volume.",
    mitigation: "Keep the Freetown pilot on the existing merchant payment function and hold regional storms until QR acceptance is live. Owner: Head of E-Channels.",
  },
  {
    id: "risk-16",
    risk: "Merchant Cash-Out Not Working (Merchant Gate 3)",
    impact: "Merchants will not accept payments they cannot cash out, and cash-in and cash-out are listed as inactive features in the latest Moni usage report.",
    mitigation: "Stop new storms near any market with cash-out complaints and fix agent float first. Owner: Head of E-Channels and FIDM.",
  },
  {
    id: "risk-17",
    risk: "Slow Merchant Authorisation (Merchant Gate 4)",
    impact: "Merchants are not live on the day, which breaks the 15-minute onboarding promise made in the field.",
    mitigation: "Pre-register merchants the day before a storm and agree a same-day authorisation desk with Operations. Owner: Compliance & Regulatory Lead.",
  },
  {
    id: "risk-18",
    risk: "Merchant Fee Model Not Approved (Merchant Gate 5)",
    impact: "No fee waiver, free kit or other incentive can be promised, which weakens the field pitch.",
    mitigation: "Pitch without incentives until the fee model is approved in writing. Owner: SLCB MD / Exco.",
  },
  {
    id: "risk-19",
    risk: "Fake or Inactive Merchant Sign-Ups",
    impact: "Squads counted on sign-ups can create merchants that never take a genuine payment, inflating onboarded numbers while active merchants stay flat.",
    mitigation: "Pay squads on merchant activation, not sign-up, and spot-check a sample of newly onboarded merchants. Owner: Head of Agent & Merchant Acquisition.",
  },
  {
    id: "risk-20",
    risk: "Low Customer-Side Adoption Around Live Merchants",
    impact: "A merchant with no paying customers nearby earns SLCB nothing and goes dormant, however well the onboarding went.",
    mitigation: "Open customer wallets around every live stall and run customer offers once approved. Owner: Head of Growth Marketing.",
  },
  {
    id: "risk-21",
    risk: "Retired Brand Line Reaching Print",
    impact: "The retired platform name appears on two merchant kit specs and is blocking branch exterior signage; printing it would force a reprint.",
    mitigation: "Replace the copy on every spec and hold all affected print runs until the replacement platform name is confirmed. Owner: Creative Director.",
  },
  {
    id: "risk-22",
    risk: "Compressed Creative Schedule",
    impact: "The Creative Director's tracker allows about a day and a half for the brand book after logo approval, and about three weeks for the full campaign creative. Every day a sign-off takes pushes every later date by one day.",
    mitigation: "Consider a longer first week if the brand book is extensive. For a shorter version, drop the extended items first, run copywriting alongside the hero and ecosystem work, and cut to one creative route. Owner: Creative Director.",
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
  {
    id: "assum-17",
    name: "Merchant Headline Definitions and Thresholds",
    description:
      "The merchant playbook leads with active merchants, defined as a genuine customer payment in the last 30 days. The day-7 at-risk and day-30 dormant thresholds, the planning active rate, the monthly phasing, the route shares and the regional shares are all assumed, not sourced.",
    implication: "Replace each with pilot behaviour data at the Month 3 review before any target is communicated outside the programme.",
    unresolved: true,
  },
  {
    id: "assum-18",
    name: "Merchant Field Capacity and Headcount",
    description:
      "The number of squads, SME bankers and Tier 1 relationship managers, and the field-day yields behind them, are planning assumptions. Headcount available from HR has not been supplied.",
    implication: "Confirm headcount with HR and replace the yields with pilot squad timesheets before recruitment is approved.",
    unresolved: true,
  },
  {
    id: "assum-19",
    name: "Market-by-Market Trader Counts",
    description:
      "Trader counts by market and district, and each market's local leadership structure and titles, are not yet supplied by the regional managers.",
    implication: "Collect these before regional allocation is fixed and before any market association protocol meeting.",
    unresolved: true,
  },
  {
    id: "assum-20",
    name: "Merchant POSM Unit Costs and Lead Times",
    description: "Unit costs and lead times for the Tier 1, Tier 2 and Tier 3 merchant kits have not been supplied by the merchandising and POSM owner.",
    implication: "Confirm both before the bulk Tier 3 kit order is placed ahead of the regional launch.",
    unresolved: true,
  },
  {
    id: "assum-21",
    name: "Creative Tracker Start Date, Turnaround and Production Dates",
    description:
      "The Creative Director's tracker assumes a 5 Oct 2026 start (flagged as a placeholder in the tracker) and client turnaround within 24 hours at each approval gate. It does not schedule production (shoots, recording and edits); the review row is a placeholder.",
    implication: "Confirm the start date and sign-off turnaround, and add real production dates to the tracker as shoots and edits are scheduled.",
    unresolved: true,
  },
];
