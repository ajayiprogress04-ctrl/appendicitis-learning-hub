# Shared expansion controls — 14 October 2026

## Implemented inventory
| Main tab | Independent content controls | Primary content retained |
|---|---|---|
| Objectives | Each overview objective and selected-objective detail; existing method/approved-wording sections; section Expand all/Collapse all | Objective number/title remain visible |
| Tables & Figures | Statistical evidence/notes, narrative, existing legend/method/editing details; bulk controls | Selected table/figure, viewer, selection and analysis remain outside explanation disclosures |
| Interpretations | Each generated interpretation, existing unrun summaries, supporting reference-standard material; bulk controls | Each output title remains visible |
| Statistical Glossary | Selected definition/formula/interpretation, supporting material, alphabetical browsing; bulk controls | Search, term/category list and current term remain visible; no new page required |
| Reports | Output components/editing, existing objective/review sections; each table/figure in the iframe preview with separate bulk controls | Inclusion checkbox stays outside component collapse; preview collapse never changes inclusion or export content |

Native details/summary supply independent state, keyboard semantics and full-width headings. A shared in-memory registry retains choices across renders/tab changes during the session; it stores no patient records and does not promise refresh persistence. Primary new sections default open; prior secondary defaults remain. There is no continuous animation or height-transition effect. Existing scroll containers, theme system and scientific content are retained. Inline glossary controls inside a header keep their own behavior; clicking the chevron/header space or activating the summary with Enter toggles that section. Links into a collapsed definition/interpretation reveal their target.

## Files changed
- disclosure-controls.js (new reusable, view-only controller)
- styles.css (shared controls, chevrons and keyboard focus styles)
- index.html (local script/cache versions)
- reports.js (preview-only enhancement hook; Word/HTML generation untouched)
- results-browser.js (reveal linked interpretations; restrict panel restoration to actual results views)
- .vercelignore (allowlist new runtime script)
- tests/test_native_disclosures.cjs (new), tests/test_native_context_back.cjs (specific supporting-disclosure selector), tests/test_static_package.py (31 assets)
- This validation record and refreshed MANIFEST.sha256

Repeated Reports→Objectives→Tables navigation exposed an existing restoration bug: the Reports preview DOM could be reused as the selected-result DOM. A guard now excludes non-results views from result-panel restoration. No calculation or selection data was changed. A focus handler initially conflicted with native summary activation; corrected before final tests. Test fixtures were adjusted to distinguish supporting from primary glossary controls and to click the summary region rather than an inline glossary link.

## Actual checks passed
- Native Chromium at 1440×900, 390×900, 960×600; all five main tabs in Light/Dark/Colored. Independent objective toggles, Enter activation, expand/collapse groups, same dataset and selected result after bulk collapse, table remains visible, closed evidence persists after rerender, glossary toggles, collapsed iframe outputs still export complete HTML and actual DOCX (table/text/image content; no UI commands leak). Export HTML before/after collapse matched exactly.
- All-tab/all-theme screenshots inspected as contact sheets; full table/mobile/report screenshots inspected.
- Five-tab regression at desktop/mobile: order, inline legend editing/save/draft/reorder, interpretations, report links, independently selectable export components, actual download, themes and unchanged data.
- Context-aware Back in all three themes at desktop/mobile: actual table/figure/interpretation/iframe-report links, sequential history, direct fallback, scroll/focus/zoom/sidebar/selection/drafts preserved.
- Publication regression: nine synthetic output examples, tables/figures/Interpretations, themes, actual Word/HTML narrative agreement and single prose paragraphs.
- Static checks: 31 runtime assets, HTTP delivery, unchanged static deployment configuration, updated allowlist; JavaScript syntax checks passed.

## Limits
960×600 approximates the effective viewport at 150% zoom on a 1440×900 display; actual browser zoom was not set/tested. Physical Android touch, formal accessibility audit, measured performance profiling and every possible user-authored content configuration were not tested. Word pages were not rerendered in this task; export content was checked and the approved document generator was unchanged. The previously documented legacy glossary mock-DOM test remains incompatible with the real DOM-history mechanism; it was not rerun or claimed passed here. This is a buildless static app, with no npm production-build command. Nothing was pushed to GitHub or deployed to Vercel.

## Use and manual installation
Extract the complete ZIP and upload project contents to your existing repository root, including disclosure-controls.js and the updated allowlist. For local testing run `python3 -m http.server 8000` from project, then open http://localhost:8000. No new dependencies, secrets or environment variables are needed. Use the heading/chevron for one section, the tab-level Expand all/Collapse all for that tab, and the controls inside the paper preview for its outputs. Export selections remain controlled solely by inclusion checkboxes.
