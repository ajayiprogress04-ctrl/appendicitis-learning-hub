# Bulk Analysis & Report Export — 14 October 2026

## Use the feature

1. Serve this complete project with `python3 -m http.server 8080`, then visit `http://localhost:8080`. No npm installation, build step, API key, environment variable or new runtime dependency is required. Use a current browser with Web Workers, Web Crypto and download support. Localhost or HTTPS is required for content-based freshness checks.
2. In **Tables & Figures**, upload and confirm your dataset. The **Bulk Analysis & Report Export** panel also appears in **Reports**.
3. The default is all eligible participant-level catalogue tables and figures, with supporting statistical outputs and scientific narratives included. Use the tri-state master checkbox, type shortcuts, objective scope or individual checkboxes. Counts update immediately. The objective selector scopes the type shortcuts and individual list; the master checkbox and Select All always cover the entire library. Deselect All clears picks; Clear Selection & Processing Summary also clears the internal processing summary, never the underlying dataset or results.
4. Click **Analyse Selected Outputs**. The worker runs each required definition, attaches existing companion statistical evidence and records success, qualifications, blocking problems and failures. A figure's essential statistical evidence remains attached even when a separate supporting table is not selected.
5. Review the summary. Retry targets failed/blocked outputs only. Critical missing evidence or unsaved/stale writing blocks export. The app does not silently omit an output. Explicitly remove unresolved outputs from the report selection if you wish to proceed without them; their data and results are retained. Qualified, calculable estimates require an explicit acknowledgement before export.
6. Use **Preview Selected Report**, choose Full or Concise, and click **Export All Selected to Word (.docx)**. **Analyse All & Export Word** processes the current selection and uses the same validation gate; it stops rather than downloading an incomplete report. “All” here means all selected outputs, not an override of your choices.

Full reports retain objective introductions and analysis-category subheadings. Concise reports omit those repeated introductions/subheadings, while retaining selected outputs, units, essential notes, statistical evidence and selected prose. Reviewed figure legends and interpretation drafts stay with their original stable output identifiers. Reviewed Reports prose is reused; unsaved or source-stale prose must be reviewed and saved first. The bulk export does not repeat Essence headings: one scientific narrative follows the output and its notes.

## Architecture and scope

- Reuses the existing participant-level catalogue (90 definitions), worker, calculations, writing records and editable OOXML exporter. No new navigation tab, routing library, statistical package or download dependency.
- Eligibility means the definition has available columns and is not explicitly source-limited. It does not guarantee sufficient samples, estimable tests or scientific validity. The actual calculation and publication audit determine the processing result.
- The separate 14 aggregate/source templates in Supporting tools are not new participant-level analysis definitions. They cannot be recalculated from the currently imported participant rows and are not silently combined with this report. Existing functionality remains available there.
- SHA-256 provenance includes current records/metadata, worker code, catalogue definitions and enrichment code. Master-output provenance also includes the current scientific selection/cohort/settings. Existing unstamped results are recalculated on the first bulk run. Matching verified results are reused. Changed contents of the same dataset object also invalidate export. Provenance is opaque and local; data are not uploaded or saved merely for caching.
- Progress updates only the bulk panel. The existing selected output, dataset and writing records are preserved. Starting/finishing analysis uses the controller's existing scroll/draft preservation. Back restores the current bulk panel rather than obsolete checkbox DOM.
- Outputs are grouped by actual objective/scope. Tables precede figures; descriptive and main diagnostic tables precede comparison/supporting tables where categories identify them. Catalogue order breaks ties. Figures are rasterised from the generated scientific SVG, not screenshots of the application. Tables, text and captions are genuine editable Word elements.
- Long reports include a Word TOC field with a cached objective list. Word can update page references; pagination and field updates vary by editor. Existing Letter/TNR/margin/footer conventions are retained. Wide bulk tables use landscape sections, repeating header rows and non-splitting table rows.
- Work and selections remain in this browser visit. Reloading clears private research state, as before. No automated deployment or GitHub changes were performed.

## Actual source-data run

The verified local 85-record dataset made 83 of 90 catalogue definitions eligible. All 83 were processed:

| Status | Outputs | Meaning |
|---|---:|---|
| Ready | 65 | Calculation completed and existing publication checks passed |
| Requires attention | 15 | Calculation completed; methodological or precision qualifications remain |
| Blocked | 3 | Required inferential p-values were not estimable |
| Calculation failure | 0 | No worker failure in this real-data run |

