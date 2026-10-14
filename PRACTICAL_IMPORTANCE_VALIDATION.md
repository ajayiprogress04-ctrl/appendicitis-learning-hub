# Essence and Practical Importance — 14 October 2026

## Implementation
All 86 catalogue entries have a linked rationale: 79 calculable outputs and seven source-limited planned outputs. The new section uses the existing output-purpose registry, with concise declarative practical contributions. It does not copy numerical findings into the rationale, assert an untested clinical benefit or replace scientific limitations. Canonical and exploratory counterparts representing the same analysis can share the same appropriate rationale; these are documented separately in the inventory.

In Tables & Figures, a default-open, independently collapsible section titled “Essence and Practical Importance” immediately follows the result viewer (and its figure caption when applicable), before subsequent legend/evidence/interpretation content. For long outputs it remains below the output in the scroll area; default-open does not promise that both a long table and its explanation fit in one viewport. Shared disclosure choices remain separate from data and selections.

Interpretations and Reports reuse the same output-ID-linked rationale. Reports includes an independent “Include essence and practical importance” checkbox, enabled by default. The Word/HTML export adds one separately headed rationale paragraph after the output/caption/reviewed legend and before statistical evidence and the existing integrated findings paragraph. Existing numbering, editable tables, figure rasterisation, approved fonts/page setup, legends and evidence remain intact. SVG/PNG/CSV exports are unchanged; the explanatory prose belongs to the app and Word/HTML reporting layouts.

## Changed runtime files
output-essence.js, results-browser.js, result-exports.js, reports.js, styles.css, index.html.
New tests: tests/test_practical_importance.cjs, tests/test_native_practical_importance.cjs. Updated existing native publication and integrated-narrative assertions to allow this newly requested, distinct rationale section while retaining one findings paragraph. Added PRACTICAL_IMPORTANCE_INVENTORY.md/.json, this validation record, README note and refreshed MANIFEST.sha256.

## Actual checks passed
- 86-entry inventory: no missing rationale. 79 synthetic computed HTML export paths: one explanation, matching content, inclusion/exclusion, result-object immutability. Seven unsupported analyses remain unperformed/planned, with source limitations preserved.
- Native Chromium: all 79 calculable output views checked for exact placement directly after the viewer/caption, default-open state, correct rationale and no duplicate section at 1440×900.
- Six representative views at 390×900: demographic, diagnostic-performance, severity box plot, paired confidence, cost comparison, scatter plot. These were checked in Light, Dark and Colored modes; screenshots inspected in contact sheets and selected full screenshots. No page errors or page-level horizontal overflow.
- Actual Reports checkbox toggling tested at both widths. Word bytes included or excluded the rationale as selected, with existing content retained.
- Native publication regression: nine representative outputs, Interpretations and Reports, three themes, actual Word/HTML narrative agreement and one integrated findings paragraph.
- Native five-tab regression: exact order, legend edit/save/draft/reorder, interpretations, report links/components, actual download, themes and unchanged data at both widths.
- Native Back regression: table/figure/interpretation/report-preview links, sequential/direct history, all relevant scrolls, selection/sidebar/zoom/drafts preserved in all three themes at both widths.
- Static-package check: 31 local runtime assets, local HTTP delivery, deployment allowlist/configuration intact. JavaScript syntax checks passed. No npm build is defined for this static app.

## Word visual inspection
Generated actual synthetic diagnostic and confidence Word exports using the application. Reopened/rendered them with LibreOffice and inspected all four pages (diagnostics: 3; confidence: 1). The new heading/prose appears once per included output, remains separate from evidence and the findings narrative, and does not obscure tables/figures. No study participant findings were used for these fixtures. The larger combined export was generated and checked for content, but its pages were not visually inspected in this task.

## Limits and use
Physical Android touch testing, formal accessibility audit, every output’s visual appearance in every theme, and exact native Microsoft Word pagination were not verified. Existing legacy mock-DOM/history test limitations remain as previously documented; no claim that every historical stage-specific test passes. No GitHub/Vercel deployment.

Extract the full ZIP and upload project contents to the existing repository root using your manual workflow. For local use, run `python3 -m http.server 8000` in project and open http://localhost:8000. No new dependency or environment variable is required. Open a result to see its rationale; toggle its heading to collapse/reopen it. In Reports, use the separate inclusion checkbox when assembling Word/HTML reports. Existing data, calculations, classifications and research objectives were not changed.
