# Compact Inter typography — implementation and validation

## Changes

Updated the completed premium black project; Scope Reports remains removed and direct local SAV import remains available. Application JavaScript, numerical/statistical logic, research content, importer, search and export engines were byte-compared with the preceding ZIP and are unchanged.

One locally hosted font: Inter variable Latin, from @fontsource-variable/inter 5.3.0, SIL Open Font License (vendor/INTER_LICENSE.txt). The WOFF2 file is 48,256 bytes and supports variable weights. It loads with font-display:swap; no Google Fonts/CDN request is made. System UI fonts provide immediate fallback, including characters absent from the Latin subset. The standalone preview embeds the same font bytes for offline use. No npm install/build is needed to run the delivered project.

All previous CSS font shorthands/families/sizes/weights/letter-spacing/line-height declarations were replaced by one shared typography section and size tokens. Default compact scale:

| Content | Size |
| --- | --- |
| Main title | 20 px |
| Section headings | 15 px |
| Card headings | 13 px |
| Body/interpretations | 12 px |
| Navigation/buttons/labels | 11 px |
| Statistical tables and headers | 11 px |
| Metadata/helpers | 10 px |
| In-app chart labels/legends | 10 px |

Weights are 400 for prose, 500 for controls/labels and 600 for headings/emphasis. Tabular/lining numerals improve numerical alignment. Decorative serif fonts and excessive uppercase/letter spacing are removed from in-app reporting; academic exports retain their previous formatting and values.

Existing panel/gap spacing was reduced and consolidated for common components. Panel interiors are 12 px; tables use 7 px vertical cell padding. Desktop control heights are generally 34 px; mobile controls retain 40 px targets. Editable mobile fields remain 16 px to reduce automatic zoom on some browsers. Long names/headings wrap; wider tables/charts retain existing horizontal scrolling and breakpoint structure. No application font-size setting existed to preserve.

Black/charcoal gradients, low-border surfaces, accent colours, contrast and reduced-motion rules remain. No continuous animation or font-service dependency is introduced. No data values, findings, calculations or meanings were edited.

## Passed checks

- WOFF2 decoded with fontTools/Brotli; Inter identity, weight range and basic Latin/numeral glyphs verified.
- Font served successfully over local HTTP and allowed by the Vercel deployment allowlist.
- Standalone embedded font decoded and byte-matched against the supplied WOFF2.
- Shared type scale, system fallback/font-display, tabular numerals, wrapping and mobile control rules checked.
- CSS syntax/palette/focus/reduced-motion/contrast checks passed. Standard text contrast remains 16.29:1 main and 7.04:1 secondary on the lightest normal dark surface.
- Theme toggle labels/state, saved preference and restoration passed in the DOM harness.
- CSV/XLSX/XLS/SAV preview -> activation -> worker result -> removal; failed preview preserves active dataset.
- Generated uncompressed/row-compressed SAV metadata, values, missing data, counts and damaged-file rejection passed.
- 309 learning/progress assertions, global search relevance/navigation, Scope Reports removal and selected report/interpretation/export checks passed.
- Chapter Four headings, caption numbering, interpretation placement and HTML/DOCX generation passed.
- Local HTTP assets/static configuration/allowlist checks passed.
- Every runtime JavaScript file and vercel.json match the preceding project byte for byte.

Using CSS values alone, the approximate single-line table-row budget decreased from 47.7 px to 29.4 px. This suggests greater density; it is not a native measurement of screen content or wrapping.

Typography checks: `python -m pip install tinycss2 fonttools brotli`, then `python tests/test_compact_typography.py`, `python tests/test_oled_theme.py` and `node tests/test_theme_toggle.cjs` from the project folder. Python dependencies are only for optional tests.

## Unverified and handover

Native mobile/desktop rendering, actual clipping/overlap and small chart-label readability were not visually verified. Chromium installation had returned an invalid archive during the preceding design stage, and no working native browser is available here. Simulated-DOM, CSS and font checks cannot establish visual usability. Physical phones, Safari/Firefox, fallback font appearance and printed/Word rendering remain unverified.

No GitHub commit/push, Vercel deployment or live-site test was performed. Extract the complete ZIP and open index.html, or use the standalone preview. Keep the vendor folder, including the new WOFF2 and license, when deploying. The stylesheet cache query was updated; refresh any older open copy. Existing README and analysis tools remain included. No patient-level data is included; fixtures are synthetic.
