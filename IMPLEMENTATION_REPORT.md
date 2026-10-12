# Implementation and verification report

## Outcome

The existing app was modified in place, not replaced. A backup of the earlier local app and an archive of inspected GitHub main were retained before edits. Approved objective titles and wording remain identical to the earlier project.

The app now has a results loader, approved-objective links, cost-versus-histological-severity comparisons, ten diagnostic entries (three unfitted markers and seven exploratory Firth models), continuous associations and appropriate categorical group comparisons. Source metadata now describes all 89 variables in the current categorized SAV. No patient rows, identifiers, private results JSON or SAV files are included in the public project ZIP.

## Files changed or added

- `index.html`: workspace, desktop navigation, theme control and versioned relative assets.
- `styles.css`: responsive workspace, tables/charts and screenshot-informed light/dark layouts.
- `script.js`: preserve existing interactions; report missing content/schema; expose objective navigation to the workspace.
- `content.js`: preserve six approved definitions; replace obsolete notes with current decisions; map derived variables to objectives.
- `variables.js`: actual categorized SAV labels, codes, measurement levels and aggregate completeness; no identifiers.
- `workspace.js`: local-only JSON loading, charts, strategy selection, search, methods/variables links, errors and CSV/JSON exports.
- `analysis/run_analysis.py` and `analysis/requirements.txt`: reproducible local calculations and pinned versions.
- `vercel.json`, `.vercelignore`, `.gitignore`: buildless output, asset revalidation and separation of private data/local tools.
- `tests/`: numerical checks and workspace integration tests.
- `README.md`: beginner deployment and local-analysis steps.

## Analysis definitions

The actual SAV has 85 records. Histology 1–5 is reference-positive and 6 is reference-negative under the approved isolated reactive lymphoid hyperplasia interpretation. Severity uses histology 1–3 simple (69), 4–5 complicated (8), and 6 not applicable (8). Operation findings do not override histology. Costs are original NGN totals. The cost comparison includes 77 cases; all 85 have common complete MAS/AIR/CRP/reference data. No eligibility exclusions are inferred from RVS; full clinical eligibility remains unverified.

The exploratory cost test uses Mann–Whitney U when either group has fewer than 10 observations or absolute sample skewness exceeds 1; otherwise Welch. Both comparisons are reported with their proper interpretation. Costs include mean/SD, median/Q1/Q3, sample size, range, skewness, Welch mean-difference interval and within-group percentile bootstrap intervals for mean, median, pairwise location shift and rank-biserial effect. This is an explicit analyst rule, not a recovered prespecified protocol plan. Adjustment for cost drivers is not attempted with eight complicated cases and no approved adjustment set.

Raw markers retain their continuous values for ROC ranking. MAS ≥7 is protocol-supported categorization. hsCRP >3 mg/L is the study laboratory elevation threshold, not a universal disease cutoff. AIR ≥9 is an operational high-probability classification under the approved standard-score working interpretation, not a protocol-prespecified diagnostic rule.

All seven models use Jeffreys-penalized Firth logistic fitting, continuous recorded predictors, no interactions, no automatic selection and a fixed exploratory probability threshold of 0.50. Every leave-one-out fold estimates scaling and model coefficients using its training observations only. Apparent and held-out AUCs are kept separate. Held-out Brier score, log loss and five-bin calibration summaries are supplied. Three-predictor development is explicitly fragile with only eight negatives. Firth probability shrinkage and the limited sample make calibration provisional; these models are not validated clinical instruments.

Sensitivity, specificity, predictive values and accuracy use Wilson 95% intervals. Likelihood ratios use log-scale approximate intervals only where the required positive cell counts exist; boundary estimates are shown without arbitrary continuity correction. ROC AUC intervals use fixed-seed stratified percentile resampling. For held-out model predictions these intervals are conditional on those predictions and do not fully account for training variability. No optimistic apparent-model p-value is presented as independent validation.

Paired DeLong comparisons apply only to unfitted raw marker rankings. Exact McNemar comparisons apply to prespecified/operational classifications within the reference-positive and reference-negative groups. Their multiple exploratory p-values are unadjusted and labelled accordingly. No DeLong test is applied to fitted or cross-validated model predictions.

