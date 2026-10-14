# Resizable results workspace and fitted output viewer

This focused update changes Tables & Figures viewing only. Research calculations, imports, writing rules, reports, five main tabs and the shared appearance remain intact.

## Use

- **Hide results list / Show results list:** collapse or reopen the left list. The selected output stays selected.
- **Divider:** drag it on desktop, or focus it and use Left/Right arrows, Home or End. Width is bounded to keep room for the result.
- **Focus workspace:** fill the available viewport with independent panel scrolling. Exit with the button or Escape to restore normal page scrolling. Ordinary mode retains the page scrollbar. See LATEST_VIEWER_VALIDATION.md for the latest checks.
- **Fit to View:** measure the selected output and available viewing area, then fit it subject to readable text limits.
- **Actual Size:** use the output's normal display scale.
- **Zoom In / Zoom Out:** inspect details manually; these controls affect the preview only.
- **Reset View:** return to fitted scale and the beginning of the selected output.

On narrow screens the list is a drawer, initially closed when there is no stored layout preference. Choosing a preview closes the drawer. Reopen it with Show results list. The results viewport supports scrolling when the complete output cannot fit legibly.

Tables use wrapped headings, reduced local padding and appropriate minimum column estimates. Fit mode keeps displayed table text at approximately 12 px or larger. Figure fit preserves aspect ratio and a readable label floor; small screens can still require horizontal/vertical scrolling. The status explicitly reports when readability takes priority over complete fitting. No promise is made that every large output can fit on every screen.

Captions, editable legends and interpretations remain separate. Editing/reporting/export operations use the original result objects. Zoom, width and fit never recalculate an analysis.

## Cause and implementation

The previous preview had a large forced SVG minimum width and combined output, interpretation, notes and editing in one scroll area. The mobile stylesheet also stacked the panels using a block layout. A dedicated bounded output viewport, a scoped grid workspace and a mobile drawer now separate these concerns.

List and right-panel scrolling remain independent. The output viewport provides local pan/scroll for oversized tables/figures. Resize/collapse changes existing DOM styles rather than rebuilding research content. Viewer scale and pan are retained in memory per output; the renderer snapshots them before replacing a preview. Width/collapse preferences alone are persisted locally—no research data is stored for this preference.

## Checks actually passed

- Native Chromium 153, desktop 1440 × 900 and mobile 390 × 900.
- Repeated collapse/reopen and result-panel expansion; desktop pointer drag and keyboard resizing.
- Fit, actual size, manual zoom in/out and reset; a short table and grouped figure fit completely on the tested desktop workspace.
- Figure aspect-ratio measurement and visual inspection of the full fitted desktop figure, including axes and series legend. Mobile overview was inspected and correctly reports the readable-scale scrolling fallback.
- A 120-row synthetic table remains readable and scrollable; its viewing offset survives output reordering.
- A synthetic tall SVG with a bottom annotation was fitted/scrolled; the bottom annotation remained accessible.
- Actual wheel and programmatic scrolling checks: left-list scrolling leaves the right panel unchanged, and right scrolling leaves the list unchanged. Existing scroll regression passed with the new drawer/focused layout.
- Selection, loaded synthetic data, completed results and an unsaved legend draft remained intact during layout/view changes.
- Light, Dark and Colored theme checks, no horizontal page overflow and no browser JavaScript errors in the viewer checks.
- Five-tab/inline-legend/report regression passed at both viewport sizes: exact navigation order, legend editing/save/draft/reorder, independent legend inclusion/exclusion, and an actual Word download.
- Import controller (CSV/XLS/XLSX/SAV), report ordering, runtime JavaScript syntax and static local HTTP/deployment asset checks passed.
- Standalone preview builder completed.
- Engine, import code, Word exporter, shared writing/report logic, shared styles/themes, About logic and vercel.json were byte-compared against the prior delivered project and are unchanged.
- Final ZIP integrity and packaged-file byte verification passed.

The initial test-browser launch failed because its executable was truncated; a complete executable was recovered from the existing compressed runtime and the final browser checks completed. Physical Android devices, other browser engines, and every possible future table/figure were not tested. The complete Python statistical audit was not rerun. This static app has no npm production compilation step. No GitHub push or Vercel deployment occurred.

## Changed files

- result-viewer.js — new layout, sizing, fit/zoom, focus and preference controller.
- result-viewer.css — new scoped workspace/viewer/drawer styles.
- results-browser.js — output wrappers, viewer initialization, state snapshot and focus cleanup hooks.
- index.html — the two local assets and updated controller cache version.
- .vercelignore — allows the two runtime assets; existing deployment settings are retained.
- tests/test_native_result_viewer.cjs — new behavior/geometry/state checks.
- tests/test_native_five_tabs.cjs — targets the visible interpretation link when the mobile list is hidden.
- tests/test_native_scroll.cjs — tests the new focused layout and drawer's exposed result area.
- tests/test_static_package.py — recognises 26 runtime asset references.
- README.md and this record — instructions and actual validation.

## Run locally

Extract the complete ZIP, run `python -m http.server 8080` inside its folder and open http://localhost:8080. No new runtime dependencies, API keys or environment variables are required.
