Standalone packaging verification: an inline-script ordering issue was found and corrected. Scripts now run after the DOM in the original module order. The packaged single-file preview passed native Chromium search navigation, XLSX import, confirmation and real Worker-generated output, with no page errors or external requests. scripts/build_preview.py reproduces this correct packaging order.

# Appearance and whole-hub search — 13 October 2026

The existing search box now also searches actual objectives, variable definitions/bindings, methods, glossary/study notes, catalogue titles, generated interpretations/outputs and loaded aggregate results. Partial/case-insensitive multiword matching, title-first ranking, clickable destinations, Show more, Clear and Escape are implemented. Search does not generate analyses or index participant rows. Existing local learning search and catalogue filters remain available. Current titles and generated results are read from memory.

Visual refinements include navy/teal surfaces, improved light/dark contrast, spacing/cards, larger table/explanatory text, 44px controls, wrapping navigation, scrollable tables and charts, and reduced-motion support. Charts retain at least 540px width inside a scrolling figure. Existing objectives, modes, review/progress, import and exports are preserved.

Native verification passed in headless Chromium 153 at 320/390/1440 CSS pixels: search destinations, no page overflow on checked screens, tab target sizes, CSV/XLSX/XLS preview/activation and real Worker-generated tables, generated-result search, narrow figure scrolling, dark mode/reduced motion, glossary/method destinations, and persistent review/quick mode. Screenshots were inspected internally. No page errors or HTTP requests occurred. Real Android hardware, Safari/Firefox and production deployment remain untested.

Optional native test: install Playwright and Chromium in a separate test environment, then run `node tests/test_browser_ui.cjs`. `HUB_BROWSER_EXECUTABLE` optionally selects a browser binary. This test uses synthetic fixtures and temporary screenshots. `node tests/test_global_search.cjs` checks indexed queries and destinations; aggregate-indexing checks run when locally generated reference data is available.

---

## Verification and preservation

Queries tested: OBJECTIVE 5, HISTOLOGY_SEV, mann, confidence transitions, p-value, mixed-case ROC, no-match terms, generated interpretation text and edited titles. Both controller and native click-through destinations were tested. 309 learning assertions, 33 aggregate-workspace assertions and 63 catalogue/controller assertions passed; import parser/controller regressions passed. The six approved objectives and content.js, variables.js, analysis-engine.js, result-catalog.js, result-exports.js and Python statistical engine remain byte-identical to the initial supplied package. Import modifications from Prompt 2 are retained. No SAV or private browser dataset was changed. No real data is included in the app or preview.

Earlier browser-installation limitations in the historical report below applied to earlier stages; the native checks described above were completed in this stage using a locally obtained browser binary.

---

## Retained earlier reports (historical)

# Data-import update — 13 October 2026

The existing app is extended, not rebuilt. Statistical engine, objective statements, variable definitions and learning features are retained. Changes: data-import.js; results-browser.js; index.html; Data management navigation in workspace.js; documentation; bundled SheetJS CE 0.20.3 parser/license; synthetic fixtures and import tests. No real patient data is included in the deployment app or standalone preview. Uploaded SAVs and private browser data were not modified.

## Supported and tested

- XLSX and Excel 97–2003 BIFF8 XLS: bundled parser reads numeric records; worksheet selection tested, including rejecting a non-study Notes sheet.
- UTF-8 comma-delimited CSV: quoted delimiters, escaped quotes, embedded newlines, missing values and malformed quote checks tested.
- Compatible participant JSON: retained; supplied 85-record input and automatically prepared SAV input reached existing calculation paths.
- Local SAV utility: ReadStat via pyreadstat reads SAV, retains labels/value labels/declared missing ranges/measurement levels/formats, excludes hospital identifier and prepares private input automatically. Tested with supplied 85-record SAV and a labelled synthetic SAV. Direct browser SAV parsing is UNSUPPORTED. Python/Tkinter desktop file-picker dialogs were NOT tested; command-line conversion was.

## Import behaviour

Choose/drop file → select worksheet → preview names/types/missing counts/labels and five records → confirm dataset → generate analyses. A preview is not analysis. Failed preview preserves active records/results; confirming replacement clears prior outputs; removal clears active and pending records from memory. No importer network calls or persistence. Duplicate/empty/unsafe headers, record-width errors, incompatible JSON, common unexpected codes/ranges, excessive file sizes and formula workbooks are detected. Text/mixed fields are excluded and identified; numeric codes and original units are required. Unknown category labels are warned about. Only results whose required source columns are available are enabled. Existing research limitations remain unchanged.

## Verification repeated in this update

Parser/engine tests passed for CSV/XLSX/XLS. Import controller tests passed for selection, preview, confirmation, worksheet changes, drag/drop, engine output, removal and failed replacement. These use simulated DOM and the actual statistical engine. 309 learning assertions, 33 older workspace integration assertions, 63 catalogue/controller assertions and 412 Python/SciPy reference assertions passed. All 79 supported catalogue entries calculated in the reference suite. Synthetic fixtures are explicitly named SYNTHETIC and do not constitute study findings.