The like-for-like held-out MAS-plus-hsCRP model improves AUC by approximately 0.0925 compared with the equally fitted MAS-only model. Brier improves by approximately 0.000466, while log loss worsens by approximately 0.000330. The interface reports this mixed result rather than claiming universal superiority or clinical benefit.

The association module uses 21 pairwise-complete Spearman comparisons of the seven continuous/score fields, with paired percentile bootstrap intervals and Holm correction across that family. Fourteen severity/recorded-complication group comparisons use Mann–Whitney and bootstrap rank-biserial intervals with a separate Holm family. The plotted joint-quantile-cell centres are aggregated and are not used to calculate correlations. No causal effects or reconstructed MAS components are reported. Recorded complications remain distinct from a fully verified postoperative surveillance endpoint.

## Tests completed

- 308 existing learning/navigation/schema regression assertions passed using DOM stubs. All approved objective names and wording remain identical; search, modes, copy, review persistence, malformed storage and variable filtering are covered.
- 33 workspace DOM integration assertions passed: load actual aggregate results, module rendering, curve selection, evaluation filters, association selection, theme toggle, learning navigation, invalid JSON/ROC rejection, retained valid state after a failed load, CSV export content, and unloading results.
- Seven numerical tests passed: analytic intercept-only Firth estimate, finite separated fit, tie-aware AUC and ROC consistency, paired DeLong placement variance, confusion denominators and boundary likelihood ratios, known Wilson interval and training-only scaling.
- Independent repeated execution reproduced costs, diagnostic calculations and continuous associations exactly using the same seed and package versions.
- JavaScript syntax and all referenced local asset paths were checked. Python preserved the source hash. Archive checks exclude SAVs, patient rows and private JSON results.

These are numerical and simulated-DOM tests, not real-browser interaction or screenshot/layout tests. A Chromium browser binary was unavailable; its attempted installation failed. Responsive breakpoints and screenshot-informed styles were implemented but have not been visually verified in Chrome/Android here.

## Deployment evidence and outstanding work

GitHub main was fetched read-only and inspected at commit `95df367`, which already contains the user's previous script/style correction. It supersedes the earlier mixed-version commit `fdb3c41`. This establishes the earlier GitHub fault was addressed, but does not establish which commit Vercel currently serves. The new workspace has not been pushed to GitHub or deployed by the assistant.

The supplied Vercel address is a project dashboard, not the public application URL. The live production URL, production commit, live network responses, browser console and live interactions therefore remain unverified. Use the README checklist after uploading the corrected project, and supply the public `.vercel.app` URL for live inspection. The two supplied Pinterest/YouTube screenshots were inspected and used for the sidebar, prominent search, rounded cards, horizontal controls and light/dark modes; personal material visible in those screenshots is not included in the app.

Unlabelled anorexia responses and the 11 normal/inconclusive scan responses are handled as unknown derived values. They are not silently negative and are not predictors in these new modules. Original units, responses and independence of histology/operation measurements remain intact.

## Method and deployment references

- SciPy Mann–Whitney U: https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.mannwhitneyu.html
- SciPy independent t test: https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_ind.html
- Firth, D. (1993). Bias reduction of maximum likelihood estimates. Biometrika 80(1), 27–38. https://doi.org/10.1093/biomet/80.1.27
- Kosmidis and Firth. Jeffreys-prior penalty, finiteness and shrinkage in binomial-response generalized linear models. https://arxiv.org/abs/1812.01938
- Puhr et al. Firth's logistic regression with rare events: accurate effect estimates AND predictions? https://arxiv.org/abs/2101.07620
- DeLong et al. (1988). Comparing the areas under two or more correlated receiver operating characteristic curves: a nonparametric approach. Biometrics 44(3), 837–845. https://pubmed.ncbi.nlm.nih.gov/3203132/
- Vercel static builds: https://vercel.com/docs/builds
- Vercel configuration: https://vercel.com/docs/project-configuration/vercel-json
