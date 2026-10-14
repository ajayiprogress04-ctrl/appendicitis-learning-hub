# Five-tab research navigation

The main navigation now contains exactly, in order: Objectives, Tables & Figures, Interpretations, Statistical Glossary, Reports. The sidebar follows the same research order; About remains available as a supporting developer page.

The standalone Legends navigation item and renderer were removed. The shared legends.js writing engine, saved/draft records, four-component scientific writing rules, source-change review warnings and export integration are retained.

## Use

Generate or select an output in Tables & Figures. Open **Edit figure legend** or **Edit table notes** beside its preview, edit the existing structured fields and save the reviewed text. The caption and saved legend remain distinct from the interpretation. Interpretations still has its own tab.

Reports retains separate legend and interpretation checkboxes for each selected output. **Edit legend** there opens the correct output's inline editor in Tables & Figures. Interpretations' legend link does the same. Reordering uses stable output IDs and preserves associated writing and drafts.

Run the app by extracting the project and running `python -m http.server 8080` in its folder, then visit http://localhost:8080. No new dependency, API key or environment variable is required.

## Actual checks

- Native Chromium at desktop 1440 × 900 and mobile 390 × 900: exact five-tab labels/order and absence of the old main/sidebar Legends item.
- Inline figure legend editing and saving, unsaved draft retention, output selection and reordering.
- Separate interpretation editing/saving and links back to the inline legend editor.
- Reports' edit link, independent legend checkbox changes, actual DOCX download, and Word package text checks showing the saved legend included when selected and absent when deselected; the separate interpretation remained included.
- Navigation across all five tabs in Light, Dark and Colored modes, no horizontal overflow, no page JavaScript errors, and unchanged loaded synthetic data/calculated results.
- Native layout regression at 1440, 1024 and 390 px across all current views/themes, including doubled root text size.
- Native independent scrolling regression at desktop/mobile; import controller, report ordering, global search, sidebar, glossary and shared writing regressions.
- All runtime JavaScript files passed syntax checks; static HTTP assets/deployment allowlist checks passed.
- Word export code, writing engine, calculations, imports, theme controller, shared size/theme CSS, portrait and vercel.json were byte-compared with the previous delivered project and are unchanged. The unused standalone legend-list styling was removed; inline editor styling is retained.
- ZIP integrity and packaged-file byte verification passed.

Native Microsoft Word, physical mobile devices and other browser engines were not tested. No new page rendering comparison was performed for Word: its formatter is unchanged. The complete Python statistical audit was not rerun for this navigation change. This is a static app with no npm production compilation step. No GitHub push or Vercel deployment occurred.

## Changed files

Runtime: index.html, results-browser.js, reports.js, script.js, global-search.js, statistical-glossary.js and about.js. These changes remove obsolete navigation references, add the inline editor and redirect existing legend links. legends.css removes only unused standalone list-button styling.

Tests: test_native_five_tabs.cjs (new), test_legends.cjs, test_native_legends.cjs, test_three_tab_workflow.cjs, test_native_about.cjs, test_native_readable_size.cjs, test_native_textures.cjs and test_native_colored_mode.cjs were updated for the integrated editor/five-tab workflow. Documentation: README.md, WORD_REPORT_VALIDATION.md and this record. Earlier validation documents describe their historical versions.
