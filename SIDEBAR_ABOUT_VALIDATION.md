# Sidebar About the Developer fix

## Reproduced cause

The sidebar control (`#about-tab`, marked `data-side-about`) and the working footer control (`data-open-about`) already call the same `HUB_ABOUT.open()` implementation in `about.js`. There is one developer-information view (`#about-developer`); no duplicate page was needed.

Before the fix, on both 1440px and 390px Chromium viewports:

1. The first sidebar About click opened the profile.
2. Back returned to the originating research view, but the sidebar About button retained `aria-pressed="true"` (and its current-page marker).
3. The shared navigation handler interpreted the next sidebar click as clicking the already-active tab and stopped it before the About handler ran.
4. The footer entry still worked because it is not subject to that active-tab duplicate-click check.

The actual omission was in history's navigation-control snapshot selector: ordinary sidebar destinations were included, but `data-side-about` was missing.

## Smallest runtime change

**`navigation-history.js`**: added `[data-side-about]` to the controls captured/restored by the existing shared history system. This restores the About button's active/current state together with the originating view.

`about.js`, `sidebar.js`, developer information/photo/links, HTML, styles, themes and statistical/reporting code were not changed for this fix. The working footer handler and the existing sidebar About handler are reused. No extra event forwarding, duplicate component, route or parent click handler was introduced.

This version has a **☰ menu toggle**, not a three-dot control. Its existing expand/collapse behaviour remains intact. A collapsed sidebar is reopened using that toggle; the mobile drawer dismisses after selecting About, while the desktop sidebar remains open until deliberately closed.

## Actual tests

`tests/test_native_sidebar_about.cjs` passed in native Chromium at **1440px and 390px**, each in **Light, OLED Dark and Colored** modes:

- Reopen a collapsed sidebar and open About.
- Repeat About → Back → About three times; verify active/current flags reset correctly.
- Return to the same selected objective (Objective 2).
- Open About through the existing footer entry and return.
- Confirm exactly one developer-information page, the correct name and a loaded existing photograph.
- Repeated menu open/close changes layout without creating navigation entries.
- Desktop About selection does not unexpectedly collapse the sidebar; mobile selection intentionally dismisses the drawer/backdrop.
- Keyboard Enter opens the same profile after drawer/focus settling.
- No runtime errors, theme changes or document horizontal overflow.

The shared-navigation-mechanism and existing global Back regression suites also passed in all six viewport/theme combinations, including tables/figures/glossary/interpretation/report routes and state restoration. JavaScript syntax and static production configuration checks passed. The app is buildless; no npm build is required.

Tests used desktop/mobile browser viewports, not physical Android devices. No GitHub push or Vercel deployment was performed.

## Files for this stage

- Changed runtime: `navigation-history.js` (one selector addition).
- Added regression: `tests/test_native_sidebar_about.cjs`.
- Added this test report: `SIDEBAR_ABOUT_VALIDATION.md`.

The complete ZIP preserves previously completed work. Serve the extracted project with `python3 -m http.server 8080`, then open `http://localhost:8080`. No new dependencies, environment variables or secrets are required. Imported participant data and real-data Word reports are not included in the package.