## Limitations

Native browser testing could not run because Chromium was absent and the downloaded installation archives were invalid. Chrome/Android file-picker, Blob Worker, download and visual behaviour still need native verification. Encrypted/damaged Excel files, formula workbooks and non-UTF-8 CSV are rejected. CSV/Excel do not carry SPSS metadata. Metadata from the SAV utility is preserved in input, but the established engine continues to apply its existing operational definitions; import does not establish protocol approval for a new cohort. The older aggregate-results workspace remains compatible and distinct from participant import; a Data management button leads to the new import screen. No production deployment was performed.

## SAV alternative

Install Python, pyreadstat and pandas; run analysis/import_spss_local.py to choose SAV and save private input automatically, then select it in Tables & figures. For systems without Tkinter use the documented command-line option. No local server or external API is involved. This is a practical alternative, not direct browser SAV support.

---

## Retained earlier implementation report (historical)

The earlier report below describes the previous v4 work. Its broader verification claims should be read separately from checks repeated above.

# Objective catalogues and AIR PCV clinical sign integration

The existing app now executes analyses locally from a private numerical representation of the actual SAV. It retains the six approved objective statements and the current sidebar, cards, light/dark interface, learning modes, variable explorer and progress controls.

## What was implemented

**Tables & figures** provides a dedicated catalogue for each of the six approved objectives and six explicitly exploratory sections: A costs/severity, B diagnostic strategies, C associations, D AIR, E PCV and F clinical signs. There are 86 entries: 51 supported tables, 28 supported figures and seven analyses marked Requires data. All 79 supported calculations were executed on the supplied 85-record dataset. These are actual results, not example values or empty table templates.

Generate runs the shared statistical engine inside a browser Web Worker. Generate all runs the supported entries for the chosen scope. Recalculate clears analytical caches and recomputes from the loaded records. All participant measurements remain local; no patient-data API is called. The imported source SHA256 and per-result sample size are visible. The original SAV is never edited by the browser.

Table and figure IDs are stable. Default numbering is separate by objective/type: Table 1.1, Figure 1.1, and corresponding sequences for other scopes. Publication mode numbers selected tables and figures separately and consecutively in catalogue order. Title edits and scope/filter changes do not alter calculations. Catalogue filters cover source/title search, table/figure type, analysis category and status. Completed previews include methods, assumptions, notes, interpretation and eligible denominators.

Exports create actual files: editable CSV tables, scalable SVG figures, high-resolution PNG figures (up to 4×, capped at 4096 pixels for mobile memory), genuine OOXML Word DOCX reports, editable/printable HTML reports and JSON calculation logs. Scope and selected-publication reports include methods appendices. The displayed/exported table strings and figure data are generated by the same shared functions. No export is reported as successful until its bytes have been created.

## Approved-objective mapping

| Scope | Supported results | Important limitation |
|---|---|---|
| Objective 1 | Population, demographic baseline, classification, rates, predictive values, likelihood ratios, AUC, calibration, paired fixed-marker comparisons, ROC/AUC/matrix/calibration figures | Combined models and 0.50 probability cutoff are exploratory; few negatives limit precision |
| Objective 2 | hsCRP severity distributions, rank/Welch comparison and effect intervals, severity discrimination, box plot and ROC | Histological severity is independent of operative rupture; laboratory elevation is not a validated severity threshold |
| Objective 3 | Age/reference counts, pooled-model held-out subgroup rates, descriptive ROC and interval figure | One negative child prevents a reliable paediatric AUC interval or between-group comparison |
| Objective 4 | Detailed pathology, negative-reference rate/interval, age/sex subgroups and pathology bar plot | Operated specimen-linked cohort proxy; reactive lymphoid hyperplasia is not called normal appendix |
| Objective 5 | Paired ordinal distributions, transition matrix, change direction, paired heatmap and distribution bars | No clinician identifiers/professional groups/direct ease item; no unjustified Wilcoxon or profession p-value |
| Objective 6 | Recorded NGN totals and cost distribution | No itemised hsCRP cost or comparable routine pathway; incremental cost/savings cannot be estimated |

Exploratory cost/severity and AIR-inclusive comparisons remain outside the approved primary objectives. Missing-source analyses are identified without fabricating patients, thresholds, groups or clinical outcomes.

## AIR PCV and clinical signs

The SAV now has 92 variables: 38 original and 54 derived. All 85 records and 3,230 original source cells remain unchanged. Added `AIR_RISK_CATEGORY` is identical to the retained `AIR_CATEGORY`: low 0–4, intermediate 5–8 and high 9–12. The counts are 2, 51 and 32. Original AIR is retained and all observed scores are valid integers 4–10. AIR was not reconstructed from incomplete components. No AIR-specific approved protocol was recovered; these are the previously agreed working categories, not claimed protocol-prespecified thresholds.

