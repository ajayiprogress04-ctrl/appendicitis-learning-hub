# Comprehensive diagnostic comparison table

Targeted update to the existing `B:master_performance` table. No duplicate table, app redesign, glossary changes, dataset recoding or unrelated analyses were introduced.

## Open the table

In **Tables & Figures**, upload/confirm your dataset, choose **Exploratory B · diagnostic strategies**, and generate **Master comparison of eligible individual and combined diagnostic strategies**. The existing preview, independent scrolling, Fit/Actual Size controls, publication selection and Word export remain available. The wide table can be scrolled without making its text illegible.

## Included content

All 26 supported definitions in the verified local dataset are included by default: three fixed-cutoff tests, eight recorded binary clinical findings, eight exploratory AND/OR combinations and seven fitted Firth models. The table groups these classes separately, with fitted **leave-one-out evaluation** rows last. Sorting occurs within these classes rather than mixing apparent model results with conventional cutoffs.

Columns: strategy, class/evaluation, evaluable n, TP, TN, FP, FN, sensitivity/specificity/PPV/NPV/accuracy with 95% intervals, appropriate AUC with 95% interval, existing likelihood ratios and excluded count. No previous metric was removed.

AUC is provided only for the three continuous recorded markers and seven held-out prediction-probability models. Binary clinical findings and Boolean AND/OR decisions are explicitly marked **Not applicable (binary decision)**, rather than given a misleading continuous-discrimination AUC. Existing tie-aware AUC and 1,000-resample stratified percentile bootstrap functions are reused on each row's actual evaluable cohort. Fitted-model intervals are labelled conditional on the existing LOO predictions; they do not include full model-refitting uncertainty or establish external validation. Intervals are not estimated with fewer than two positive/two negative cases. Repeated recalculation uses stable seeds without changing the existing random state for unrelated analyses. Raw participant scores/predictions are not returned in the public catalogue metadata.

## Verified MAS–hs-CRP definitions

The implementation contains three different strategies, preserved separately:

- **AND:** MAS ≥7 and hs-CRP >3 mg/L must both be positive.
- **OR:** either of those thresholds must be positive, with both components observed.
- **Fitted model:** continuous MAS and CRP enter the existing Firth logistic model, fitted/scaled within each training fold; a leave-one-out probability ≥0.50 is positive.

The Boolean rules are explicitly exploratory; hs-CRP >3 is laboratory elevation, not a validated appendicitis-specific threshold. The original protocol's preferred primary combined rule remains unconfirmed. The table does not silently relabel AND, OR or the fitted model as an approved primary combination. Ultrasound/WBC strategies without verified definitions remain excluded and identified in the existing eligibility controls.

## Dataset and actual checks

The local source contains 85 records. The default all-strategy common comparison evaluates 84 (76 histopathology-positive, 8 negative), because one anorexia code is outside its documented Yes/No codes. This is an analysis exclusion, not a change to the underlying record or disease classification. Available-case mode retains row-specific denominators. Histopathology coding and existing thresholds/calculations were preserved.

Passed:

- Independent Python/SciPy reproduction of all 19 fixed/logical/clinical-findings confusion matrices and proportion intervals, and all seven fitted-model confusion matrices.
- Independent reproduction of all **10 AUC point estimates and 95% bootstrap intervals**, using continuous source markers or independently refitted LOO predictions on the same 84-person evaluation cohort. The 16 binary rules/findings correctly have no AUC.
- Real SAV **upload → confirm → select scope → click Generate → visible table** in native Chromium at 1440px Light and 390px Colored. Verified 26 rows, class separation, TP/TN/FP/FN columns and values, all requested metric columns, appropriate AUC denominators, stable recalculation and unchanged five-tab navigation. A rendered desktop screenshot was visually inspected.
- Existing master-table native suite in desktop/mobile viewports and all three themes: search, publication selection, grouping/sorting, protocol gate, paired filters, source preservation and actual Word downloads. Missing-component/common/available-case edge tests also passed.
- Syntax checks and static production configuration: 35 local runtime assets and existing Vercel configuration. This is a buildless app; no npm build is required.

Files changed: `analysis-engine.js` (master table only: grouping, aligned continuous scores/internal AUC calculation, additional columns), `diagnostic-master.js` (within-class sort labels). Added `tests/test_native_comparison_table.cjs` and this validation report. No private dataset or real-data report is included in the package.

No deployment was performed. Browser tests used desktop/mobile viewports, not physical Android devices. Original protocol approval and external model validation remain outstanding; these are not fabricated by adding a comparison table.
