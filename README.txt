Word Export Repair — 15 October 2026

Apply: replace result-exports.js, bulk-analysis.js and index.html in the existing project root. No new dependencies. No live deployment was performed.

Confirmed causes:
- Shared publication validation treated existing Objective 4 methodological notes as unclassified and blocked the entire selected report.
- Constant findings with an explicitly non-estimable test were incorrectly treated as missing required p-values. No p-values have been invented; the original counts and no-variation explanations remain.
- Bulk export was disabled until a separate analysis run and methodological acknowledgement had been completed, even where Reports could export the same calculated content.

Changes:
- Classifies only the audited known notes, retaining essential units, group definitions and methodological qualifications in Word.
- Allows explicit constant-factor comparisons without a manufactured p-value. Other missing required inferential results still block export.
- Bulk Export All Selected now runs missing/outdated analyses automatically, validates every selected output and stops on genuine failures. Methodological-review acknowledgement is optional for a review Word document; qualifications remain included. Unsaved/unreviewed authored writing still blocks export.
- Wide tables use landscape sections consistently through the shared Word generator.
- Keeps the existing selection controls, previews, HTML export, themes and scientific calculations. Refreshes the changed asset versions.

Usage:
Load the study dataset, select supported outputs, then click Export All Selected to Word. The app calculates missing/currently stale results before creating the document. Reports and Tables & Figures retain their existing selected-output Word buttons. Empty selections show guidance; genuine errors are reported and the button is restored. No selected failed output is silently omitted.

Actual verification:
- Nine real browser downloads: single table, table plus figure, and Select All, through Bulk, Reports and Tables & Figures.
- Every downloaded ZIP/XML package parsed; every editable table cell compared with selected calculated data; captions/order matched; every embedded PNG verified.
- Each full report: 113 eligible outputs, 74 editable tables and 39 figures, no missing/duplicate captions. Four unsupported definitions remain ineligible and were not selected.
- The full report reopened/rendered in LibreOffice as 100 pages. The two-page mixed table/figure report was visually reviewed, along with representative wide and constant-comparison pages from the full report. Not every full-report page was inspected individually in Microsoft Word.
- Empty-selection guidance, simulated generation-error recovery, duplicate-click suppression, missing-cell/missing-real-p/unknown-note/unsaved-writing guards passed.
- Complete preview and HTML retained 113 outputs (74 tables, 39 figures). Theme control states and mobile button visibility checked; no physical-device download test.
- JavaScript syntax checks passed. No study data or statistical calculations changed.
