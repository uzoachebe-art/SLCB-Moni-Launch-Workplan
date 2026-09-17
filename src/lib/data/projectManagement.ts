import { AaarrrStage, Flag } from "../types";

// Source: SLCB_Moni_18Month_Campaign_v2.pptx ("Watch It Grow", TBWA Disruption® strategic
// framework, prepared by Uzo Achebe, Sept 2026), slides 13-24, reconciled with the user's own
// supplied Pre-Launch list (2026-09-16). This tab intentionally carries NO dates/timeline and NO
// monetary or KPI-count figures; it exists to show what needs to be done, not when or how much,
// per instruction. See SOURCES.md for full provenance and the two internal date conflicts in the
// source deck (merchant-QR gate: Month 12 vs Month 18; agent-network gate: Month 9 vs Month 12).

export interface Raci {
  responsible?: string;
  accountable?: string;
  consulted?: string;
  informed?: string;
}

export interface PmItem {
  id: string;
  text: string;
  aaarrr: AaarrrStage[];
  owner?: string;
  raci?: Raci;
  flags?: Flag[];
}

export interface PmSection {
  id: string;
  label: string;
  items: PmItem[];
}

export interface PmPhase {
  id: string;
  label: string;
  intro: string;
  sections: PmSection[];
}

export const PM_PHASES: PmPhase[] = [
  {
    id: "brand-foundation",
    label: "Brand Foundation: Gate 01",
    intro: "The brand purpose, positioning, values, and audience architecture that every subsequent campaign asset must trace back to.",
    sections: [
      {
        id: "bf-approval",
        label: "Brand Platform Sign-Off",
        items: [
          {
            id: "bf-approval-6",
            text: "Close Gate 01 (Brand Platform sign-off) in writing before any visual identity or creative design work begins",
            aaarrr: ["activation"],
            owner: "SLCB Leadership",
            flags: [{ type: "conflict", note: "Hard gate, per the source document's own header ('nothing visual is designed until this gate closes'). This should block the Creative Production items in Phase 0 below, not just precede them on paper." }],
          },
        ],
      },
      {
        id: "bf-values",
        label: "Brand Values (Behavioural Commitments)",
        items: [
          { id: "bf-values-1", text: "App clearly shows success screens when successful, and alternative truthful messaging when network fails", aaarrr: ["activation"] },
          { id: "bf-values-2", text: "Every core feature works fully via USSD", aaarrr: ["activation", "acquisition"] },
          { id: "bf-values-3", text: "The app and agents communicate to customers that transactions count toward a savings or credit outcome, not just show a static balance.", aaarrr: ["activation", "retention"] },
          { id: "bf-values-4", text: "Designs, photography, agent branding, and market activations are specifically Sierra Leonean (Freetown, Bo, Kenema, Makeni as they are), not generic stock imagery", aaarrr: ["awareness"] },
        ],
      },
      {
        id: "bf-audience",
        label: "Audience-to-Brand Models (Locked Per Segment)",
        items: [
          { id: "bf-aud-1", text: "Existing SLCB retail customers: migration, not acquisition, move the existing relationship onto SLCB Moni", aaarrr: ["retention", "activation"] },
          { id: "bf-aud-4", text: "National Service Corps: institutional onboarding at the moment of stipend disbursement, arranged through the Corps administration, not individual persuasion", aaarrr: ["acquisition"] },
          { id: "bf-aud-5", text: "Ensure and confirm all communication to SMEs/MSMEs: credit is the hook, not the wallet, lead with transaction-history-based lending, the one thing neither competitor wallet can credibly offer", aaarrr: ["acquisition", "revenue"] },
          { id: "bf-aud-6", text: "Agents are deployed to markets across Sierra Leone. In-market presence decides adoption.", aaarrr: ["acquisition", "activation"] },
          { id: "bf-aud-8", text: "Community leaders: relationship managers to engage the community leaders to build trust within the grassroot customers and market for USSD upgrade and SLCB Moni", aaarrr: ["referral", "awareness"] },
          { id: "bf-aud-9", text: "Split government-ownership messaging by segment: lead with safety and permanence for existing customers and rural depositors; lead with speed and visible human presence (agents, tellers) for youth, SME, and trader segments, never the same government-bank message for both", aaarrr: ["awareness", "acquisition"] },
        ],
      },
    ],
  },
  {
    id: "phase-0",
    label: "Phase 0: Foundation & Proof",
    intro: "Internal only. No external communications until product stability, staff readiness, and regulatory sign-off are all in place.",
    sections: [
      {
        id: "p0-product",
        label: "Product Stability",
        items: [
          { id: "p0-product-1", text: "Confirm middleware live; begin CBS uptime monitoring window", aaarrr: ["activation"] },
          { id: "p0-product-2", text: "Resolve all unreconciled GL settlements (Africell, Orange, EDSA)", aaarrr: ["activation"] },
          { id: "p0-product-3", text: "Activate and test cash-in/cash-out features across all branches", aaarrr: ["activation"] },
          { id: "p0-product-4", text: "Activate and test merchant payment QR at pilot merchant locations", aaarrr: ["activation", "acquisition"] },
        ],
      },
      {
        id: "p0-training",
        label: "Staff Training",
        items: [
          { id: "p0-training-1", text: "Teller and relationship-manager Moni activation training, all branches", aaarrr: ["activation"] },
          { id: "p0-training-2", text: "Certification: each staff member demos Moni enrolment within the standard time target", aaarrr: ["activation"] },
          { id: "p0-training-3", text: "Issue objection-handling scripts; rehearse common failure scenarios", aaarrr: ["activation"] },
          { id: "p0-training-4", text: "Designate a Digital Champion per branch, incentivised per enrolment", aaarrr: ["activation", "acquisition"] },
        ],
      },
      {
        id: "p0-internal-comms",
        label: "Internal Comms",
        items: [
          { id: "p0-ic-1", text: "T-shirts for staff", aaarrr: ["awareness"] },
          { id: "p0-ic-2", text: "Internal branding of branches with SLCB Moni creatives", aaarrr: ["awareness"] },
          { id: "p0-ic-3", text: "Intranet and display screens within banking halls (images, videos, how-to's)", aaarrr: ["awareness"] },
          { id: "p0-ic-4", text: "Email & WhatsApp broadcast to staff (product launch, FAQs, status updates)", aaarrr: ["awareness"] },
          { id: "p0-ic-5", text: "WhatsApp display-profile update to SLCB Moni mandate for all staff", aaarrr: ["awareness"] },
          { id: "p0-ic-6", text: "Wall drape at head office of SLCB Moni creative", aaarrr: ["awareness"] },
        ],
      },
      {
        id: "p0-cultural",
        label: "Cultural & Copy Validation",
        items: [
          { id: "p0-cult-1", text: "Contract and brief Krio-Temne-Mende cultural consultant(s) on all campaign copy", aaarrr: ["awareness"] },
          {
            id: "p0-cult-2",
            text: "Review all Krio-Temne-Mende-language campaign materials before production: Temne for Northern Province (Makeni), Mende for Southern/Eastern Province (Bo, Kenema); a straight Krio translation will not land as genuinely local in either region",
            aaarrr: ["awareness", "activation"],
            flags: [{ type: "assumed", note: "Krio-Temne-Mende-language validation gate: the Krio portion is consistent with every prior source document reviewed for this programme; Temne and Mende were added per Uzo's instruction (2026-09-16), reflecting the Phase 1 Research Diagnostic Report's regional-language findings. Approver not named in the 18-month campaign deck; earlier sources name the Head of Digital Banking & Financial Inclusion." }],
          },
          { id: "p0-cult-3", text: "Run community listener focus groups across Freetown and secondary cities", aaarrr: ["awareness"] },
          { id: "p0-cult-4", text: "Lodge final approved copy master document with Corporate Services / Digital Banking & Financial Inclusion", aaarrr: ["awareness"] },
        ],
      },
      {
        id: "p0-agent",
        label: "Agent Network Readiness",
        items: [
          { id: "p0-agent-1", text: "Mi Yone Teller agent trainings and certified in SLCB Moni, Osusu, Moni Savings Circle registration", aaarrr: ["acquisition", "activation"] },
          { id: "p0-agent-2", text: "Map agent locations against Freetown market footprint and secondary-city priority", aaarrr: ["acquisition"] },
          { id: "p0-agent-3", text: "Distribute agent branding kit (SLCB Moni QR display, branded t-shirt, signage)", aaarrr: ["awareness", "acquisition"] },
          { id: "p0-agent-4", text: "Set a minimum monthly enrolment threshold for an agent to remain active", aaarrr: ["acquisition", "activation"] },
        ],
      },
      {
        id: "p0-regulatory",
        label: "Regulatory & Legal",
        items: [
          { id: "p0-reg-1", text: "Confirm BSL oversight arrangement for monthly prize draws, in writing", aaarrr: ["activation"] },
          { id: "p0-reg-2", text: "Legal review: confirm draw mechanics are not classified as a lottery under Sierra Leone law", aaarrr: ["activation"] },
          { id: "p0-reg-3", text: "Confirm KYC tiering for Moni accounts with BSL compliance team", aaarrr: ["activation"] },
          { id: "p0-reg-4", text: "Finalise Moni Savings Circle terms & conditions (English + Krio-Temne-Mende, approved)", aaarrr: ["activation"] },
          {
            id: "p0-reg-5",
            text: "Establish and test an incident escalation protocol for failed transactions (to Reconciliation team), app instability (to E-Channels), or ambassador conduct issues (to Director Corporate Services), with a defined path to the CIO",
            aaarrr: ["activation", "retention"],
            flags: [{ type: "assumed", note: "Added on review: the campaign's own risk sources (a prior Play Store removal, historical failed-transaction volume) are real precedents but no execution task builds the response protocol itself anywhere in the source materials reviewed for this tool." }],
          },
        ],
      },
      {
        id: "p0-creative",
        label: "Creative Production",
        items: [
          { id: "p0-creative-1", text: "Brief Execution Partner on 'Watch It Grow' campaign strategy to build creative concepts from the strategy", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p0-creative-2", text: "Record radio spots in English and Krio-Temne-Mende, pending final copy validation", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p0-creative-3", text: "Complete social media content calendar, incl. ambassador content", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p0-creative-4", text: "Print and install in-branch POS materials (Moni enrolment QR, Savings Circle display)", aaarrr: ["awareness", "acquisition"] },
        ],
      },
      {
        id: "p0-ambassador",
        label: "Ambassador Engagement (Suad Baydoun)",
        items: [
          { id: "p0-amb-2", text: "Run ambassador brand onboarding: guidelines, tone of voice, product demonstrations, content calendar briefing", aaarrr: ["awareness"], owner: "Head of Marketing" },
          { id: "p0-amb-3", text: "Stand up the content approval workflow: every ambassador digital post reviewed and approved by Head of Marketing and Head of Digital Technology before publication", aaarrr: ["activation"] },
        ],
      },
      {
        id: "p0-measurement",
        label: "Measurement Infrastructure",
        items: [
          {
            id: "p0-meas-1",
            text: "Implement UTM tagging and unique promo/campaign codes across every digital, SMS, and USSD touchpoint before any channel goes live",
            aaarrr: ["acquisition"],
            flags: [{ type: "assumed", note: "Added on review: without this in place before Phase 1, acquisition and referral cannot be attributed by channel or segment, which undermines every other execution decision downstream." }],
          },
          { id: "p0-meas-3", text: "Commission the NPS and belief-shift baseline survey; must complete before any awareness or belief-shift target is set or any campaign activity runs", aaarrr: ["retention"] },
        ],
      },
      {
        id: "p0-gate",
        label: "Launch Readiness Gate",
        items: [
          {
            id: "p0-gate-1",
            text: "Confirm every Phase 0 exit condition is met: product stability, staff certification, agent network live, regulatory sign-off, Krio-Temne-Mende validation, ambassador contract signed, and measurement infrastructure live, before Phase 1 begins",
            aaarrr: ["activation"],
            owner: "SLCB MD / Exco",
            flags: [{ type: "conflict", note: "Added on review as a single consolidating go/no-go checkpoint: the source materials state each Phase 0 condition individually but never a single point where someone is accountable for confirming all of them together before Phase 1's simultaneous, all-channel launch." }],
          },
        ],
      },
    ],
  },
  {
    id: "phase-1",
    label: "Phase 1: Ignition Launch",
    intro: "The moment SLCB Moni becomes publicly undeniable: every channel activates simultaneously, with zero silence and zero gaps.",
    sections: [
      {
        id: "p1-launchday",
        label: "Launch Day (All Channels Simultaneous)",
        items: [
          { id: "p1-ld-1", text: "Radio ad plays on all partner stations", aaarrr: ["awareness"] },
          { id: "p1-ld-2", text: "SMS blast to all existing SLCB customers", aaarrr: ["awareness", "acquisition"] },
          { id: "p1-ld-3", text: "Social media launch: hero film plus ambassador content", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p1-ld-4", text: "Tellers begin in-branch Moni enrolment", aaarrr: ["acquisition", "activation"] },
          { id: "p1-ld-5", text: "Agent network receives launch-day activation brief", aaarrr: ["acquisition"] },
        ],
      },
      {
        id: "p1-radio",
        label: "Radio",
        items: [
          { id: "p1-radio-1", text: "'Watch It Grow' Creative Concept spot: English and Krio-Temne-Mende versions", aaarrr: ["awareness"], flags: [{ type: "assumed", note: "Marked [ASSUMED, unvalidated] in the source deck, which specifies English and Krio only; Temne and Mende added per Uzo's instruction (2026-09-16)." }] },
          { id: "p1-radio-2", text: "Weekly Moni Savings Circle draw countdown spots", aaarrr: ["awareness", "retention"] },
          { id: "p1-radio-3", text: "Live first-draw broadcast: hosted special, prizes announced on air", aaarrr: ["awareness", "retention"] },
          { id: "p1-radio-4", text: "SLCB MD endorsement in opening-week radio editorial", aaarrr: ["awareness"] },
        ],
      },
      {
        id: "p1-sms",
        label: "SMS Blast",
        items: [
          { id: "p1-sms-1", text: "Launch message: product live, call to action to dial the USSD short code", aaarrr: ["awareness", "acquisition"] },
          { id: "p1-sms-2", text: "Monthly draw reminder ahead of each draw", aaarrr: ["retention"] },
          { id: "p1-sms-3", text: "Winner announcement to all customers within 24 hours of each draw", aaarrr: ["retention", "referral"] },
          { id: "p1-sms-4", text: "Track SMS opt-out rate", aaarrr: ["retention"] },
        ],
      },
      {
        id: "p1-social",
        label: "Social Media (Facebook-primary)",
        items: [
          { id: "p1-social-1", text: "Hero film: three characters, three segments, each using Moni differently", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p1-social-2", text: "Weekly 'Moni Moment' series featuring the brand ambassador, real user stories", aaarrr: ["awareness", "referral"] },
          { id: "p1-social-3", text: "Draw countdown content", aaarrr: ["retention"] },
          { id: "p1-social-4", text: "Live-stream the first draw broadcast on Facebook Live", aaarrr: ["awareness", "retention"] },
        ],
      },
      {
        id: "p1-branch",
        label: "Branch In-Branch Activation",
        items: [
          { id: "p1-branch-1", text: "Every teller interaction: Moni enrolment offered, demonstrated, completed", aaarrr: ["acquisition", "activation"] },
          { id: "p1-branch-2", text: "Set a daily per-teller Moni enrolment expectation", aaarrr: ["acquisition"] },
          { id: "p1-branch-3", text: "Branch Moni display: QR poster, Savings Circle entry form, prize display", aaarrr: ["awareness", "acquisition"] },
          { id: "p1-branch-4", text: "Branch Manager monthly report of enrolment conversion rate per teller", aaarrr: ["activation"] },
        ],
      },
      {
        id: "p1-agent",
        label: "Agent Network",
        items: [
          { id: "p1-agent-1", text: "Agent street activation: market storm with the brand ambassador at major markets", aaarrr: ["awareness", "acquisition"] },
          { id: "p1-agent-2", text: "SLCB Moni QR boards at agent locations, visible to market foot traffic", aaarrr: ["awareness", "acquisition"] },
          { id: "p1-agent-3", text: "Savings Circle group registration on the spot, no branch visit required", aaarrr: ["acquisition", "activation"] },
          { id: "p1-agent-4", text: "Agent referral incentive for new verified Moni accounts", aaarrr: ["acquisition"], flags: [{ type: "data-required", note: "Source specifies a Leone-denominated bonus amount, marked [PROPOSED]; excluded here per instruction, amount to be confirmed before this incentive is activated." }] },
        ],
      },
      {
        id: "p1-pr",
        label: "PR & Earned Media",
        items: [
          { id: "p1-pr-1", text: "Press release to national outlets: SLCB Moni public launch", aaarrr: ["awareness"] },
          { id: "p1-pr-2", text: "MD interview: editorial framing, not advertising", aaarrr: ["awareness"] },
          { id: "p1-pr-3", text: "Press coverage of first draw winners: human-interest angle, photography", aaarrr: ["awareness", "referral"] },
          { id: "p1-pr-4", text: "Cite BSL presence at the draw in all press releases as a regulatory-credibility signal", aaarrr: ["awareness"] },
        ],
      },
      {
        id: "p1-ambassador",
        label: "Suad Baydoun: Ambassador Activations",
        items: [
          { id: "p1-amb-1", text: "Produce and air a 30-second ambassador TVC plus a 2-minute brand documentary segment", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p1-amb-2", text: "Produce ambassador billboard creative for priority Freetown and provincial sites, with QR and WhatsApp-chatbot call to action", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p1-amb-3", text: "Produce an ambassador half-page newspaper advertisement for national press", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p1-amb-4", text: "Book a recurring live ambassador co-host slot on a morning radio show", aaarrr: ["awareness", "retention"] },
          { id: "p1-amb-5", text: "Maintain a minimum of six ambassador-fronted content pieces per month across TikTok, Instagram, and Facebook, each anchored to a specific SLCB Moni feature or channel (USSD, wallet, agent locator, WhatsApp bot) rather than a general brand post", aaarrr: ["awareness", "acquisition"] },
          {
            id: "p1-amb-6",
            text: "'Suad on Campus': ambassador-hosted campus activation with a live USSD account-opening station and QR scan-to-register at the venue entrance",
            aaarrr: ["acquisition", "activation"],
            flags: [{ type: "assumed", note: "More specific than, and complementary to, the general campus agent activation already listed under Grow From Day One (Phase 3). This is the ambassador-fronted version of the same activation type." }],
          },
          {
            id: "p1-amb-7",
            text: "'Suad Di Market': ambassador-led market storm staffed by a dedicated squad (one account opener, one QR printer, one merchant enroller, one content-capture role), issuing merchant QR codes on-site",
            aaarrr: ["acquisition", "activation"],
            flags: [{ type: "assumed", note: "Adds a specific squad staffing structure to the general agent market-storm activation already listed under Phase 1 Agent Network." }],
          },
          { id: "p1-amb-8", text: "Position the ambassador as SLCB's public face at major national events, with a branded activation zone for live account opening and USSD demonstrations", aaarrr: ["awareness", "acquisition"] },
        ],
      },
      {
        id: "p1-review",
        label: "Performance Review Cadence (Ongoing From Launch)",
        items: [
          {
            id: "p1-review-1",
            text: "Weekly review: social engagement, WhatsApp bot volume, agent enrolments by location, failed-transaction rate; owned jointly by SLCB Marketing and the social media agency",
            aaarrr: ["retention"],
            flags: [{ type: "assumed", note: "Added on review to give the campaign a standing feedback loop. Without a recurring review, none of the other execution items in this tab can be corrected mid-flight. Figures/targets intentionally not shown here." }],
          },
          { id: "p1-review-2", text: "Monthly review: active users, new accounts by segment and channel, Savings Circle registrations, SMS performance; owned jointly by SLCB Marketing, Integra, and the Execution Partner", aaarrr: ["retention", "revenue"] },
          { id: "p1-review-3", text: "Quarterly review: full KPI dashboard, NPS and belief-shift movement, channel ROI, phase-gate decision (proceed or recalibrate); owned by SLCB MD and Exco, decision recorded in writing", aaarrr: ["retention", "revenue"] },
        ],
      },
    ],
  },
  {
    id: "phase-2",
    label: "Phase 2: Amplification",
    intro: "Phase 1 proves Moni works in Freetown. Phase 2 proves Moni works in Sierra Leone: outside-Freetown expansion, the women's savings-circle track, and the WhatsApp bot going live.",
    sections: [
      {
        id: "p2-outside",
        label: "Outside-Freetown Launch",
        items: [
          { id: "p2-out-1", text: "Simultaneous community radio activation across all secondary cities, same week", aaarrr: ["awareness"] },
          { id: "p2-out-2", text: "Agent market activation: field teams demo Moni in central markets across all secondary cities", aaarrr: ["acquisition", "activation"] },
          { id: "p2-out-3", text: "SMS campaign in local languages where appropriate", aaarrr: ["awareness"] },
          { id: "p2-out-4", text: "Continue Mi Yone Teller agent buildout in secondary cities alongside Freetown", aaarrr: ["acquisition"] },
        ],
      },
      {
        id: "p2-mamasabi",
        label: "Mama Sabi Sabi: Women's Track",
        items: [
          { id: "p2-mama-1", text: "Launch the Mama Sabi Sabi group Savings Circle draw for women's market groups", aaarrr: ["acquisition", "retention"] },
          { id: "p2-mama-2", text: "Circle Captain recruitment activation at major Freetown markets", aaarrr: ["acquisition", "referral"] },
          { id: "p2-mama-3", text: "Brief and onboard women's market associations in secondary cities as formal campaign partners", aaarrr: ["acquisition", "referral"], owner: "Women's Market Associations" },
          { id: "p2-mama-4", text: "Dedicated Mama Sabi Sabi radio spot: market-trader voice, not a corporate announcer", aaarrr: ["awareness"] },
        ],
      },
      {
        id: "p2-whatsapp",
        label: "WhatsApp Banking Bot Activation",
        items: [
          { id: "p2-wa-1", text: "Publish the WhatsApp number across all existing materials with a clear call to action", aaarrr: ["acquisition"], flags: [{ type: "assumed", note: "Conditional on WhatsApp Business API approval and 2G testing, per the source deck." }] },
          { id: "p2-wa-2", text: "Go live with balance, transfer, Savings Circle inquiry, agent locator, and loan-status capabilities", aaarrr: ["activation", "retention"] },
          { id: "p2-wa-3", text: "Personalised draw-countdown messaging to opted-in users", aaarrr: ["retention"] },
          { id: "p2-wa-4", text: "Escalation path to a human agent for complex inquiries", aaarrr: ["retention"] },
        ],
      },
      {
        id: "p2-digital",
        label: "Digital Depth: Retargeting & Loyalty",
        items: [
          { id: "p2-dd-1", text: "Personalised app push notifications on draw entry status", aaarrr: ["retention"] },
          { id: "p2-dd-2", text: "USSD monthly savings reminder for all Moni account holders", aaarrr: ["retention"] },
          { id: "p2-dd-3", text: "'Founding Member' recognition badge for Phase 1 joiners", aaarrr: ["retention"] },
          { id: "p2-dd-4", text: "Deepen the referral programme", aaarrr: ["referral"], flags: [{ type: "data-required", note: "Source specifies a Leone-denominated referral bonus, marked [PROPOSED]; excluded here per instruction." }] },
          { id: "p2-dd-5", text: "Social-proof video stories from early Savings Circle winners, with permission", aaarrr: ["referral", "retention"] },
        ],
      },
    ],
  },
  {
    id: "phase-3",
    label: "Phase 3: Deepening",
    intro: "The SME track, the youth track, and credit activation all launch here. The campaign also pauses for a formal KPI checkpoint before Phase 4 is authorised.",
    sections: [
      {
        id: "p3-biznis",
        label: "Biznis Di Move: SME Campaign",
        items: [
          { id: "p3-biznis-1", text: "Publicly announce the SLCB Moni QR merchant payment programme", aaarrr: ["awareness", "acquisition"] },
          { id: "p3-biznis-2", text: "Monthly merchant-volume recognition draw", aaarrr: ["retention", "revenue"], flags: [{ type: "data-required", note: "Source specifies a Leone-denominated grand prize, marked [PROPOSED]; excluded here per instruction." }] },
          { id: "p3-biznis-3", text: "Quarterly Biznis Champion Award: judged panel including the Chamber of Commerce and press", aaarrr: ["referral", "revenue"], owner: "Sierra Leone Chamber of Commerce" },
          { id: "p3-biznis-4", text: "Launch Fast Credit Unlock, conditional on BSL approval", aaarrr: ["acquisition", "revenue"] },
          { id: "p3-biznis-5", text: "Dedicated SME agent team trained on QR onboarding for Freetown CBD and market districts", aaarrr: ["acquisition"] },
        ],
      },
      {
        id: "p3-youth",
        label: "Grow From Day One: Youth Track",
        items: [
          { id: "p3-youth-1", text: "Campus agent activation at partner universities: account opening in student common areas", aaarrr: ["acquisition"], owner: "Student Unions" },
          { id: "p3-youth-2", text: "Confirm zero-transfer-fee positioning across all youth-facing materials", aaarrr: ["awareness", "acquisition"] },
          { id: "p3-youth-3", text: "Announce an education/enterprise recognition prize for students", aaarrr: ["acquisition", "referral"], flags: [{ type: "data-required", note: "Source specifies a Leone-denominated grand prize, marked [PROPOSED]; excluded here per instruction." }] },
          { id: "p3-youth-4", text: "Unpaid student-influencer partnership: genuine Moni users only", aaarrr: ["referral"] },
          { id: "p3-youth-5", text: "USSD enrolment drive positioned for campus use", aaarrr: ["acquisition"] },
        ],
      },
      {
        id: "p3-merchant",
        label: "Merchant QR Expansion",
        items: [
          { id: "p3-merch-1", text: "Large formal merchant track: supermarkets, petrol stations, pharmacies: POS integration", aaarrr: ["acquisition", "revenue"] },
          { id: "p3-merch-2", text: "SME merchant track: printed QR card distribution", aaarrr: ["acquisition"] },
          { id: "p3-merch-3", text: "Micro/informal merchant track: market-stall QR distribution via agent network", aaarrr: ["acquisition"] },
          { id: "p3-merch-4", text: "Time-limited zero-processing-fee incentive for merchants who onboard early", aaarrr: ["acquisition", "revenue"] },
        ],
      },
      {
        id: "p3-content",
        label: "Content & Community Deepening",
        items: [
          { id: "p3-content-1", text: "Savings Circle winner video series: real winners, real prize-use stories", aaarrr: ["referral", "retention"] },
          { id: "p3-content-2", text: "Moderated 'Moni Nation' community group on Facebook", aaarrr: ["retention", "referral"] },
          { id: "p3-content-3", text: "Evergreen monthly 'Moni Tips' social content series", aaarrr: ["retention"] },
          { id: "p3-content-4", text: "Personalise monthly SMS with savings-milestone messaging", aaarrr: ["retention"] },
          { id: "p3-content-5", text: "Targeted business-segment radio spots on morning drive-time programming", aaarrr: ["awareness", "acquisition"] },
        ],
      },
      {
        id: "p3-gate",
        label: "KPI Checkpoint & Gate",
        items: [
          {
            id: "p3-gate-1",
            text: "Formal campaign pause for full KPI review; all targets verified before Phase 4 is authorised",
            aaarrr: ["retention", "revenue"],
            owner: "SLCB MD / Exco",
            flags: [
              { type: "conflict", note: "The source deck itself is internally inconsistent on when the merchant-QR network gate applies: its evidence register and closing slide both state this milestone, but its own KPI table dates the same milestone differently elsewhere in the deck. Not resolved here; flagged for verification against the source." },
              { type: "conflict", note: "Likewise, the Mi Yone Teller agent-network milestone is dated differently in two places within the same source document. Not resolved here; flagged for verification." },
            ],
          },
          { id: "p3-gate-2", text: "If materially behind on two or more KPIs, recalibrate Phase 4 scope before proceeding", aaarrr: ["revenue"] },
        ],
      },
    ],
  },
  {
    id: "phase-4",
    label: "Phase 4: Dominance",
    intro: "Not about acquisition, about claim. Category ownership is locked in before a competitor can challenge it, and the brand story that carries the next strategy cycle is built.",
    sections: [
      {
        id: "p4-claim",
        label: "'Sierra Leone's Money': Category Claim Campaign",
        items: [
          { id: "p4-claim-1", text: "New creative layer runs across all channels making the Disruption idea fully explicit", aaarrr: ["awareness", "retention"], owner: "Execution Partner" },
          { id: "p4-claim-2", text: "Brand film: real stories of Sierra Leoneans whose financial lives changed with Moni", aaarrr: ["awareness"], owner: "Execution Partner" },
          { id: "p4-claim-3", text: "Outdoor placements in Freetown, if budget permits", aaarrr: ["awareness"], flags: [{ type: "assumed", note: "Source marks this conditional on budget availability." }] },
          { id: "p4-claim-4", text: "MD opinion piece in national press: SLCB Moni's role in Sierra Leone's digital economy", aaarrr: ["awareness"] },
        ],
      },
      {
        id: "p4-nps",
        label: "NPS Score: First Public Publication",
        items: [
          { id: "p4-nps-1", text: "Publish SLCB's NPS score publicly for the first time, regardless of the result", aaarrr: ["retention"] },
          { id: "p4-nps-2", text: "Full-transparency social post explaining what SLCB is doing about the result", aaarrr: ["retention", "referral"] },
          { id: "p4-nps-3", text: "If below internal expectation, publish alongside a stated improvement plan", aaarrr: ["retention"] },
        ],
      },
      {
        id: "p4-gala",
        label: "Moni Champion Annual Gala",
        items: [
          { id: "p4-gala-1", text: "Annual gala celebrating winners across every campaign segment (youth, savings circles, SME, top-performing agent)", aaarrr: ["referral", "retention"] },
          { id: "p4-gala-2", text: "Live broadcast on radio and Facebook Live; press invited", aaarrr: ["awareness", "referral"] },
          { id: "p4-gala-3", text: "MD narrative on the financial-life impact of the campaign, facts-led", aaarrr: ["awareness"] },
          { id: "p4-gala-4", text: "Establish this as a recurring annual brand moment for the next strategy cycle", aaarrr: ["retention"] },
        ],
      },
      {
        id: "p4-papss",
        label: "PAPSS & Cross-Border Horizon",
        items: [
          { id: "p4-papss-1", text: "Formal announcement of progress toward PAPSS (Pan-African Payment and Settlement System) integration", aaarrr: ["awareness", "revenue"], flags: [{ type: "data-required", note: "Conditioned on confirmed technical delivery, not aspirational, per the source deck. Integration timeline itself marked [DATA REQUIRED] in the source." }] },
          { id: "p4-papss-2", text: "Position Moni for the diaspora segment ahead of the next strategy cycle", aaarrr: ["acquisition", "revenue"] },
        ],
      },
    ],
  },
];
