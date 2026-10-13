# Independent results-panel scrolling

## Cause and isolated fix
The catalogue grid had unbounded content height. The right panel used sticky positioning with several conflicting offsets, while both panels depended on page scrolling. Every catalogue update/reorder replaced the whole section via innerHTML, resetting the preview node and its scroll position.

The grid now has a bounded desktop height with separate vertical overflow on its two children, min-height:0, stable scrollbar gutters and no automatic scroll anchoring. Obsolete sticky offsets were removed. Mobile stacks two independently scrollable, height-limited panels and allows page scrolling at boundaries. Neither panel has a scroll event that selects an item or drives the other panel.

Render updates remember left position by objective and right position by objective/output. Unchanged previews retain their actual DOM nodes. Updated previews restore their offsets; title drafts and expanded title editors survive list rerendering. Reorder focus uses preventScroll. Native browser clamping remains appropriate if updated content becomes shorter than the saved offset.

## Tests actually passed
Headless Chromium 153 at 1440×900 and 390×844:
- Actual mouse-wheel scrolling in each panel changes only that panel's scroll offset.
- Reordering preserves left/right offsets and selected result, including a numbering/caption update.
- Synthetic 120-row table and lengthy interpretation remain scrollable.
- Switching between computed table and figure previews selects the correct content.
- Unsaved title draft survives a render.
- No page-level horizontal overflow or JavaScript page errors.

Simulated regression tests for reordering, connected workflow and glossary also passed. This is the first native-browser layout test for this specific fix; the mobile test uses a narrow browser viewport, not physical Android hardware.

## Changed files
Runtime: styles.css, results-browser.js, index.html (cache references).
Validation: tests/test_native_scroll.cjs, INDEPENDENT_SCROLL_VALIDATION.md, README.md, MANIFEST.sha256.
Statistical calculations, imports, glossary content and vercel.json are unchanged.

## Run
Extract and run `python -m http.server 8080`; open http://localhost:8080. No new runtime dependencies or environment variables. Buildless static architecture has no compilation command. Local delivery checks pass; no GitHub push or deployment.

Optional native regression: install playwright-core in a development environment and set HUB_CHROMIUM_PATH to a compatible Chromium executable, then run `node tests/test_native_scroll.cjs`. The test starts its own local HTTP server and uses synthetic data only.
