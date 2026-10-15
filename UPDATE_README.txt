Appendicitis report style update

Replace the four existing files included in this archive in your app folder; add REPORTING_STYLE_REFERENCE.md for the reusable formatting policy. Preserve the remaining project files and private dataset. Reload the app after applying the update. No dependency installation is required.

Changed files: result-exports.js, report-preview.js, reports.js, index.html.
The shared report template now uses the approved reference style for Word and previews. It preserves editable tables, generated figures, selected outputs, custom ordering, reviewed writing and strict publication checks. The Reports prose editor uses the same generated paragraph as the export.

Tests actually performed: full All Objectives generation using actual data; 113 supported outputs and four unsupported outputs identified; complete browser Word download and full preview (74 tables, 39 figures); Objective 2 preview/export (5 outputs); all 113 result objects unchanged; all 74 table matrices identical to the uploaded report; scientific note conservation; authored narrative preservation; selection/order controls; empty/invalid/unsaved-content guards; JavaScript syntax; Word package/XML, table headers, image count and margins; rendered document layout inspection. Desktop/mobile and three-theme controls were checked. Word was inspected with python-docx and a compatible LibreOffice renderer, not Microsoft Word.

No deployment was performed. The changes apply after you update your hosted app using your existing manual workflow. Existing protocol qualifications and unsupported analyses are retained; this is not a new audit or validation of the statistical methods.
