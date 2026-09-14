# Source provenance (internal — not rendered in the app)

Single source: the Execution Partner (Beyond The Visual) × Integra Sys SLCB Moni Wallet Scope of Work,
"Scope of Work, Strategic Approach, and Plan of Action," dated 17 August 2026, published at
`slcbmoniproposal.netlify.app`. Every "BTV" reference in the original is relabelled "Execution Partner"
in this app's UI per Uzo's instruction (2026-09-15) — the underlying scope, deliverables, risks, and
assumptions are otherwise transcribed as written, not reworded.

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
