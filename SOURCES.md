# Source provenance (internal — not rendered in the app)

Primary source (Gantt, Matrix, Risks & Assumptions tabs): the Execution Partner (Beyond The Visual) ×
Integra Sys SLCB Moni Wallet Scope of Work, "Scope of Work, Strategic Approach, and Plan of Action,"
dated 17 August 2026, published at `slcbmoniproposal.netlify.app`. Every "BTV" reference in the
original is relabelled "Execution Partner" in this app's UI per Uzo's instruction (2026-09-15) — the
underlying scope, deliverables, risks, and assumptions are otherwise transcribed as written, not
reworded.

Second source (Project Management tab only, added 2026-09-16): `SLCB_Moni_18Month_Campaign_v2.pptx`
— "Watch It Grow," the 18-month campaign architecture using the TBWA Disruption® strategic framework,
prepared by Uzo Achebe, dated September 2026 (25 slides). Slides 13-24 used: Channel Strategy, Phase
Overview, Phases 0-4 detail, 18-Month Rollout Calendar, Activities & Materials, Partnerships,
Measurement Framework, Evaluation Cadence. BTV appears here too, named as Strategic Creative Agency
"(pre-award)" — relabelled "Execution Partner" for consistency with the rest of this app.

## Project Management tab — what was deliberately left out, per instruction

- **No dates or phase durations shown anywhere in this tab** (no "Month 1-3," no "18-month" framing) —
  per Uzo's instruction that mixing this campaign's longer horizon with the Gantt tab's Sep 2026-onward
  window would confuse a reader. Phase names (Foundation & Proof, Ignition Launch, Amplification,
  Deepening, Dominance) are kept as section headers since they carry no date information themselves.
- **No monetary or KPI-count figures at all** — not flagged `[PROPOSED]`, excluded outright, per
  instruction ("no budget has been validated, so target figures could be detrimental"). This is a
  broader exclusion than the Gantt/Matrix tabs (which already excluded budget and headline KPI
  figures) — extended here to cover every prize amount (Biznis Di Move, Mama Sabi Sabi, education
  prize, referral bonuses), every growth-KPI count (active users, merchants, agents, followers,
  conversations), and every rating/NPS target in the source deck's slide 23 KPI table and elsewhere.
  Where a figure was load-bearing to the task description (e.g., an agent referral bonus), the task
  is described without the amount and flagged `DATA REQUIRED` noting the amount is pending
  confirmation.
- Two internal date inconsistencies in the source deck itself are flagged without reproducing the
  actual target counts: the merchant-QR network milestone is dated differently in the evidence
  register/closing slide vs. the KPI table; the 700-agent milestone is dated differently on slide 17
  vs. the KPI table on slide 23. Neither is resolved — both are flagged on the Phase 3 KPI Checkpoint
  item.
- The user's own supplied Pre-Launch bullet list was reconciled against the deck's own Phase 0
  sections: the four Agent items are near-verbatim matches to the deck's existing "Agent Network
  Readiness" block (not duplicated — the deck's own phrasing is used as canonical). The six Internal
  Comms items (t-shirts, branch internal branding, intranet/display screens, staff email/WhatsApp
  broadcast, WhatsApp display-profile mandate, HQ wall drape) are genuinely new — not present under
  any heading in the source deck — and were added as their own "Internal Comms" section under Phase 0.
- AAARRR tags are mandatory on every item in this tab (unlike the Gantt/Matrix tabs, where tags are
  scoped to only two of the six BTV workstreams) — per Uzo's explicit instruction for this addition.

## Third and fourth sources (Project Management tab, added 2026-09-16)

`SLCB_Moni_Brand_Platform_Differentiation_Strategy v2.docx` (brand purpose, positioning statement,
four brand values, seven-segment/three-tier audience architecture, "Gate 01" approval checklist —
September 2026) and `SLCB_Phase1_Research_Diagnostic_Report v2.docx` (fintech/banking landscape,
competitor benchmark incl. Vult and Flot, consumer segmentation, localization & cultural insight —
four sub-documents, September 2026).

**Governing rule applied to both, stated explicitly by Uzo mid-build:** only line items that need to
be *executed* to drive Awareness, Acquisition, Activation, Retention, Referral, or Revenue belong in
this tab — strategy rationale, evidence tables, and competitive analysis do not, however well-argued.
This meant most of both documents was excluded. What passed the bar:

