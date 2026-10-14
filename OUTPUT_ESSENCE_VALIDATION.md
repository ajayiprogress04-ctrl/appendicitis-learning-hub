> Historical validation of the previous educational layout. Its visible Essence blocks and export option have been superseded by the current single-paragraph format; see INTEGRATED_NARRATIVE_VALIDATION.md. The explanation registry remains preserved internally.

# Output essence implementation and validation

This focused update adds educational purpose, practical reading guidance and limitations without changing analyses or stored research writing.

## Coverage

- 86 catalogue entries reviewed: 79 supported table/figure explanations and 7 planned outputs with explicit source-limited purpose and no conclusion.
- 14 existing supporting aggregate templates covered. Aggregate guidance follows the selected comparison or plot; aggregate views retain their existing CSV/JSON export limits.
- One shared registry provides Tables & Figures, Interpretations and report-export content. No duplicated definition store, new router, network request or analysis method.
- Generated content is read at display/export time. No dataset or result object is modified. Equal model classification counts are explained without claiming equal participant predictions or superiority.

## Changed files

New: `output-essence.js`, `tests/test_output_essence.cjs`, `tests/test_native_output_essence.cjs`, `OUTPUT_ESSENCE_INVENTORY.md`, `OUTPUT_ESSENCE_INVENTORY.json`, this validation document.

Modified: `results-browser.js` (preview/unrun/Interpretations placement), `workspace.js` (supporting aggregate educational guidance), `result-exports.js` (shared export content and separate optional paragraph), `reports.js` (per-output independent inclusion option), `styles.css` (small inherited-theme text treatment), `index.html` (local script and cache versions), `.vercelignore` (allow new local runtime script), `tests/test_static_package.py` (30 assets), `README.md`, `MANIFEST.sha256`.

No changes to `analysis-engine.js`, `content.js`, `variables.js`, `result-catalog.js`, the Word template geometry or statistical calculations.

## Tests actually passed

- Unit coverage of all 86 purposes and all 79 calculated explanations, 7 source-limited outputs and 14 aggregate templates. Correct table/figure headings, no result mutation, purpose-only messages when unrun, and HTML inclusion/exclusion.
- Native Chromium desktop 1440×900 and mobile 390×900 with synthetic data: demographics, diagnostic performance/confusion, severity comparison/box, histology, confidence transitions, costs and association scatter. Essence visible in previews and Interpretations; Light/Dark/Colored modes and no page horizontal overflow.
- Report checkbox defaults off; independent include/exclude works. Real generated Word bytes and report HTML contain the selected essence and omit it when disabled.
- 79-family biostatistical regression: numeric logs, rows and plot data unchanged against the prior engine, including diagnostic denominators and inference reporting.
- Context-aware Back regression in all six viewport/theme combinations: selected output, scroll positions, focus/zoom/sidebar state, report origins and unsaved drafts preserved.
- Syntax checks for changed JavaScript. Static production-package check: 30 local runtime assets, HTTP delivery, dependency order and deployment allowlist pass. This static app has no npm compilation step.
- The synthetic Word report was rendered with LibreOffice to 11 pages; every page visually inspected. The optional essence is readable and distinct from the integrated narrative, with retained table/figure formatting, no clipped output or missing glyphs. Pagination follows existing report behavior; notes and narratives can continue on the next page.

Initial test-harness assertions incorrectly rejected the legitimate scientific word “undefined” and used a checkbox selector that vanished after a successful re-render. The assertions/selectors were corrected; final runs pass. These were harness errors, not application failures.

## Limitations and use

Explanations are scoped, authored reading guidance with limited result-aware summaries, not a language model that invents new interpretations. Most intentionally avoid repeating numerical results; fuller findings remain in the existing scientific paragraph. All seven unresolved source-limited analyses still need their documented data/protocol requirements. No clinical participant rows are included in this update. Native Microsoft Word, physical Android hardware and live deployment were not tested.

Unzip, run `python3 -m http.server 8000`, and open `http://localhost:8000`. Use the bundled synthetic sample for a smoke test, generate a result, open its linked interpretation, then select it in Reports and toggle **Include educational essence (optional)** before preview/export. No new dependencies, secrets or environment variables are needed to run the app. Optional native tests require Playwright Core, `CODEX_PRIMARY_RUNTIME_NODE_MODULES` and an installed Chromium path in `HUB_CHROMIUM_PATH` (or adapt these runtime paths to your local installation).

No GitHub push or Vercel deployment was performed.
