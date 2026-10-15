# Reference based reporting style

Approved reference: OSSN Results Edited; apply its presentation conventions to appendicitis findings, never its data or clinical conclusions.

Shared implementation: result-exports.js owns report introductions, scientific prose, descriptive Chapter Four headings, document styles, and report-local note consolidation. report-preview.js renders the same complete selected set so preview and Word agree. reports.js uses the shared generated paragraph in the prose editor. index.html refreshes these scripts.

- Centred RESULTS and an underlined 16 pt research topic; descriptive numbered objective and exploratory headings.
- Times New Roman: body 11 pt; headings 13/12 pt; captions 10.5 pt; editable tables 9.5 pt; notes 9 pt. Left aligned prose, 1.05 line spacing, 6 pt paragraph spacing; Letter, 0.65 inch margins; centred page number footer.
- Table captions above; figure captions below. Statistical methods, denominators, estimates, intervals, tests and p-values remain associated with the output. One integrated scientific paragraph follows its notes. No separate Essence heading in exported documents.
- Repeated scientific conventions appear once at the beginning when shared across three or more sections. Other identical notes appear once within each section; single-output exports retain the relevant notes. Redundant loaded-record workflow notes are excluded; scientific limitations remain.
- Preserve user-selected content, authored prose, report ordering, editable tables, actual figure generation, validation, and failure isolation. Landscape remains available for wide tables. No calculations, thresholds, source records, or eligibility definitions are changed.

Verification on actual app data: All Objectives generated 113 supported outputs with four explicitly unsupported outputs. Full preview/Word contain 74 tables and 39 figures. All 74 table matrices match the uploaded report exactly, and all 113 complete result objects match the pre-change results. Standalone notes, narrative selection, authored prose, ordering, and validation were checked. Word XML/ZIP, embedded images, repeated headers, margins, and rendered pages were inspected. This is a presentation update, not independent confirmation of protocol assumptions or scientific validity of the existing analyses.
