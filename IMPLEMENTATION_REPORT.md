Standalone packaging verification: an inline-script ordering issue was found and corrected. Scripts now run after the DOM in the original module order. The packaged single-file preview passed native Chromium search navigation, XLSX import, confirmation and real Worker-generated output, with no page errors or external requests. scripts/build_preview.py reproduces this correct packaging order.

# Appearance and whole-hub search — 13 October 2026

The existing search box now also searches actual objectives, variable definitions/bindings, methods, glossary/study notes, catalogue titles, generated interpretations/outputs and loaded aggregate results. Partial/case-insensitive multiword matching, title-first ranking, clickable destinations, Show more, Clear and Escape are implemented. Search does not generate analyses or index participant rows. Existing local learning search and catalogue filters remain available. Current titles and generated results are read from memory.

Visual refinements include navy/teal surfaces, improved light/dark contrast, spacing/cards, larger table/explanatory text, 44px controls, wrapping navigation, scrollable tables and charts, and reduced-motion support. Charts retain at least 540px width inside a scrolling figure. Existing objectives, modes, review/progress, import and exports are preserved.

Native verification passed in headless Chromium 153 at 320/390/1440 CSS pixels: search destinations, no page overflow on checked screens, tab target sizes, CSV/XLSX/XLS preview/activation and real Worker-generated tables, generated-result search, narrow figure scrolling, dark mode/reduced motion, glossary/method destinations, and persistent review/quick mode. Screenshots were inspected internally. No page errors or HTTP requests occurred. Real Android hardware, Safari/Firefox and production deployment remain untested.

Optional native test: install Playwright and Chromium in a separate test environment, then run `node tests/test_browser_ui.cjs`. `HUB_BROWSER_EXECUTABLE` optionally selects a browser binary. This test uses synthetic fixtures and temporary screenshots. `node tests/test_global_search.cjs` checks indexed queries and destinations; aggregate-indexing checks run when locally generated reference data is available.

---

## Verification and preservation

Queries tested: OBJECTIVE 5, HISTOLOGY_SEV, mann, confidence transitions, p-value, mixed-case ROC, no-match terms, generated interpretation text and edited titles. Both controller and native click-through destinations were tested. 309 learning assertions, 33 aggregate-workspace assertions and 63 catalogue/controller assertions passed; import parser/controller regressions passed. The six approved objectives and content.js, variables.js, analysis-engine.js, result-catalog.js, result-exports.js and Python statistical engine remain byte-identical to the initial supplied package. Import modifications from Prompt 2 are retained. No SAV or private browser dataset was changed. No real data is included in the app or preview.

Earlier browser-installation limitations in the historical report below applied to earlier stages; the native checks described above were completed in this stage using a locally obtained browser binary.

---

## Retained earlier reports (historical)

