# Parameter reference update — 14 October 2026

## Use

Open **Statistical Glossary** and search a parameter name, abbreviation or definition. Open its entry to view its range, units, classification table, qualifications, sources and study application. In **Interpretations**, use the shared parameter search/selector. Reports also provides this read-only reference; existing inline glossary links open the same definitions and offer a return control. Teaching definitions are not automatically added to exported scientific findings.

## Scope and source hierarchy

Reviewed all 92 variables in variables.js, all 57 original glossary concepts, 13 additional named result parameters and the combined approach. Three original concepts reuse the corresponding variable definition: there are 160 canonical entries. PARAMETER_REFERENCE_INVENTORY.md lists every entry; PARAMETER_REFERENCE_INVENTORY.json includes its full study application and qualifications.

parameter-reference.js is the shared authoritative educational registry. It preserves existing dictionary codes and analysis boundaries; it does not recode records, calculate new findings or change the statistical engine. Study operational categories, protocol statements recorded in the dictionary, published alternatives, external laboratory intervals and statistical conventions are labelled separately. A mathematical domain is not a normal range. Parameters lacking established cut-offs explicitly say so. Diagnostic performance measures have formulas and denominator limitations without unsupported poor/good/excellent labels.

MAS is the documented 9-point modified score: 0–4, 5–6 and 7–9. Current AIR operational bands remain 0–4, 5–8 and 9–12; the published 2021 revised 0–3, 4–8 and 9–12 bands are displayed separately, not substituted. hs-CRP elevation is strictly greater than the working 3 mg/L limit. Age 16 belongs to the study adult group. Histology codes 1–3 are operationally simple, 4–5 complicated; isolated lymphoid hyperplasia (6) remains negative and outside severity grouping. Published PCV intervals reproduce the current engine, while their local laboratory applicability is flagged. Units, coded categories, confidence scales, cost, time, stay, missing data and statistical outputs are covered.

## Scientific confirmation still required

- Original approved protocol and complete score-component rules, especially AIR identity and any proposal to adopt revised AIR bands.
- Local hs-CRP assay/reportable limits and a validated diagnostic cut-off; the laboratory elevation boundary is not a definitive diagnosis.
- An approved combined MAS–hs-CRP clinical decision rule. The existing exploratory Firth-model probability threshold is not an approved AND/OR rule.
- Prespecified histology crosswalk and confirmation that code 6 denotes isolated non-appendicitis pathology in source records.
- Local applicability of external PCV intervals; actual numeric WBC/neutrophil derived-reference arrays and their age boundaries are not recovered.
- Clinician identifiers and repeated-case linkage for diagnostic confidence comparisons.
- Empirical cost-tercile cut values/equality allocation, price year, cost perspective and incremental-cost comparator.
- Source-specific missing codes, eligibility and other item-level uncertainties listed in the inventory.

These are visible qualifications, not silently guessed classifications. No original patient SAV/source records were reopened for this update. The inventory is a complete review of available project definitions, not certification that every clinical rule has been approved.

## Files

New: parameter-reference.js; PARAMETER_REFERENCE_INVENTORY.md/.json; this validation report; scripts/generate_parameter_inventory.cjs; tests/test_parameter_reference.cjs; tests/test_native_parameters.cjs.

Modified: index.html (script order/version); statistical-glossary.js (shared reference detail); results-browser.js (Interpretations selector/shared histology mapping); reports.js (read-only reference); glossary.css (scoped theme-aware responsive styles); .vercelignore (runtime asset allowlist); tests/test_static_package.py (27 assets); README.md (usage).

## Actual checks

Passed:

- Registry test: all 92 dictionary variables, 57 original concept IDs and additional parameters covered; all 160 entries have required reference fields and unique IDs.
- Boundary tests: all valid MAS/AIR integer scores; invalid/fractional scores; exact CRP 3; age 16; model 0.50; p=0.05; time and stay limits; histology negative/missing codes. PCV interval endpoints and just-outside values agree with the existing engine across its documented bands; AIR mapping agrees with that engine.
- Native Chromium, 1440×900 and 390×900: all 160 actual Interpretations selections and all 160 glossary entries opened at each viewport. Search/no-results/reset, glossary return without losing results/selection/data, Reports reference, all three theme switches, required fields, page overflow and runtime-error checks passed.
- Existing native histology interaction tests at both viewports: simple/complicated/negative examples, synthetic group counts and conflicting-label warning without recoding passed.
- Existing five-tab native regression at both viewports: exact navigation, legend editing/saving/reordering, Interpretations, Reports, independent Word legend inclusion/exclusion and download, three themes and unchanged data passed.
- JavaScript syntax, static asset/HTTP/Vercel allowlist checks, and standalone-preview generation passed. This static application has no npm compilation step.

Not performed: native Android hardware, Safari/Firefox, native Microsoft Word, new clinical validation, a full rerun of every statistical analysis family, or live deployment. Word-download regression checks are not a new visual-pagination comparison.

## Run before deployment

Extract the complete ZIP, then from its project folder run `python3 -m http.server 8000` and open http://localhost:8000. No new runtime dependencies, API keys or environment variables are required. Check your actual local dataset, the reference qualifications, glossary links and return behaviour in all themes. Do not treat unresolved teaching thresholds as approved analysis rules. The package contains no newly supplied patient-level data or private reference reports. Deploy only after the outstanding scientific rules have been reviewed as appropriate; no deployment was performed here.
