# AIR classification versus histopathology — 14 October 2026

## Existing analysis and targeted changes
The existing stable output D:air_category_histology already applied the requested bands and an exact categorical association test correctly. It was incomplete in presentation: raw counts only, negative status first, no row percentages, overall totals or explicit exclusion reconciliation. This output was upgraded in place. The existing D:air_performance was completed with accuracy and LR+/LR−; existing estimates and cutoffs were not altered. One genuinely missing output, D:air_histology_proportions, was added. The pre-existing air_categories count chart remains distinct.

The five main tabs are preserved. Outputs remain in Tables & Figures → Exploratory AIR and its linked Interpretations/Reports views. Existing glossary AIR and histopathology references are reused. Both the table and new figure retain their specific Essence and Practical Importance sections. No duplicate category table or new top-level tab was created.

## Identity, boundaries and unresolved protocol
The source SAV has a recorded numeric AIR field; its values are integer 4–10 in this cohort. The project dictionary interprets AIR as Appendicitis Inflammatory Response score, with published domain 0–12. The original source label/component algorithm and original AIR-specific study protocol have not been recovered, so identity/construction remains the documented researcher working interpretation. Scores are not reconstructed from incomplete fever, pain or graded-defence components. The user's “EA” references were interpreted as AIR in the context of the requested score bands; no separate EA variable or instrument was invented.

The requested inclusive integer bands are retained: high 9–12, intermediate 5–8, low 0–4. They partition every integer 0–12 without gaps/overlaps. Original published AIR bands use <5/5–8/>8; the 2021 validation also proposes revised 0–3/4–8/9–12 bands. The revised low boundary is NOT silently adopted here.

Reference: Andersson M, Kolodziej B, Andersson RE. Validation of the Appendicitis Inflammatory Response (AIR) Score. World J Surg. 2021;45:2081–2091. doi:10.1007/s00268-021-06042-2. https://pmc.ncbi.nlm.nih.gov/articles/PMC8154764/ (Table 1, original grouping and revised boundaries). This reference supports the published score, not proof that this dataset's AIR totals were constructed correctly.

## Source classification and actual results
Original 85-record SPSS source parsed locally. Histology labels agree with the previously confirmed crosswalk: Acute appendicitis; Suppurative appendicitis; source “phlemonous appendicitis” (documented Phlegmonous equivalence); source “gangrenous appendix” (documented Gangrenous appendicitis equivalence); Perforated appendicitis; Reactive lymphoid hyperplasia. Positive codes 1–5 and negative code 6 remain unchanged. There are no unexpected/missing AIR or histology values in this source. No raw values were recoded.

| AIR classification | Positive n (within-category %) | Negative n (within-category %) | Total |
|---|---:|---:|---:|
| 9–12, high | 32 (100.0%) | 0 (0.0%) | 32 |
| 5–8, intermediate | 43 (84.3%) | 8 (15.7%) | 51 |
| 0–4, low | 2 (100.0%) | 0 (0.0%) | 2 |
| Overall eligible | 77 (90.6%) | 8 (9.4%) | 85 |

The two low-group cases do not support a stable low-risk disease estimate or a rule-out claim. All eight source negatives occurred in the intermediate band. These are findings in an operated specimen-linked cohort, with limited applicability to all suspected cases.

Mutually exclusive exclusion accounting: missing AIR; invalid/noninteger AIR; valid AIR with missing histology; valid AIR with unexpected histology. All are zero in this source. Their sum equals loaded minus jointly eligible n. The new figure uses exactly the same three-category counts and row denominators as the table, including an explicit non-estimable message for an empty category.

