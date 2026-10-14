# Histopathology reference-standard teaching — 14 October 2026

## Use

Open **Interpretations** to find “Histopathology as the reference standard”. Select TP, FP, FN or TN in the interactive table. Expand the hypothetical example, measures or study-rule panels for details. In **Statistical Glossary**, search “reference standard”, “index test” or a diagnostic measure. The reference-standard entry includes the same interactive component; linked terms provide a return to the previous section without clearing research state.

Diagnostic output notes identify the reference target and working index rules. The same notes feed Reports HTML preview and Word export when explanatory notes are included. The existing Reports inclusion/exclusion controls remain available. Hypothetical teaching examples are not exported as study findings. No new main navigation tab is added.

## Project definitions verified

The source is the current variables.js dictionary, particularly original histology, HISTOLOGY_ACUTE_APPENDICITIS and HISTOLOGY_SEVERITY, plus the unchanged analysis-engine.js disease/severity and index-test implementation.

| Original histology code | Dictionary diagnosis | Appendicitis disease reference | Severity target |
|---|---|---|---|
| 1 | Acute appendicitis | Positive (1) | Simple |
| 2 | Suppurative appendicitis | Positive (1) | Simple |
| 3 | Source spelling “phlemonous appendicitis” | Positive (1) | Simple; displayed educational spelling phlegmonous |
| 4 | Gangrenous appendix | Positive (1) | Complicated |
| 5 | Perforated appendicitis | Positive (1) | Complicated |
| 6 | Reactive lymphoid hyperplasia | Negative (0), only under the documented isolated-without-appendicitis assumption | Not applicable / excluded |
| Missing / unlisted | Not established | Unclassified; not negative | Unclassified |

The original detailed description and binary disease-status concept are distinct. Acute appendicitis code 1 remains positive. Simple is not a disease-negative diagnosis. For an explicitly labelled severity analysis only, simple is the negative comparator and complicated the positive target. Operative rupture does not overwrite histological classification.

Current rules verified in the engine: recorded MAS 0–9, positive ≥7; hs-CRP positive >3 mg/L, exactly 3 not positive; exploratory combined Firth-model held-out probability positive ≥0.50. The existing age comparison uses children <16 and adults ≥16 with the same pooled model and reference definition. AIR and explicit binary-sign diagnostic outputs retain their documented working operating points. ROC ranking uses continuous measurements/probabilities rather than claiming one binary threshold defines the whole curve.

## Remaining scientific limitations

The dictionary records a user-agreed histology mapping and prior label verification. This update does not reopen original pathology source records or the original SAV. The approved protocol is not bundled, so formal protocol prespecification is not newly confirmed. The combined approach is an exploratory fitted model; no approved clinical AND/OR rule is recovered. hs-CRP >3 is a laboratory-elevation operating point, not a universal appendicitis cut-off. Pathology examination quality, blinding, specimen linkage and clinical eligibility require source documentation. Mixed inflammation plus lymphoid hyperplasia or conflicting uploaded labels require review, never silent recoding.

The teaching distinguishes an operational reference standard from an infallible diagnosis and discusses selection/verification bias. It does not assert that these biases were measured in this study. General methodology is informed by Bossuyt PM et al., STARD 2015, BMJ 2015;351:h5527, doi:10.1136/bmj.h5527; and Cohen JF et al., BMJ Open 2016;6:e012799, doi:10.1136/bmjopen-2016-012799. These references support reporting principles, not the study-specific histology codes or cut-offs.

## Implementation and changed files

- New reference-standard.js: shared teaching definitions, glossary/registry extension, interactive 2 × 2 learner, hypothetical examples and result-specific methodological notes. Its classification helper is educational only and never calls or changes the analysis engine.
- results-browser.js: Interpretations component; output notes receive the actual catalogue entry; report items carry their stable key so notes retain the correct target when reordered.
- statistical-glossary.js: shared learner in the reference entry. The new index-test entry and existing TP/TN/FP/FN and five metric definitions use the same canonical content.
- result-exports.js: app notes and report content share the new methodological notes; calculations, numerical cells and Word formatting specification are unchanged.
- glossary.css: small scoped, theme-token-based teaching controls/table styles.
- index.html / .vercelignore: new local runtime asset and cache versions. Vercel configuration unchanged.
- scripts/generate_parameter_inventory.cjs and PARAMETER_REFERENCE_INVENTORY.md/.json: include the educational extension; now 161 canonical entries.
- tests/test_reference_standard.cjs / tests/test_native_reference.cjs: new verification. Existing tests/test_native_parameters.cjs narrows its reference selector to the canonical data-parameter-id because the entry now also contains a learner. tests/test_static_package.py expects 28 runtime assets.
- README.md, this report and regenerated MANIFEST.sha256: usage and package audit.

## Actual tests

Passed:

- Pure JavaScript tests: disease-positive codes 1–5, conditional negative code 6, missing/unlisted/string/invalid reference cases, all four TP/TN/FP/FN assignments, requested table orientation, exact five formulas, valid glossary related links and actual engine MAS count agreement using synthetic records. Input records remained unchanged.
- Native Chromium at 1440×900 and 390×900: cell buttons and pressed state, all four hypothetical assignments plus missing reference, formula/denominator table, glossary links and return, unchanged loaded data/results/selection, Light/Dark/Colored switching and no horizontal page overflow or runtime errors.
- Actual synthetic diagnostic result displayed reference notes; the same notes, operating points and formulas appeared in generated Reports HTML and DOCX content. Hypothetical learner outcomes did not enter the exported report.
- Existing five-tab regression at both viewports: navigation, inline legend edits/save/reordering, separate Interpretations, Reports links, independent legend inclusion/exclusion, real Word download, all three themes and unchanged data.
- Existing comprehensive parameter-opening regression at both viewports, following the selector correction: all 161 Interpretations reference selections and all 161 glossary opens, search/empty/reset, return/state and Reports references.
- Internal screenshot inspection: mobile Light/Colored and desktop Dark teaching panels; text, cells and theme contrast checked. The first-column width was refined to avoid splitting “positive”/“negative” mid-word on mobile. Screenshots are internal QA, not package assets.
- JavaScript syntax, 28-asset static HTTP/allowlist checks and standalone-preview generation. Static application: no npm compilation/build dependency added.

The first pure-test attempt failed because its VM omitted the browser TextEncoder API; the harness was corrected and passed. The first parameter regression encountered two styled panels under one glossary entry; the selector was corrected to target the canonical reference and rerun. Neither was a patient-data or engine failure.

Not performed: native Android device testing, Safari/Firefox, native Microsoft Word or a fresh visual-pagination audit, original patient-source/protocol validation, or live deployment. DOCX content and download checks do not certify identical pagination in every Word version.

## Run

Extract the ZIP. In `project`, run `python3 -m http.server 8000` and open http://localhost:8000. No new dependencies, secrets, API keys or environment variables are needed. Browser processing remains local. Only synthetic test fixtures and the existing public app assets are included; private pathology reports and patient-level data are not added. No GitHub push or Vercel deployment was performed.
