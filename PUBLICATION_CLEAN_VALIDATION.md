# Publication content cleaning and validation

The current project uses a dedicated publication policy for all catalogue Word/HTML pathways: Reports preview and export, objective-specific selections, combined reports and single-table/single-figure Word exports. This is a reporting change only. The statistical engine, data, navigation, themes and approved Word geometry/styles are unchanged.

## What changed

- Removed generic pre-output variable-name introductions and automatic copying of app teaching/QC notes.
- Avoided repeating diagnostic estimates as raw log fields when they already appear in the table; reference counts and each strategy’s confusion counts remain in scientific notes.
- Retained required sample sizes and structured statistical rows: tests, statistics, df, actual p-values, supplied adjustments, effects and available intervals. No statistical value was manually changed.
- Created scoped scientific method notes for diagnostic/reference classification, exploratory model evaluation, severity, cost, PCV/AIR and documented clinical signs. Genuine precision, reference and eligibility limitations remain.
- Paired-confidence reports retain one concise explanation that their analysis is descriptive because repeated clinician linkage was not recorded. Generic confidence-as-proxy/proof reminders and repeated clustering instructions were removed.
- Repeated identical notes appear once per objective in combined documents. Individual exports retain their applicable method notes.
- The agreed single unlabelled narrative remains after captions/legends/notes. Authored text is preserved; instructional or unresolved-source authored wording is flagged rather than silently rewritten.
- Mathematically non-estimable cells use an explained dash; Not applicable remains distinct. Required missing test p-values, unresolved result fields and unknown source notes block Word/HTML export pending internal review. Precision gaps that permit descriptive reporting are identified internally and qualified scientifically.
- Added the Reports internal publication-content review with the original notes classified as scientific notation, method/qualification, group summaries, internal workflow/teaching, or unresolved evidence. These audit messages are excluded from the report.

## Files changed

Runtime: `result-exports.js`, `reports.js`, `index.html` (cache versions). Documentation: `README.md`, `PUBLICATION_CONTENT_AUDIT.md`, `PUBLICATION_CONTENT_AUDIT.json`, this document, `MANIFEST.sha256`. Tests: new `tests/test_publication_clean.cjs` and `tests/test_native_publication_clean.cjs`; updated `tests/test_reporting_completeness.cjs`, `tests/test_native_reporting_audit.cjs`, `tests/test_native_integrated_narrative.cjs` to check publication statistics/prose instead of internal teaching strings.

## Tests actually completed

- All 86 catalogue entries audited: 79 calculable export paths tested using a labelled 36-record synthetic fixture; 7 source-limited outputs withheld. Every generated source result remains unchanged.
- Essential publication statistical lines checked in HTML; required inference, sample sizes, interval/p-value handling and companion population alignment checked in the reporting-completeness regression.
- Missing-result, missing required p-value, unclassified-note and authored-instruction export gates; Not applicable versus non-estimable distinction.
- Native Chromium desktop 1440×900 and mobile 390×900, all three themes: representative demographic, diagnostic, severity, histology, confidence, cost and association outputs; actual Word bytes agree with the publication prose; internal audit remains visible in the app and absent from Word.
- Native five-tab regression: navigation, inline legend edit/save/draft/reordering, separate interpretations, report links, independent legend inclusion/exclusion, actual Word download and unchanged data pass on both viewports.
- 79-family biostatistical regression against the prior engine passes; no numeric or plot changes. JavaScript syntax and static production-package verification pass (30 assets). There is no npm compilation step in this static app.
- Three actual synthetic Word exports generated: combined nine-output report, diagnostic-accuracy table plus confusion figure, and Objective 5 paired-confidence table. Final documents rendered with LibreOffice; all pages visually inspected. Approved Letter layout, Times New Roman styles, editable tables, image proportions, captions and PAGE footer retained. No clipped content or leaked workflow placeholders in those documents.

Initial assertions incorrectly matched “confirm” inside the legitimate word “confirmed” and expected a hypothesis-test note for a descriptive baseline output. They were corrected to test whole words and statistical applicability. An attempted regression command used the wrong filename; the actual `test_native_five_tabs.cjs` was subsequently run and passed. Final tests pass.

## Limits

Synthetic results are validation cases, not this study’s findings. The audit verifies publication policy for the current 79 supported paths, not unseen uploads, arbitrary future content, source pathology/eligibility, or every possible estimate degeneracy. Author review is still necessary for scientific accuracy of manually written prose. Native Microsoft Word, physical Android and live deployment were not tested. The supporting legacy aggregate workspace retains its existing CSV/JSON analysis-export workflow; it has no native Word mapping. Calculation logs and raw CSV analysis downloads intentionally retain reproducibility/QC information and are not publication documents.

Unzip and run `python3 -m http.server 8000`, then open `http://localhost:8000`. Generate local results, open Reports, resolve any internal publication-review issues and inspect the preview before Export to Word. No GitHub push or Vercel deployment was performed.