`PCV_CATEGORY` now uses the requested labels Low PCV, Normal PCV and High PCV. Its external age/sex reference limits and original percent representation are unchanged, with counts 37, 47 and 1. `PCV_REF_LOW` and `PCV_REF_HIGH` preserve the applied bounds. The dictionary and PCV methods table give the actual Mayo CBC bands; these are external research references, not verified local laboratory limits. PCV is explored as an association, not assumed to be an appendicitis diagnostic marker.

`MIGRATORY_PAIN` and `ABDOMINAL_PAIN_PRESENT` are separate 0/1 derivations of confirmed source Yes/No responses. Existing RIF/rebound tenderness and positive-only sign indicators are retained. Code 5 generalised tenderness is used only for the original single-selected `signs` variable. No RIF pain variable was created. Unselected pointing, Rovsing, psoas, obturator or generalised tenderness remains unknown, not absent.

AIR has descriptive/risk distributions, histology score comparison, category/reference and category/severity associations, continuous ROC and operating-point performance, cost/time/stay associations, postoperative-group comparison and related plots. PCV has distribution/reference tables, histology/severity comparisons, category/reference and category/AIR associations, recorded-outcome comparisons, correlations and distribution/box/scatter figures. Clinical signs have documented-positive/absence/unknown counts, histology/severity/AIR summaries, and valid binary diagnostic rates/likelihood ratios with interval plots. Single-selected signs are not treated as complete binary diagnostic tests.

## Statistical methods and verification

- Binary diagnostic rates: Wilson 95% intervals; log-scale approximate LR intervals only when required cells permit them. No arbitrary correction of boundary ratios.
- ROC: tie-aware ranking. Models use Firth logistic fitting, fixed continuous predictors and training-fold scaling. Leave-one-out probabilities are separate from apparent performance. Conditional AUC bootstrap intervals do not fully capture training variability. No fitted-model DeLong p-value is claimed.
- Independent comparisons: rank test is selected conservatively for n<10 in either group or absolute skewness >1; otherwise Welch. Effects, intervals and distinct estimands are shown. Mann–Whitney includes tie and continuity correction and is not automatically a median test.
- Sparse categorical tables: Fisher exact for 2×2, enumerated Fisher–Freeman–Halton for small R×2 tables, and 9,999 fixed-margin Monte Carlo permutations for larger tables. Monte Carlo uncertainty is stated; these are not presented as exact p-values. Constant factors have no association test.
- Associations: Spearman with paired bootstrap intervals, approximate p-values and Holm within the declared continuous-comparison families. Additional categorical/sign comparisons are labelled exploratory with unadjusted p-values. No automatic causal regression or invented clinical-sign score is fitted.
- Protocol significance convention: 5%. Tests are not added to purely descriptive tables/figures. P-values below 0.001 are displayed appropriately; full numerical values are retained in calculation logs where available.

The existing learning suite, prior workspace suite, catalogue/controller suite and statistical reference checks passed. Core AUCs, all ten classification strategies, Wilson intervals, model Brier values, Welch statistics/degrees of freedom/p-values, rank statistics and Spearman estimates were checked against the existing Python/SciPy engine. AIR/PCV categorical exact probabilities were independently enumerated; clinical-sign classification cells were checked directly from source responses. Boundary checks cover AIR 0/4/5/8/9/12, invalid AIR scores and inclusive PCV reference limits.

All 28 generated figure SVGs were rasterised and visually inspected. A real DOCX containing an actual Objective 4 table and figure was generated, opened/rendered and visually inspected; its ZIP parts and images were valid. The refreshed data dictionary and validation report were also rendered and reviewed. SAV reopening and an independent syntax interpreter reproduced all 4,590 derived cells. IBM SPSS is not installed: no IBM execution is claimed, and optional standard-SPSS tests do not replace the browser engine's Firth/bootstrapped procedures.

## Deployment status

New modules use versioned, relative classic scripts and a Blob Web Worker, keeping the static GitHub/Vercel architecture. No framework or server-side patient-data service was added. Private SAVs, browser-input JSONs, execution logs and local analysis/tests are excluded from the deployment package or ignore patterns.

The assistant has not pushed these changes to GitHub or verified the live production deployment. A public production URL and deployed commit are still unavailable. Real Chrome/Android layout and native Worker/file-download interaction have not been tested here: the available checks used the real calculation engine in Node and simulated DOM/controller interactions, plus actual export-file rendering. These limitations are separate from the passing numerical and file checks.

See README for the local-data workflow, upload steps and live validation checklist. Keep the private browser input, SAV, SPSS bundle and private execution log off GitHub and Vercel.
