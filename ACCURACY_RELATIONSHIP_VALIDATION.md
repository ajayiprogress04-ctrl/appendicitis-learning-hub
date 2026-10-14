# Accuracy, Sensitivity and Specificity — 14 October 2026

## Verified relationship

The implemented formulas and four diagnostic cell definitions were correct and are retained. The unchanged engine compares index results with histology codes 1–5 positive, code 6 negative under the isolated reactive lymphoid hyperplasia assumption, and excludes missing/unlisted references. A severity analysis has a distinct target and must not be confused with appendicitis present/absent. This update does not newly certify the original approved protocol or pathology source records.

| Measure | What it measures | Formula | What to remember |
|---|---|---|---|
| Sensitivity | Correct positive tests among reference-positive cases | TP/(TP+FN) | Denominator is cases with appendicitis under the reference definition |
| Specificity | Correct negative tests among reference-negative cases | TN/(TN+FP) | Denominator is cases without appendicitis under the reference definition |
| Accuracy | Correct positive and negative classifications across eligible evaluated cases | (TP+TN)/(TP+TN+FP+FN) | Reference-group proportions weight the class-specific rates |

For the same unweighted binary table, N=TP+TN+FP+FN and p=(TP+FN)/N:

**Accuracy = p × Sensitivity + (1−p) × Specificity.**

Derivation: (TP+TN)/N = [TP/(TP+FN)]×[(TP+FN)/N] + [TN/(TN+FP)]×[(TN+FP)/N]. Both reference classes must be present for both class-specific rates to be defined. If one class is absent, overall Accuracy can still be calculated directly when N>0, but multiplying an undefined rate by zero is not valid. Use unrounded proportions and a consistent cohort, target, reference and threshold.

p here is the analysed cohort's reference-positive fraction. Operated-only or case-control samples need not reproduce clinical-population prevalence. Sensitivity and Specificity generally cannot determine overall Accuracy without those group weights. They can also change between clinical settings, so the identity does not justify transportability by merely substituting another prevalence.

The simple mean (Sensitivity+Specificity)/2 is binary unadjusted **balanced accuracy**. It equals ordinary Accuracy when the two reference groups are equally sized or when Sensitivity=Specificity. Balanced accuracy is explained as a distinction, not added to the study's analysis outputs.

Hypothetical example, not study results: TP=72, FN=8, TN=12, FP=8; N=100, p=0.80. Sensitivity=90%, Specificity=60%, Accuracy=84%. Weighted calculation: 0.80×0.90+0.20×0.60=0.84. The arithmetic mean is 75%, not 84%.

## Sources

- Alberg AJ, Park JW, Hager BW, Brock MV, Diener-West M. The use of “overall accuracy” to evaluate the validity of screening or diagnostic tests. J Gen Intern Med. 2004;19(5 Pt 1):460–465. doi:10.1111/j.1525-1497.2004.30091.x. https://pubmed.ncbi.nlm.nih.gov/15109345/
- scikit-learn developers. Model evaluation, binary unadjusted balanced accuracy definition; official documentation checked 14 October 2026. https://scikit-learn.org/stable/modules/model_evaluation.html#balanced-accuracy-score

The weighted relationship and equality conditions were additionally verified algebraically and by enumeration. External references support statistical definitions, not study-specific cut-offs or histology coding.

## Files changed

- reference-standard.js: focused Accuracy explanation, exact conditions, hypothetical example, published sources and Sensitivity/Specificity cross-references. Its canonical parameter record shares the same explanation with the existing Interpretations/Reports selectors. Existing formulas and the five-measure teaching table are retained.
- statistical-glossary.js: the requested comparison table and concise relationship panel appear only in Accuracy; no glossary reorganisation or new entry.
- index.html: cache versions for these two modified scripts.
- PARAMETER_REFERENCE_INVENTORY.md/.json: regenerated sources and Accuracy qualifications. Still 161 entries.
- tests/test_accuracy_relationship.cjs and tests/test_native_accuracy.cjs: new tests.
- README.md, this validation report and MANIFEST.sha256: usage and package verification.

Byte-compared unchanged against the previous complete project: analysis-engine.js, variables.js, data-import.js, result-exports.js, reports.js, result-viewer.js, sidebar.js, styles.css, glossary.css and vercel.json. No study calculations, records, classifications, report formatting or navigation mechanism were changed. Tables/figures/report links continue opening the same authoritative glossary definition; educational examples are not inserted into exported research findings.

## Tests actually passed

- 2,304 binary contingency tables with both reference classes present: weighted identity and the exact conditions under which the simple mean equals ordinary Accuracy, including zero numerator cells. The hypothetical 90%/60%/84%/75% arithmetic was verified. Absent-class qualifications, shared formula and cross-reference IDs were checked.
- Existing reference-standard unit test: TP/TN/FP/FN coding, formula orientation, all five diagnostic formulas, real engine count agreement on synthetic fixtures, unchanged records and app/report notes.
- Native Chromium at 1440×900 and 390×900, each in Light, Dark and Colored: opened Accuracy from an actual generated diagnostic table; comparison columns/three rows, weighted relationship, qualifications and clearly hypothetical example present; both links opened their correct definitions; Back returned to Accuracy and then the original result; loaded data, calculated results and selected ID remained unchanged; no page errors or horizontal overflow on the restored result.
- JavaScript syntax, 28-runtime-asset HTTP/static deployment checks and standalone-preview generation.

Not performed: native Android hardware, Safari/Firefox, a fresh full regression of every analysis or every glossary entry, native Microsoft Word/pagination inspection, or live deployment. Previously verified Back functionality is retained; this update's tests specifically exercised the new Accuracy cross-links.

## Use and run

Extract the ZIP and run `python3 -m http.server 8000` inside `project`; open http://localhost:8000. No additional dependencies or environment variables are needed. Search Accuracy in Statistical Glossary, or select Accuracy in an existing diagnostic table. Its comparison panel links to Sensitivity and Specificity; use the visible arrow Back to retrace the visit.

The package contains existing public app assets and synthetic fixtures; no new patient-level data or private reference reports. No GitHub push or Vercel deployment was performed.
