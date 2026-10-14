# Validity, reliability and methodological-quality update — 14 October 2026

## What was implemented
A searchable, status-filtered study assessment register in Statistical Glossary → Validity and Reliability. Nineteen assessment entries cover data quality, histopathology, diagnostic count reconciliation, thresholds, abdominal scan, laboratory measurements, diagnostic combinations, bias, prediction-model internal evaluation, external validation, severity, subgroups, negative appendicectomy, confidence-instrument validity, internal consistency, reader/retest reliability, pairing/clustering, costs and statistical methods.

Each entry states the relevant scopes, why it matters, method/evidence, current-data feasibility, assumptions, actual findings, status and next action. Links open relevant objective details, variable definitions, output scopes and Reports. Shared Back retains the origin. The register provides Expand/Collapse and local JSON inventory download. Register filters restore through shared history; assessment report selections remain separate from navigation state and participant data. Selections are memory-only and reset when the dataset changes.

Every one of the 86 catalogue outputs has a method/reporting record and links to relevant assessments. The existing 14 supporting aggregate templates have their reporting audit displayed separately. Mapping every output is not a claim that every analysis has been calculated or that its assumptions have been established. Only six representative outputs were recalculated from the original source in this update.

## Scientific decisions
- No green overall “valid” badge. Calculation success is not validity.
- Histology disease status remains codes 1–5 positive and code 6 negative. Simple/complicated severity is a separate recorded crosswalk.
- Fixed MAS ≥7 and CRP >3 classifications are independently reconciled on common eligible cases. The CRP cutoff remains laboratory elevation, not a newly validated diagnostic threshold. Only same-population d1 fixed-strategy logs are compared.
- Existing Firth models, held-out AUC, Brier scores and log loss are read from actual calculated logs. No new model, calibration slope/intercept, full-pipeline optimism correction, external validation or ultrasound/WBC rule is fabricated.
- Original protocol, scan modality/indeterminate mapping, assay documentation and combined Boolean rules remain pending.
- Confidence is two single-item ordinal time points. Cronbach alpha/factor analysis as an invented two-item scale is not applicable. Before/after information is not a stable-condition test–retest design. Expert/content/construct evidence and clinician linkage are missing.
- Bias/applicability, specimen quality/blinding, subgroup interaction and costing assumptions require documentation or additional data. Operated-cohort histology completeness does not eliminate source-population verification bias.
- Costs do not establish incremental savings or cost-effectiveness without pathway comparators, resource/cost definitions and outcomes.
- Method guidance cites STARD 2015, TRIPOD+AI 2024, COSMIN 2019 and current QUADAS-3 (2026). QUADAS/COSMIN principles are used as educational guidance; no completed formal tool assessment or certification is claimed.

## Actual source findings
Original SAV imported locally through the existing reader/normalizer: 85 records; 77 reference-positive, 8 reference-negative; no missing observed field cells, no out-of-range cells under implemented bounds, no identical full measurement patterns and no pathology-label conflicts. One out-of-dictionary anorexia value (20) was flagged and left unchanged. “No flags” is not evidence that all values/units are clinically correct. Missing columns required by catalogue analyses are separately identified.

| Operational fixed test | n | TP | TN | FP | FN |
|---|---:|---:|---:|---:|---:|
| MAS ≥7 | 85 | 69 | 4 | 4 | 8 |
| hs-CRP >3 mg/L | 85 | 71 | 4 | 4 | 6 |

These independently rebuilt counts agree with existing fixed-strategy result logs. They do not validate the thresholds clinically. Original model results retained: MAS model held-out AUC 0.718, Brier 0.0823, log loss 0.2688; MAS–hs-CRP model AUC 0.810, Brier 0.0818, log loss 0.2692 (rounded for this summary). Children <16: 19; adults ≥16: 66; reference-negative counts 1 and 7, limiting subgroup precision. Eighty-five complete in-range confidence pairs do not establish measurement reliability.

