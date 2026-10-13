# Dedicated Statistical Glossary — implementation and validation

Latest source: the completed scientific-texture project with its collapsible sidebar. This update adds the glossary only. No guided tour, task assistant, redesign or new statistical calculation was added.

## Ready features

- Fourth primary tab and matching sidebar item: **Statistical Glossary**.
- 57 entries across 16 requested biomedical/statistical and appendicitis categories, sorted alphabetically.
- Search over terms, aliases, definitions, purposes, interpretations and related concepts; category filters; A–Z browsing; reset and no-results message.
- Full entry explanations, applicable formulas with symbols, assumptions, interpretation, explicitly illustrative examples, common mistakes and linked related terms. No invented findings, sample sizes or protocol thresholds.
- Inline underlined term buttons in explanatory objectives/workflow text, statistical guidance, table labels/cells, figure captions and interpretations. Dynamically generated content is annotated after rendering. SVG chart geometry/labels, input controls, identifiers/code and exported documents are excluded from text replacement; users can open glossary definitions from accompanying captions and methods.
- Opening a term hides and retains the existing sections rather than rebuilding them. Return restores visibility, selected tabs, keyboard focus and scroll position. The underlying dataset, completed results and unsaved DOM inputs are untouched by the glossary. Navigating directly to another tab uses the existing workflow.
- Existing sidebar open/close controls and separate desktop/mobile preference storage remain in use. No research data is persisted by the glossary.
- Existing OLED theme, scientific texture, local Inter font, light mode and compact layout retained. Glossary-specific CSS uses the existing palette and mobile control targets.

## Exactly which files changed

New runtime files:
- `glossary-data.js`: the shared glossary content and categories.
- `statistical-glossary.js`: reference UI, filtering, detail/related navigation, contextual links and view restoration.
- `glossary.css`: isolated responsive reference styling.

Existing runtime/config files:
- `index.html`: fourth tab, sidebar item, glossary section, new local stylesheet/scripts, updated stylesheet cache reference.
- `styles.css`: only the existing primary-navigation grid changed from three to four columns.
- `.vercelignore`: allow the three new runtime files in the existing deployment package.

Documentation/validation files:
- `README.md`: glossary instructions and four-destination navigation description.
- `tests/test_glossary.cjs`: new glossary/state-preservation tests.
- `tests/test_three_tab_workflow.cjs`: four-button navigation expectation; existing reporting workflow assertions retained.
- `tests/test_static_package.py`: expected runtime-asset count updated to 17.
- `scripts/test_project.py`: include glossary test in the full audit.
- `STATISTICAL_GLOSSARY_VALIDATION.md`: this report.
- `MANIFEST.sha256`: refreshed package checksums.

The engine, original research content, import libraries, results controllers, exports, sidebar code, and `vercel.json` remain byte-identical to the scientific-texture baseline. Synthetic SAV fixtures regenerated during testing were restored to the baseline bytes before packaging. No patient-level dataset or secrets were added.

## Tests actually passed

`python scripts/test_project.py` completed successfully on the updated project:
- JavaScript syntax checks; direct plain and row-compressed SAV tests; Excel/CSV import/controller and error-path checks.
- Learning/search, interpretations, report ordering, removed Scope Reports, Chapter Four and statistical reporting regressions.
- Three connected reporting tabs plus glossary navigation, shared result/interpretation updates, export captions and numbering.
- Sidebar desktop/mobile media-mode simulation.
- Glossary: all 57 IDs and related links resolve; all 16 categories have entries; abbreviation/definition search; category/alphabet/no-results states; input/change/reset/return handlers; contextual term buttons in text, tables and captions with SVG exclusion.
- Return from objectives, results, interpretations and aggregate analysis preserves existing DOM, unsaved search input, dataset identity and result objects. Desktop/mobile-mode sidebar repeated toggles keep the selected glossary and dataset intact.
- Local HTTP entry/assets delivery and 404; static deployment allowlist and dependency order.
- Python statistical and SAV-conversion checks; 372 synthetic numerical/reference checks; 63 catalogue/controller assertions; aggregate workspace checks.

Additional OLED CSS/contrast and compact-typography checks passed. Native-browser desktop/Android rendering, text clipping, scrolling, tap hitboxes and real visual appearance were **not** tested in this environment. Automated UI tests use a simulated DOM/media environment and the actual worker calculation engine; they do not establish native layout correctness. The glossary entries were reviewed against statistical principles and primary NIST/CDC reference material; there has been no independent clinical/editorial peer review.

## Production build and deployment

This existing app is buildless: `vercel.json` has empty install/build commands and output directory `.`. There is no npm production compilation command. Static delivery/configuration checks passed; the standalone preview was generated and the ZIP verified against the actual source bytes. Nothing was pushed to GitHub or deployed to Vercel.

## Run and check before deployment

Extract the ZIP into a clean folder, keeping `vendor/` and all root assets. Run:

```sh
python -m http.server 8080
```

Open `http://localhost:8080`. No npm install, runtime dependency download, API key or environment variable is required. All runtime libraries/fonts are bundled. Reference-source links open external pages only when selected; glossary operation and patient data processing are local.

Optional automated audit requires Node.js plus Python dependencies in `analysis/requirements.txt`:

```sh
python -m pip install -r analysis/requirements.txt
python scripts/test_project.py
```

Run this with synthetic fixtures only. To check just the glossary: `node tests/test_glossary.cjs`. Additional CSS checks require tinycss2, fontTools and Brotli.

Manual browser checklist:
1. Open all four tabs; close/reopen the sidebar with the glossary selected on desktop and an Android-width screen.
2. Search “PPV”, “Fisher”, “confidence” and “MAS”; combine category/letter filters; test no-results/reset.
3. Open an entry and every related-term link of interest.
4. Import a synthetic dataset, generate a table/figure, then open an underlined statistical term from the output or interpretation. Return and verify the dataset, title drafts, results, tab and scroll position remain.
5. Inspect keyboard focus, long entry names, dropdowns, scrolling, light/dark modes and dense table readability at narrow widths.
6. Confirm existing exports and calculations before deploying the unchanged static architecture.

## Reference sources

Original concise summaries use these primary educational references; neither provides study-specific thresholds:
- NIST Engineering Statistics Handbook: https://www.itl.nist.gov/div898/handbook/
- NIST confidence intervals: https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm
- NIST comparison methods: https://www.itl.nist.gov/div898/handbook/prc/section3/prc35.htm
- CDC Principles of Epidemiology glossary: https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/glossary.html

No requested glossary control is intentionally left incomplete. Remaining verification is native-browser/mobile visual QA and independent editorial review. Existing historical limitations in other project validation reports still apply.
