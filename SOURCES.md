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
