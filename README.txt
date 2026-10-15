All Objectives — Live Progress Repair

Replace these four files in the existing app root: bulk-analysis.js, results-browser.js, result-exports.js, index.html. No study data is included. Deployment has not been performed.

Cause and changes:
- Previously each item rebuilt the large bulk panel, while the legacy generation label did not distinguish calculating from report preparation.
- Live progress now updates a lightweight region: real completed/total item count, percentage, current objective/output, completed/failed/skipped/pending counts and elapsed time.
- Stages follow actual awaited calculations, evidence checks, interpretation preparation, report-preview compilation and Word preparation/compilation. Compilation is indeterminate until it finishes; no simulated percentage or speculative remaining-time estimate is used.
- Generation and single-objective processing reuse one shared lifecycle. A compiled preview is reused when its source, settings, selection and writing still match.
- Unsupported and failed items are listed visibly by title and reason. Ready outputs still export together; retry runs only failed eligible items and rebuilds the complete selected preview.
- Cancel generation safely terminates the local calculation worker and preserves completed results. Individual recalculation and subsequent bulk runs reinitialise the worker correctly.
- Duplicate runs are blocked. A two-minute timeout per worker request prevents permanently stalled promises; later tasks can restart the worker.
- Dataset/settings changes during compilation cannot produce a successful completion state.

Actual checks:
- Fresh browser run using the 85-record study extract, without preloaded calculated outputs: 113 supported outputs generated; four unsupported definitions explicitly skipped.
- Captured 167 live status samples, including intermediate processed counts, current objectives, elapsed time and real processing stages.
- Complete preview:74 tables and39 figures. Actual Word download:113 outputs,74 editable tables,39 embedded figures,15 objective/scope headings.
- Exact table cells, caption order, ZIP/XML integrity and embedded PNGs verified. Fresh Word file SHA256 exactly matches the previously LibreOffice-rendered complete report, confirming unchanged report content.
- Individual Objective2 generation and linked interpretation/navigation passed.
- Injected persistent calculation failure: successful figure downloaded in a valid Word document; failed and unsupported items both identified.
- Retry recalculated only the failed item and restored the complete selected preview.
- Cancellation, restart, individual recalculation after cancellation and duplicate-run prevention passed.
- Deliberately dropped worker response, with the watchdog clock accelerated only in the test: timeout identified and next real figure generated after worker restart.
- Deliberately changed source during compilation: Failed state with no compiled report; no false success.
- Progress display checked at1440px and390px in Light,Dark andColored themes; no horizontal overflow. Screenshots inspected.
- JavaScript syntax checks passed for all three changed modules.

Research data, statistical engine, classifications, calculations, document formatting, navigation and themes are preserved.
