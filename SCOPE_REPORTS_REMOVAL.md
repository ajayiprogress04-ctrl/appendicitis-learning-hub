# Scope Reports removal — validation

Worked from the successfully completed direct-SPSS project. Before editing, the local results controller, importer, learning controller and analysis engine matched the delivered SPSS ZIP byte for byte.

## Removed

The latest app did not contain a separate tab titled “Scope Reports”. The scope-report interface was located inside `results-browser.js` in Tables & figures:

- “Scope report order” panel, including its scope-specific Move Up/Move Down controls.
- “Export scope report DOCX” button.
- The exclusive click-handler branch for that export button.

The scope-report interface is removed from every objective/exploratory view, not hidden with CSS. The results-controller cache query was updated. No shared report-order, numbering, DOCX/HTML export, filtering or calculation functions were deleted. Objective selection, generate-all, bulk selection of completed results, selected publication reordering and report exports remain available. No CSS or responsive-layout rules were changed.

## Tests run and passed

- Dedicated removal test: all objective/scope views omit the removed panel/button; the exclusive export handler is absent. Selected publication controls, dataset import and complete-result reordering remain rendered. Synthetic results retain interpretations and selected HTML export works.
- Existing reordering tests: complete-content retention, unchanged dataset/results, separate table/figure numbering, HTML/DOCX ordering, selection, boundaries and reset. Internal objective-order helpers remain tested because numbering uses shared ordering logic; scope-specific UI controls are absent.
- CSV, XLSX, XLS and SAV selection -> preview -> confirmation -> worker-engine results -> removal; invalid preview preserves active data.
- Genuine generated uncompressed and row-compressed SAV: labels, value labels, system/user missing, string/numeric values, metadata, count and damaged-file rejection.
- Global search relevance/navigation and generated-result search.
- Learning/progress/modes: 309 assertions.
- All 79 result families: interpretation placement, exports and changed-data checks.
- Chapter Four headings, separate caption numbering, placement, metadata and HTML/DOCX generation.
- Local entry point and assets, HTTP 200/404, Vercel static configuration and deployment allowlist.
- Results-controller syntax check.
- Byte comparison against previous ZIP confirmed all runtime files except `results-browser.js` and its cache query in `index.html` were unchanged, including styles, SPSS and Excel readers, importer, analysis engine, dictionaries, search and export engine.

Tests used synthetic data and simulated DOM/worker environments; no patient dataset was used. Native desktop/mobile layout, browser interaction and Word visual rendering were not retested. No GitHub commit/push, Vercel deployment or live-site check was performed. Existing SPSS reader limitations remain described in `SPSS_IMPORT_VALIDATION.md`.

## Files and deployment

The complete ZIP includes application sources, bundled dependencies/licenses, configuration, optional local analysis tools, synthetic fixtures, tests and README. Open `index.html` after extraction or use the standalone preview. Deploy the runtime files with the vendor directory as described in README. Do not publish imported patient files.
