# Shared context-aware navigation mechanism

Implemented as a focused extension of the existing vanilla-JavaScript `HUB_HISTORY` system. No new routing framework, second history stack, component Back button, statistical calculation, dataset change or visual redesign was introduced.

## Exact changes

### navigation-history.js

- Added `HUB_HISTORY.origin()` to capture an opaque in-memory origin guard: session, current history position, revision, meaningful view key and current dataset identity.
- Added `HUB_HISTORY.navigateDetail(key, apply, origin)` for successful prepared detail transitions. Asynchronous callers prepare/validate their content first, then supply a synchronous view-update callback. A late completion is rejected if the origin changed through navigation, Back/Forward or dataset replacement.
- The helper uses the existing capture/commit/restore/browser-history implementation. Reopening the same detail updates the current snapshot instead of creating duplicate entries. Failed/cancelled updates do not create a successful destination.
- Captures both ordinary report-preview and bulk-preview iframes, including their scrolling context.
- Restores a current bulk preview after returning from linked educational content. If its selection/results/settings changed, it falls back to the originating workspace with an explanatory status rather than reviving stale report content.
- Detail identity is subordinate to the active view, preventing an earlier preview marker from creating spurious glossary/About destinations.

### bulk-analysis.js

- The existing asynchronous preview validates first, then opens through `navigateDetail()` with its originating guard.
- A WeakMap holds preview freshness metadata in memory: dataset identity, report choices/title/writing/settings and calculated-result references. Nothing is persisted or placed in browser history.
- Minimal support allows Back restoration to retain a current preview iframe. Obsolete previews are discarded while retaining current report selections and research work.

### tests/test_native_navigation_mechanism.cjs

New reproducible native-browser regression using synthetic data only.

This document is the fourth changed/added file. No changes were made to the five-tab UI or existing Back button placement in this stage.

## Shared API for future detail views

```js
const origin = HUB_HISTORY.origin();
const prepared = await prepareAndValidateDetail();
HUB_HISTORY.navigateDetail('stable-detail-identifier', () => {
  showPreparedDetail(prepared); // synchronous DOM/state update
}, origin);
```

Use stable identifiers for meaningful destinations. Existing synchronous navigation continues to use `HUB_HISTORY.before()` and existing delegated handlers. Do not call this API for ordinary accordion toggles. Existing glossary fallback logic and the existing shared Back control remain in use.

## Actual checks completed

Each native suite passed at 1440px and 390px in Light, OLED Dark and Colored themes:

1. **New shared-mechanism suite:** source Tables & Figures selection → bulk preview → confidence-interval glossary → Back; same result/report selection and actual iframe scroll restored. Back/Forward correctly removes/restores the preview. Reopening it does not create duplicate history. Accordion toggles do not create entries. Changed report selections are retained and obsolete previews are rejected. Delayed preview opening after changing tabs is cancelled. Dataset replacement invalidates old origins. Refresh/direct sessions have a safe no-history fallback. Browser state contains only session/index. No runtime errors.
2. **Existing global Back suite:** individual objectives; diagnostic table → Sensitivity → related glossary term → repeated Back; table/figure selection; Interpretations → histopathology explanation → Back; Reports preview and drafts; browser Back/Forward; independent panel scrolls, selection/draft preservation, keyboard/mobile drawer behaviour and refresh fallback.
3. **Existing additional detail suite:** search query/scroll, variables/disclosures, supporting analysis views, About/Escape, updated report selections/previews, dataset invalidation and direct-anchor fallback.
4. JavaScript syntax checks and static production configuration passed: all 35 local runtime assets served correctly, with the existing Vercel allowlist/configuration. This app has no npm production-build step.

During test development a mobile scroll assertion was corrected to measure the originating position after the term had been brought into view; the app correctly restored the position at actual navigation. The final new suite passed all six viewport/theme combinations.

## Deliberate limits

History remains in memory, capped at 40 retained views; old/reloaded/different-dataset destinations cannot be recovered and are handled without inventing an origin. Existing research data/results/drafts are not persisted merely for navigation. Current report edits and selections win over obsolete snapshots. Tests used Chromium desktop/mobile viewports, not physical Android devices. No GitHub push or Vercel deployment was performed.

## Run locally / apply

Use the complete project ZIP, or replace the two runtime files in the matching existing project. Serve it with `python3 -m http.server 8080` and open `http://localhost:8080`. No new dependencies, environment variables or secrets are required for the app. Browser tests additionally require Playwright and a Chromium executable (`HUB_CHROMIUM_PATH`); these are development tools, not runtime dependencies.
