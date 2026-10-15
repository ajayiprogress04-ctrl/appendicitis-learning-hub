All Objectives — Existing App Update

Replace these four files in the existing app root: results-browser.js, bulk-analysis.js, result-exports.js, index.html. No dataset is included. Not deployed.

Implemented:
- All Objectives in the existing objective/formatting dropdown and linked Interpretations dropdown.
- All-objective catalogue browsing, generation, selection, interpretation access, preview and combined Word export.
- Reuses the existing bulk processor, eligibility checks, cached calculations, failure summaries and partial export mechanism.
- All Objectives includes all existing objectives and exploratory scopes, identified by their original headings.
- Unsupported and failed definitions remain selected and clearly identified; supported outputs continue into one Word document.
- Individual objective generation and exports remain available.
- Objective headings in the combined Word document, preserving existing tables, captions, notes, narratives and scientific order.
- Shared bulk objective dropdown now updates its selection to the chosen objective or all objectives.

Actual local checks:
- All Objectives processed all 117 definitions: 113 current supported results validated/reused, four unsupported definitions identified.
- Complete preview contained 74 tables and 39 figures.
- Actual combined Word download contained 113 outputs:74 editable tables,39 valid embedded PNG figures,15 objective/scope headings.
- Verified all exported table cells against existing calculated results, caption order, Word ZIP/XML integrity and embedded images; exclusions all have reasons.
- Complete document reopened/rendered in LibreOffice; representative pages inspected.
- Individual Objective2 generation passed; separate focused Word download and Reports preview contained five outputs (three tables,two figures).
- Individual result navigation and all-objective Interpretations passed without browser runtime errors.
- Dropdown checked at1440px and390px across Light,Dark,Colored themes; no horizontal page overflow.
- JavaScript syntax checks passed for all three changed modules.

The complete-library export tests reused previously verified calculated study outputs, rather than rerunning unrelated statistical models. Individual Objective2 generation was also exercised. Study data and statistical engine were not modified.
