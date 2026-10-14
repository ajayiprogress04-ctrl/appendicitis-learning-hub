# Comfortable default view based on the previous 150 percent appearance

The app now presents larger, proportionally spaced research content at normal browser zoom. No CSS zoom, page transform or browser-setting override is used. The existing Inter family, three themes, navigation and research workflow remain intact.

## Reference and comparison

A clean copy of the last delivered About project was used as the baseline. Original 100% screenshots used a 1440 × 900 CSS viewport at pixel ratio 1. The 150% reference used a 960 × 600 CSS viewport at pixel ratio 1.5, producing the same 1440 × 900 output size. This models the reflow and physical scaling of browser zoom; it is not a claim that native Ctrl+Plus was operated.

Corresponding screenshots of the dashboard, a calculated synthetic Objective 5 table, glossary and About page were captured for the original reference and updated 100% view. Dashboard and table comparisons were visually inspected. Additional desktop/mobile screenshots were reviewed for controls, glossary and writing layouts. Reference data consisted of synthetic paired ratings, not patient records.

Measured desktop values at 1440 px:

| Element | Original CSS value | Reference physical size at 1.5× | Updated 100% CSS value |
|---|---:|---:|---:|
| Body text | 12 px | 18 px | 18 px |
| Main heading | 20 px | 30 px | 30 px |
| Standard control text | 11 px | 16.5 px | 16.5 px |
| Sidebar in this layout | 180 px | 270 px | 270 px |

Table text is 16.5 px on desktop. Metadata is 15 px and section headings are 22.5 px. Phone adaptation uses 16 px body text, 14 px table/control text, 13 px metadata and 26 px main headings. This is an intentional responsive adaptation, not an attempt to force the full desktop size onto a phone.

## Implementation

Shared typography tokens and authored dimensions use rem units. Related padding, gaps, control heights, navigation widths, content limits, icons and background motif placement were adjusted with the typography. Responsive thresholds were shifted to allow appropriately sized content to reflow, and the sidebar controller uses the same rem media query as CSS. Thin low-contrast borders remain thin.

Glossary and developer-profile grid constraints were corrected to fit larger text. Upload controls and the report-title input stay within their containers. Long labels wrap. Mobile results continue to use local table/chart scrolling without widening the page.

SVG text sizes are viewBox coordinates, not page text pixels. They were treated separately to avoid scaling chart labels twice. The Word/HTML document template and actual exported figure/data geometry are unchanged; the report-document preview retains the approved document typography.

## Checks passed

- Native Chromium at 1440 × 900 desktop, 1024 × 900 tablet and 390 × 900 mobile: dashboard, objective methods, results/import controls, legends, interpretations, reports, glossary, variable explorer, aggregate workspace and About, in Light, Dark and Colored themes.
- No horizontal page overflow across those views; CSS zoom remained 1; loaded synthetic data and calculated results were unchanged.
- Doubled root text size across all ten views at all three viewport widths: layout remained within the viewport.
- Body/title/control/sidebar comparison metrics matched the reference scaling.
- Native About regression at desktop/mobile: profile, portrait, links, return navigation, draft/data preservation, sidebar and Escape.
- Native Reports regression at desktop/mobile: selections/options, ordering, preview, actual Word download, retained dataset/title, themes and sidebar.
- Native independent-scrolling regression at desktop/mobile: actual wheel independence, reordering, offsets, selected output and drafts.
- CSV, XLS, XLSX and SAV import-controller regressions; sidebar/theme/glossary checks; static local HTTP assets and deployment allowlist.
- Standalone preview builder completed.
- Statistical engine, imports, result/writing/report controllers, approved developer content and portrait, export code and vercel.json were byte-compared against the prior delivered project and are unchanged.
- Final ZIP integrity and packaged-file byte comparisons passed.

## Testing limits

Native browser zoom shortcuts, physical Android devices and other browser engines were not tested. The comparison uses documented zoom-equivalent viewport/pixel-ratio settings. It targets similar proportions, not pixel-identical rendering across devices.

The optional Python CSS-parser check could not complete because tinycss2 is unavailable. The optional font-decoder check could not complete because Brotli is unavailable. The font file itself is unchanged and rendered in native browser checks. The complete Python statistical audit was not rerun for this visual update. No new runtime dependency is required.

This is a static app: there is no npm production compilation step. Static asset delivery and native runtime checks passed. No GitHub push or Vercel deployment occurred.

## Use

Extract the complete project ZIP, run `python -m http.server 8080` in its folder and visit http://localhost:8080. Set your browser to 100% to see the new default proportions. Browser zoom remains available normally. There are no required API keys or environment variables.

## Changed files

- styles.css — shared scale, dimensions, wrapping, phone adaptation and input containment.
- glossary.css, legends.css, about.css — consistent component typography and responsive constraints.
- scientific-backgrounds.css, colored-mode.css — proportionate theme/texture and control dimensions.
- sidebar.js — matching responsive threshold only.
- index.html — updated asset cache versions only.
- tests/test_native_readable_size.cjs — new native layout/size/state checks.
- tests/test_glossary.cjs and tests/test_compact_typography.py — revised expectations for the new scale.
- README.md and this verification record.

Historical compact-design validation files describe previous versions; this record describes the current default.
