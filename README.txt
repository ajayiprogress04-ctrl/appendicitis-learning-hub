Bulk Word Export — Focused Repair

Replace bulk-analysis.js, result-exports.js and index.html in the existing application root. This archive contains only those updated files and these notes. No dataset is included. Deployment has not been performed.

Cause: the bulk exporter previously threw on the first blocked selected output; any figure conversion error also aborted document assembly.

Changes:
- Validate selected definitions and current calculated results separately.
- Prepare each Word output independently; isolate validation and figure-conversion failures.
- Export all successful items in one document in the existing scientific order.
- Show every excluded title, classification and reason directly below the controls; keep selections unchanged.
- Provide retry export using current valid calculations; unsupported definitions require additional data/definition rather than a misleading retry.
- Stop safely if dataset/settings change during export. Report empty selection, all-blocked and document errors clearly.
- Preserve strict ordinary export validation, scientific calculations, formatting and other export types.
- Add bounded figure loading and invalid-dimension checks.

Checks completed locally:
- JavaScript syntax checks for both changed modules.
- Actual Select All browser download: 113 eligible outputs, 74 editable Word tables, 39 embedded PNG figures.
- Mixed two-output selection: one table and one figure.
- Missing required table cell: valid figure downloaded, blocked table identified; correction/retry included both.
- Unsupported definition retained in mixed selection: supported table downloaded, unsupported title/reason shown.
- All unsupported / empty selections: no false document success.
- Injected figure-conversion error: valid table downloaded, figure identified; retry restored both.
- Word ZIP/XML integrity, exact table cells, caption ordering and PNG validation for five selection cases; additional renderer failure/retry documents checked.
- Failure summary and retry control checked at 1440px and 390px in Light, Dark and Colored themes without horizontal page overflow.
- Ordinary Word export still rejects unreviewed edited content.
- Representative two-output Word document reopened/rendered with LibreOffice; page and mobile-summary screenshots inspected.

The export tests reused previously independently verified calculated results from the study dataset. They did not change study data or recalculate statistical methods. Injected failure fixtures were confined to testing.
