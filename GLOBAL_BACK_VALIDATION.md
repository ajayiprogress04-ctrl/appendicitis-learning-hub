# Global context-aware Back update — 14 October 2026

## Implemented
A shared Back button follows actual in-app navigation across Objectives, Tables & Figures, Interpretations, Statistical Glossary and Reports, plus variable views, aggregate workspaces, classification explanations, search destinations and About. Browser Back/Forward use the same history. Simple accordions, filters, zoom and reordering do not create destinations.

Restoration retains selected outputs, filters, disclosures, list/results/page scrolling, viewer preferences and unsaved writing. Reports preview restoration includes its iframe and scroll. When report selections, writing or computed results change elsewhere, the report refreshes from current underlying state rather than reverting it. Back closes an open mobile navigation drawer before consuming page history.

History is memory-only, bounded to the most recent 40 prior view snapshots. Browser history stores only an opaque session token and index. Refresh and dataset replacement start a fresh history; no clinical data are persisted for navigation. Older released destinations fall back gracefully. Direct entry has a disabled Back button until an in-app origin exists.

## Changed files
Runtime: navigation-history.js (new), index.html, styles.css, script.js, results-browser.js, workspace.js, statistical-glossary.js, about.js, global-search.js, result-viewer.js, reports.js, sidebar.js and .vercelignore (new runtime file allowlist).
Tests: test_native_global_back.cjs and test_native_global_back_details.cjs (new); test_native_context_back.cjs, test_native_study_histopathology.cjs and test_static_package.py updated. README.md, this report and MANIFEST.sha256 updated.

## Tests actually completed
- Native Chromium: global Back and additional detail/history suites passed at 1440 × 900 and 390 × 900 in Light, Dark and Colored modes.
- Existing context Back suite passed in the same six configurations: table/figure/interpretation/report glossary detours, repeated Back, scroll, focus, sidebar and drafts.
- Five-tab regression suite passed in all six configurations: exact tab order, legend editing/saving, drafts, reordering, interpretations and report selections/downloads.
- Word export regression suite passed in all six configurations: mixed/table downloads, changed selections, missing/unsaved writing blockers, loading/duplicate protection, failure/retry and keyboard activation. Saved DOCX archives checked for ZIP integrity and word/document.xml. Word pages were not newly rendered for this navigation update.
- Study histopathology regression suite passed in all six configurations; scientific definitions were not changed.
- Static package check passed: 32 runtime assets, HTTP delivery, static Vercel configuration and runtime allowlist. This project has no npm compilation step; its production output is the existing static source directory.
- Six final screenshots inspected for Back placement, theme readability and mobile layout.
- Byte comparison against the preceding Word-export-fix package confirmed analysis-engine.js, result-exports.js, variables.js, reference-standard.js, data-import.js, glossary-data.js, parameter-reference.js, legends.js and content.js unchanged.

## Limits
Chromium emulated mobile/desktop testing; no physical Android, Safari or Firefox testing. No live GitHub/Vercel deployment. No new diagnostic-combination catalogue implemented in this update. Historical validation documents describe earlier updates and are not claims that every historic test was rerun now.

## Use and local verification
Extract the complete project folder and replace the previous project files together. From that folder run `python3 -m http.server 8000`, then open http://localhost:8000. No new dependencies or environment variables are required for the app. Node browser test runners require playwright-core and a compatible Chromium; set HUB_CHROMIUM_PATH to its executable.
Open a calculated table, scroll, follow a glossary link, then use Back. Test repeat Back and browser Forward; check Reports picks and drafts remain intact. A reload intentionally starts a new navigation session.
