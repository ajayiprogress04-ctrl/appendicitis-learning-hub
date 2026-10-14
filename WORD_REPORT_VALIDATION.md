# Approved Word reporting update

The combined reporting specification was approved on 14 October 2026. The default export now reconstructs the measured page/style/table conventions without embedding previous research reports, objects or findings.

## Use and run

No installation, API keys or environment variables are required for the app. Extract the project, open a terminal in its folder, and run `python -m http.server 8080`. Visit http://localhost:8080. Serve the folder rather than opening index.html directly.

1. Load your dataset in Tables & Figures and calculate the required outputs locally.
2. Review and save legends beside their outputs in Tables & Figures; review interpretations in Interpretations.
3. Open Reports from the tabs or collapsible sidebar. Select calculated outputs, reorder them, and choose whether to include each legend and interpretation.
4. Enter the current research title, preview the selection, and click Export to Word. Requested missing or stale writing blocks export until reviewed or deselected.
5. Open the downloaded DOCX in Word and inspect pagination before academic submission.

The approved profile remains the default without reuploading reference documents. The reference DOCX files are not runtime dependencies. A revised profile should be analysed and explicitly approved before replacing version 1; a runtime template-upload/replacement interface is not implemented.

## Implemented format

Letter portrait, 0.65-inch margins, Times New Roman 11-point body, centred 17-point RESULTS and underlined 16-point research title, 13/12-point headings, editable tables with adaptive widths and 9.5-point text, EDEDED headers, D9D9D9 half-point borders, 2.5-point padding, repeated headers, unsplit natural-height rows, aspect-preserving high-resolution figures, justified legends with bold number/title and regular explanation, separate interpretations, and centred PAGE footer field. Table notes use 9-point text with restrained paragraph spacing.

Only selected outputs are numbered, with independent table/figure sequences and stable source IDs. Original objectives are retained explicitly. No generic assertion of alpha, confidence level or statistical method is inserted. Already formatted statistical values are retained; extra precision is not fabricated from rounded values. Arbitrary authored cross-references inside free text are not automatically rewritten.

## Actual validation

- Native Chromium desktop 1440 px and mobile viewport 390 px: Reports navigation, missing-writing guard, per-output options, preview, ordering, Word download, data/title retention, sidebar, three themes and no horizontal overflow passed.
- Native Legends tests at both sizes: editing/save, source n, stale-writing warnings, reorder/draft retention and glossary return passed.
- Native independent-scroll regression passed at both viewport sizes: actual wheel independence, reordering, offsets, selection and drafts.
- Browser-downloaded synthetic report: ZIP and all XML parsed; page/margin/font/table-width/header/row/value/sample-size/figure/footer assertions passed. Generated from 36 synthetic paired records, not real patient data.
- The downloaded report was reopened and rendered with LibreOffice, and all final rendered pages visually inspected. This checks this selection, not every possible future combination.
- CSV/XLS/XLSX/SAV import and controller checks, corrupt/truncated SAV rejection, learning, global search, edge cases, 79 statistical families, interpretations, report ordering, scope removal, navigation, sidebar, themes, glossary and legends regression checks were run. Legacy presentation assertions were updated for the approved new format/navigation.
- Static asset HTTP and deployment allowlist checks passed. This is a static application with no npm production compilation step.
- Full Python audit could not start its synthetic-SAV generation because pyreadstat is unavailable in the current primary runtime. No claim is made that the complete audit passed. Optional analysis dependencies are listed in analysis/requirements.txt.

## Limits

Microsoft Word itself and physical Android devices were not available for testing. LibreOffice substitutes Liberation Serif for Times New Roman, so exact native Word pagination is not certified. Figures are PNG images, not editable Prism/OLE charts; tables and accompanying text are editable. The preview shares selection, data and numbering but is not a Word page renderer. Long or unusually shaped future outputs still require review. Existing writing, dataset and report selections remain in memory for the current visit; export before closing or refreshing. No statistical calculations, research data or deployment configuration were replaced; the deployment allowlist was extended for reports.js only. No GitHub push or Vercel deployment occurred.

## Changed files

- .vercelignore
- README.md
- WORD_REPORT_VALIDATION.md
- index.html
- reports.js
- result-exports.js
- results-browser.js
- samples/SYNTHETIC_Approved_Report.docx
- samples/SYNTHETIC_Approved_Report_Selection.json
- statistical-glossary.js
- tests/test_approved_word_profile.py
- tests/test_chapter_reporting.cjs
- tests/test_interpretations.cjs
- tests/test_legends.cjs
- tests/test_native_reports.cjs
- tests/test_report_reordering.cjs
- tests/test_scope_reports_removed.cjs
- tests/test_static_package.py
- tests/test_three_tab_workflow.cjs

Runtime changes are index.html, results-browser.js, result-exports.js, reports.js and the glossary navigation-return integration. The deployment allowlist includes reports.js. Other changes are documentation, synthetic report fixtures and regression tests. Statistical engine, import handlers, styles/themes and Vercel configuration were byte-compared against the previous delivered project and are unchanged.
