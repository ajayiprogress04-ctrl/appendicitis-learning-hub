# Integrated scientific narrative update

Each completed result now presents its table title/table or figure/caption, followed by legend and statistical notes, then one unlabelled prose paragraph. Standalone Essence blocks and the optional essence report control were removed from presentation/export. The shared educational registry remains preserved internally.

Reviewed report prose takes precedence over a second interpretation, preventing duplicate paragraphs. Saved legends, interpretations and drafts are not overwritten. Multiline text, heading prefixes and bullet markers are normalised only for display/export. Existing source-review warnings remain. Generated diagnostic-performance, detailed-histology and paired-confidence-transition prose uses actual result fields with qualified scientific meaning instead of a field-label dump. Other generated paragraphs retain verified existing analysis content.

## Files changed

`result-exports.js`, `results-browser.js`, `reports.js`, `workspace.js`, `index.html`, `README.md`, `tests/test_output_essence.cjs`, `OUTPUT_ESSENCE_VALIDATION.md` (historical-status notice), `MANIFEST.sha256`. Replaced the obsolete native essence-presentation test with `tests/test_native_integrated_narrative.cjs`. Added this validation document. No changes to the statistical engine, data dictionary, stored data, navigation or Word page/table/figure styles.

## Actual validation

- All 79 supported catalogue outputs: exactly one HTML narrative paragraph per output, no Essence export heading, source objects unchanged. Seven unsupported analyses retain unavailable-data messages.
- Native Chromium, 1440×900 and 390×900: demographics, diagnostic performance/confusion figure, severity comparison/box figure, histopathology, paired confidence, cost comparison and association scatter. One paragraph after notes, no labelled Essence block; Interpretations remains accessible; Light, Dark and Colored modes checked with no page horizontal overflow or runtime errors.
- Actual generated Word XML and report HTML agree with the selected prose; exactly one HTML narrative per selected output. No Essence report option or heading remains.
- Report-prose precedence, saved-text preservation and display-only heading/bullet cleanup checks pass.
- 79-family numeric/log/plot regression against the prior engine passes; JavaScript syntax checks and static production-package checks pass (30 assets, HTTP delivery and deployment allowlist). This static app has no compilation build step.
- Final synthetic Word export rendered with LibreOffice; every rendered page visually inspected for text, table, figure, caption and narrative layout. Approved Letter margins, Times New Roman styles, captions, editable tables, figure proportions and page footer retained. Notes and paragraphs can continue across pages under the existing pagination rules.

An initial Word-text test escaped only ampersands and falsely failed on less-than signs; it was corrected to use all XML escapes. Final runs pass. No application calculation failure was found.

## Limits and running

No new clinical values or inferential tests were invented. Missing results and unresolved study definitions remain explicitly qualified. Generated prose summarises available evidence; it does not scientifically validate unreviewed author edits. The reviewer can retain and edit their paragraph in Reports. Excluding both narrative components intentionally omits prose; default selections include it. Native Microsoft Word and physical Android were not tested, and no live deployment was performed.

Unzip the project, run `python3 -m http.server 8000` from its directory, and open `http://localhost:8000`. Import a local dataset or use the included synthetic example, generate a result, review the unlabelled paragraph, then preview/export it in Reports. No new dependencies or environment variables are required to run the app.
