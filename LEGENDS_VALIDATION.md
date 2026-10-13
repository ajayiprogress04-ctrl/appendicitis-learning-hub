# Separate Legends and Interpretations — validation

## Delivered behaviour

Five navigation destinations: Objectives, Tables & Figures, Legends, Interpretations and Statistical Glossary. Supporting research tools and the collapsible sidebar remain. The completed independent-scroll fix is retained; its separate checkpoint ZIP was delivered before this change.

Legends uses the current objective's stable output IDs and current numbering. Select an output, inspect its preview, edit the scientific title, content/table notes, observation and analysis components, then save the reviewed legend. Interpretations remains a distinct objective-based view with an editable interpretation. Both views link to the actual output, each other and the approved objective.

The previous writing reference was found and read in full: **Pasted text(20260930-163940).txt** (30 September 2026). It supplies direct scientific wording and the four-component organisation. See LEGEND_STYLE_REFERENCE.md for the applied rules. Laboratory-specific results, tests, units, physiological phases and comparisons were not imported into this study.

Drafts are deterministic, editable starting points derived from stored output titles, cells, plot axes/series, eligible n and actual methods. Applicable statistical table columns supplement the method description. Units, panels, error bars and significance are not inferred from appearance. Output notes and missing-information warnings appear separately from final legend prose. Save rejects p = 0.000 and unrun-result findings.

Result, dataset or reporting-title changes flag prior legends and interpretations for review without overwriting them. Reordering changes numbering through the existing shared functions and retains the stable links. Reviewed current writing is included separately in HTML/DOCX reports. Stale edited writing is excluded with a review notice; the actual calculation-based interpretation remains available. Raw result objects, calculation logs and statistical values are unchanged.

## Saving and limitations

Edits and reviewed saves remain in browser memory **for this visit**. Download legend/interpretation text before closing or reloading; automatic restoration of writing drafts after reload is not implemented. No writing, patient data or results are uploaded or saved in remote services. No additional runtime dependency, API key or environment variable is needed.

The helper cannot validate the scientific truth of arbitrary user-authored sentences or replace researcher judgment. Confirm every legend against the actual output, reference labels and approved protocol before saving as reviewed. Unsupported template observations remain blank with a verification warning. Physical Android-device testing and independent editorial review were not performed.

## Actual tests

The complete `python scripts/test_project.py` audit passed, including SAV/Excel/CSV imports, source/error paths, learning/search, reporting/ordering, connected navigation, glossary/sidebar, statistical references, 372 synthetic numerical checks and 63 catalogue/controller assertions. After the final targeted mobile/style corrections, the affected legend, sidebar, workflow, static delivery and typography tests passed again.

New legend tests passed:
- Dedicated Legends tab while Interpretations remains separate.
- Source-backed component drafting and actual eligible n.
- Edit/save and linked display of authored legend versus authored interpretation.
- Stable output IDs, links and numbering after reorder.
- Source-change warnings retain authored copies; stale edits are excluded from report exports.
- p = 0.000 rejection and unavailable-result save guard.
- HTML/DOCX legend/interpretation export generation; unchanged original calculation objects and input records.

Native headless Chromium 153 passed at **1440×900** and **390×844**:
- Real navigation, textarea editing and saving.
- Reorder keeps selected output and unsaved legend draft.
- Separate interpretation editing/save and bidirectional links.
- Changed-result review warning without authored-text loss.
- Repeated sidebar toggle remains accessible with Legends selected.
- Glossary definition/return preserves Legends selection and unsaved text.
- No page-level horizontal overflow or JavaScript page errors.

The retained independent-scroll native test passed at both widths, using actual wheel input in each panel, stable offsets/selection after reorder, a synthetic 120-row table, lengthy interpretation and a tall SVG stress fixture. No input or calculation in these tests used patient data.

Two real-browser failures were corrected before delivery: a glossary term link intercepted the interpretation-editor disclosure heading, and the mobile header's stacking context left its fixed menu toggle behind the backdrop. The disclosure heading now excludes glossary annotation; the mobile header no longer creates that blocking stacking context.

## Exactly which files changed since the independent-scroll checkpoint

New:
- legends.js — draft/edit/save/version-review/download writing layer.
- legends.css — scoped editor styling.
- LEGEND_STYLE_REFERENCE.md — recovered reference and applied rules.
- LEGENDS_VALIDATION.md — this report.
- tests/test_legends.cjs — writing/source/export tests.
- tests/test_native_legends.cjs — native desktop/mobile viewport tests.

Modified:
- index.html — Legends navigation and new local assets/cache references.
- styles.css — five-column main navigation; necessary mobile toggle stacking correction.
- results-browser.js — Legends view, linked writing actions, edited interpretation display, export writing payloads.
- result-exports.js — separate current reviewed legend and interpretation prose in HTML/DOCX.
- script.js and global-search.js — deselect/recognise the Legends destination through existing navigation.
- statistical-glossary.js — retain/restore the Legends selected-tab state when opening definitions.
- .vercelignore — allow the two new runtime assets.
- README.md — usage/save instructions.
- tests/dom_harness.cjs, tests/test_three_tab_workflow.cjs, tests/test_static_package.py, scripts/test_project.py — new module, five destinations, 19 assets and new tests.
- tests/test_native_scroll.cjs — tall-figure stress fixture added.
- MANIFEST.sha256 — refreshed checksums.

Synthetic SAV files regenerated by testing were restored to baseline bytes. analysis-engine.js, data-import.js, content.js, variables.js, sidebar.js, workspace.js, result-catalog.js, all bundled libraries/fonts and vercel.json remain byte-identical to the checkpoint. The base dark theme and scientific texture are retained.

## Run and deployment

Extract the ZIP, retain vendor/, and run `python -m http.server 8080`. Open http://localhost:8080. This is an existing buildless static app; there is no compilation production-build command. Static HTTP assets, dependency order and deployment allowlist checks passed. No GitHub push or Vercel deployment was performed.

Optional audit: install the Python dependencies in analysis/requirements.txt, have Node.js available, then run `python scripts/test_project.py`. Native tests additionally require playwright-core and a compatible Chromium executable set in HUB_CHROMIUM_PATH; run `node tests/test_native_legends.cjs` and `node tests/test_native_scroll.cjs`. Those are development-only test dependencies.