## Association
Fisher–Freeman–Halton two-sided exact fixed-margin test: n=85, p=0.042402704815245024; Cramér V=0.2631806779839076. Minimum expected count=0.1882352941, so an asymptotic Pearson p-value is not used. Exact-test statistic and df are not applicable. The descriptive Pearson χ²=5.8874458874, active-table df=2, is shown only as the basis of V, not as the selected inference. A V interval was not estimated. Unadjusted exploratory p meets the existing α=0.05 reporting convention; original protocol prespecification is unverified. No trend test/ordinal model was added: sparse strata and unavailable prespecified ordered hypothesis do not justify inventing one. Association is not proof of diagnostic utility.

## Existing operational binary analysis (not protocol-prespecified)
AIR 9–12 test-positive; AIR 0–8 test-negative, retaining intermediate records. TP=32, TN=8, FP=0, FN=45, n=85.

| Measure | Estimate (95% CI) |
|---|---|
| Sensitivity | 41.6% (31.2–52.7%) |
| Specificity | 100.0% (67.6–100.0%) |
| PPV | 100.0% (89.3–100.0%) |
| NPV | 15.1% (7.9–27.1%) |
| Accuracy | 47.1% (36.8–57.6%) |
| LR+ | Infinite; finite log interval not estimable (FP=0) |
| LR− | 0.5844 (0.4841–0.7055) |

Rates use Wilson intervals; LR intervals use the existing log-normal approximation when estimable. Zero false positives do not imply perfect population specificity. Lower scores are “negative” only under this operational binary rule, not a clinical declaration of no appendicitis. No new threshold, exclusion of intermediate cases or exploratory alternative rule was imposed. Please supply the approved AIR scoring/binary protocol before calling this a prespecified primary diagnostic analysis.

## Verification actually performed
- Independent Python/SciPy participant-level grouping matched all six cells and totals. Full multivariate-hypergeometric enumeration matched the exact p-value to <1e-12. SciPy Pearson calculations reproduced χ² and V; SciPy Wilson intervals matched all five rate intervals to <1e-12. Existing AIR AUC/bootstrap method was retained, not newly independently revalidated.
- Native Chromium with real 85-record AIR/histology data: table, figure, performance, same denominators, source immutability, Essence, AIR glossary → Back, report preview and actual DOCX downloads passed at 1440×900/390×900 in Light/Dark/Colored (six configurations).
- Synthetic boundary checks: every integer 0–12, missing, −1, 13, fractional 4.5, missing histology and unexpected code 7. Groups partition correctly and six excluded observations reconcile without recoding.
- Six actual mixed AIR DOCX downloads generated; representative three-page Word export reopened/rendered and inspected: editable cross-table, performance table, embedded complete figure, caption, notes and prose retained. Whole-document pagination follows the existing template; prose can continue across pages.
- Existing Word-export regression suite and five-tab/legend/reordering/report-selection suite passed in all themes at desktop/mobile.
- Static production check passed: 33 runtime assets delivered, static Vercel configuration/allowlist intact. No npm compilation step exists. JavaScript syntax checks passed.
- Desktop figure and mobile viewer screenshots inspected. Existing readable-scale viewer retains horizontal panning on narrow screens; zoom/fit controls are preserved. No new viewer architecture was introduced. No physical Android, Safari/Firefox, or live deployment testing.

## Changed files and use
analysis-engine.js; result-catalog.js; statistical-reporting.js; result-exports.js; output-essence.js; index.html (cache versions); tests/test_native_air_cross.cjs (new); PRACTICAL_IMPORTANCE_INVENTORY.json/.md; README.md; this report; AIR_HISTOPATHOLOGY_RESULTS.json (aggregate-only evidence); MANIFEST.sha256. Source data, classification definitions, navigation, themes, import and Vercel configuration were not changed.

Replace the complete project folder together. From it run `python3 -m http.server 8000`, open http://localhost:8000, import the source locally, choose Exploratory AIR, and generate the category table, proportion figure and performance table. Select the calculated outputs in Reports and export Word. No new dependencies or environment variables are required for the app. Browser tests require playwright-core and HUB_CHROMIUM_PATH; HUB_AIR_DATA optionally selects a local private verification input, which is excluded from the package.