The three blocked definitions were `F:sign_histology`, `F:sign_severity` and `F:sign_air`. Right iliac fossa tenderness and abdominal pain were constant in the relevant data, leaving their requested comparisons without estimable p-values in the existing methods. No p-values were invented or underlying data changed.

Only after explicit removal of those three from the report selection and acknowledgement of the remaining qualifications was an 80-output document downloaded: **50 editable tables and 30 embedded figures**. This is not a claim that all 83 are scientifically export-ready. The seven source-limited definitions remain listed separately with their reasons.

## Tests actually completed

- Native Chromium at 1440px and 390px in Light, OLED Dark and Colored themes: table/figure/all selections, individual picks, partial master state, counts, clearing, real worker processing, current-cache reuse, stale-data rejection, report download, source preservation, selected-result preservation, Reports integration, no runtime errors or document horizontal overflow.
- Full-library processing of all 83 eligible definitions; complete per-output summary and explicit blocking/removal/acknowledgement flow.
- Injected transient failure: subsequent output still completed; retry called only the failed output; combined processing downloaded nothing while failure remained; a successful retry and combined action downloaded a valid document. This was a controlled failure test, not a real-data calculation failure.
- Full and Concise preview modes in all six viewport/theme combinations: same selected table/figure counts, with objective introductions omitted only in Concise mode.
- Existing Word-export regression suite: actual mixed/table downloads, selection changes, loading/duplicate guard, keyboard operation, review blockers and failure recovery in all six viewport/theme combinations.
- Existing global Back suite: five-tab/cross-link history, scrolls, drafts, report selections, browser Back/Forward, direct refresh fallback and keyboard/mobile cases in all six combinations.
- Existing five-tab/inline-legend suite at desktop/mobile: exact navigation order, separate interpretations, reviewed legend editing and Word inclusion/exclusion.
- Word package inspection: valid ZIP and XML, 50 editable tables, 30 real PNG drawings, all 80 selected captions exactly once, sequential table/figure numbers, proper TOC field, section orientation/footer relationships, no `p = 0.000`, no duplicate Essence headings.
- The large document was reopened/rendered by LibreOffice-compatible tooling; representative rendered pages were visually inspected, including contents, tables, wide master tables and comparison/ROC figures. Not every page was individually inspected.
- Production configuration check: 35 local runtime assets served with HTTP 200, expected 404, correct static Vercel configuration and deployment allowlist. The app is buildless; there is no npm production build to run.

## Limits and review requirements

Microsoft Word itself, physical Android devices, a live Vercel deployment and stress tests beyond this 80-output/~9 MB report were not tested. Different Word editors may repaginate or require a TOC update. No arbitrary report truncation is implemented; document-generation failures produce an error and no partial download. Browser memory/time limits still apply to substantially larger datasets/reports.

The existing scientific gaps are retained and surfaced, not solved by a bulk button: protocol prespecification, sparse subgroups, incomplete effect intervals, model-development uncertainty, missing clinician clustering identifiers, unsupported incremental-cost analyses and other recorded qualifications. A completed calculation or acknowledged warning is not a certificate of external/clinical validity. Review the final document before scientific submission.

## Files changed for bulk workflow

- `bulk-analysis.js` — new shared selection, progress, retry, preview, freshness and export orchestration.
- `results-browser.js` — reliable bulk worker API, result provenance, source guards, locking and panel integration; column presence checks consider all records.
- `reports.js` — shared panel and reuse/review of authored report narratives.
- `result-exports.js` — bulk concise headings, long-report TOC, landscape sections for wide bulk tables; existing editable Word architecture retained.
- `styles.css` — theme-aware responsive controls and bounded selection/review lists.
- `index.html`, `.vercelignore` — load/ship the new module.
- `navigation-history.js` — refresh current bulk controls after Back restoration.
- `tests/test_native_bulk.cjs`, `tests/test_static_package.py` — reproducible browser and static checks.
- `README.md`, this validation file and `BULK_OUTPUT_AUDIT.json` — instructions and safe output inventory.

The package also preserves the completed diagnostic-master work; see `MASTER_DIAGNOSTIC_VALIDATION.md` for its distinct scientific scope, changes and independent numerical verification. No private participant dataset or real-data Word report is included in the downloadable project.