## Reports and Word
Select only actual calculated assessment statements in the register, then enable **Include selected methodological assessments** for the appropriate selected report output. Pending/recommended entries have no selectable publication claim. Relevant selected scientific statements enter the existing shared Word/HTML notes path; internal statuses, next actions and the complete educational register are excluded. Output-specific model summaries use logs for that output’s scope. Existing titles, editable tables, figures, legends and scientific narrative remain.

Exporting assessments requires at least one calculated report output. No separate assessment-only document generator was introduced. Selection persistence is session-only. No uploaded protocol/reference template was newly reviewed in this update; existing report formatting is retained.

## Tests actually completed
- New native validity suite: 1440×900 and 390×900, Light/Dark/Colored. Passed no-data/pending states, original fixed counts against an independent reducer, coding flags, model findings, all-output inventory coverage, search/no-results/status filters, Expand/Collapse, output→register→Back, scope/objective links→Back, inventory download, optional report inclusion/exclusion, six real DOCX downloads, unchanged fixture data, dataset-selection reset, no runtime errors and no horizontal page overflow.
- 960×600 effective desktop viewport tested for overflow as a 150%-zoom layout-width proxy. Actual browser Ctrl+Plus zoom, physical Android and Safari/Firefox were not tested.
- Original 85-record SAV: local import, six representative calculations (baseline, diagnostic performance, calibration, severity comparison, confidence transitions, cost comparison), independent confusion-count reconciliation, anomaly flag and unchanged source input passed.
- Existing five-tab suite passed: tab order, inline legends, saved writing/drafts, reordering, interpretations, report selections and downloads, desktop/mobile in all themes.
- Existing Word-export suite passed in all six configurations: readiness, empty selection, missing/unsaved-writing blockers, mixed/table downloads, selection changes, loading/duplicate protection, failure/retry and keyboard activation.
- Existing global Back and detail-history suites passed in all six configurations: source selection, scroll, drafts, report state, browser Back/Forward, mobile drawer, source changes and refresh fallback.
- Six new assessment DOCX files passed ZIP/XML inspection: calculated selected statement present, internal next-action headings absent. One representative synthetic export rendered and its page visually inspected; editable table, selected methodological note, narrative and pagination remained readable. Not every report combination or long-document pagination was visually checked.
- Six register screenshots inspected for desktop/mobile readability and all themes.
- Static production check passed: 33 local runtime assets, HTTP delivery and Vercel static allowlist. This is a static project, with no npm compile step.
- Byte comparison: statistical engine, data definitions, import, histopathology, parameter reference, legend logic, catalogue and vercel.json unchanged from the preceding Back package. No source data correction or analysis replacement occurred.

## Changed files
New runtime: validity-quality.js. Modified runtime: index.html, styles.css, script.js, workspace.js, glossary-data.js, statistical-glossary.js, results-browser.js, reports.js, result-exports.js, navigation-history.js and .vercelignore (new runtime allowlist). New test: tests/test_native_validity.cjs. Updated static test: tests/test_static_package.py. Documentation: README.md, this report, VALIDITY_OBJECTIVE_MAP.md, VALIDITY_SOURCE_INVENTORY.json and refreshed MANIFEST.sha256.

## Installation and remaining evidence
Replace the complete project folder together. Run `python3 -m http.server 8000` from that folder and open http://localhost:8000. No new app dependencies or secret environment variables. Browser tests need playwright-core and Chromium, with HUB_CHROMIUM_PATH set to the Chromium executable.

Please supply the approved protocol/analysis plan, scan modality and code mapping, diagnostic WBC/assay thresholds, questionnaire/proforma and clinician linkage, specimen/blinding/recruitment documentation, and cost definitions/comparator where available. Independent data are required for external validation. No new diagnostic-combination feature or live GitHub/Vercel deployment is claimed.
