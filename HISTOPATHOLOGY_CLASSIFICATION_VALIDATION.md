# Study histopathology classification update — 14 October 2026

## Confirmed study disease reference

| Source code | Actual SPSS value label | Canonical display category | Study disease status | Observed records in each checked source file |
| --- | --- | --- | --- | ---: |
| 1 | acute appendicitis | Acute appendicitis | Positive for acute appendicitis | 49 |
| 2 | suppurative appendicitis | Suppurative appendicitis | Positive for acute appendicitis | 19 |
| 3 | phlemonous appendicitis | Phlegmonous appendicitis | Positive for acute appendicitis | 1 |
| 4 | gangrenous appendix | Gangrenous appendicitis | Positive for acute appendicitis | 0 |
| 5 | perforated appendicitis | Perforated appendicitis | Positive for acute appendicitis | 8 |
| 6 | reactive lymphoid hyperplasia | Reactive lymphoid hyperplasia | Negative for acute appendicitis | 8 |

Authority: researcher confirmation in this request; original source SPSS labels and existing project dictionary/coding. This is the study's operational disease definition, not a universal rule for every pathology report. Mixed findings require source review. Disease-positive simple appendicitis must not be confused with severity-negative status.

Both available source files were read with the bundled SPSS reader: `CRP MAS SPSS DATA_1.sav` and `Acute_Appendicitis_Categorized (4).sav`. Each contained 85 records, 77 disease-positive and eight disease-negative. Every original histology value was checked for membership in codes 1–6; no missing or unexpected histology codes occurred. This does not establish eligibility or completeness of every other clinical variable. Gangrenous appendix is a defined label but no records used code 4 in these files. Code 5 uses “perforated appendicitis”, not “perforated appendix”. The latter is accepted as an explicit equivalent alias for future labelled code-5 imports, not claimed to be observed in these files.

No source record, numeric disease coding, severity coding, threshold, fitted model, formula, confidence-interval method or study objective was changed. Original value labels and data dictionary are retained verbatim; the display crosswalk is documented separately. Source patient files are NOT included in this downloadable package.

## Implemented interface

- Shared classification reference with the exact heading “Study Histopathology Classification: Positive vs Negative for Acute Appendicitis”. Separate positive and negative lists are visible immediately when the entry opens.
- Glossary landing-page shortcut; contextual links in explanatory prose, table cells, notes, legends and report previews. Longest-phrase matching prioritises the study classification over the generic histopathology alias.
- Context-aware Back uses the existing retained-DOM navigation history. Linked definitions preserve selected outputs, scroll, drafts, layout and data.
- Interpretations' existing reference-standard teaching contains the same shared classification panel. The original supporting-content disclosures remain usable.
- The existing 2 × 2 teaching identifies reference-positive/negative independently from index-test positive/negative. Missing, mixed or conflicting findings are not assigned disease-negative status.
- Histopathology frequency table/chart display the exact canonical names; original source labels remain in import metadata and the dictionary.
- Word/HTML reports use the shared case-definition note, deduplicated within each report objective/section. Exported document text remains plain scientific text; in-app report preview links open the central glossary reference. No external application link is inserted into Word.
- Labelled file previews block unexpected labels, conflicting code/label pairs and mixed labels before confirmation. Unlabelled numeric CSV imports still rely on the documented study coding and their existing review warning; they cannot prove source-label equivalence. No ambiguous text category is silently recoded.

Inline linking deliberately excludes controls, editable fields, chart SVG geometry, source-code blocks and explicitly isolated teaching components. The associated caption/notes provide contextual access. It does not replace selection/reordering buttons or make standalone “positive”/“negative” words into links.

## Changed files

Runtime: `reference-standard.js`, `statistical-glossary.js`, `analysis-engine.js` (histopathology display labels/header only), `data-import.js`, `result-exports.js`, `styles.css`, `index.html` (asset versions).
Tests: new `tests/test_study_histopathology.cjs` and `tests/test_native_study_histopathology.cjs`; updated `tests/test_reference_standard.cjs` to assert the actual publication note rather than an outdated educational-note string.
Delivery documentation: this report, README and refreshed package checksums. All other project features retained.

## Checks actually performed

| Check | Result |
| --- | --- |
| Read both real source SAV files and inspect all histology values and value labels | PASS: 85 records each; identical labels/counts; no unexpected/missing histology |
| Compare previous packaged engine against updated engine using all 85 original source records | PASS: complete `d1_classification`, `d1_performance`, `d1_roc` outputs identical, including embedded computed metrics/logs |
| Canonical names, aliases, four diagnostic outcomes, rejection of mixed/unknown labels and conflicting code/label pairs | PASS: `test_study_histopathology.cjs` |
| Existing 2 × 2 orientation, five formulas, related links, engine counts, read-only state and reference notes | PASS: `test_reference_standard.cjs` |
| Actual classification links from Objectives, diagnostic table, ROC figure, histopathology table, Interpretations, Glossary and iframe report preview | PASS: `test_native_study_histopathology.cjs`, 1440 × 900 and 390 × 900, Light/Dark/Colored |
| Multi-step Back, selection, data, list/results/page/iframe scroll restoration | PASS: new native test plus existing `test_native_context_back.cjs` in both viewports/all themes |
| Existing five tabs, inline legend editing/saving/drafts/reorder, report selection and actual Word download | PASS: `test_native_five_tabs.cjs`, both viewports/all themes |
| Existing explanation coverage and unchanged result objects | PASS: `test_practical_importance.cjs`, 86 rationales/79 calculated HTML paths |
| Six classification-panel screenshots visually opened | PASS: desktop/mobile, all three themes; readable lists, no clipping |
| Actual synthetic Word export containing histopathology and diagnostic-performance tables | PASS: reopened XML, two editable Word tables, six canonical diagnoses, single shared case-definition note; rendered and visually inspected both pages |
| Static package/HTTP/configuration/asset dependency checks | PASS: `test_static_package.py`, 31 local runtime assets |
| npm production build | Not applicable: this is an existing static HTML/JavaScript app, with no npm build step |
| GitHub/Vercel deployment | Not performed; manual update workflow retained |

The new native tests use a clearly synthetic 24-record dataset; their figures, counts and Word document are not study findings. The private 85-record source audit is separate and was used only to verify labels, disease coding and unchanged diagnostic computations. Not every possible future upload, output combination or individual editable legend was visually examined.

## Use and local checks

Open Statistical Glossary and select “Study histopathology: positive vs negative classification”, or click a contextual pathology/disease-status term in the current workspace. Press the left-arrow Back button to return. The crosswalk disclosure shows the original spellings and codes.

Serve the extracted project folder using:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. No environment variables or secrets are required to run the app. The included README describes the existing manual Vercel/static deployment configuration.

Node-only targeted tests:

```bash
node tests/test_study_histopathology.cjs
node tests/test_reference_standard.cjs
node tests/test_practical_importance.cjs
python3 tests/test_static_package.py
```

Browser tests additionally require Playwright Core and a local Chromium executable; see their existing environment-variable usage. This delivery does not include a browser binary or private patient files.