- **From the Brand Platform doc:** a new "Brand Foundation — Gate 01" phase, added before Phase 0 —
  (1) one hard-gate item ("close Gate 01 in writing before any visual identity or creative design work
  begins" — the source's own words: "nothing visual is designed until this gate closes"); (2) four
  Brand Values reframed as concrete build/production requirements (USSD feature parity, honest
  in-app status states, visible savings/credit progress, Sierra-Leone-specific creative) rather than
  the source's abstract value language; (3) nine Audience-to-Brand Models, one per segment plus
  community leaders, each already phrased in the source as an execution directive (e.g. "wallet
  first, bank second" for unbanked youth) rather than a description.
  **Explicitly dropped** despite being in the source's own "Approval Checklist": five items that were
  strategy-quality reflection questions for leadership ("is the brand purpose different enough...",
  "does positioning reflect what leadership wants...", "are the values specific enough...") — these
  don't themselves drive AAARRR execution, so they were cut even though the source presents them as
  a checklist.
- **From the Phase 1 Diagnostic Report:** three items only — Temne-language copy validation for
  Northern Province (Makeni) and Mende-language validation for Southern/Eastern Province (Bo,
  Kenema), added to Phase 0's existing Cultural & Copy Validation section (which previously only
  named Krio); and one messaging-execution directive splitting government-ownership messaging by
  segment (safety/permanence vs. speed/human-presence), added to the Audience-to-Brand Models
  section. Everything else in this 246-line, four-document research pack — the competitor benchmark
  matrix (Orange Money, Afrimoney, Vult, Flot, SafulPay, Casham, EziPay SL), the banking-sector
  landscape figures, the consumer segmentation tables, and the trust/localization findings — is
  evidence and rationale, not an execution task, and was excluded even where individually well
  documented and sourced.

## What was extracted, verbatim or structurally faithful

- **Six execution workstreams** (§ Scope) — full scope overview + all named deliverables for each.
  Total deliverable count: 4+4+4+4+4+5 = 25, all present across `src/lib/data/activities.ts`.
- **AAARRR framework** — stage definitions and priority ranking (Awareness=primary, Acquisition=secondary,
  Activation=tertiary, Retention/Referral/Revenue=post-launch) taken directly from the source's own
  "PRIMARY/SECONDARY/TERTIARY/POST LAUNCH OBJECTIVE" labels.
- **Execution Framework & Workstream Matrix** (§14) — the Governing Stakeholders column per workstream,
  quoted verbatim (with "BTV" -> "Execution Partner"): Research & Analysis (Execution Partner Strategy
  Team & Integra Sys); GTM Strategy & Planning (Execution Partner, Integra, & SLCB Leadership); MarComms
  Development (Execution Partner Creative & Head of Digital Banking); Creative Ideation (Execution Partner
  Creative Director & Suad Baydoun Management); Asset Production (Production Partners & Execution Partner
  Operations); Execution Support (Execution Partner, Integra, SLCB, & BSL Regulators).
- **Sep-Dec 2026 monthly action plan** (§10-13) — used to sequence and cross-link activities across
  workstreams (dependsOn chains), not just place four unconnected bars per month.
- **Risks & Mitigation table** (8 rows) and **Assumptions & Dependencies table** (7 rows, not 6 — the
  brief's own open-items list under-counted this) — both transcribed verbatim in `src/lib/data/risks.ts`.
  Note: Assumption 1 ("User Tech Literacy") reads "basic digital, job-search, and AI interaction literacy"
  in the source document itself — quoted exactly as written even though "job-search" reads as template
  boilerplate mismatched to a banking wallet campaign; not corrected, per the no-fabrication rule.
- **Data Privacy & Compliance** (assumption 7) is carried forward marked `unresolved: true` in the UI, per
  Boundaries — the source itself only states it as an open assumption, never as resolved.

## Not included, by instruction

- No dollar figures anywhere in the app (Context: "Don't feature the budget anywhere in the workplan";
  Finance director: same). The source's own $59,889.75-$59,989.75 budget total (with a $100 discrepancy
  between its live-site and PDF-export figures, carried over from the prior SLCB Moni Master Workplan
  build's research) is not reproduced here at all.
- No fabricated "Status" field. Unlike the SLCB Moni Master Workplan (built from live-tracked internal
  spreadsheets with real Completed/Ongoing/Yet-to-Commence data), this source is a forward-looking scope
  of work with no status data of its own — inventing status values would be fabrication. Matrix columns
  match the brief's own required set exactly: Workstream, Deliverables, Execution Window, Governing
  Stakeholders, AAARRR Stage.

## Calls made per the brief's "decide + flag, don't block" instruction

1. **"Official Launch Execution" mapping** — split: the MarComms channel-activation deliverable maps to
   Soft Launch (Oct); Asset Production's merchandising/logistics continues through Main Launch prep.
   Flagged `UZO TO CONFIRM` on `ws3-launch-execution`.
2. **December retention phase** — shown starting at Main Launch per the source's own Month 4 dating,
   flagged `UZO TO CONFIRM` on `ws6-retention-handover` since the Soft/Main split could plausibly move
   retention earlier (immediately after Soft Launch) instead.
3. **Budget Rules-bullet contradiction** — Rules bullet 3 ("preserve fixed-vs-estimated budget distinction
   in every view that shows a dollar figure") conflicts with Context/Finance's explicit "don't feature
   budget anywhere." Followed the more specific, more recent instruction: no budget anywhere. The Rules
   bullet is moot since no view shows a dollar figure.

## Repo/deploy decisions confirmed by Uzo (2026-09-15, in chat)

- Repo visibility: public.
- Vercel account: same as the prior SLCB Moni Master Workplan build (`uzoachebe-5536`).

## Post-launch revisions (2026-09-15, in chat, after first deploy)

1. **Header simplified** — removed the subtitle paragraph, the stats line, and the amber
   "restates, does not originate" banner from the page top, per Uzo's request to show just the main
   H1. The BTV-not-approved disclosure is not deleted — it remains in the Legend (present on both
   Gantt and Matrix views: "Launch milestone (Uzo's addition — not in source proposal)"), on the
   milestone objects' own `note` fields, and here in SOURCES.md. Compliance director's own criterion
   only required authorship/lineage be preserved "even if not in the Exco-facing UI itself."
2. **Workstream labels corrected** to match the source's own Execution Framework & Workstream Matrix
   (§14) naming exactly: Research & Analysis / GTM Strategy & Planning / MarComms Campaign Development
   / Creative Concept & Ideation / Asset Production & Rollout / Campaign Execution Support. The lane
   order was already correct; only the longer scope-section labels used in the first build have been
   swapped for the matrix's own shorter names. Matrix/Table view's default sort now follows this same
   proposal order (fixed from alphabetical, which had been silently reordering it).
3. **Timeline start moved to 15 Sep 2026** (from 1 Sep) and the grid is no longer capped at 31 Dec
   2026 — it renders through Jan 2027 with an "ongoing →" open-ended marker at the right edge, since
   the source's own Month 4 deliverable text extends into "Q1 2027 handover documentation." Added that
   handover deliverable explicitly to `ws6-retention-handover`, extending its end date to 2027-01-31.
4. **AAARRR tags scoped to Asset Production & Rollout and Campaign Execution Support only**, per
   Uzo's instruction that the framework only makes sense for granular, customer-facing execution
   actions — not upstream strategy/planning work. Research & Analysis, GTM Strategy & Planning,
   MarComms Campaign Development, and Creative Concept & Ideation activities now carry `aaarrr: []`.
   This is a deliberate narrowing of the earlier "AAARRR mandatory on every workstream" instruction
   from the original brief — the newer, more specific instruction governs. Filter logic updated so an
   untagged activity is never hidden by the AAARRR filter (empty array always passes).

## Fifth source (Project Management tab, added 2026-09-17)

`SLCB_BrandAmbassador_SuadBaydoun_ExecDoc.docx (1).pdf` — the Suad Baydoun Brand Ambassador
Utilisation Plan, an Executive Approval Document, May 2026. Unlike the two prior source documents
added to this tab, this one is genuinely execution-dense — real ATL/digital/TTL activation plans, not
strategy rationale — so most of its content passed the "must drive AAARRR execution" filter. Added:
a new Phase 0 "Ambassador Engagement" section (contract sign-off as a hard gate, brand onboarding,
content approval workflow) and a new Phase 1 "Suad Baydoun — Ambassador Activations" section (TVC,
billboard, newspaper, recurring radio co-host slot, a monthly content-cadence rule anchoring each
piece to a specific product feature, and the three named TTL activations: 'Suad on Campus,' 'Suad Di
Market,' and National Event Presence). Excluded per the standing rule: Section 6's financial contract
terms (duration, fees, exclusivity — administrative, not AAARRR-driving), Section 7's KPI/ROI targets
(same figures-exclusion convention as the rest of this tab), and Section 8's risk register (risk
content belongs in the separate Risks & Assumptions tab, not here). Section 9's approval/legal/budget
steps were also excluded as administrative, except the contract-signing step itself, which is kept as
a single hard gate since every ambassador-fronted Phase 1 execution depends on it.

## Structural review (2026-09-17) — added on request, not from any single source document

Acting as a senior project director / brand strategist reviewing whether following this tab would
actually deliver a successful campaign, four gaps were identified and closed:

1. **No measurement infrastructure setup.** The tab had extensive execution detail but nothing about
   building the tracking that would let any of it be measured — added a "Measurement Infrastructure"
   section to Phase 0 (UTM/promo-code tagging, KPI dashboard build, NPS/belief-shift baseline survey).
2. **No consolidated go/no-go gate.** Each Phase 0 exit condition existed as a separate item, but
   nothing made one person accountable for confirming all of them together before Phase 1's
   simultaneous, all-channel launch — added a "Launch Readiness Gate" section as the last item in
   Phase 0.
3. **No ongoing review/correction cadence.** Without a recurring feedback loop, nothing in the tab
   can be corrected mid-flight — added a "Performance Review Cadence" section to Phase 1 (weekly,
   monthly, quarterly), deliberately without the specific figures/targets that would otherwise belong
   here, consistent with this tab's standing no-figures rule.
4. **No incident/escalation protocol.** The source materials name real risk precedents (a prior Play
   Store removal, historical failed-transaction volume) but no execution task anywhere builds the
   response protocol itself — added to Phase 0's Regulatory & Legal section.

None of these four items trace to a specific source document — they're flagged `ASSUMED` or
`CONFLICT` in the data and marked "Added on review" in their own note text, so they remain
distinguishable from source-derived content.

## RACI model added (2026-09-17)

Every Project Management line item now carries a RACI assignment (Responsible, Accountable,
Consulted, Informed). Per Uzo's instruction, names are not invented — Accountable defaults to the
existing `owner` field where one was already set; all other roles render as "TBC" until Uzo supplies
names. The `raci` field on `PmItem` (see `src/lib/data/projectManagement.ts`) is ready to take real
names per item without any further structural change.

## Corrections applied (2026-09-17, in chat)

- Cultural & Copy Validation: copy master document now lodged with Corporate Services / Digital
  Banking & Financial Inclusion, not "Marketing."
- Agent Network Readiness: teller training scope widened to cover SLCB Moni, Osusu, and Moni Savings
  Circle registration together, not Savings Circle alone.
- Regulatory & Legal: the incident escalation protocol now names a specific receiving team per
  incident type (Reconciliation team for failed transactions, E-Channels for app instability,
  Director Corporate Services for ambassador conduct) with the defined path corrected from the MD to
  the CIO.
- Creative Production: the Execution Partner briefing corrected from "campaign creative" to
  "campaign strategy, to build creative concepts from the strategy" — a sequencing correction (brief
  the strategy first, creative concepts follow from it).
- Ambassador Engagement: the contract sign-off hard-gate item removed entirely, per instruction.
- Measurement Infrastructure: the KPI dashboard build item removed entirely, per instruction (the UTM
  tagging and NPS/belief-shift baseline items remain).
- Radio (Phase 1): the launch spot corrected to "'Watch It Grow' Creative Concept spot," consistent
  with the Creative Production sequencing correction above.

## Sixth source (Project Management + Risks tabs, added 2026-09-18)

`SLCB_Moni_Agent_Recruitment_Workplan.xlsx` (Workplan/34 rows, KPI Framework/7 metrics, Risk &
Action Log/6 risks, prepared by Integra Sys Limited, September 2026, marked STRICTLY CONFIDENTIAL on
the sheet itself). A well-structured, genuinely execution-dense workbook, so nearly all of it passed
the standing filter.

- **Project Management tab**: added a platform-readiness gate to Agent Network Readiness (the source
  repeats this same check twice, once as pre-sprint verification and once as a Week 2 risk gate;
  consolidated into one item here), an agent-count baseline confirmation, and three new sections —
  Segment A (convert competitor agents), Segment B (recruit new agents/jobseekers), and the Agent
  Referral Engine (Segment C). Also extended Cultural & Copy Validation (agent script/testimonial
  validation) and Performance Review Cadence (agent-specific tracking and reporting items).
- **Risks & Assumptions tab**: added all 6 risks from the source's Risk & Action Log, each with its
  own mitigation and owner folded into the mitigation text.
- **Excluded per the standing no-figures rule**: every specific quota, percentage, and count target
  in the source's KPI Framework sheet (monthly per-officer quota, training completion rate,
  transaction-volume growth, distribution-mix share, and the cumulative year-end agent-count target)
  — tasks that reference a quota or target are described without stating the number.
- **Conflict surfaced, not resolved**: the source's own KPI Framework sheet states that three
  internal SLCB documents give differing overall agent-count targets, and points to "Workplan tab,
  Section 1" for a reconciliation action that does not actually appear as a named task there. Flagged
  on the agent-baseline item without reproducing any of the three figures.

## Sequencing tab added (2026-09-18)

A fifth tab, built at Uzo's request ("act as a senior GTM/deployment strategist... sequence the
different line items"). Rather than duplicating Project Management content, `sequencing.ts` groups
every one of the PM tab's 38 sections into 8 dependency-based "waves" (`src/lib/data/sequencing.ts`),
resolved live against `PM_PHASES` at render time — there is no forked copy of any item text, so the
two tabs cannot drift out of sync with each other. One item (the Mi Yone Teller platform-readiness
gate) is cross-referenced into Wave 1 by id even though its home section sits in Wave 3, since it's a
universal blocker rather than a Field & Channel Readiness task specifically. Wave ordering reflects
GTM sequencing logic (brand/platform sign-off, then build/train, then field readiness, then a
go/no-go gate, then simultaneous launch, then concurrent review alongside amplification and category
dominance) rather than the Phase 0-4 thematic grouping used in the Project Management tab itself.

## Seventh source (Project Management tab + new Digital Paid Media phase, added 2026-09-18)

`SLCB_Complete_Strategy.pptx.pdf` ("SLCB Optimised Digital Revenue & Growth Strategy," Uzo Achebe,
April 2026, 23 slides). Re-read in full for this addition (previously only summarized at a high
level earlier in this engagement). Notably, this document's own "Digital Marketing Strategy" section
is about product-led growth and organic distribution, not paid advertising — it explicitly frames
the sequence as "Fix, then Reliable, then Referral, then Paid" and cites a zero-paid-marketing
benchmark. There is no paid-media plan to extract from this source; the Digital Paid Media phase
described below was built separately, using the "Paid Digital Media Amplification" deliverable
already established in the Execution Partner's own scope (Gantt/Matrix tab) plus standard paid-media
practice, and sequenced per this document's own Fix-Reliable-Referral-Paid logic.

**Genuinely new items extracted and added to existing sections** (all passed the standing
"must drive AAARRR execution" filter):
- Product Stability (Phase 0): three pre-campaign product-reliability fixes the source names as
  hard gates before any digital campaign launches (SMS/OTP gateway SLA, salary-advance flow audit,
  self-service card unblock), plus a monthly public uptime-publication commitment.
- Staff Training (Phase 0): an in-branch digital enrolment station, a standardised teller script, a
  bank-wide staff referral programme (distinct from the existing per-branch Digital Champion
  incentive), and a per-branch digital help desk.
- SMS Blast (Phase 1): an automated onboarding drip (day 0-30) and re-engagement drip (30-day
  inactivity trigger), plus a permanent USSD "Refer a Friend" prompt.
- Merchant QR Expansion (Phase 3): identifying Sierra Leonean digital platform partners for a
  bundled SME banking-plus-listing offer.
- Two new Phase 1 sections: QR Sticker Distribution Campaign (attribution-tracked placement at
  market stalls, transport, pharmacies, campuses, branches) and Traditional Media Content Rules
  (one-message-per-billboard with QR attribution, real customers not actors in TV content, radio
  live-reads treated as endorsement not advertising).
- **Excluded per the standing no-figures rule**: every specific count in the source (50,000 stickers,
  the exact SMS message copy with cashback amounts, the 9-university/4K-student campus figures, the
  700-agent/2,500-merchant/SLE 60M targets already covered elsewhere) — tasks describe the mechanic,
  not the number.

## Digital Paid Media phase added (2026-09-18, at Uzo's explicit request)

A new cross-cutting phase (not one of the source strategy's five campaign phases), with the four
subsections named in the request: Digital Paid Media Plan, Digital Paid Media Deployment, Weekly
Reporting & Milestones, and Measurement. Positioned between Phase 1 and Phase 2 in the Project
Management tab's display order, but split across three different Sequencing-tab waves to reflect
when each subsection actually happens: the Plan subsection sits in Wave 2 (Build, Train & Validate,
since it's pre-launch setup), Deployment sits in Wave 5 (Ignition Launch, where paid spend actually
goes live), and Reporting/Measurement sit in Wave 6 (Sustain & Review, since they're ongoing/
concurrent activities). No monetary or KPI figures appear anywhere in this phase, consistent with
every other tab. The plan's own hard gate (paid spend does not begin until the three product-fix
gates and BSL clearance are confirmed) cross-references the existing Regulatory & Legal section
rather than duplicating it.

## Eighth and ninth sources (Project Management, Sequencing, Risks & Assumptions tabs, added 2026-09-18)

`SLCB_Moni_Creative_Deliverables_Scope.docx` (comprehensive ATL/BTL/TTL/Digital creative deliverables
scope for the Execution Partner, iNTEGRA Sys Limited, September 2026) and
`SLCB_Moni_OOH_TV_Strategy_18Month_Workplan.docx` (OOH & TV Visibility Strategy and 18-Month Workplan,
same author, same month). Per Uzo's instruction, both were folded into the *existing* Creative
Production section and existing Phase 0-4 structure rather than creating a redundant new top-level
phase — the OOH/TV document's own five phases (Pre-Launch Readiness / Launch & Ignition / Urban
Consolidation / Hinterland Expansion / Sustain & Optimize) map conceptually onto this app's existing
Foundation & Proof / Ignition / Amplification / Deepening / Dominance phases, so its content was
distributed across those instead of duplicating the phase structure.

- **Creative Production section (Phase 0) extended** from 4 to 13 items. The ~50 individual
  deliverables listed in the Creative Scope document (TVC hero film and cutdowns, radio jingle and
  scripts, print ads, billboards, fliers, brochures, agent kits, USSD scripts, branch signage, ATM
  wraps, digital display/carousel/video ads, and more) were consolidated into bundled items by
  channel line (ATL suite, BTL suite, TTL suite, Digital suite, remaining Foundational items) rather
  than listed one-by-one, consistent with this tab's practice of describing the mechanic rather than
  enumerating every asset. Two items were kept as their own line rather than bundled because the
  source itself calls them out as hard sequencing gates: the Master Brand Toolkit & Style Guide
  ("commission first, every other deliverable depends on it") and the Localization/Translation Matrix
  (gates all Krio/Temne/Mende content). One item — Branch Exterior Signage — is flagged `BLOCKED`
  rather than added as a live task, since the source itself states it cannot proceed until the
  replacement brand platform name is confirmed (the "Nar Wi Bank" platform is retired).
- **Conflict surfaced, not resolved:** the Creative Scope document treats the brand palette as
  ambiguous (confirmed navy/red alongside inconsistent secondary references to an oxblood and gold),
  while the OOH/TV Strategy document treats navy (#1B2A6B) and red (#E2233B) as fully confirmed with
  no gold or oxblood accent. Flagged as a `conflict` on the relevant Creative Production item rather
  than silently picking one document's version.
- **New Phase 0 section "TV & OOH Media Strategy"** (5 items): TV tier confirmation (the source's
  three-tier station framework — national reach, Freetown urban, faith & community — each with a
  distinct content role), an OOH placement-typology framework (transit corridors, urban core,
  provincial hubs, since Sierra Leone has no public OOH vendor/site register), BTV contracting
  confirmation (flagged `data-required`, since Phase 1 media buying depends on a signed SOW), a full
  national FM radio register pull (flagged `data-required`, only Bo District is currently verified),
  and audience-measurement commissioning (flagged `data-required`, since NATCA does not publish
  ratings data).
- **New Phase 1 section "OOH & TV: Launch Rotation"** (5 items): Tier 1 brand-film heavy rotation,
  Tier 2 launch cutdowns, the national radio drumbeat, the Freetown urban + Lungi transit-corridor OOH
  rollout, and the airport/ferry pre-positioning called out as the source's own "Vision" touchpoint
  (a traveller from Lungi to a provincial market encountering the brand at the ferry queue, the road
  corridor, the market, and the agent counter).
- **Outside-Freetown Launch (Phase 2) extended** with 3 items drawn from the OOH/TV document's Phase
  3 (Hinterland Expansion): provincial motor-park and market OOH in Bo/Kenema/Makeni/Koidu, regional
  TV placement where local signal allows, and border-town OOH aligned to the programme's cross-border
  banking interest (flagged `assumed`, since relative provincial commercial weight is not yet
  ground-truthed).
- **Category Claim Campaign (Phase 4) extended** with 2 items from the OOH/TV document's Phase 4
  (Sustain & Optimize): an NPS-informed creative refresh and a rotation of underperforming OOH sites
  toward locations NPS/usage data supports.
- **Sequencing tab updated** to preserve 1:1 coverage: `p0-ooh-tv` added to Wave 2 (Build, Train &
  Validate), `p1-ooh-tv-launch` added to Wave 5 (Ignition Launch). Verified by cross-check script:
  all 46 Project Management sections are referenced in exactly one Sequencing wave, no duplicates, no
  gaps.
- **Risks & Assumptions tab extended** with 6 new assumptions (`assum-8` through `assum-13`), taken
  directly from the OOH/TV document's own "Assumptions & Data-Gaps Log": BTV contracting/execution-
  window dates, OOH vendor/site inventory, the national FM radio register, TV/radio audience
  measurement, provincial town commercial weight, and Months 13-18 contracting authority (which falls
  outside the programme's stated 12-month engagement horizon). All marked `unresolved: true`.
- **Excluded per the standing no-figures rule:** the OOH/TV document's own Month-12 KPI targets
  (30,000 wallet users, 5,000 USSD users, 700 agents, 25,000 merchants) and its "OOH budget in NLE"
  data-gap line, since no budget has been validated.
- **Gantt/Matrix tab deliberately not touched.** That tab is a verbatim, single-source restatement of
  the Execution Partner's own Scope of Work; these two documents originate from the Digital Strategy
  Consultant, not the Execution Partner, so adding their content there would break that tab's standing
  fidelity rule. Everything extracted from both documents therefore lives only in the Project
  Management, Sequencing, and Risks & Assumptions tabs.

## Tenth source (Project Management, Sequencing, Risks & Assumptions tabs, added 2026-09-24)

`SLCB_Digital_Literacy_50K_Programme.pptx` (digital literacy programme design for staff and customers,
targeting 50,000 people trained in digital banking by 2027, Strategy Pillar 4: Financial Inclusion &
Literacy, iNTEGRA Sys Limited, September 2026, 13 slides). A genuinely execution-dense document —
delivery mechanics, a proposed measurement definition, and a phased channel model — so most of it
passed the standing "must drive AAARRR execution" filter, distributed across three existing phases
rather than a new top-level one.

- **New Phase 0 section "Digital Literacy Programme: Foundations & Tracking"** (7 items): sign-off on
  a single working definition of "trained" (one live, self-completed, phone-number-logged transaction,
  flagged `assumed` since the source proposes but does not confirm it), extending the already-planned
  Branch Digital Migration Tracker to capture training entries (flagged as a hard gate, since the
  source states the tracker itself is still pending approval and the core banking system has no
  real-time integration to count transactions automatically), a weekly de-duplication reconciliation
  step, and four `data-required` confirmations the source itself lists as blocking: the programme
  deadline, channel-planning inputs (tellers per branch, active agents, institutional headcounts,
  staff count), the baseline number already trained, and the branch count used for planning.
- **New Phase 1 section "Digital Literacy Programme: Branch & Institutional Delivery"** (7 items): a
  counting rule for teller-assisted training (credit only self-completed transactions), a PIN-safety
  and scam-awareness opening for every session, a banking-hall queue-screen loop (flagged
  `data-required` and explicitly scoped as awareness-only, not a counted completion, since the
  customer isn't transacting personally), payday sessions for police and military at pay points
  (flagged `data-required` for headcounts), campus fee-deadline sessions with a "teach one family
  member" step (flagged `assumed, to test`, per the source's own framing), a youth-ambassador
  household challenge (flagged `uzo-to-confirm`, cross-referenced to the existing Suad Baydoun
  ambassador section, since the source notes branding was not engaged in the last Youth Day activity
  and asks that this be fixed first), and holding the congregation-wide rollout until Moni Wallet
  goes live (flagged as a hard gate, cross-referencing the same go-live dependency used elsewhere in
  this tab).
- **New Phase 2 section "Digital Literacy Programme: Agent & Community Delivery"** (4 items): training
  informal savings clubs as whole groups (flagged `data-required` for fit with a group savings
  product), paying agents a bounty only on a verified proof transaction rather than headcount
  (flagged `data-required` for rate and BSL clearance), a weekly local-language radio dial-along
  segment (flagged `assumed` pending Krio/Temne/Mende cultural-consultant validation, consistent with
  the standing rule already applied to language content elsewhere in this programme), and a small
  airtime completion reward (flagged `data-required` for cost and BSL clearance).
- **Reporting cross-reference added**, not a new section: a new item in the existing Performance
  Review Cadence section reporting the digital-literacy trained count by channel each month alongside
  30-day active-use figures on Moni Wallet and USSD, per the source's own point that training is the
  input and active use is the outcome, and the two should be reported side by side.
- **Existing agent-count conflict flag extended, not duplicated:** this source corroborates the
  agent-count conflict already flagged on `p0-agent-5` (naming two of the three documents already
  referenced there); the existing flag's note was extended to record the corroboration without adding
  a fourth figure.
- **New conflict surfaced:** the source's own risk slide notes that two internal SLCB documents (the
  cascade training deck and the promotional strategy analysis) give different total branch counts.
  Flagged on a new item in the Foundations & Tracking section without reproducing either figure,
  consistent with this tab's standing rule.
- **Excluded per the standing no-figures rule:** the 50,000 headline target itself, and every
  percentage, per-day, per-month, and per-teller figure the source uses to derive it (the 15-month
  window, the 3,333/month and 152/day derived figures, the ≈30 tellers/day figure, the channel-split
  percentages, and the three phase-by-phase cumulative targets). Tasks describe the mechanic the
  figure would drive, not the number itself. The 26/100 national digital-literacy baseline score and
  the other UNCDF/MFW4A context statistics on the source's second slide are landscape evidence, not
  an execution task, and were excluded entirely along with the rest of that slide's "why this
  programme is needed" framing.
- **New assumptions added to Risks & Assumptions** (`assum-14` through `assum-16`): the digital-
  literacy programme deadline (the source proposes 31 December 2027 but flags that an earlier reading
  of "by 2027" would roughly triple the required pace), the trained-to-date baseline (no figure exists
  yet), and the branch-count conflict noted above. All marked `unresolved: true`.
- **Sequencing tab updated** to preserve 1:1 coverage: `p0-digital-literacy` added to Wave 2 (Build,
  Train & Validate), `p1-digital-literacy` added to Wave 5 (Ignition Launch), `p2-digital-literacy`
  added to Wave 7 (Amplification & Deepening). Verified by cross-check script: all 49 Project
  Management sections are referenced in exactly one Sequencing wave, no duplicates, no gaps.
- **Gantt/Matrix tab deliberately not touched**, for the same reason as the ninth source above: this
  document originates from the Digital Strategy Consultant, not the Execution Partner.
