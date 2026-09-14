# SLCB Moni Wallet — Launch Workplan

Interactive Gantt/timeline and matrix workplan translated directly from the Execution Partner
(formerly referred to as BTV) × Integra Sys "Scope of Work, Strategic Approach, and Plan of Action"
for the SLCB Moni Wallet launch campaign (17 Aug 2026, Sep-Dec 2026 execution window).

This is a **restatement**, not a new strategy — every workstream, deliverable, risk, and assumption
traces back to the source proposal. The only additions are the Soft Launch (2nd week Oct 2026) and
Main Launch (Dec 2026) milestones, which are Uzo's own revision on top of the source document's
single "Official Product Launch" framing, and are flagged as such throughout the UI.

Built matching the stack precedent of `slcb-digital-income-dashboard` and
`SLCB-Moni-Master-Workplan` (Next.js 14, GitHub -> Vercel).

## Three views, one dataset

- **Gantt / Timeline** — six workstream swimlanes, Sep-Dec 2026, with Soft Launch and Main Launch as
  fixed milestone lines. Cross-workstream dependencies are wired explicitly (dependsOn), not just
  four unconnected bars per month.
- **Matrix / Table** — Workstream, Deliverables, Execution Window, Governing Stakeholders, AAARRR
  Stage — the exact columns specified in the brief, filterable by workstream and AAARRR stage.
- **Risks & Assumptions** — the source's 8-row Risks & Mitigation table and 7-row Assumptions &
  Dependencies table, rendered as their own section, not folded into the Gantt.

No dollar figures appear anywhere in the app, per instruction.

## Data model

`src/lib/data/activities.ts` and `src/lib/data/risks.ts`. See `SOURCES.md` (not rendered in the app)
for full provenance and the calls made where the source's Month 2 "Official Launch Execution" had to
be split across Uzo's Soft/Main launch structure.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Public GitHub repo (`uzoachebe-art/SLCB-Moni-Launch-Workplan`) -> Vercel, auto-deploying on push to
`main`. No environment variables required — static planning dataset.
