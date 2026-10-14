# Reports content audit and update

## Reference authority
The actual supplied OSSN_Results_Edited (2).docx and Lab_Study_1_Final_Editable_Graph_Report.docx / Lab_Study_2_Final_Editable_Graph_Report.docx were inspected again, along with WORD_REPORT_VALIDATION.md and LEGEND_STYLE_REFERENCE.md. The previously approved combined profile is retained rather than replaced. OSSN has Letter pages, 0.65-inch margins, 24 differently sized tables and three inline images; sampled tables 1, 2, 13 and 24 use 9.5-point text, EDEDED headers and variable column widths. The lab reports use justified explanatory figure captions. Their different native font/margin choices remain reconciled by the already approved combined specification. This update does not claim that all three references are identical or copy previous findings.

## Specific causes found
- The Reports interface originally selected only calculated items, without showing the expected output inventory or reasons for unavailable outputs.
- There was no independently selected/edited results paragraph; only legends/notes and an existing interpretation.
- Legend drafts intentionally described the first row/limited examples, so those were insufficient as a comprehensive results narrative.
- The existing exporter retained method and source notes, but did not explicitly include additional whitelisted recorded statistics from the result calculation log.
- Interleaved objectives could repeat objective headings because rendering followed raw selected order.
- There was no shared per-output completeness check for data, method, sample size and objective association.

## Implemented changes
One content model now supplies HTML preview and genuine DOCX. Selected outputs are grouped by first occurrence of objective, with within-objective ordering preserved and each selected ID included once. Table and figure numbering follows the actual grouped export order. Approved objective statements, output introductions, actual tables/figures, methods, source notes, selected reviewed legends, results paragraphs and separate interpretations are included. Tables retain captions above; figures retain captions/legends below.

The Reports selection interface shows every existing objective and expected output, calculated counts and explicit unavailable/not-calculated reasons. Include all calculated outputs and components adds the ready outputs without inventing missing analyses. Per-output controls independently select reviewed legends/table notes, explanatory notes, results paragraphs and interpretations. Mandatory method/sample-size notes remain even if optional explanatory notes are excluded.

Results drafts cover supported values across all displayed table rows and recorded series, with concise grouped paragraphs rather than the previous first-row-only coverage. Important estimands, p-values and intervals are drawn from displayed cells. Additional scalar/interval statistics from known calculation-log fields are carried into a compact statistical note; raw records, points, predictor arrays, bootstrap samples and unlabelled raw data are not copied as prose. No statistical analysis was added. Unknown fields are not automatically interpreted, and computed results are not modified.

Researchers can edit results prose and explicitly review it. Unsaved prose blocks export; source changes flag reviewed edited prose for renewed review while preserving edits. Missing requested legends, missing actual method/data/sample-size/objective and missing selected interpretation are flagged. Non-estimable values remain explicitly identified rather than fabricated. The preview refreshes after component/selection changes and uses the same content and numbering as Word.

## Actual tests
- Native Chromium 1440×900 and 390×900: objective bulk selection, unavailable-output reasons, results editing/save, unsaved guard, independent results inclusion/exclusion, source-change review, multi-objective selection, preview, reordering, Word download, sidebar, themes, title/data retention and horizontal overflow passed.
- Native five-tab regression passed at both widths: exact navigation order, inline legend editing/save/drafts/reordering, separate interpretations, Reports links, independent Word legend inclusion/exclusion, actual download, all three themes and unchanged data.
- Unit content test passed: grouping, every relevant row, additional recorded statistics, independent components, missing method rejection, source invariance and private raw-log exclusion.
- Existing simulated-DOM report reorder test passed: complete content/order, values/selection invariance, numbering, HTML/DOCX generation, boundaries and busy guards.
- Static package checks passed: 26 local runtime assets, HTTP 200/404, dependency order and deployment allowlist. Syntax checks and preview bundling succeeded. The app is static and has no npm production compilation step.
- A genuine browser-downloaded sample was generated from 36 synthetic records using the app's existing calculations: three editable tables and one figure across Objectives 1, 2 and 5. All selected table values and notes were checked in the DOCX; each objective appeared once; image/media count, XML integrity and notes/prose were verified. Approved styles.xml and footer1.xml are byte-identical to the prior approved sample.
- The final sample was reopened and rendered with LibreOffice; every rendered page was visually inspected for table wrapping, figure axes/legend/caption, text, numbering and footer.

## Limitations and incomplete coverage
No actual patient dataset was supplied for this test. Synthetic examples are not study findings. Deterministic prose is an editable draft, not a substitute for scientific authorship; existing computed interpretations can contain some repeated numerical evidence and should be refined in Interpretations. Existing saved authored writing is preserved. No literature discussion/citations, protocol thresholds, unsupported tests or missing statistics are invented. Unsupported/missing-data analyses remain explicitly unavailable.

The log field whitelist does not interpret arbitrary future result schemas; a new analysis family may need a dedicated reporting adapter. Automated missingness checks cannot decide every protocol-specific required statistic or ascertain clinical validity. The HTML preview shares content but cannot guarantee native Word pagination. LibreOffice substitutes available fonts; Microsoft Word, physical Android devices, every analysis family and all possible long-table/figure selections were not tested in this task. Editable Word tables/text and raster figure aspect are supported; editable chart objects and exact reproduction of every variable reference layout are not claimed. No automatic publication-readiness guarantee is made. No deployment occurred.

## Files changed
Runtime: reports.js, result-exports.js, results-browser.js (variable metadata only), index.html (asset version strings).
Added tests: tests/test_report_content.cjs, tests/test_comprehensive_reports.cjs.
Added synthetic samples: samples/SYNTHETIC_Comprehensive_Report.docx, samples/SYNTHETIC_Comprehensive_Report_Selection.json.
Documentation: README.md and this file.
The statistical engine, import implementation, themes, scientific textures, workspace scrolling, legend writing rules and Vercel configuration remain unchanged.

## Run and use
Extract the ZIP and run `python -m http.server 8000` from project. Open http://localhost:8000. No npm packages, API keys or environment variables are required by the application. Load data locally, calculate outputs, review/save legends and interpretations, then use Reports selections, component checkboxes and prose review. Export Word and inspect the document before submission. Export your work before closing/refreshing; current dataset, writing and report selections retain their existing in-memory lifecycle. Optional native tests require Playwright Core and HUB_CHROMIUM_PATH pointing to Chromium.
