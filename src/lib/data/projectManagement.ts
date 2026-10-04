import { AaarrrStage, Flag } from "../types";

// Source: SLCB_Moni_18Month_Campaign_v2.pptx ("Watch It Grow", TBWA Disruption® strategic
// framework, prepared by Uzo Achebe, Sept 2026), slides 13-24, reconciled with the user's own
// supplied Pre-Launch list (2026-09-16). This tab intentionally carries NO campaign-phase dates and
// NO monetary or KPI-count figures; it exists to show what needs to be done, not when or how much,
// per instruction. See SOURCES.md for full provenance and the two internal date conflicts in the
// source deck (merchant-QR gate: Month 12 vs Month 18; agent-network gate: Month 9 vs Month 12).
// The per-item `timeline` field is a distinct, later exception (2026-09-29): it carries only a real
// delivery date SLCB has confirmed against a specific item's own RACI assignment, never an invented
// or campaign-phase date. Left unset, an item shows no timeline chip.

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
  timeline?: string;
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
    id: "creative-production",
    label: "Creative Production",
    intro:
      "Every creative deliverable, one line each, in production order: brand identity first, then the campaign idea and creative direction, then each channel, then merchant kits and the app UI. Nothing is produced before the brand identity gates close, and no Krio, Temne or Mende copy goes to production before cultural consultant validation. Dates shown come from the Creative Director's own tracker; production dates are not yet scheduled in it.",
    sections: [
      {
        id: "cr-identity",
        label: "Creative 1: Brand Identity & Toolkit",
        items: [
          { id: "cr-id-1", text: "Brief the Creative Director on the 'Watch It Grow' campaign strategy, so creative concepts are built from the strategy", aaarrr: ["awareness"], owner: "Digital Strategy Consultant / Integra", timeline: "5 Oct 2026" },
          { id: "cr-id-2", text: "Run the brand and category audit, then develop two to three logo routes and present them in context (app icon, signage, social avatar)", aaarrr: ["awareness"], owner: "Creative Director", timeline: "7 Oct 2026" },
          { id: "cr-id-3", text: "Take one consolidated feedback round and refine the chosen logo route", aaarrr: ["awareness"], owner: "Creative Director", timeline: "8 Oct 2026" },
          {
            id: "cr-id-4",
            text: "Gate: logo approved in writing before any logo-dependent brand book work starts",
            aaarrr: ["awareness"],
            owner: "SLCB Leadership",
            timeline: "8 Oct 2026",
            flags: [
              { type: "conflict", note: "Hard gate in the Creative Director's tracker: logo-dependent brand book pages start only after this written sign-off." },
              { type: "assumed", note: "Every date in the Creative Production group comes from the Creative Director's tracker, which assumes a 5 Oct 2026 start (marked as a placeholder in the tracker itself) and client turnaround within 24 hours at every gate. Each extra day a sign-off takes pushes every later date by one day." },
            ],
          },
          {
            id: "cr-id-5",
            text: "Confirm the canonical brand colour palette in the brand book before final art is produced for any ATL or BTL item",
            aaarrr: ["awareness"],
            owner: "Creative Director",
            flags: [{ type: "conflict", note: "Two source documents disagree on how settled this is: one treats navy #1B2A6B and red #E2233B as fully confirmed with no gold or oxblood accent used; another lists navy and red as confirmed but flags secondary oxblood #C0152A and gold #C8A04A references appearing inconsistently elsewhere in the programme. Not resolved here; confirm with SLCB Marketing before final art is produced." }],
          },
          {
            id: "cr-id-6",
            text: "Build the Master Brand Toolkit and Style Guide: logo suite, usage and clear space, colour, typography, photography style, motion identity, tone of voice, and a Krio glossary",
            aaarrr: ["awareness"],
            owner: "Creative Director",
            timeline: "9 Oct 2026",
            flags: [{ type: "conflict", note: "Foundational hard gate, named explicitly in the source scope's own sequencing note: every other creative deliverable depends on this being built first. The tracker allows about a day and a half for it after logo approval, which it flags as tight." }],
          },
          { id: "cr-id-7", text: "Gate: brand book delivered and signed off, with the asset package (PDF, logo files, colour codes, font list)", aaarrr: ["awareness"], owner: "SLCB Leadership", timeline: "9 Oct 2026", flags: [{ type: "conflict", note: "Hands over the visual system that feeds the campaign art direction and the app UI." }] },
          {
            id: "cr-id-8",
            text: "Build the Localization/Translation Matrix: master English, Krio, Temne and Mende copy deck, version-controlled",
            aaarrr: ["awareness"],
            owner: "Creative Director",
            flags: [{ type: "assumed", note: "Tied to the cultural-consultant sign-off gate already in this tab's Cultural & Copy Validation section; no translated content goes to production ahead of that validation. The source scope says to commission this alongside the Brand Toolkit, before other production." }],
          },
          {
            id: "cr-id-9",
            text: "Hold branch exterior signage, and any deliverable carrying the retired brand platform name, until the replacement brand platform name is confirmed",
            aaarrr: ["awareness"],
            flags: [{ type: "data-required", note: "Marked BLOCKED in the source scope pending confirmation of the replacement brand platform name; the previous platform name is retired. The merchant playbook finds the same retired line on two merchant kit specs." }],
          },
        ],
      },
      {
        id: "cr-concept",
        label: "Creative 2: Campaign Idea & Messaging",
        items: [
          { id: "cr-con-1", text: "Absorb the strategy, research and brief, define the creative problem, and find the audience tension and creative insight", aaarrr: ["awareness"], owner: "Creative Director", timeline: "14 Oct 2026" },
          { id: "cr-con-2", text: "Develop two to three creative routes and present them with a recommendation", aaarrr: ["awareness"], owner: "Creative Director", timeline: "16 Oct 2026" },
          { id: "cr-con-3", text: "Gate: creative route selected", aaarrr: ["awareness"], owner: "SLCB Leadership", timeline: "16 Oct 2026", flags: [{ type: "conflict", note: "Locks the territory before Big Idea development starts." }] },
          { id: "cr-con-4", text: "Develop the Big Idea and campaign platform, and lock the tagline with the approved logo", aaarrr: ["awareness"], owner: "Creative Director", timeline: "20 Oct 2026" },
          { id: "cr-con-5", text: "Write the creative rationale and the campaign manifesto (also the voiceover for the brand film)", aaarrr: ["awareness"], owner: "Creative Director", timeline: "20 Oct 2026" },
          { id: "cr-con-6", text: "Build the messaging architecture: master message, pillars, proof points and tone per audience", aaarrr: ["awareness"], owner: "Creative Director", timeline: "20 Oct 2026" },
          { id: "cr-con-7", text: "Gate: Big Idea and messaging approved", aaarrr: ["awareness"], owner: "SLCB Leadership", timeline: "21 Oct 2026", flags: [{ type: "conflict", note: "Unlocks all execution work in the sections below; no execution work starts on an unapproved idea." }] },
          { id: "cr-con-8", text: "Write the campaign copy master: headlines, supporting copy, calls to action and product messaging, final-polished per channel", aaarrr: ["awareness", "acquisition"], owner: "Creative Director", timeline: "29 Oct 2026" },
        ],
      },
      {
        id: "cr-direction",
        label: "Creative 3: Creative Direction & Sign-Off",
        items: [
          { id: "cr-dir-1", text: "Set the overall visual and art direction on the approved brand book, with moodboards and visual references", aaarrr: ["awareness"], owner: "Creative Director", timeline: "26 Oct 2026" },
          { id: "cr-dir-2", text: "Set the photography, film and casting direction", aaarrr: ["awareness"], owner: "Creative Director", timeline: "27 Oct 2026" },
          { id: "cr-dir-3", text: "Brief production vendors (video production, printers, sign fabricators, merchandise makers) from the approved direction", aaarrr: ["awareness"], owner: "Creative Director", timeline: "28 Oct 2026" },
          { id: "cr-dir-4", text: "Gate: hero and ecosystem concepts approved", aaarrr: ["awareness"], owner: "SLCB Leadership", timeline: "29 Oct 2026", flags: [{ type: "conflict", note: "Approval of the TVC, radio, digital film, OOH, press, social, creator, activation and POSM concepts before any of them goes into production." }] },
          {
            id: "cr-dir-5",
            text: "Review creative and give feedback while each deliverable is in production",
            aaarrr: ["awareness"],
            owner: "Creative Director",
            timeline: "30 Oct 2026",
            flags: [{ type: "data-required", note: "Shoot, recording and edit dates are not yet scheduled in the Creative Director's tracker; the review window shown is a placeholder, and real production usually runs well beyond it." }],
          },
          { id: "cr-dir-6", text: "Gate: creative campaign signed off", aaarrr: ["awareness"], owner: "SLCB Leadership", timeline: "30 Oct 2026", flags: [{ type: "conflict", note: "Closes the campaign creative phase in the Creative Director's tracker." }] },
        ],
      },
      {
        id: "cr-atl",
        label: "Creative 4: ATL (Above the Line)",
        items: [
          { id: "cr-atl-1", text: "TVC hero film (60 to 90 seconds): script, storyboard, shotlist, casting brief and voiceover direction, in English and Krio", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-2", text: "TVC cutdowns (30, 15 and 6 second) for broadcast and paid social", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-3", text: "TVC captions and subtitles: burned-in caption file for silent-autoplay social placements and accessibility", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-4", text: "Radio jingle: full-length jingle plus a 5 to 10 second sonic sting for station IDs and sponsorship reads", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "data-required", note: "Confirm music-composition rights if a third-party composer is used." }] },
          { id: "cr-atl-5", text: "Radio scripts: 60 and 30 second spots and DJ live-read talking points for AYV and SLBC-affiliated stations", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "assumed", note: "Krio copy is ASSUMED, pending cultural-consultant validation." }] },
          { id: "cr-atl-6", text: "Record radio spots in English and Krio-Temne-Mende, pending final copy validation", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-7", text: "Newspaper and press ads: full-page and half-page print-ready artwork for national dailies", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-8", text: "Press release scripts: launch announcement, milestone update and partnership announcement templates", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-9", text: "Press and media kit: fact sheet, product one-pagers, executive bios, boilerplate, high-resolution logo and photo assets", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-10", text: "Press conference collateral: step-and-repeat backdrop, lectern signage and media-briefing deck template", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-11", text: "Billboard designs, static, for priority sites (for example Lumley Beach Road and Siaka Stevens Street)", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "assumed", note: "Site list is ASSUMED; confirm with the media buyer." }] },
          { id: "cr-atl-12", text: "Billboard designs, digital/LED: animated variant sized for digital out-of-home sites where available", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-13", text: "Transit shelter and lamp-post banners: secondary-site OOH panel designs for high-footfall corridors", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-atl-14", text: "Large-format wall mural for high-footfall provincial towns beyond Freetown", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm the need with SLCB Marketing." }] },
        ],
      },
      {
        id: "cr-btl",
        label: "Creative 5: BTL (Below the Line)",
        items: [
          { id: "cr-btl-1", text: "Fliers and leaflets: single-sheet product fliers for Moni Wallet, USSD, Agent Banking, CIB and POS, in English and Krio", aaarrr: ["awareness", "acquisition"], owner: "Creative Director" },
          { id: "cr-btl-2", text: "Brochures: tri-fold product guide and step-by-step 'how to open an account' brochure, in English and Krio", aaarrr: ["acquisition", "activation"], owner: "Creative Director" },
          { id: "cr-btl-3", text: "T-shirt designs: activation-squad, ambassador and agent-uniform polo designs", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-btl-4", text: "Bus and poda-poda branding: exterior wrap design for public transport", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "data-required", note: "Confirm the format against Sierra Leone transport-advertising rules." }] },
          { id: "cr-btl-5", text: "Partner and merchant location branding: window decals, counter mats, danglers and buntings for agent and merchant premises", aaarrr: ["awareness", "acquisition"], owner: "Creative Director" },
          { id: "cr-btl-6", text: "Agent kits: welcome pack, ID badge, branded umbrella, signage kit and float-bag branding", aaarrr: ["awareness", "acquisition"], owner: "Creative Director" },
          { id: "cr-btl-7", text: "Agent commission banners: incentive and earnings poster for agent recruitment and retention, in English and Krio", aaarrr: ["acquisition", "retention"], owner: "Creative Director" },
          { id: "cr-btl-8", text: "Decals and stickers: POS decals and 'We Accept SLCB Moni' window and counter stickers", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-btl-9", text: "Roll-up and pull-up (X) banners for campus, market-storm and roadshow activation days", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-btl-10", text: "Gazebo and canopy branding for field activations and market storms", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-btl-11", text: "Branded merchandise: caps, tote bags, umbrellas, pens, notepads and wristbands, per the tiering in the Activation & Merchandise Plan", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "data-required", note: "Cross-reference the existing Activation & Merchandise Plan so tiers and quantities are not defined twice." }] },
          { id: "cr-btl-12", text: "Street-team script cards: loudhailer and door-to-door pitch scripts for market-storm field agents, in English and Krio", aaarrr: ["acquisition"], owner: "Creative Director", flags: [{ type: "assumed", note: "Krio copy is ASSUMED, pending cultural-consultant validation." }] },
          { id: "cr-btl-13", text: "Photo-booth and event backdrop frame, built for organic social seeding", aaarrr: ["awareness", "referral"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
          { id: "cr-btl-14", text: "Corporate gifting: executive gift sets for sponsorship and partnership events (for example the Kojumakoju Festival)", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
          { id: "cr-btl-15", text: "Wayfinding signage: directional signage for roadshow and activation-site layout and crowd flow", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
        ],
      },
      {
        id: "cr-ttl",
        label: "Creative 6: TTL (Through the Line)",
        items: [
          { id: "cr-ttl-1", text: "USSD scripts: *944# menu copy, transaction confirmations, and error and fallback messages, in English and Krio", aaarrr: ["activation"], owner: "Creative Director", flags: [{ type: "assumed", note: "Krio copy is ASSUMED, pending cultural-consultant validation." }] },
          { id: "cr-ttl-2", text: "Banking hall and branch interior design: wall graphics, counter branding, queue-management screen branding and teller-pod wraps", aaarrr: ["awareness", "activation"], owner: "Creative Director" },
          { id: "cr-ttl-3", text: "Branch exterior signage: fascia refresh and entrance signage under the new brand platform", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "data-required", note: "BLOCKED in the source scope until the retired platform name is replaced." }] },
          { id: "cr-ttl-4", text: "ATM wrap and branding: exterior ATM cabinet branding at branch and off-site locations", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-ttl-5", text: "Digital signage content: branch TV and screen content loop for waiting and queue areas", aaarrr: ["awareness", "activation"], owner: "Creative Director" },
          { id: "cr-ttl-6", text: "Internal branding: staff notice boards, internal campaign posters and email-signature banners", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-ttl-7", text: "Print and install in-branch POS materials (Moni enrolment QR, Savings Circle display)", aaarrr: ["awareness", "acquisition"], owner: "Creative Director" },
          { id: "cr-ttl-8", text: "Uniform design: teller, security and agent uniform elements", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-ttl-9", text: "Corporate stationery: letterhead, envelopes, business cards, and PowerPoint and Word templates carrying the refreshed identity", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
          { id: "cr-ttl-10", text: "Staff ID and lanyard redesign aligned to the new brand platform", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
          { id: "cr-ttl-11", text: "Official vehicle livery for bank-owned service vehicles, distinct from public poda-poda branding", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
        ],
      },
      {
        id: "cr-digital",
        label: "Creative 7: Digital",
        items: [
          { id: "cr-dig-1", text: "Evergreen content library: always-on explainer and FAQ posts for owned social channels, in English and Krio", aaarrr: ["awareness", "retention"], owner: "Creative Director" },
          { id: "cr-dig-2", text: "Content calendar: monthly and quarterly editorial calendar across all owned digital channels", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-dig-3", text: "Ambassador content calendar, aligned to the Brand Ambassador Utilisation Plan (posts, stories and a long-form video each month)", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-dig-4", text: "How-to and tutorial content: carousels and short videos, 'How to open Moni Wallet' and 'How to use *944#', in English and Krio", aaarrr: ["activation"], owner: "Creative Director" },
          { id: "cr-dig-5", text: "Explainer videos: 60 to 90 second animated or motion-graphics product explainers, in English and Krio", aaarrr: ["awareness", "activation"], owner: "Creative Director" },
          { id: "cr-dig-6", text: "ATM display screen designs: idle-screen and transaction-flow screen advertising for ATM units", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-dig-7", text: "SMS copy: promotional and marketing SMS templates, distinct from transactional alerts, in English and Krio", aaarrr: ["acquisition", "retention"], owner: "Creative Director" },
          { id: "cr-dig-8", text: "Email copy: consumer Moni Wallet campaign sequence, extending the existing 90-day merchant email model", aaarrr: ["acquisition", "retention"], owner: "Creative Director" },
          { id: "cr-dig-9", text: "Push notification copy: app engagement and re-engagement notification templates", aaarrr: ["retention"], owner: "Creative Director" },
          { id: "cr-dig-10", text: "Digital display ads: leaderboard, MPU and skyscraper banner set for programmatic and local site placements", aaarrr: ["awareness", "acquisition"], owner: "Creative Director" },
          { id: "cr-dig-11", text: "Carousel ads: multi-frame social carousel creative for Meta and Instagram", aaarrr: ["acquisition"], owner: "Creative Director" },
          { id: "cr-dig-12", text: "Video ads: 6 second bumper, 15 second and 30 second paid-social cutdowns", aaarrr: ["acquisition"], owner: "Creative Director" },
          { id: "cr-dig-13", text: "Blog articles: thought-leadership and financial-literacy posts for the website", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-dig-14", text: "Newsletter: customer and merchant e-newsletter templates", aaarrr: ["retention"], owner: "Creative Director" },
          { id: "cr-dig-15", text: "Social media templates: post, story, profile and cover art, and highlight-cover templates", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-dig-16", text: "Website landing page: Moni Wallet launch landing-page copy and wireframe brief", aaarrr: ["acquisition"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
          { id: "cr-dig-17", text: "In-app onboarding copy: UX microcopy for the app and USSD onboarding flow, in English and Krio", aaarrr: ["activation"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
          { id: "cr-dig-18", text: "IVR and call-centre scripts: on-hold messaging and IVR menu copy for the customer contact centre, in English and Krio", aaarrr: ["retention"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
          { id: "cr-dig-19", text: "Influencer and UGC brief template for micro-influencer and user-generated-content partners beyond the lead ambassador", aaarrr: ["awareness", "referral"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
          { id: "cr-dig-20", text: "Paid social ad variation set: A/B creative variants for Facebook, Instagram and TikTok paid placements", aaarrr: ["acquisition"], owner: "Creative Director", flags: [{ type: "uzo-to-confirm", note: "Recommended addition in the source scope; confirm with SLCB Marketing." }] },
        ],
      },
      {
        id: "cr-foundation",
        label: "Creative 8: Foundational Assets",
        items: [
          { id: "cr-fnd-1", text: "Sonic branding: a short audio mnemonic to close TVC and radio spots and for in-app sounds", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-fnd-2", text: "Motion identity: animated logo sting used as a video intro and outro bumper across all moving-image content", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-fnd-3", text: "Iconography and pictogram set for USSD, ATM screens and low-literacy-friendly signage", aaarrr: ["activation"], owner: "Creative Director" },
          { id: "cr-fnd-4", text: "Accessibility specifications: large-print materials and audio versions of key collateral", aaarrr: ["activation"], owner: "Creative Director" },
          { id: "cr-fnd-5", text: "Regulatory and compliance disclosure pack: BSL-required disclosures, T&Cs summary cards and KYC signage given creative treatment", aaarrr: ["activation"], owner: "Creative Director" },
          { id: "cr-fnd-6", text: "Starter-kit packaging: physical welcome-pack design for new Moni Wallet customers and new agents", aaarrr: ["activation"], owner: "Creative Director" },
          { id: "cr-fnd-7", text: "Photography and videography asset library: a shoot brief for an authentic Sierra Leonean image library (agents, merchants, customers) to replace generic stock", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-fnd-8", text: "Partnership and sponsorship activation toolkit for the Kojumakoju Festival, Youth Day and campus activations: stage backdrop, wristbands, ticketing and redemption creative", aaarrr: ["awareness", "acquisition"], owner: "Creative Director" },
          { id: "cr-fnd-9", text: "Crisis and issue-response templates: holding statements for service outages", aaarrr: ["retention"], owner: "Creative Director" },
          { id: "cr-fnd-10", text: "Internal change-communication collateral: town-hall deck, internal FAQ and posters for the staff-facing rollout", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "cr-fnd-11", text: "Customer and merchant testimonial format: video and print case-study template, reusable across digital channels and branch screens", aaarrr: ["awareness", "referral"], owner: "Creative Director" },
          { id: "cr-fnd-12", text: "Technical specifications annex: exact dimensions, file formats and bleed specs for every print and digital ad unit above", aaarrr: ["awareness"], owner: "Creative Director" },
        ],
      },
      {
        id: "cr-merchant",
        label: "Creative 9: Merchant Acquisition Kits & Content",
        items: [
          { id: "cr-mer-1", text: "Tier 1 large formal kit: acrylic QR panel with POS stand, frosted A3 entrance decal, welcome kit folder, wall poster, pens, notepad and desk calendar", aaarrr: ["acquisition", "activation"], owner: "Creative Director" },
          { id: "cr-mer-2", text: "Tier 2 SME kit: laminated tabletop QR stand, vinyl A3 window sticker, USSD reference card in Krio and English, WhatsApp support card, T-shirt, pens, notepad and keychain", aaarrr: ["acquisition", "activation"], owner: "Creative Director" },
          { id: "cr-mer-3", text: "Tier 3 micro kit: laminated QR board with plastic stand (must-have pair), palm-sized USSD sticker in Krio, WhatsApp support card, QR paper bags, pen, mini umbrella, and a kanga for women traders", aaarrr: ["acquisition", "activation"], owner: "Creative Director" },
          { id: "cr-mer-4", text: "'First 5 payments' card, handed over with the first stamp already filled", aaarrr: ["activation"], owner: "Creative Director" },
          { id: "cr-mer-5", text: "Branded 'accepted here' business sign, issued after a merchant's fifth genuine payment", aaarrr: ["activation", "retention"], owner: "Creative Director", flags: [{ type: "data-required", note: "Pending approval in the merchant playbook, along with the other merchant incentives." }] },
          { id: "cr-mer-6", text: "Squad training flip-chart for use at merchant onboarding", aaarrr: ["activation"], owner: "Creative Director" },
          { id: "cr-mer-7", text: "Squad uniform and ID cards, so named squad members are recognisable and impersonators can be spotted", aaarrr: ["acquisition"], owner: "Creative Director" },
          { id: "cr-mer-8", text: "Five-minute merchant pitch and answers to the six common objections, in an English master and a Krio version", aaarrr: ["acquisition"], owner: "Creative Director", flags: [{ type: "assumed", note: "The Krio version is ASSUMED until the cultural consultant signs it off; the playbook has the Krio line written by a Krio content and radio specialist first." }] },
          { id: "cr-mer-9", text: "Merchant education content: 30 to 60 second WhatsApp voice notes (checking payments, cashing out, PIN safety) and the day-3 call script", aaarrr: ["activation", "retention"], owner: "Creative Director", flags: [{ type: "assumed", note: "All Krio and local-language content is ASSUMED until the cultural consultant signs it off." }] },
          { id: "cr-mer-10", text: "Peer demo videos: real traders showing how they use SLCB Moni, filmed at the stall with their consent", aaarrr: ["awareness", "activation"], owner: "Creative Director" },
          { id: "cr-mer-11", text: "Weekly merchant tip radio segment scripts and the market-of-the-week mention, in Krio and local languages", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "assumed", note: "Krio, Temne and Mende scripts are ASSUMED until validated." }] },
          { id: "cr-mer-12", text: "Replace the retired brand line on the Tier 1 tote and Tier 3 kanga specs before any merchant kit print run", aaarrr: ["awareness"], owner: "Creative Director", flags: [{ type: "conflict", note: "Hard gate: the merchant playbook finds the retired platform line on two kit specs; no merchant kit is printed until the copy is replaced." }] },
          { id: "cr-mer-13", text: "Confirm POSM unit costs and lead times, then place the bulk Tier 3 kit order ahead of the regional launch", aaarrr: ["acquisition"], flags: [{ type: "data-required", note: "Unit costs and lead times are not yet supplied by the merchandising and POSM owner." }] },
        ],
      },
      {
        id: "cr-ui",
        label: "Creative 10: App UI Design",
        items: [
          { id: "cr-ui-1", text: "Write the UX brief and requirements, and audit the existing app", aaarrr: ["activation"], owner: "Creative Director", timeline: "2 Nov 2026" },
          { id: "cr-ui-2", text: "Map user flows and information architecture", aaarrr: ["activation"], owner: "Creative Director", timeline: "3 Nov 2026" },
          { id: "cr-ui-3", text: "Wireframe the key screens, and build the UI foundations and design system (colour, type, components) from the brand book", aaarrr: ["activation"], owner: "Creative Director", timeline: "5 Nov 2026" },
          { id: "cr-ui-4", text: "Gate: wireframes approved", aaarrr: ["activation"], owner: "SLCB Leadership", timeline: "5 Nov 2026", flags: [{ type: "conflict", note: "Locks the app structure before high-fidelity design starts." }] },
          { id: "cr-ui-5", text: "Design the high-fidelity core screens, plus secondary screens and states (onboarding, empty, error, settings)", aaarrr: ["activation"], owner: "Creative Director", timeline: "11 Nov 2026" },
          { id: "cr-ui-6", text: "Build the interactive prototype, review it with SLCB, and finalise revisions", aaarrr: ["activation"], owner: "Creative Director", timeline: "13 Nov 2026" },
          { id: "cr-ui-7", text: "Hand off to developers: specs, assets and UI kit", aaarrr: ["activation"], owner: "Creative Director", timeline: "13 Nov 2026" },
          { id: "cr-ui-8", text: "Gate: UI approved and handed off", aaarrr: ["activation"], owner: "SLCB Leadership", timeline: "13 Nov 2026", flags: [{ type: "conflict", note: "End of the Creative Director's project in the tracker." }] },
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
          {
            id: "p0-product-5",
            text: "Audit telco SMS/OTP gateway reliability and put a delivery-speed SLA in place with the SMS provider",
            aaarrr: ["activation"],
            owner: "IT + Digital",
            flags: [{ type: "conflict", note: "Hard gate: the source strategy names this as the first of three fixes required before any digital campaign launches, ahead of any external comms." }],
          },
          {
            id: "p0-product-6",
            text: "Audit the salary-advance flow on funded accounts, fix the specific error conditions, and regression-test before any salary-linked campaign runs",
            aaarrr: ["activation"],
            owner: "IT + Retail Banking",
            flags: [{ type: "conflict", note: "Hard gate, same source and reasoning as the SMS/OTP gateway item above." }],
          },
          {
            id: "p0-product-7",
            text: "Build self-service card unblock via USSD and the WhatsApp bot, removing the branch-visit requirement",
            aaarrr: ["activation", "retention"],
            owner: "Digital + Card Ops",
            flags: [{ type: "conflict", note: "Third of the three pre-campaign product fixes named in the source strategy." }],
          },
          { id: "p0-product-8", text: "Publish system uptime monthly and publicly, as a standing transparency commitment rather than an internal metric only", aaarrr: ["retention"], owner: "IT + Operations" },
        ],
      },
      {
        id: "p0-training",
        label: "Staff Training",
        items: [
          {
            id: "p0-training-1",
            text: "Teller and relationship-manager Moni activation training, all branches",
            aaarrr: ["activation"],
            raci: { responsible: "Veronica & Margret", accountable: "Mary (Head FIDM)", consulted: "HR (Umu)", informed: "MD" },
            timeline: "3 weeks (26 Oct 2026)",
          },
          {
            id: "p0-training-2",
            text: "Certification: each staff member demos Moni enrolment within the standard time target",
            aaarrr: ["activation"],
            raci: { responsible: "FIDM", accountable: "Mary (Head FIDM)", consulted: "HR", informed: "HR" },
            timeline: "3 weeks (26 Oct 2026)",
          },
          {
            id: "p0-training-3",
            text: "Issue objection-handling scripts; rehearse common failure scenarios",
            aaarrr: ["activation"],
            raci: { responsible: "Suphian (CS)", accountable: "Suphian (CS)", consulted: "FIDM", informed: "FIDM" },
            timeline: "3 weeks (26 Oct 2026)",
          },
          {
            id: "p0-training-4",
            text: "Designate a Digital Champion per branch, incentivised per enrolment",
            aaarrr: ["activation", "acquisition"],
            raci: { responsible: "Margaret", accountable: "Mary (Head FIDM)", consulted: "Mary (Head FIDM)", informed: "MD" },
            timeline: "Ongoing",
          },
          {
            id: "p0-training-5",
            text: "Install a dedicated digital enrolment station (tablet, pre-loaded with USSD and wallet registration) at every branch front desk",
            aaarrr: ["acquisition", "activation"],
            raci: { responsible: "FIDM", accountable: "Mary (Head FIDM)", consulted: "MD", informed: "E-Channels" },
            timeline: "Q1 2027",
          },
          {
            id: "p0-training-6",
            text: "Standardise and measure a short teller enrolment script used at every branch interaction",
            aaarrr: ["activation"],
            raci: { responsible: "FIDM", accountable: "Mary (Head FIDM)", consulted: "Branch Heads", informed: "MD" },
            timeline: "2 Oct 2026",
          },
          {
            id: "p0-training-7",
            text: "Launch a bank-wide staff digital-onboarding referral programme, tracked and paid monthly, distinct from the per-branch Digital Champion incentive",
            aaarrr: ["activation", "acquisition"],
            raci: { responsible: "FIDM", accountable: "HR (Umu)", consulted: "Mary (Head FIDM)", informed: "Mary (Head FIDM)" },
            timeline: "5 weeks (2 Nov 2026)",
          },
          {
            id: "p0-training-8",
            text: "Stand up a digital help desk per branch for customers who hit problems going digital, so the issue is resolved in-branch before it becomes churn",
            aaarrr: ["retention"],
            raci: { responsible: "FIDM", accountable: "FIDM", consulted: "Admin", informed: "MD" },
            timeline: "Q1 2027",
          },
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
          { id: "p0-cult-7", text: "Validate agent recruitment scripts and testimonial audio (Segments A and B) with the cultural consultant before any field use", aaarrr: ["acquisition", "activation"], owner: "Cultural Consultant / Integra" },
        ],
      },
      {
        id: "p0-agent",
        label: "Agent Network Readiness",
        items: [
          {
            id: "p0-agent-0",
            text: "Confirm the SLCB Moni and Mi Yone Teller platform readiness gate (CBS stability, onboarding and payout flow) before any field recruitment push begins",
            aaarrr: ["activation"],
            owner: "Head of E-Channels / Head Digital Banking & Financial Inclusion / Head of Retail / CIO",
            raci: { responsible: "Alieu (Head E-Channels)", accountable: "Alieu (Head E-Channels)", consulted: "Agyeman (CIO)", informed: "FIDM" },
            flags: [{ type: "conflict", note: "Hard gate: recruitment activity in the Segment A, Segment B, and Referral Engine sections below all depend on this closing first. The source workplan itself repeats this same check twice (once as a pre-sprint verification, once as a Week 2 risk gate); consolidated here into a single item." }],
          },
          {
            id: "p0-agent-1",
            text: "Mi Yone Teller agent trainings and certified in SLCB Moni, Osusu, Moni Savings Circle registration",
            aaarrr: ["acquisition", "activation"],
            raci: { responsible: "FIDM", accountable: "Mary (Head FIDM)", consulted: "HR (Umu)", informed: "MD" },
            timeline: "26 Oct 2026",
          },
          {
            id: "p0-agent-2",
            text: "Map agent locations against Freetown market footprint and secondary-city priority",
            aaarrr: ["acquisition"],
            raci: { responsible: "Alieu (Head E-Channels)", accountable: "Alieu (Head E-Channels)", consulted: "Mary (FIDM)", informed: "FIDM" },
          },
          {
            id: "p0-agent-3",
            text: "Distribute agent branding kit (SLCB Moni QR display, branded t-shirt, signage)",
            aaarrr: ["awareness", "acquisition"],
            raci: { responsible: "Veronica & Margaret (FIDM)", accountable: "Mary (Head FIDM)", consulted: "Mr Shittu (Director Finance)", informed: "Suphian (CS)" },
            timeline: "26 Oct 2026",
          },
          {
            id: "p0-agent-4",
            text: "Set a minimum monthly enrolment threshold for an agent to remain active",
            aaarrr: ["acquisition", "activation"],
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "Shittu (Director Finance)", informed: "MD" },
            timeline: "26 Oct 2026",
          },
          {
            id: "p0-agent-5",
            text: "Confirm the current live agent baseline (count and geographic distribution) before the recruitment sprint begins",
            aaarrr: ["acquisition"],
            owner: "Head of E-Channels",
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "ICT Team", informed: "Alieu (Head E-Channels)" },
            timeline: "2 Oct 2026",
            flags: [{ type: "conflict", note: "The source's own KPI Framework notes that three internal SLCB documents give differing overall agent-count targets. Not resolved here and no figures shown, consistent with this tab's standing rule; reconcile before communicating any external commitment on agent numbers. The Digital Literacy 50K programme strategy corroborates this same conflict, naming two of the three documents by title without adding a fourth figure." }],
          },
        ],
      },
      {
        id: "p0-agent-segment-a",
        label: "Agent Recruitment: Segment A (Convert Competitor Agents)",
        items: [
          {
            id: "p0-agent-a1",
            text: "Source current published competitor mobile-money commission rates to build the Segment A comparison sheet",
            aaarrr: ["acquisition"],
            owner: "Digital Strategy Consultant / Integra",
            raci: { responsible: "FIDM Team", accountable: "FIDM Team", consulted: "Mary (Head FIDM)", informed: "Digital Consultant Integra" },
            timeline: "Done",
          },
          {
            id: "p0-agent-a2",
            text: "Record peer-testimonial audio of actual commission paid, non-literate-friendly, no fabricated figures",
            aaarrr: ["acquisition", "awareness"],
            owner: "Field Officers / Provincial Coordinators",
            raci: { responsible: "Precious (Under 30s CEO)", accountable: "Suphian (CS)", consulted: "FIDM Team", informed: "Mary (Head FIDM)" },
            timeline: "9 Nov 2026",
          },
          {
            id: "p0-agent-a3",
            text: "Reframe the field script around addition-not-replacement positioning; never counter-argue a competitor's value, no exclusivity ask",
            aaarrr: ["acquisition"],
            owner: "Agent Network Coordinators",
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "Mary (Head FIDM)", informed: "MD" },
            timeline: "26 Oct 2026",
          },
          {
            id: "p0-agent-a4",
            text: "Produce a dual-channel onboarding pack: a pictogram flow for non-literate agents alongside the written comparison sheet for literate agents",
            aaarrr: ["acquisition", "activation"],
            owner: "Digital Squad / Graphic Designer",
            raci: { responsible: "Suphian (CS)", accountable: "CS Team", consulted: "FIDM Team", informed: "Mary (Head FIDM)" },
            timeline: "13 Oct 2026",
          },
          {
            id: "p0-agent-a5",
            text: "Deploy founding-agent urgency messaging ahead of the scheduled commission-split change at Moni go-live",
            aaarrr: ["acquisition"],
            owner: "Agent Network Coordinators",
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "Suphian (CS)", informed: "E-Channels" },
            timeline: "5 Oct 2026",
          },
        ],
      },
      {
        id: "p0-agent-segment-b",
        label: "Agent Recruitment: Segment B (New Agents & Jobseekers)",
        items: [
          {
            id: "p0-agent-b1",
            text: "Identify market-day, church/mosque, and youth-association recruitment venues, Bo/Kenema/Makeni/Port Loko first",
            aaarrr: ["acquisition"],
            owner: "Provincial Field Officers",
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "Head HR (Umu)", informed: "MD" },
            timeline: "26 Oct 2026",
          },
          {
            id: "p0-agent-b2",
            text: "Prepare visible-kit recruitment materials: branded kit and ID shown before any commission conversation",
            aaarrr: ["acquisition", "awareness"],
            owner: "Creative Director / Digital Squad",
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "CS Team", informed: "Director Finance" },
            timeline: "15 Oct 2026",
          },
          {
            id: "p0-agent-b3",
            text: "Run community-network activations at market days and through PTA/mosque/church networks",
            aaarrr: ["acquisition"],
            owner: "Provincial Field Officers / Activation Manager",
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "Shittu (Director Finance)", informed: "MD" },
            timeline: "Ongoing",
          },
          {
            id: "p0-agent-b4",
            text: "Onboard new agents: training, float support for the first 30 days, and branded terminal/SIM issuance",
            aaarrr: ["acquisition", "activation"],
            owner: "Field Officers (2 per province)",
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "Shittu (Director Finance)", informed: "MD" },
            timeline: "30 Nov 2026",
          },
        ],
      },
      {
        id: "p0-agent-referral",
        label: "Agent Referral Engine (Segment C)",
        items: [
          {
            id: "p0-agent-c1",
            text: "Script a named-referral ask into onboarding, first-payout, and monthly-review moments",
            aaarrr: ["referral"],
            owner: "Agent Network Coordinators",
            raci: { responsible: "CS Team", accountable: "Suphian (CS)", consulted: "FIDM Team", informed: "FIDM Team" },
          },
          {
            id: "p0-agent-c2",
            text: "Open a referral tracker on the shared operations dashboard alongside the agent-location mapping tool",
            aaarrr: ["referral", "retention"],
            owner: "Data Analyst / Integra",
            raci: { responsible: "Alieu (E-Channels)", accountable: "E-Channels Team", consulted: "FIDM Team", informed: "Mary (Head FIDM)" },
          },
          {
            id: "p0-agent-c3",
            text: "Confirm the referral bonus structure (two-tier: logged referral plus converted agent) with CFO before finalising the mechanic",
            aaarrr: ["referral"],
            owner: "CFO / Head of Digital Banking",
            raci: { responsible: "Finance Team", accountable: "Finance Team", consulted: "FIDM Team", informed: "Mary (Head FIDM) & Shittu (Director Finance)" },
            timeline: "Done",
          },
          {
            id: "p0-agent-c4",
            text: "Apply a non-performer guardrail: forfeit the referral reward if the referred agent lands in the bottom-performer band within 60 days",
            aaarrr: ["referral", "retention"],
            owner: "Agent Network Coordinators",
            raci: { responsible: "FIDM Team", accountable: "Mary (Head FIDM)", consulted: "Alieu (E-Channels)", informed: "MD" },
            timeline: "Ongoing",
          },
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
        id: "p0-ooh-tv",
        label: "TV & OOH Media Strategy",
        items: [
          { id: "p0-ooh-1", text: "Confirm TV station tier assignments (national reach, Freetown urban, faith and community) against the current national broadcasting register", aaarrr: ["awareness"] },
          { id: "p0-ooh-2", text: "Confirm the OOH location-typology framework, airport and ferry transit corridor, urban core junctions and markets, provincial hubs, as the media-buying brief for the execution partner", aaarrr: ["awareness"] },
          {
            id: "p0-ooh-3",
            text: "Confirm BTV or a dedicated media-buying agency's contracting status and exact execution-window dates before any site booking or rate negotiation begins",
            aaarrr: ["awareness"],
            flags: [{ type: "data-required", note: "Execution-window dates are marked ASSUMED in the source strategy, referenced elsewhere in the programme but not confirmed via a signed statement of work." }],
          },
          {
            id: "p0-ooh-4",
            text: "Pull the complete national FM radio station register by district before finalising the national radio plan",
            aaarrr: ["awareness"],
            flags: [{ type: "data-required", note: "Only one district is verified in the source strategy via the national telecoms regulator's register; other districts are not yet retrieved." }],
          },
          {
            id: "p0-ooh-5",
            text: "Commission independent TV and radio audience measurement research, since the national regulator does not publish ratings or reach data",
            aaarrr: ["awareness"],
            flags: [{ type: "data-required", note: "No published audience-measurement data exists; the source strategy names this as required before final channel selection within each TV tier." }],
          },
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
        id: "p0-digital-literacy",
        label: "Digital Literacy Programme: Foundations & Tracking",
        items: [
          {
            id: "p0-dl-1",
            text: "Agree and sign off a single working definition of 'trained': one live transaction completed personally by the customer or staff member, on their own phone, while supervised, logged uniquely by phone number so nobody is counted twice across channels",
            aaarrr: ["activation"],
            owner: "SLCB Leadership",
            flags: [{ type: "assumed", note: "The proposed definition is [ASSUMED] in the source strategy and requires formal SLCB sign-off before any channel starts counting people as trained." }],
          },
          {
            id: "p0-dl-2",
            text: "Extend the planned Branch Digital Migration Tracker to log every digital-literacy training entry by phone number, channel, date, trainer, and proof-transaction type",
            aaarrr: ["activation"],
            owner: "Digital Strategy Consultant / Integra",
            flags: [{ type: "conflict", note: "Hard gate: the tracker itself is still planned and pending approval, and no channel can be credited toward the programme until it is live, since the core banking system has no real-time integration to count transactions automatically." }],
          },
          { id: "p0-dl-3", text: "Run a weekly de-duplication reconciliation on phone number, with a spot-check sample checked against actual transaction records", aaarrr: ["activation"], owner: "Digital Strategy Consultant / Integra" },
          {
            id: "p0-dl-4",
            text: "Confirm the digital-literacy programme's completion deadline before finalising the monthly and daily delivery pace",
            aaarrr: ["activation"],
            owner: "SLCB Leadership",
            flags: [{ type: "data-required", note: "The monthly pace changes several-fold depending on which end date the strategy's 'by 2027' language actually means; not yet confirmed by SLCB." }],
          },
          {
            id: "p0-dl-5",
            text: "Confirm channel-planning inputs needed to finalise the delivery split: tellers per branch, active agent count, headcount per institution, and total staff count",
            aaarrr: ["activation"],
            flags: [{ type: "data-required", note: "Every channel share in the source strategy's planning model is provisional until these inputs are supplied." }],
          },
          {
            id: "p0-dl-6",
            text: "Confirm the number of people already trained to date, to set an accurate baseline before the delivery pace is finalised",
            aaarrr: ["activation"],
            flags: [{ type: "data-required", note: "No baseline figure exists yet; any confirmed baseline lowers the outstanding monthly requirement." }],
          },
          {
            id: "p0-dl-7",
            text: "Confirm the branch count used for training delivery planning",
            aaarrr: ["activation"],
            flags: [{ type: "conflict", note: "Two internal SLCB documents disagree on the total number of branches (the cascade training deck names one figure, the promotional strategy analysis names a different, smaller one). Not resolved here and no figures shown, consistent with this tab's standing rule." }],
          },
        ],
      },
      {
        id: "p0-gate",
        label: "Launch Readiness Gate",
        items: [
          {
            id: "p0-gate-1",
            text: "Confirm every Phase 0 exit condition is met: product stability, staff certification, agent network live, regulatory sign-off, Krio-Temne-Mende validation, ambassador contract signed, digital-literacy tracker live, and measurement infrastructure live, before Phase 1 begins",
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
          { id: "p1-ld-3", text: "Social media launch: hero film plus ambassador content", aaarrr: ["awareness"], owner: "Creative Director" },
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
          { id: "p1-sms-5", text: "Run an automated onboarding SMS drip from account or wallet opening through day 30, each message tied to a specific next action", aaarrr: ["activation", "retention"] },
          { id: "p1-sms-6", text: "Run an automated re-engagement SMS drip triggered at 30 days of customer inactivity", aaarrr: ["retention"] },
          { id: "p1-sms-7", text: "Add a permanent 'Refer a Friend' prompt to the USSD menu, alongside a skippable promotional splash screen at login", aaarrr: ["referral", "acquisition"] },
        ],
      },
      {
        id: "p1-social",
        label: "Social Media (Facebook-primary)",
        items: [
          { id: "p1-social-1", text: "Hero film: three characters, three segments, each using Moni differently", aaarrr: ["awareness"], owner: "Creative Director" },
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
        id: "p1-digital-literacy",
        label: "Digital Literacy Programme: Branch & Institutional Delivery",
        items: [
          { id: "p1-dl-1", text: "Count a teller-assisted digital-literacy training moment only when the customer completes the transaction personally, not when the teller completes it for them", aaarrr: ["activation"] },
          { id: "p1-dl-2", text: "Open every institutional and branch training session with PIN safety and how to spot a scam call before moving to the transaction itself", aaarrr: ["retention"] },
          {
            id: "p1-dl-3",
            text: "Loop a silent, visual USSD balance-check demonstration on banking-hall queue screens",
            aaarrr: ["awareness"],
            flags: [{ type: "data-required", note: "Counts as awareness only, not a completed training, since the customer is not transacting personally. A screen refresh was agreed in principle but no content-push process yet exists to make it happen." }],
          },
          {
            id: "p1-dl-4",
            text: "Run 20-minute payday digital-literacy sessions for police and military personnel at their pay points, coordinated through the chain of command",
            aaarrr: ["activation"],
            owner: "Digital Strategy Consultant / Integra",
            flags: [{ type: "data-required", note: "Headcounts for the police and military cohorts are not yet available." }],
          },
          {
            id: "p1-dl-5",
            text: "Run fee-deadline digital-literacy sessions on partner university campuses, adding a 'teach one family member' step to each session",
            aaarrr: ["activation", "acquisition"],
            flags: [{ type: "assumed", note: "Using students as household teachers is [ASSUMED, to test] in the source strategy, not yet validated." }],
          },
          {
            id: "p1-dl-6",
            text: "Launch a youth-ambassador household challenge asking followers to register a parent or grandparent",
            aaarrr: ["acquisition", "referral"],
            owner: "Creative Director",
            flags: [{ type: "uzo-to-confirm", note: "The source strategy notes branding was not engaged in the last Youth Day activity and asks that this be fixed before this challenge runs; cross-references the ambassador activations already scheduled in this phase." }],
          },
          {
            id: "p1-dl-7",
            text: "Hold congregation-wide digital-literacy sessions until SLCB Moni Wallet goes live, since the wallet removes the need for a bank account first",
            aaarrr: ["activation"],
            flags: [{ type: "conflict", note: "Hard gate: the source strategy places the full congregation rollout on hold pending Moni Wallet go-live, the same go-live dependency used elsewhere in this tab." }],
          },
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
          { id: "p1-amb-1", text: "Produce and air a 30-second ambassador TVC plus a 2-minute brand documentary segment", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "p1-amb-2", text: "Produce ambassador billboard creative for priority Freetown and provincial sites, with QR and WhatsApp-chatbot call to action", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "p1-amb-3", text: "Produce an ambassador half-page newspaper advertisement for national press", aaarrr: ["awareness"], owner: "Creative Director" },
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
        id: "p1-qr-stickers",
        label: "QR Sticker Distribution Campaign",
        items: [
          { id: "p1-qr-1", text: "Produce and distribute QR stickers at priority surfaces: market stalls, taxis and poda-podas, pharmacies and petrol stations, university noticeboards, and every branch and agent point", aaarrr: ["awareness", "acquisition"] },
          { id: "p1-qr-2", text: "Assign a unique, location-attributed QR code per placement type so every scan's source is tracked", aaarrr: ["acquisition"] },
          { id: "p1-qr-3", text: "Route every scan straight into the WhatsApp chatbot's account-opening flow, with a USSD number printed on the sticker as the no-smartphone fallback", aaarrr: ["acquisition", "activation"] },
          { id: "p1-qr-4", text: "Monitor scan volume per location; trigger a merchant-officer visit and priority restock at high-performing sites, and replace non-performing placements", aaarrr: ["acquisition"] },
        ],
      },
      {
        id: "p1-traditional-media",
        label: "Traditional Media Content Rules (Radio, Billboard, TV)",
        items: [
          { id: "p1-trad-1", text: "Apply a single-message, QR-coded, attribution-tracked content rule to every billboard and outdoor placement", aaarrr: ["awareness", "acquisition"] },
          { id: "p1-trad-2", text: "Cast real customers, not actors, in all broadcast TV content, consistent with the programme's existing testimonial approach", aaarrr: ["awareness"] },
          { id: "p1-trad-3", text: "Treat community radio live-reads by local presenters as endorsement, not advertising; brief presenters accordingly rather than scripting a straight ad read", aaarrr: ["awareness"] },
        ],
      },
      {
        id: "p1-ooh-tv-launch",
        label: "OOH & TV: Launch Rotation",
        items: [
          { id: "p1-oohtv-1", text: "Air Tier 1 brand-film heavy rotation and Tier 2 launch cut-downs across TV", aaarrr: ["awareness"] },
          { id: "p1-oohtv-2", text: "Begin the national radio drumbeat", aaarrr: ["awareness"] },
          { id: "p1-oohtv-3", text: "Activate the Freetown urban OOH corridor: road junctions, motor parks, central market perimeters, and agent point-of-presence signage", aaarrr: ["awareness", "acquisition"] },
          { id: "p1-oohtv-4", text: "Activate the airport and ferry-terminal transit-corridor placements aimed at diaspora returnees and business travellers", aaarrr: ["awareness"] },
          { id: "p1-oohtv-5", text: "As urban consolidation begins, add merchant-market OOH placements in Freetown and start Tier 3 faith and community-station financial-literacy content, run as sponsored content where paid budget is constrained", aaarrr: ["awareness", "acquisition"] },
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
          { id: "p1-review-2", text: "Monthly review: active users, new accounts by segment and channel, Savings Circle registrations, SMS performance; owned jointly by SLCB Marketing, Integra, and the Creative Director", aaarrr: ["retention", "revenue"] },
          { id: "p1-review-3", text: "Quarterly review: full KPI dashboard, NPS and belief-shift movement, channel ROI, phase-gate decision (proceed or recalibrate); owned by SLCB MD and Exco, decision recorded in writing", aaarrr: ["retention", "revenue"] },
          { id: "p1-review-4", text: "Track new agents recruited per field officer against the monthly quota", aaarrr: ["acquisition"], owner: "Provincial Coordinators" },
          { id: "p1-review-5", text: "Track referral-sourced agents as a share of new agents, baseline from zero", aaarrr: ["referral", "retention"], owner: "Data Analyst / Integra" },
          { id: "p1-review-6", text: "Run corrective coaching for any field officer tracking below quota mid-sprint", aaarrr: ["acquisition", "activation"], owner: "Provincial Coordinators / MD" },
          { id: "p1-review-7", text: "Issue a monthly agent KPI dashboard to MD and C-Suite covering agent volume, training completion, and referral share", aaarrr: ["retention"], owner: "Data Analyst / Integra" },
          { id: "p1-review-8", text: "Run a quarterly strategic review of the agent recruitment programme against its targets", aaarrr: ["retention", "revenue"], owner: "Digital Strategy Consultant / MD" },
          {
            id: "p1-review-9",
            text: "Report the digital-literacy trained count by channel each month, alongside 30-day active-use figures on Moni Wallet and USSD, so training input is checked against actual usage outcome, not just attendance",
            aaarrr: ["retention"],
            owner: "Digital Strategy Consultant / Integra",
          },
        ],
      },
    ],
  },
  {
    id: "digital-paid-media",
    label: "Digital Paid Media",
    intro:
      "Paid comes last, deliberately. The programme's own product strategy sequences growth as Fix, then Reliable, then Referral, then Paid: paid spend is not authorised until the product-reliability fixes are confirmed and organic/referral mechanics are already seeded. This is not one of the source's five campaign phases; it is a cross-cutting workstream that starts planning in parallel with Ignition Launch and scales through Amplification.",
    sections: [
      {
        id: "dp-plan",
        label: "Digital Paid Media Plan",
        items: [
          { id: "dp-plan-1", text: "Define the paid social platform mix and audience-targeting logic (Facebook-primary, Instagram secondary, WhatsApp dark posts), mapped to the AAARRR stage each placement is meant to serve", aaarrr: ["awareness", "acquisition"] },
          {
            id: "dp-plan-2",
            text: "Confirm paid spend does not begin until the three product-reliability fixes are confirmed and BSL regulatory clearance on any incentive-linked creative is in writing",
            aaarrr: ["activation"],
            flags: [{ type: "conflict", note: "Hard gate, per the source strategy's own Fix, Reliable, Referral, Paid sequencing and the existing BSL clearance gate already in this tab's Regulatory & Legal section." }],
          },
          { id: "dp-plan-3", text: "Set up the ad account structure, campaign naming convention, and creative-approval workflow before any placement goes live", aaarrr: ["activation"] },
          { id: "dp-plan-4", text: "Build the paid media calendar for the amplification window, sequenced to scale only after Ignition-phase organic and referral performance is confirmed", aaarrr: ["acquisition"] },
        ],
      },
      {
        id: "dp-deployment",
        label: "Digital Paid Media Deployment",
        items: [
          { id: "dp-dep-1", text: "Launch always-on paid dark-post acquisition targeting the primary urban segment in Freetown and secondary cities", aaarrr: ["acquisition"] },
          { id: "dp-dep-2", text: "Launch retargeting campaigns for funnel drop-offs: app download started but not completed, USSD dial without registration completion", aaarrr: ["acquisition", "retention"] },
          { id: "dp-dep-3", text: "Scale paid spend into the amplification window once Ignition-phase organic and referral performance is confirmed", aaarrr: ["acquisition"] },
          { id: "dp-dep-4", text: "Pause or reallocate spend away from underperforming placements based on weekly performance data", aaarrr: ["acquisition", "revenue"] },
        ],
      },
      {
        id: "dp-reporting",
        label: "Weekly Reporting & Milestones",
        items: [
          { id: "dp-report-1", text: "Issue a weekly paid media performance snapshot (spend pacing, delivery, engagement) to Marketing and the Creative Director", aaarrr: ["retention"] },
          { id: "dp-report-2", text: "Flag any campaign underperforming against its own prior-week baseline for creative refresh or budget reallocation", aaarrr: ["retention"] },
          { id: "dp-report-3", text: "Record milestone completions (ad accounts live, first creative set live, retargeting live, reallocation decisions) against the campaign calendar", aaarrr: ["retention"] },
        ],
      },
      {
        id: "dp-measurement",
        label: "Measurement",
        items: [
          { id: "dp-meas-1", text: "Implement UTM tagging and platform-native conversion tracking on every paid placement", aaarrr: ["acquisition"], flags: [{ type: "assumed", note: "Shares the same UTM tagging infrastructure already listed under Measurement Infrastructure in Phase 0, rather than a separate tracking build." }] },
          { id: "dp-meas-2", text: "Track cost per acquisition by channel and segment; no fixed target published until a baseline exists", aaarrr: ["acquisition", "revenue"] },
          { id: "dp-meas-3", text: "Attribute USSD registrations and wallet activations back to their originating paid campaign via unique tracking codes", aaarrr: ["acquisition"] },
          { id: "dp-meas-4", text: "Feed paid media performance into the existing weekly and monthly Performance Review Cadence rather than running a separate review process", aaarrr: ["retention"] },
        ],
      },
    ],
  },
  {
    id: "merchant-acquisition",
    label: "Merchant Acquisition",
    intro:
      "A cross-cutting workstream, not one of the source's five campaign phases. It runs from the Freetown pilot through to close-out across three tiers: large formal merchants, SMEs, and micro and informal traders. The lead measure is active merchants, not sign-ups. No region scales past the pilot until the merchant launch gates are closed. The merchant proposition is 'Every sale builds your record': SLCB Moni is added alongside existing wallets, never positioned as a replacement.",
    sections: [
      {
        id: "mq-gates",
        label: "Merchant Launch Gates",
        items: [
          { id: "mq-gate-1", text: "Confirm the standalone SLCB Moni wallet is live and stable before the merchant pilot scales beyond Freetown", aaarrr: ["activation"], owner: "Head of E-Channels", flags: [{ type: "conflict", note: "Gate 1 of 5. Builds on the Product Stability items in Phase 0; the source records the wallet go-live as tentative." }] },
          { id: "mq-gate-2", text: "Confirm merchant QR acceptance is live: merchant payment app with QR payment and cash-out", aaarrr: ["activation"], owner: "Head of E-Channels", flags: [{ type: "conflict", note: "Gate 2 of 5. The source records the merchant payment app as still to be built; regional storms are held until this is green." }] },
          { id: "mq-gate-3", text: "Confirm merchants and customers can cash out at SLCB agents, Mi Yone Tellers and branches", aaarrr: ["activation"], owner: "Head of E-Channels / FIDM", flags: [{ type: "conflict", note: "Gate 3 of 5. Merchants will not accept payments they cannot cash out." }, { type: "data-required", note: "Cash-in and cash-out are listed as inactive features in the latest Moni usage report; their current status is not yet confirmed." }] },
          { id: "mq-gate-4", text: "Confirm the merchant KYC route in writing: account tier for micro merchants, accepted ID options for traders without a national ID, whether squads can open accounts in the field, and same-day authorisation", aaarrr: ["activation"], owner: "Compliance & Regulatory Lead", flags: [{ type: "conflict", note: "Gate 4 of 5." }, { type: "data-required", note: "The account tier and authorisation turnaround are not yet confirmed; this step decides whether the 15-minute onboarding promise can be kept." }] },
          { id: "mq-gate-5", text: "Approve the merchant fee model and any fee waiver or free-kit offer in writing, before any incentive is promised to a merchant", aaarrr: ["acquisition", "revenue"], owner: "SLCB MD / Exco", flags: [{ type: "conflict", note: "Gate 5 of 5." }, { type: "data-required", note: "The fee model is an open item, not yet approved; the pitch is made without incentives until it is." }] },
          { id: "mq-gate-6", text: "Hold market storms in any new region until QR acceptance, cash-out and the KYC route are green; keep onboarding in Freetown under pilot conditions until then", aaarrr: ["acquisition"], flags: [{ type: "conflict", note: "Standing rule from the merchant playbook for every region." }] },
        ],
      },
      {
        id: "mq-setup",
        label: "Merchant Programme Setup",
        items: [
          { id: "mq-set-1", text: "Adopt active merchants as the headline measure, and agree in writing what counts as onboarded, active, at risk and dormant (a genuine customer payment in the last 30 days, with staff test payments excluded)", aaarrr: ["retention"], owner: "SLCB MD / Exco", flags: [{ type: "assumed", note: "The day-7 and day-30 thresholds are ASSUMED until pilot behaviour data replaces them." }] },
          { id: "mq-set-2", text: "Approve and recruit the field squads (two account openers, a QR specialist and a merchandise-and-tracker lead per squad), the SME bankers and the Tier 1 relationship managers", aaarrr: ["acquisition"], owner: "SLCB MD / HR", flags: [{ type: "data-required", note: "Headcount available for squads, SME bankers and relationship managers is not yet supplied by HR." }] },
          { id: "mq-set-3", text: "Stand up the merchant tracker (merchant ID, market, tier, phone, date, squad) with a same-day logging rule and a weekly audit", aaarrr: ["activation"], flags: [{ type: "assumed", note: "Manual tracking is required because the core banking system has no real-time integration; the same-day logging rule and weekly audit are proposed controls." }] },
          { id: "mq-set-4", text: "Map priority markets in Freetown, Bo, Kenema and Makeni: market leaders, section heads, trader union representatives, and trader counts by market and district", aaarrr: ["acquisition"], flags: [{ type: "data-required", note: "Market-by-market trader counts and local leadership structures are not yet supplied by the regional managers." }] },
          { id: "mq-set-5", text: "Agree a same-day authorisation desk with Operations for storm days, and pre-register merchants the day before each storm", aaarrr: ["activation"], flags: [{ type: "data-required", note: "Authorisation turnaround after registration is not yet confirmed." }] },
        ],
      },
      {
        id: "mq-training",
        label: "Merchant Training & Certification",
        items: [
          { id: "mq-trn-1", text: "Certify every squad member before any market storm: storm SOP, onboarding flow, pitch, fraud rules and tracker, passed by onboarding merchants unaided with a live test payment", aaarrr: ["acquisition"], flags: [{ type: "assumed", note: "Session lengths and pass marks are ASSUMED until pilot training results are in." }] },
          { id: "mq-trn-2", text: "Train and certify SME bankers on the one-visit set-up, fee terms and settlement, and Tier 1 relationship managers on the proposal, POS and dashboard demo", aaarrr: ["acquisition"] },
          { id: "mq-trn-3", text: "Train agents on float, USSD, limits, fraud reporting and merchant referrals, with a float and fraud quiz", aaarrr: ["acquisition", "activation"] },
          { id: "mq-trn-4", text: "Teach each merchant to receive, check by USSD, cash out and keep their PIN safe, through a short live demo and a day-3 call", aaarrr: ["activation"] },
        ],
      },
      {
        id: "mq-agents",
        label: "Merchant Cash-Out & Liquidity",
        items: [
          { id: "mq-agt-1", text: "Confirm float at agents near each market before every storm, and add an agent where none is within reach of a live market", aaarrr: ["activation"], flags: [{ type: "assumed", note: "The maximum distance from a live market to a cash-out point is a proposed planning rule, not yet validated against the agent map." }] },
          { id: "mq-agt-2", text: "Send a Mi Yone Teller to every live market on a fixed day each week for the first 30 days of that market", aaarrr: ["activation"] },
          { id: "mq-agt-3", text: "Log every float incident near a live market and fix it within the agreed time", aaarrr: ["retention"], flags: [{ type: "assumed", note: "A 24-hour fix time is proposed in the playbook, not yet agreed." }] },
        ],
      },
      {
        id: "mq-trust",
        label: "Merchant Trust, Fraud & Complaints",
        items: [
          { id: "mq-tru-1", text: "Put named squad members in SLCB uniform with ID cards, send an SMS confirmation on every payment, and print one WhatsApp support number on every kit", aaarrr: ["activation"] },
          { id: "mq-tru-2", text: "Set a first-response time, a fix time and a named owner for each complaint type (payment not received, cannot cash out, suspected fraud, fee dispute, blocked account or PIN), and publish fixes in monthly market feedback", aaarrr: ["retention"], flags: [{ type: "assumed", note: "Response times are ASSUMED and to be set by the customer experience and trust owner." }] },
          { id: "mq-tru-3", text: "Teach every merchant to hand over goods only after seeing the SMS or checking by USSD, never on a screenshot, and print the merchant name on every QR so a swapped QR is spotted in weekly checks", aaarrr: ["activation"] },
          { id: "mq-tru-4", text: "Pay squads on merchant activation rather than sign-up, and spot-check a sample of newly onboarded merchants to design out fake sign-ups", aaarrr: ["acquisition", "activation"], flags: [{ type: "assumed", note: "The size of the spot-check sample is ASSUMED." }] },
          { id: "mq-tru-5", text: "Say in every demo and day-3 call that staff never ask for a PIN", aaarrr: ["activation"] },
        ],
      },
      {
        id: "mq-incentives",
        label: "Merchant, Customer & Agent Incentives",
        items: [
          { id: "mq-inc-1", text: "Offer new merchants a time-limited waiver of QR transaction fees", aaarrr: ["acquisition", "revenue"], flags: [{ type: "data-required", note: "Pending approval in the merchant playbook. Every incentive is a proposal until the fee model is approved in writing; none may be promised before then." }] },
          { id: "mq-inc-2", text: "Give new merchants a free QR stand and QR paper bags", aaarrr: ["acquisition"], flags: [{ type: "data-required", note: "Pending approval; see the fee model gate." }] },
          { id: "mq-inc-3", text: "Issue branded business signage once a merchant reaches their fifth genuine payment", aaarrr: ["activation"], flags: [{ type: "data-required", note: "Pending approval; the trigger is new in the playbook." }] },
          { id: "mq-inc-4", text: "Run Bumper Season customer offers that reward paying at SLCB Moni merchants", aaarrr: ["activation"], flags: [{ type: "data-required", note: "Pending approval; a new proposal in the playbook." }] },
          { id: "mq-inc-5", text: "Revise the agent cash-out split and pay agents a referral fee on merchant activation, not sign-up", aaarrr: ["referral", "acquisition"], flags: [{ type: "data-required", note: "Pending approval; the referral fee is new, and BSL clearance applies to agent incentives." }] },
          { id: "mq-inc-6", text: "Pay squad bonuses on active merchants at day 30, not on sign-ups", aaarrr: ["acquisition", "retention"], flags: [{ type: "data-required", note: "Pending approval; a new proposal in the playbook." }] },
        ],
      },
      {
        id: "mq-pilot",
        label: "Freetown Pilot & QR Launch",
        items: [
          { id: "mq-pil-1", text: "Onboard the first priority Freetown merchants across all three tiers, with squads working in Freetown markets", aaarrr: ["acquisition"] },
          { id: "mq-pil-2", text: "Time every step of registration and authorisation during the pilot to find the slowest step, and test the storm SOP and the 15-minute QR promise", aaarrr: ["activation"] },
          { id: "mq-pil-3", text: "Pre-register pilot merchants for QR, and switch them on the day QR acceptance goes live", aaarrr: ["activation"] },
          { id: "mq-pil-4", text: "Open customer wallets around every onboarded stall, so merchants have paying customers nearby", aaarrr: ["acquisition", "activation"] },
          { id: "mq-pil-5", text: "Visit market leaders one-on-one before any group session", aaarrr: ["acquisition"] },
          { id: "mq-pil-6", text: "Scale Freetown to full squads, and start SME banker Tier 2 visits once QR acceptance is live", aaarrr: ["acquisition"] },
          { id: "mq-pil-7", text: "Measure the pilot active rate, revise the storm SOP from pilot findings, and hold a Month 3 review to lock the active-merchant target and re-phase from actuals", aaarrr: ["retention"], flags: [{ type: "assumed", note: "The planning case, monthly phasing, route shares and regional shares in the playbook are ASSUMED until pilot data replaces them." }] },
        ],
      },
      {
        id: "mq-tier3",
        label: "Tier 3 Market Traders: Market Storms",
        items: [
          { id: "mq-t3-1", text: "Before each storm: leader visit done, market day agreed, radio mention aired, and kits and printer checked", aaarrr: ["acquisition"] },
          { id: "mq-t3-2", text: "Open with a courtesy call at the market office, so the leader walks the squad in", aaarrr: ["acquisition"] },
          { id: "mq-t3-3", text: "Give a five-minute live QR payment demo at the leader's stall, in Krio, and onboard the leader first", aaarrr: ["acquisition", "awareness"], flags: [{ type: "assumed", note: "Krio delivery is ASSUMED until the cultural consultant signs off the script." }] },
          { id: "mq-t3-4", text: "Onboard row by row: account check or opening, merchant agreement form, registration, authorisation, and the QR printed on site", aaarrr: ["acquisition", "activation"] },
          { id: "mq-t3-5", text: "Prove every onboarding with a live test payment and the SMS confirmation shown to the trader, then hand over the kit", aaarrr: ["activation"] },
          { id: "mq-t3-6", text: "Log every merchant in the tracker before the squad leaves, send the daily squad report to the Regional Manager, and escalate any non-performing market the same day", aaarrr: ["activation"] },
          { id: "mq-t3-7", text: "Set a daily onboarding target and a daily customer-wallet target for every storm", aaarrr: ["acquisition", "activation"] },
          { id: "mq-t3-8", text: "Never onboard without a live test payment, never promise loans, prizes or fee waivers that are not approved, and never use the retired brand line on anything", aaarrr: ["acquisition"], flags: [{ type: "conflict", note: "Standing do-not rules from the merchant playbook, applying to every squad member." }] },
        ],
      },
      {
        id: "mq-assoc",
        label: "Market Association Protocol",
        items: [
          { id: "mq-as-1", text: "Map each market's leadership, then meet the leader first and section heads next, one-on-one, listening for fears about fees, fraud, tax and cash-out", aaarrr: ["acquisition"], flags: [{ type: "data-required", note: "Local leadership structures and titles differ by market and are not yet mapped." }] },
          { id: "mq-as-2", text: "Onboard the market leader first, so they take a real payment themselves", aaarrr: ["acquisition", "referral"] },
          { id: "mq-as-3", text: "Agree the market day with the leader, then run market association days that onboard whole sections of a market at once", aaarrr: ["acquisition"] },
          { id: "mq-as-4", text: "Feed back monthly to each market on how many stalls are live, and fix complaints fast", aaarrr: ["retention"] },
          { id: "mq-as-5", text: "Make no per-head payments or gifts to association leaders for sign-ups unless Compliance approves them in writing", aaarrr: ["acquisition"], flags: [{ type: "conflict", note: "Hard gate: such payments can look like inducements and reward sign-ups over use. The playbook's council disagreed on this, and a written Compliance rule is needed before regional scale." }] },
        ],
      },
      {
        id: "mq-formal",
        label: "Tier 2 SME & Tier 1 Large Formal Merchants",
        items: [
          { id: "mq-fm-1", text: "Prioritise Tier 2 visits: existing SLCB business account holders near priority markets, shops next to live Tier 3 markets, warm leads from the merchant email campaign (contacted the same day), and referrals from agents and Tier 1 merchants", aaarrr: ["acquisition"] },
          { id: "mq-fm-2", text: "Complete the Tier 2 one-visit set-up: confirm or open the business account, register on SLCB Moni with the signed agreement, place the QR tabletop stand and window sticker, show USSD settlement and mobile banking, run a live test payment, then log it and book the day-7 visit", aaarrr: ["acquisition", "activation"] },
          { id: "mq-fm-3", text: "Run the weekly SME banker rhythm: pull the list of business account holders near assigned markets on Monday, visit Tuesday to Thursday, and do day-7 follow-ups and tracker updates on Friday", aaarrr: ["acquisition", "retention"] },
          { id: "mq-fm-4", text: "Build the Tier 1 target list from existing relationships: supermarkets, fuel stations, hotels, pharmacies, importers and faith organisations", aaarrr: ["acquisition", "revenue"] },
          { id: "mq-fm-5", text: "Run Tier 1 discovery on how each business takes and settles payments today, then propose POS, Corporate IB, QR, bulk settlement and a dashboard with the approved fee terms", aaarrr: ["acquisition", "revenue"], flags: [{ type: "data-required", note: "Fee terms are pending approval. POS has been deployed to only a few Freetown merchants and no merchant dashboard exists yet, so the dashboard demo depends on one being built." }] },
          { id: "mq-fm-6", text: "Set up Tier 1 merchants: install POS and QR, train till staff at the till, and fix the frosted decal at the entrance", aaarrr: ["activation"] },
          { id: "mq-fm-7", text: "Check settlement weekly for each Tier 1 merchant's first 30 days, fix issues within the agreed SLA, and ask for referrals to suppliers and neighbouring SMEs", aaarrr: ["retention", "referral"] },
        ],
      },
      {
        id: "mq-marketing",
        label: "Merchant Marketing & Content",
        items: [
          { id: "mq-mkt-1", text: "Run Krio and local-language community radio ahead of each market storm, with a market-of-the-week mention two to three days before", aaarrr: ["awareness"], flags: [{ type: "data-required", note: "Media budget, station rate cards and reach data are not yet supplied." }] },
          { id: "mq-mkt-2", text: "Air the weekly merchant tip slot on partner community stations in each live region, with a call-in where traders ask how cash-out works", aaarrr: ["awareness", "retention"] },
          { id: "mq-mkt-3", text: "Film weekly short-form 'Suad Di Market' episodes from live market storms, with traders' consent", aaarrr: ["awareness"], flags: [{ type: "uzo-to-confirm", note: "Overlaps the 'Suad Di Market' activation already in the ambassador section; run both on the same storm days rather than as separate events." }] },
          { id: "mq-mkt-4", text: "Share peer demo videos and a monthly merchant success story on Facebook, WhatsApp and radio", aaarrr: ["awareness", "referral"] },
          { id: "mq-mkt-5", text: "Run Facebook posts and ads aimed at business owners in live regions, and email existing SLCB business account holders from the 90-day merchant email campaign", aaarrr: ["acquisition"] },
          { id: "mq-mkt-6", text: "Send USSD and SMS prompts to customers near live markets, reminding them to pay at SLCB Moni merchants", aaarrr: ["activation"], flags: [{ type: "data-required", note: "SMS rules and opt-in are not yet confirmed, and the bulk SMS vendor fix is still pending after the last outage." }] },
        ],
      },
      {
        id: "mq-activation",
        label: "Merchant Activation, Dormancy & Win-Back",
        items: [
          { id: "mq-act-1", text: "Day 0: after the live test payment, hand over the 'first 5 payments' card with the first stamp filled", aaarrr: ["activation"] },
          { id: "mq-act-2", text: "Day 1: send a WhatsApp welcome voice note. Day 3: call and ask the merchant to check a payment live by USSD", aaarrr: ["activation"] },
          { id: "mq-act-3", text: "Day 7: revisit every merchant with too few genuine payments. Day 14: market leader nudge and a customer wallet push nearby", aaarrr: ["activation", "retention"] },
          { id: "mq-act-4", text: "Day 30: set each merchant's status as active, at risk or dormant", aaarrr: ["retention"] },
          { id: "mq-act-5", text: "Issue a dormancy report every Monday: at-risk and dormant merchants by region and squad, top reasons this week, win-back calls made and merchants reactivated, and markets above the regional average", aaarrr: ["retention"] },
          { id: "mq-act-6", text: "Win back dormant merchants by reason code: no customers paying (open wallets nearby), could not cash out (fix agent float), payment or fraud fear (resolve the case and re-demo the SMS check), fees (explain approved fees), forgot PIN (reset), moved or closed (update the record)", aaarrr: ["retention"] },
          { id: "mq-act-7", text: "Run a monthly one-hour help desk at each live market", aaarrr: ["retention"] },
        ],
      },
      {
        id: "mq-scorecard",
        label: "Merchant Scorecard & Reporting",
        items: [
          { id: "mq-sc-1", text: "Report the weekly merchant scorecard by region every Monday: onboarded, cumulative against the target line, active rate, day-7 conversion, payments per active merchant, dormancy, squad yield, cash-out incidents, complaints within SLA, and customer wallets opened", aaarrr: ["retention", "revenue"], flags: [{ type: "assumed", note: "Thresholds for several measures are ASSUMED until set at the Month 3 review." }] },
          { id: "mq-sc-2", text: "Consolidate the scorecard on Monday and hold a Tuesday call with all Regional Managers to fix the top three blockers", aaarrr: ["retention"] },
          { id: "mq-sc-3", text: "Hold a monthly MD-level KPI review, with an escalated action plan within two weeks for the weakest region or route", aaarrr: ["retention", "revenue"] },
          { id: "mq-sc-4", text: "Hold a quarterly review where the assumptions behind the merchant plan are re-scored against actuals", aaarrr: ["retention"] },
        ],
      },
      {
        id: "mq-regional",
        label: "Merchant Regional Scale & Densify",
        items: [
          { id: "mq-reg-1", text: "Take squads live in Bo, Kenema and Makeni once the gates are green and market maps and leader agreements are in place", aaarrr: ["acquisition"] },
          { id: "mq-reg-2", text: "Extend a rotating squad to Port Loko and Koidu, then to the remaining districts", aaarrr: ["acquisition"] },
          { id: "mq-reg-3", text: "Publish a weekly league table by region to all squads", aaarrr: ["acquisition", "retention"] },
          { id: "mq-reg-4", text: "Return to every market already covered, to onboard the stalls that said no and add more stalls per market", aaarrr: ["acquisition"] },
          { id: "mq-reg-5", text: "Hold or escalate any region that falls materially behind its cumulative target line", aaarrr: ["acquisition", "retention"] },
        ],
      },
      {
        id: "mq-partners",
        label: "Merchant Partners & Value-Added Services",
        items: [
          { id: "mq-par-1", text: "Agree wallet-to-bank links and SMS reach with the telcos (Orange and Africell): reconciliation sign-off first, then service-level talks", aaarrr: ["acquisition", "revenue"] },
          { id: "mq-par-2", text: "Identify Sierra Leonean digital platforms (e-commerce, logistics or directory) for a bundled SME banking-plus-listing offer", aaarrr: ["acquisition", "revenue"] },
          { id: "mq-par-3", text: "Follow the Tithe Giving approach with faith organisations after launch, to reach congregations and vendors at events", aaarrr: ["acquisition"] },
          { id: "mq-par-4", text: "Set up cashless vendor zones at festivals and events", aaarrr: ["acquisition", "awareness"], flags: [{ type: "data-required", note: "Event dates and vendor lists are not yet confirmed." }] },
          { id: "mq-par-5", text: "Let merchants sell airtime and bill payments to their own customers", aaarrr: ["retention", "revenue"], flags: [{ type: "data-required", note: "Merchant commission on these sales is not yet confirmed." }] },
          { id: "mq-par-6", text: "Link merchant takings to a savings pot, using the Osusu and savings products", aaarrr: ["retention", "revenue"] },
          { id: "mq-par-7", text: "Never mention or promise credit at merchant onboarding; consider credit only after a merchant's transaction history has built", aaarrr: ["acquisition"], flags: [{ type: "conflict", note: "Standing rule from the playbook's council review: credit is not used to win traders." }] },
        ],
      },
      {
        id: "mq-close",
        label: "Merchant Programme Close-Out",
        items: [
          { id: "mq-cl-1", text: "Run a second Bumper Season with customer payment prompts", aaarrr: ["activation"], flags: [{ type: "data-required", note: "Pending approval, as with the first Bumper Season." }] },
          { id: "mq-cl-2", text: "Keep acquiring merchants while giving squads more time for activation and win-back", aaarrr: ["acquisition", "retention"] },
          { id: "mq-cl-3", text: "Document the SOPs that worked and hand each one to a named business-as-usual owner", aaarrr: ["retention"] },
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
          { id: "p2-out-5", text: "Deploy OOH placements at provincial motor parks, central markets, and agent locations in Bo, Kenema, Makeni, and Koidu, mirroring the urban placement logic rather than isolated roadside boards", aaarrr: ["awareness", "acquisition"] },
          { id: "p2-out-6", text: "Extend radio-led national reach with regional TV where local signal allows", aaarrr: ["awareness"] },
          {
            id: "p2-out-7",
            text: "Consider OOH placements in border-trade towns feeding cross-border corridor traffic, aligned to the programme's cross-border banking interest",
            aaarrr: ["awareness"],
            flags: [{ type: "assumed", note: "The relative traffic and commercial weight of specific provincial and border towns is not ground-truthed in the source strategy; confirm before splitting OOH placement between them." }],
          },
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
        id: "p2-digital-literacy",
        label: "Digital Literacy Programme: Agent & Community Delivery",
        items: [
          {
            id: "p2-dl-1",
            text: "Train informal savings clubs as whole groups so members complete the proof transaction together and see peers succeed",
            aaarrr: ["activation", "acquisition"],
            flags: [{ type: "data-required", note: "Fit with an existing or planned group savings product is not yet confirmed." }],
          },
          {
            id: "p2-dl-2",
            text: "Pay agents a small bounty only on a completed, verified proof transaction, not on headcount enrolled",
            aaarrr: ["activation"],
            flags: [{ type: "data-required", note: "Bounty rate is not yet set and requires BSL clearance before it can be communicated to agents." }],
          },
          {
            id: "p2-dl-3",
            text: "Run a weekly local-language radio segment where listeners complete a live USSD balance check alongside the presenter",
            aaarrr: ["awareness", "activation"],
            flags: [{ type: "assumed", note: "Krio, Temne, and Mende scripts are [ASSUMED] pending cultural-consultant validation, per the standing rule already applied elsewhere in this programme. Counting a listener as trained needs a separate follow-up step at an agent or branch." }],
          },
          {
            id: "p2-dl-4",
            text: "Credit a small airtime reward on completion of the proof transaction, to prompt an immediate second transaction",
            aaarrr: ["activation", "retention"],
            flags: [{ type: "data-required", note: "Reward cost is not yet set and requires BSL clearance before it can be communicated." }],
          },
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
          { id: "p4-claim-1", text: "New creative layer runs across all channels making the Disruption idea fully explicit", aaarrr: ["awareness", "retention"], owner: "Creative Director" },
          { id: "p4-claim-2", text: "Brand film: real stories of Sierra Leoneans whose financial lives changed with Moni", aaarrr: ["awareness"], owner: "Creative Director" },
          { id: "p4-claim-3", text: "Outdoor placements in Freetown, if budget permits", aaarrr: ["awareness"], flags: [{ type: "assumed", note: "Source marks this conditional on budget availability." }] },
          { id: "p4-claim-4", text: "MD opinion piece in national press: SLCB Moni's role in Sierra Leone's digital economy", aaarrr: ["awareness"] },
          { id: "p4-claim-5", text: "Run an NPS-informed creative refresh across TV and OOH, using the first full-year NPS and usage review to guide it", aaarrr: ["awareness", "retention"] },
          { id: "p4-claim-6", text: "Rotate underperforming OOH sites and expand placement where usage data supports it", aaarrr: ["awareness", "acquisition"] },
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
