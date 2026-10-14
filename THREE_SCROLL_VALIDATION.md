# Independent scrolling update

Latest behavior: ordinary mode retains the three scrolling areas described here. Per the subsequent full-result workspace request, explicit Focus Workspace now uses a viewport overlay with panel-only scrolling; Exit or Escape restores ordinary page scrolling. See LATEST_VIEWER_VALIDATION.md. The original focus-mode implementation notes below describe the earlier revision.

## Cause and fix
The existing normal layout already had document scrolling. Focus Workspace added a fixed viewport overlay and `body { overflow: hidden }`, preventing access to the underlying page. Focus now enlarges the bounded workspace in document flow, preserving the native document scrollbar; no redundant page scroller is added. Mobile focus-specific fixed header rules were removed.

The list and result/details region explicitly use bounded overflow and overscroll containment. The left panel retains min-height: 0 and now both regions are keyboard-focusable with accessible labels and visible focus rings. No wheel or touch interception was added. The oversized-output viewport retains its existing contained pan/zoom behavior inside results; it is not a new competing page scroller.

## Use
Scroll over the left list to browse outputs; scroll over result details to inspect the selected output; scroll on the page outside these regions or use the browser's rightmost scrollbar to reach page content, including imports and other supporting controls. Tab to a panel and use Page Up/Page Down. Focus Workspace remains available and no longer disables page scrolling. Expand/collapse, desktop divider resizing, fit, actual size and manual zoom remain available. On narrow screens, reopen the list drawer with Show results list.

## Actual verification
Automated native Chromium checks at 1440×900 and 390×844 passed:
- Actual wheel scrolling of the left and right panels leaves the other panel unchanged.
- Actual page wheel scrolling changes document position without changing either internal offset.
- Wheel at panel boundaries does not chain into another area (one-pixel rounding tolerance).
- Focused panel PageDown scrolling works without scrolling the document.
- Emulated touch start/move/end gestures scroll each panel at the mobile viewport without moving the page or other panel. Physical Android testing was not performed.
- Collapse/reopen retains selection; reordering retains panel offsets; unsaved title drafts survive rendering.
- Long synthetic table/interpretation and tall synthetic figure remain accessible; real generated table and figure selection works.
- Light, dark and colored themes retain document scrolling and no horizontal page overflow. No browser runtime errors.

Existing native result-viewer suite passed at 1440 and 390 pixels: repeated collapse/reopen, expanded result width, desktop drag and keyboard divider resizing, fit/actual/manual/reset, dataset and unsaved legend retention, readable long table, complete desktop figure and table fit, tall-figure bottom annotation accessibility, themes and navigation.
Existing native five-tab suite passed at 1440 and 390 pixels: five-tab order, inline legends, saving/drafts/reordering, separate interpretations, report links, independent legend inclusion/exclusion, actual Word download, themes and unchanged data.

Static package verification passed: 26 local runtime assets, HTTP 200/404, dependency order, static Vercel configuration and allowlist. JavaScript syntax check passed. Preview packaging succeeded. This static application has no npm compilation step. No live deployment, other browser-engine or physical-device test was performed. Statistical code and Word-generation code were not modified.

## Changed files
- result-viewer.css: remove body lock/fixed focus overlay; explicit list scrolling and focus indicators.
- result-viewer.js: accessible focusable scroll regions; position focused workspace within the page.
- tests/test_three_scroll_areas.cjs: new wheel/page/boundary/keyboard/emulated-touch regression test.
- tests/test_native_result_viewer.cjs: scroll workspace into view before wheel tests in the in-flow layout.
- README.md and RESULT_WORKSPACE_VALIDATION.md: updated usage.
- THREE_SCROLL_VALIDATION.md: this report.

## Run locally
Extract the ZIP, open a terminal in the project folder, run `python -m http.server 8000`, and open http://localhost:8000. No API keys, environment variables, npm install, or server upload of patient data are required. Optional native tests need Playwright Core and a Chromium executable; set HUB_CHROMIUM_PATH and, where applicable, CODEX_PRIMARY_RUNTIME_NODE_MODULES, then run `node tests/test_three_scroll_areas.cjs`. Test fixtures are synthetic and no patient-level uploads are packaged.
