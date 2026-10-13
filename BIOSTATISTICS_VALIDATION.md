# Statistical presentation upgrade — validation and limits

## Scope and reporting basis

Upgraded the existing templates and reporting paths rather than replacing the statistical engine. Reporting conventions were informed by [SAMPL](https://www.equator-network.org/reporting-guidelines/sampl/) and [STARD 2015](https://www.bmj.com/content/351/bmj.h5527). These guidelines do not establish that this project's protocol, analyses or full report are publication-ready. No new patient findings or methodological approvals were supplied.

## Implemented

| Area | Reporting improvements and actual limits |
| --- | --- |
| Descriptive tables | Mean (SD) replaces ± notation; existing medians/quartiles, ranges, frequencies, denominators and missing counts are retained. Descriptive output does not acquire invented hypothesis tests. |
| Independent comparisons | Existing group n, mean/SD, median/quartiles and ranges are included in result notes. Existing U/t/df, differences, rank-biserial effects and available intervals remain reported. The sample-size/skewness test-selection heuristic is explicitly flagged for methodological review. |
| Diagnostic performance | Existing TP/TN/FP/FN, Wilson rate intervals, accuracy, predictive values, likelihood ratios and conditional AUC intervals are retained. Predictive-value tables now show the actual PPV/NPV denominators, total classified n, threshold and evaluation procedure. Histology coding, laboratory elevation and exploratory model thresholds are stated. |
| Paired diagnostic comparison | The already-used DeLong z statistic is now displayed. Raw-marker DeLong and stratum-specific exact McNemar remain distinct; no learned-model DeLong test is added. Unadjusted exploratory multiplicity is disclosed. |
| Associations | Existing Spearman effects, paired-bootstrap intervals and Holm adjustments remain. Interpretations use available adjusted evidence and distinguish association from causation and non-significance from equivalence. |
| Prediction models | Existing held-out/apparent AUC, Brier score and log loss remain. Coefficient SE, coefficient/odds-ratio intervals and coefficient significance tests are not calculated by the browser engine and are explicitly identified as unavailable. |
| Figures | Distinct colours/ROC line patterns, wrapped labels, sample counts, explicit axes, count ticks, confidence-interval definitions, boundary-clipping warnings and unavailable-effect labels. Count-matrix fills remain dark enough for light in-app numerical labels. No uncertainty band/error bar is fabricated. |
| Notes and exports | Reusable statistical notes are now visible immediately after the interpretation in the result preview and travel with each result. CSV/HTML/DOCX retain notes/interpretations; current numbering is shared with the new linked tabs. Aggregate-workspace tables/figures now have consecutive captions and clearer methods/units. |

P-values are displayed to three decimals, or <0.001 when justified; no p=0.000. Display precision is separate from stored calculation precision. Some descriptive results have only formatted cells rather than a full-precision summary in the exported log; this is now stated. Missing/inapplicable statistical fields are not replaced with invented values.

## Actual validation

- All 79 supported result families generated using synthetic data; seven unavailable catalogue entries remain explicitly blocked/require additional information. `STATISTICAL_REPORTING_INVENTORY.md` lists available fields/axes/methods for every entry.
- Compared all 79 against the pre-upgrade engine: unrounded logs, result-level n and plotted observations match. No test algorithm, threshold, dataset, group membership or bootstrap draw was changed by reporting enrichment. Displayed formatting/extra reporting fields intentionally differ.
- Asserted table shape, diagnostic denominators and decision rules against stored metrics; group summaries/t/df/p/effect values against stored logs; displayed DeLong z against the same paired calculation; missing estimates, ROC patterns and clipping warnings.
- 372 synthetic numerical checks passed against Python/SciPy, covering diagnostic counts/AUC/Wilson intervals, model prediction error, cost comparison and correlations. Conditional bootstrap interval equality is not claimed across different random-number generators. Independent validation of every possible input, every interval procedure and every statistical assumption is not claimed.
- Complete regression runner passed imports (including genuine generated SAVs), error handling, search, learning, 79 interpretation/placement checks, HTML/DOCX reporting, complete-result reordering, new navigation and local HTTP/deployment assets.
- Rendered 28 SVG figure families. Inspected a full overview and full-size confusion matrices/long-label forest plots. Generated, rendered and visually checked a representative eight-page synthetic Word export; tables repeat headers across page breaks and interpretations follow outputs. This is representative export QA, not every report combination.
- Compact CSS/font and standard contrast checks passed. Native-browser/mobile appearance remains unverified because a working Chromium installation was unavailable; exported figure inspection does not establish in-app mobile readability.

## Remaining methodological questions

Full approved protocol/eligibility verification; histology code-6 reference assumption; combined diagnostic rule approval; threshold prespecification; the retained age definition; independent-observation assumptions; clinician/repeated-case clustering for confidence; sparse subgroup precision; conditional learned-model bootstrap uncertainty; unadjusted exploratory comparisons; and clinical/economic significance remain review items. The app preserves the working definitions and discloses limitations. It does not certify them or infer missing decisions.

No real patient data is included. No GitHub commit/push, Vercel deployment or live-site test occurred.
