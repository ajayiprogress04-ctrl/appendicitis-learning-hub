# Statistical reporting inventory

Generated using explicitly synthetic data. Fields below describe supported templates, not patient findings or protocol approval. Actual availability depends on the loaded data. No new tests are selected by this inventory.

| Scope | Key | Type | Available output fields or axes | Method / limitation |
| --- | --- | --- | --- | --- |
| 1 | baseline | table | Characteristic; Value; Denominator | Descriptive frequencies and median/quartiles; no demographic hypothesis tests. |
| 1 | d1_population | table | Analysis population; n | Complete-case reconciliation on the same patients for every displayed strategy. |
| 1 | d1_classification | table | Strategy; Threshold; TP; TN; FP; FN; n | Histopathology-referenced classification; model predictions held out. |
| 1 | d1_performance | table | Strategy; Evaluation; Threshold; n; Sensitivity (95% CI); Specificity (95% CI); Accuracy (95% CI) | Wilson 95% intervals for binomial diagnostic measures. |
| 1 | d1_predictive | table | Strategy; PPV (95% CI); NPV (95% CI); LR+ (95% CI); LR− (95% CI); Threshold / evaluation; PPV denominator; NPV denominator; All classified n | Wilson predictive-value intervals; approximate log-scale LR intervals only with positive required cells. |
| 1 | d1_auc | table | Strategy; Evaluation; AUC; 95% conditional interval; n | Tie-aware AUC with stratified percentile bootstrap; 1,000 fixed-seed resamples. |
| 1 | d1_calibration | table | Model; Apparent AUC; Held-out AUC; Brier score; Log loss | Leave-one-out predictions; Brier and binomial log loss. Five fixed probability bins. |
| 1 | d1_paired | table | Pair; Method; ΔAUC or discordance; 95% interval; Two-sided p; z (DeLong only) | Paired DeLong restricted to unfitted markers; exact binomial McNemar in reference strata. |
| 1 | d1_roc | figure | roc; x: 1 − specificity; y: Sensitivity; n and interval definition in notes | ROC from the same observations or held-out model probabilities. |
| 1 | d1_aucplot | figure | forest; x: AUC; y: displayed groups / measures; n and interval definition in notes | Stratified percentile AUC intervals. |
| 1 | d1_confusion | figure | matrices; x: Test negative / positive; y: Reference negative / positive; n and interval definition in notes | Histopathology-referenced confusion matrices at stated operating points. |
| 1 | d1_calplot | figure | calibration; x: Mean held-out predicted probability; y: Observed appendicitis proportion; n and interval definition in notes | Five fixed probability bins with Wilson observed-rate intervals. |
| 2 | s2_descriptive | table | Histological group; n; Mean (SD); Median (Q1–Q3); Range; Missing among disease cases | Distribution summaries; means and medians shown to assess the comparison, not interchangeable estimates. |
| 2 | s2_comparison | table | Method / effect; Estimate / statistic; df; 95% interval; Two-sided p | Rank comparison selected conservatively for either n<10 or /skewness/>1; otherwise Welch. Both comparisons retained with distinct estimands. |
| 2 | s2_severityPerformance | table | Measure; Estimate (95% CI); Denominator | Continuous ranking plus fixed laboratory-elevation threshold; no cutoff optimization. |
| 2 | s2_box | figure | box; x: hsCRP (mg/L); y: displayed groups / measures; n and interval definition in notes | Q1–Q3 boxes, median line; whiskers show observed min–max. |
| 2 | s2_severityROC | figure | roc; x: 1 − specificity; y: Sensitivity; n and interval definition in notes | Continuous hsCRP ROC against histological severity; complicated=positive. |
| 3 | age_population | table | Age group; n; Reference-positive; Reference-negative; Missing/invalid age outside grouping | Approved age split; histology-reference reconciliation. |
| 3 | age_performance | table | Age group; n; Sensitivity (95% CI); Specificity (95% CI); Accuracy (95% CI); AUC (conditional CI) | Held-out pooled MAS + hsCRP model; Wilson rates; no age-specific fitting. |
| 3 | age_comparison_unavailable | table |  | Only one reference-negative child is present in the supplied cohort. Reliable paediatric AUC uncertainty and between-group comparison cannot be established; more independent reference-negative children are required. |
| 3 | age_roc | figure | roc; x: 1 − specificity; y: Sensitivity; n and interval definition in notes | Descriptive ROC of held-out pooled model by predefined age group. |
| 3 | age_rates | figure | forest; x: Proportion; y: displayed groups / measures; n and interval definition in notes | Wilson intervals for subgroup operating-point rates. |
| 4 | neg_histology | table | Original histology code; Detailed source category; n (%); Denominator | Descriptive pathology frequencies. |
| 4 | neg_rate | table | Reference status; n (%); 95% Wilson interval; Denominator | Specimen-linked negative appendicectomy proxy; Wilson proportion interval. |
| 4 | neg_subgroups | table | Subgroup factor; Category; Negative n (%); 95% Wilson interval; Denominator; Fisher two-sided p | Exploratory 2×2 Fisher exact comparisons; Wilson subgroup rates. |
| 4 | neg_histology_bar | figure | bar; x: Number of specimens; y: Source histology category; n and interval definition in notes | Descriptive bar chart; no hypothesis-test p-value. |
| 5 | conf_distribution | table | Rating; Before n (%); After n (%); Complete-pair denominator | Ordinal frequency distribution using complete pairs; no mean-score or inferential test. |
| 5 | conf_transition | table | Before \ After; 1; 2; 3; 4; 5 | Within-case paired transition counts; original five-point response categories. |
| 5 | conf_change | table | Direction of recorded change; n (%); Denominator | Order-based paired change; no interval-spacing assumption required. |
| 5 | conf_inference_unavailable | table |  | Same clinician within each patient pair is confirmed, but clinician identifiers and repeated-case linkage are unavailable. An independent-pair Wilcoxon p-value or a clinician-clustered alternative cannot be justified without that structure. |
| 5 | conf_profession_unavailable | table |  | The SAV has neither professional-group assignment nor clinician identifiers, and no direct ease-of-diagnosis item. Confidence cannot be relabelled as ease or used to invent these groups. |
| 5 | conf_heatmap | figure | heatmap; x: After information rating; y: Before information rating; n and interval definition in notes | Paired ordinal transition counts. |
| 5 | conf_bars | figure | groupbar; x: Rating; y: Number of complete pairs; n and interval definition in notes | Descriptive paired-complete marginal distributions. |
| 6 | overallcost_summary | table | Recorded cost measure; Value; Unit | Descriptive recorded expenditure; no inferential benefit comparison. |
| 6 | incremental_cost_unavailable | table |  | Itemised hsCRP costs, resource quantities/unit prices and a comparable routine diagnostic pathway are absent. Recorded total costs alone cannot estimate incremental cost, savings or cost-effectiveness. |
| 6 | overallcost_histogram | figure | histogram; x: Recorded total cost (NGN); y: Number of patients; n and interval definition in notes | Freedman–Diaconis histogram, constrained to 4–20 bins. |
| A | cost_descriptive | table | Histological group; n; Mean (SD); Median (Q1–Q3); Range; Missing among disease cases | Distribution summaries; means and medians shown to assess the comparison, not interchangeable estimates. |
| A | cost_comparison | table | Method / effect; Estimate / statistic; df; 95% interval; Two-sided p | Rank comparison selected conservatively for either n<10 or /skewness/>1; otherwise Welch. Both comparisons retained with distinct estimands. |
| A | adjusted_cost_unavailable | table |  | No approved adjustment set or itemised cost-driver measurements were supplied; only eight complicated cases are present. An automatic multivariable cost-driver model would be unsupported. |
| A | cost_box | figure | box; x: Recorded total cost (NGN); y: displayed groups / measures; n and interval definition in notes | Q1–Q3 boxes, median line; whiskers show observed min–max. |
| B | db_population | table | Analysis population; n | Complete-case reconciliation on the same patients for every displayed strategy. |
| B | db_classification | table | Strategy; Threshold; TP; TN; FP; FN; n | Histopathology-referenced classification; model predictions held out. |
| B | db_performance | table | Strategy; Evaluation; Threshold; n; Sensitivity (95% CI); Specificity (95% CI); Accuracy (95% CI) | Wilson 95% intervals for binomial diagnostic measures. |
| B | db_predictive | table | Strategy; PPV (95% CI); NPV (95% CI); LR+ (95% CI); LR− (95% CI); Threshold / evaluation; PPV denominator; NPV denominator; All classified n | Wilson predictive-value intervals; approximate log-scale LR intervals only with positive required cells. |
| B | db_auc | table | Strategy; Evaluation; AUC; 95% conditional interval; n | Tie-aware AUC with stratified percentile bootstrap; 1,000 fixed-seed resamples. |
| B | db_paired | table | Pair; Method; ΔAUC or discordance; 95% interval; Two-sided p; z (DeLong only) | Paired DeLong restricted to unfitted markers; exact binomial McNemar in reference strata. |
| B | db_calibration | table | Model; Apparent AUC; Held-out AUC; Brier score; Log loss | Leave-one-out predictions; Brier and binomial log loss. Five fixed probability bins. |
| B | db_roc | figure | roc; x: 1 − specificity; y: Sensitivity; n and interval definition in notes | ROC from the same observations or held-out model probabilities. |
| B | db_aucplot | figure | forest; x: AUC; y: displayed groups / measures; n and interval definition in notes | Stratified percentile AUC intervals. |
| B | db_confusion | figure | matrices; x: Test negative / positive; y: Reference negative / positive; n and interval definition in notes | Histopathology-referenced confusion matrices at stated operating points. |
| B | db_calplot | figure | calibration; x: Mean held-out predicted probability; y: Observed appendicitis proportion; n and interval definition in notes | Five fixed probability bins with Wilson observed-rate intervals. |
| C | assoc_continuous | table | Continuous/score relationship; n; Spearman ρ; 95% paired-bootstrap interval; Two-sided p; Holm p | Spearman rank association; asymptotic t approximation and 1,000 paired resamples; Holm across displayed family. |
| C | adjusted_association_unavailable | table |  | No approved causal adjustment set or multivariable exploratory specification is supplied. Do not automatically regress every available variable against every outcome. |
| C | assoc_scatter | figure | scatter; x: AIR score (points); y: hsCRP (mg/L); n and interval definition in notes | Exploratory observed AIR–hsCRP relationship; no causal interpretation. |
| C | assoc_forest | figure | forest; x: Spearman correlation; y: displayed groups / measures; n and interval definition in notes | Spearman correlations with paired percentile-bootstrap intervals. |
| D | air_distribution | table | Measurement or category; Value; Denominator | Descriptive continuous and categorical distributions; no p-value. |
| D | air_histology | table | Measure; Group or direction; Estimate; 95% interval / quartiles; p | Mann–Whitney U, two-sided asymptotic tie correction and continuity correction; independent-patient comparison with bootstrap effect interval. |
| D | air_category_histology | table | Category; Histology-negative; Histology-positive; Row n; Test / effect | Fixed-margin exact/Monte Carlo categorical test selected for sparse expected counts; Cramér V descriptive. |
| D | air_category_severity | table | Category; Simple; Complicated; Row n; Test / effect | Fixed-margin exact/Monte Carlo categorical test selected for sparse expected counts; Cramér V descriptive. |
| D | air_performance | table | Measure; Estimate (95% CI); Denominator | Continuous AIR ranking; fixed working ≥9 threshold, not protocol-prespecified. |
| D | air_associations | table | Relationship; n; Spearman ρ; 95% paired-bootstrap interval; p; Holm p | Spearman associations; paired bootstrap; Holm within these three exploratory comparisons. |
| D | air_histogram | figure | histogram; x: AIR (points); y: Number of patients; n and interval definition in notes | Recorded continuous distribution; no hypothesis-test annotation. |
| D | air_categories | figure | bar; x: Number of classified participants; y: Category; n and interval definition in notes | Valid-category frequencies; unknown classifications excluded and stated. |
| D | air_roc | figure | roc; x: 1 − specificity; y: Sensitivity; n and interval definition in notes | Continuous AIR ROC with histopathological reference. |
| D | air_box_histology | figure | box; x: AIR (points); y: displayed groups / measures; n and interval definition in notes | Group distribution summaries; see comparison table for rank effect and p-value. |
| D | air_postop | table | Measure; Group or direction; Estimate; 95% interval / quartiles; p | Mann–Whitney U, two-sided asymptotic tie correction and continuity correction; independent-patient comparison with bootstrap effect interval. |
| E | pcv_distribution | table | Measurement or category; Value; Denominator | Descriptive continuous and categorical distributions; no p-value. |
| E | pcv_references | table | Sex/age band; Lower PCV (%); Upper PCV (%) | Mayo Clinic Laboratories CBC reference intervals; both boundaries inclusive normal. Source: https://www.mayocliniclabs.com/test-catalog/Overview/9109 |
| E | pcv_histology | table | Measure; Group or direction; Estimate; 95% interval / quartiles; p | Mann–Whitney U, two-sided asymptotic tie correction and continuity correction; independent-patient comparison with bootstrap effect interval. |
| E | pcv_severity | table | Measure; Group or direction; Estimate; 95% interval / quartiles; p | Mann–Whitney U, two-sided asymptotic tie correction and continuity correction; independent-patient comparison with bootstrap effect interval. |
| E | pcv_category_histology | table | Category; Histology-negative; Histology-positive; Row n; Test / effect | Fixed-margin exact/Monte Carlo categorical test selected for sparse expected counts; Cramér V descriptive. |
| E | pcv_category_air | table | Category; AIR low; AIR intermediate; AIR high; Row n; Test / effect | Fixed-margin exact/Monte Carlo categorical test selected for sparse expected counts; Cramér V descriptive. |
| E | pcv_associations | table | Relationship; n; Spearman ρ; 95% paired-bootstrap interval; p; Holm p | Spearman associations; paired bootstrap; Holm within these three exploratory comparisons. |
| E | pcv_histogram | figure | histogram; x: pcv (%); y: Number of patients; n and interval definition in notes | Recorded continuous distribution; no hypothesis-test annotation. |
| E | pcv_box_histology | figure | box; x: pcv (%); y: displayed groups / measures; n and interval definition in notes | Group distribution summaries; see comparison table for rank effect and p-value. |
| E | pcv_scatter | figure | scatter; x: AIR score (points); y: PCV (%); n and interval definition in notes | Exploratory scatter of recorded AIR and PCV; no diagnostic-marker claim. |
| E | pcv_postop | table | Measure; Group or direction; Estimate; 95% interval / quartiles; p | Mann–Whitney U, two-sided asymptotic tie correction and continuity correction; independent-patient comparison with bootstrap effect interval. |
| F | sign_distribution | table | Recorded sign; Present; Confirmed absent; Unknown; All records; Percentage and meaning | Documented-positive counts and explicitly recorded absences; distinct denominators. |
| F | sign_histology | table | Sign; Histology-negative; Histology-positive; Method / coding limit; Two-sided p | Complete documented binary statuses: fixed-margin exact/Monte Carlo categorical comparisons. Single-selected signs descriptive only. |
| F | sign_severity | table | Sign; Simple; Complicated; Method / coding limit; Two-sided p | Complete documented binary statuses: fixed-margin exact/Monte Carlo categorical comparisons. Single-selected signs descriptive only. |
| F | sign_air | table | Sign; AIR low; AIR intermediate; AIR high; Method / coding limit; Two-sided p | Complete documented binary statuses: fixed-margin exact/Monte Carlo categorical comparisons. Single-selected signs descriptive only. |
| F | sign_performance | table | Confirmed binary sign; n; Sensitivity (95% CI); Specificity (95% CI); PPV (95% CI); NPV (95% CI) | Histology-referenced binary sign classification; Wilson intervals. |
| F | sign_likelihood | table | Confirmed binary sign; TP/TN/FP/FN; LR+ (95% CI); LR− (95% CI); Accuracy (95% CI) | Approximate log likelihood-ratio intervals where required cells are positive; Wilson accuracy. |
| F | sign_bar | figure | bar; x: Documented present count; y: Recorded sign; n and interval definition in notes | Recorded-positive count; selected single-category signs explicitly labelled. |
| F | sign_rates | figure | forest; x: Proportion; y: displayed groups / measures; n and interval definition in notes | Wilson intervals; confirmed binary signs only. |
| F | sign_combination_unavailable | table |  | MAS and AIR already incorporate overlapping signs. No justified nonredundant predictor specification, complete sign absences or adequate rare-reference sample for further model development has been supplied. |

79 result families generated; 7 catalogue entries explicitly unavailable/requiring additional information. See BIOSTATISTICS_VALIDATION.md for fields not calculated and unresolved design decisions.