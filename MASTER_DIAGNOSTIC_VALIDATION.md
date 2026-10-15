# Diagnostic master comparison — verified scope

This completed addition is retained alongside the bulk workflow. In Tables & Figures choose **Exploratory B · diagnostic strategies** and generate the master performance table, selected paired-comparison table and diagnostic-proportion figure. Use the linked master controls to choose scientific publication rows, figure rows, common/available-case cohorts, fixed-strategy comparison family and outcomes. Apply recalculates the three linked outputs atomically. Search/display filters do not silently remove publication rows.

## Verified strategies and unresolved definitions

The actual local data support 26 displayed strategies: three operational fixed tests (MAS ≥7, hs-CRP >3 mg/L, AIR ≥9), eight explicitly exploratory pair/triple AND/OR combinations, eight independently recorded binary clinical findings, and seven existing Firth continuous-predictor leave-one-out models classified at probability ≥0.50. Logical rules require every named component to be observed. Clinical findings are not silently treated as absent when unrecorded or outside dictionary codes.

hs-CRP >3 denotes laboratory elevation, not a protocol-validated appendix-specific threshold. AIR ≥9 remains operational. Original protocol prespecification of primary combinations has not been recovered. Mode A primary/prespecified comparisons remain blocked pending protocol approval; Mode B is exploratory. WBC cannot be given an invented cutoff, `abd_SCAN` cannot be assumed to be a verified binary ultrasound result, and EA/EAG is not a confirmed separate recorded variable. These candidate omissions are visible with reasons.

Histopathology codes 1–5 are positive and code 6 reactive lymphoid hyperplasia negative under the confirmed study definition. Existing import label checks and clear source spelling mappings are retained; no source records were altered.

## Cohort and calculations

Default all-strategy common cohort: 84 participants (76 reference-positive, 8 reference-negative). One source record has an unexpected anorexia code 20 and is excluded from this common comparison. Other existing primary analyses still use their original eligible populations, including 85 records where applicable. Available-case mode shows row-specific counts; paired comparisons always use jointly observed cases.

| Fixed strategy | n | TP | FP | FN | TN |
|---|---:|---:|---:|---:|---:|
| MAS ≥7 |84|68|4|8|4|
| hs-CRP >3 mg/L |84|70|4|6|4|
| AIR ≥9 |84|31|0|45|8|
| MAS AND hs-CRP |84|64|3|12|5|
| MAS OR hs-CRP |84|74|5|2|3|

The master table reports Wilson 95% proportion intervals and log-normal likelihood-ratio intervals where estimable. Infinite/undefined ratios remain explicit. A zero-variance all-positive classifier previously produced a degenerate LR+ interval [1,1]; the helper now marks that log interval non-estimable. Point estimates and patient classifications were not changed.

Selected fixed-strategy comparisons use exact conditional McNemar/binomial tests within reference-positive cases for sensitivity, reference-negative cases for specificity, and all eligible cases for accuracy. Paired percentage-point differences have conservative at-least-95% intervals formed from Bonferroni-adjusted Clopper–Pearson discordance margins. These are not score intervals or inversions of McNemar tests. Holm adjustment covers the declared selected pair-by-outcome family. Ordinary McNemar inference is deliberately not applied to overlapping-training fitted-model LOO predictions.

The previously observed identical fitted MAS and fitted MAS–hsCRP confusion matrices do not imply identical participant predictions: two of 85 classifications differ, offsetting one another within the reference-positive group. The app displays the comparison without exposing participant identifiers or changing the combined model simply to make metrics differ.

## Actual verification

Independent Python/SciPy recalculation agreed with all 19 fixed/logical/clinical-sign matrices and proportion intervals, the default paired comparisons, and a 30-test family across five fixed/logical strategies and three outcomes. All seven fitted-model confusion matrices were independently reproduced using SciPy Firth/leave-one-out fitting. The fitted MAS/combined two-classification discordance and the zero-variance LR interval correction were checked.

Native browser tests passed at 1440px and 390px in all three themes: master generation, row counts, search, publication/figure selection, sorting, paired filters, protocol blocking, atomic updates, actual Word download, unchanged source input, missing-component common/available denominators and non-degenerate zero-discordance intervals. Wide exported master tables were rendered and visually inspected. The result-level n now reflects the common analysed count in common-cohort mode; row-specific denominators remain authoritative in available-case mode.

Files for this retained change: `diagnostic-master.js`, `analysis-engine.js`, `result-catalog.js`, `statistical-reporting.js`, `output-essence.js`, `result-exports.js`, `results-browser.js`, `navigation-history.js`, `script.js`, `styles.css`, `index.html`, `.vercelignore`, and `tests/test_native_master.cjs`. The master controls and bulk controls share results; neither changes the underlying dataset.

No deployment was performed. No claim of original-protocol validation or exact reproduction in Microsoft Word is made.
