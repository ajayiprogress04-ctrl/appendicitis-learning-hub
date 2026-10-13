# Premium OLED visual redesign — changes and validation

## Delivered design

Built on the completed version with Scope Reports removed and direct local SPSS upload retained. Visual changes are confined to the dark CSS theme and stylesheet cache query in `index.html`. The existing light-mode CSS and every JavaScript/configuration file were byte-compared with the preceding project ZIP and are unchanged.

Removed 32 overlapping legacy dark-theme rules, including blue/blue-grey surface palettes and the blue radial page background. Replaced them with one consolidated dark theme: black page foundation, #080808 and #0D0D0D surfaces, #101010 inputs, #252525 necessary dividers, white headings/main text and #A3A3A3 secondary text.

Static black-to-charcoal gradients unify header, sidebar, cards, research panels, search, upload, learning, preview and interpretation sections. Ambient lighting uses very low-opacity white/teal radial gradients; no blur filters, animated lighting or continuous effects are introduced. Heavy panel outlines and accent edge bars are removed in dark mode; restrained tonal changes, spacing and typography distinguish sections. Table dividers and keyboard-focus rings remain. Corners are consistent and subtle. Selected results retain a small teal marker.

The existing dark teal accent (#89d5dd) remains on primary actions, selection and progress, with readable dark button text. Selected-button hover states remain identifiable. Inputs/dropdowns, file-selection buttons, badges, warnings, toast, scrollbar, and dialog/popover selectors have dark styling. The app currently has no native dialog/settings module to exercise; those selectors provide coverage for such elements without adding functionality.

In-app charts have dark SVG backgrounds, light labels and visible axes/grid lines. Existing series colours are retained except the darkest teal is presented in its brighter dark-theme shade. Figure values, coordinates and exported files are unchanged: styling is scoped to the app and does not alter HTML/DOCX/SVG/PNG export generation.

## Checks actually run and passed

- CSS parsed using tinycss2: stylesheet/declaration syntax, one base dark palette, obsolete blue surface removal, component-selector coverage, chart labels/backgrounds, visible focus, reduced-motion handling and absence of blur/animation.
- WCAG contrast calculations on the lightest standard dark surface (#181818): main text 16.29:1, secondary text 7.04:1, teal links 10.68:1; primary-button text on the darkest gradient endpoint 10.08:1. These verify specified standard pairs, not every data-series colour or rendered pixel.
- Theme controller: light/dark switching, button labels/aria state, preference storage and restoration in the DOM harness.
- 309 learning/progress/mode assertions.
- Scope Reports absence across every objective view, retained selected-report controls, synthetic interpretation and HTML export.
- CSV/XLSX/XLS/SAV import-controller flow: preview, confirmation, worker calculation and removal. Damaged previews preserve the active dataset.
- Generated genuine uncompressed and row-compressed SAV: labels, values, strings, system/user missing, metadata/counts; damaged/truncated files rejected.
- Search relevance/navigation and generated-result search.
- Chapter Four headings, caption sequences, interpretation placement, HTML/DOCX generation and unchanged result objects.
- Local HTTP entry point/assets, 200/404 responses, Vercel static configuration and deployment allowlist.
- Byte comparison: all non-dark styles and all existing JavaScript/configuration files unchanged.

Reproduce design checks with `python -m pip install tinycss2`, then `python tests/test_oled_theme.py` and `node tests/test_theme_toggle.cjs` from the project folder. Other tests remain available in `tests/` and the existing audit runner. Python is not required to run the app.

## Unverified

Native-browser rendering and desktop/mobile appearance were not verified in this turn. Playwright Chromium installation was attempted but the downloaded archive was invalid. CSS coverage and simulated-DOM tests do not prove visual layout. Safari/Firefox, physical mobile devices, native file-picker appearance, and rendered chart-series contrast remain unverified. The responsive breakpoints/layout and functional scripts were preserved. Word visual rendering was not rerun.

No GitHub commit/push, Vercel deployment or live-site test occurred. Replace the full runtime files, retaining vendor readers and configuration, to deploy. Open `index.html` after extracting the ZIP or use the standalone preview. Choose **Dark mode** in the header; **Light mode** switches back. Refresh the browser if replacing a previously cached copy.
