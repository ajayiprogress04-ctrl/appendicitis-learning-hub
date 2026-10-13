# Direct SPSS import — implementation and validation

## What changed

The existing application now parses `.sav` files through a bundled, MIT-licensed datareader-spss 0.2.1 browser library. The input already accepted the extension; it now reads the file instead of rejecting it. No server, API, CDN or Python converter is needed for this upload path. The existing preview/confirmation/analysis controller remains in use.

Variable names (including long names), labels, value labels, numeric and string values, missing-value definitions, measurement settings, formats and encoding are retained where exposed by the reader. Original rows and names are retained in memory under `input.imported_data`; the existing hospital identifier exclusion applies. System missing values are null. Raw declared user-missing codes remain in imported rows and metadata but become null in numeric analysis records. String columns remain visible and retained but cannot feed numeric tests. Unknown columns do not acquire invented research roles or test assignments. Existing study names are matched case-insensitively, with mappings disclosed in the preview. All-missing SPSS cases are retained in record counts.

The research-variable explorer displays active SPSS metadata for matching study variables. Existing study definitions and learning explanations remain separate. Importing labels does not change protocol thresholds, eligibility, severity or age definitions. Report interpretations and reordering code are preserved. The existing analysis engine was not edited for this change.

## How to use

1. Open `index.html` or the standalone preview in a modern browser.
2. Select **Tables & figures**, then select or drop your `.sav` under **Import a private dataset**.
3. Inspect the record count, names, types, variable/value labels, missing counts, first five source records, warnings and exclusions.
4. Resolve unexpected clinical codes; do not substitute labels for numeric codes or assume an imported unit matches the protocol.
5. Click **Use this dataset for analysis**. Generate the relevant existing tables or figures.
6. Use **Remove dataset and results** or reload when finished. Imported data is held in memory and is not saved to learning-progress storage.

Limits remain 15 MiB input, 5,000 records and 300 variables. Missing or unsupported research fields disable the corresponding analyses. Damaged/incompatible files display an SPSS-specific error without replacing the active dataset. Empty SPSS datasets are rejected at preview with the existing no-participant-records message.

## Tests actually run

- Generated two genuine SAV files using pyreadstat 1.3.6: uncompressed and SPSS row-compressed, each with four synthetic records. No patient data used.
- Parsed both with the delivered browser IIFE in Node's VM using Web-compatible binary APIs. Asserted record counts, variable/value labels, numeric values, strings (including `0042`), long variable names, ordinal metadata, numeric user missing (99), string user missing, and system missing.
- Rejected non-SPSS bytes and a truncated SAV with clear errors.
- Tested `.sav` selection -> preview -> confirmation -> existing worker engine baseline table -> removal in the DOM harness. Table n=4. Existing CSV/XLSX/XLS paths also passed.
- Full `python scripts/test_project.py` audit passed: syntax, imports, empty/missing/invalid data, 309 learning assertions, search/navigation, all 79 interpretation/result families, complete-content reordering, Chapter Four exports, local HTTP assets and deployment allowlist, statistical checks, local SAV conversion and aggregate workspace.
- 372 synthetic reference checks passed against Python/SciPy, plus 63 catalogue/controller assertions.
- Standalone preview was regenerated with the bundled reader.

Reproduce with `python -m pip install -r analysis/requirements.txt`, then `python scripts/test_project.py`. Python dependencies are for testing/optional local analysis only, not browser upload.

## Limits of verification

The new SPSS path was tested in a VM/DOM harness, not a native browser. Native desktop/mobile SPSS selection, Safari/Firefox, memory pressure and UI responsiveness on large files are unverified in this turn. No Word visual rendering was rerun. Zlib-compressed SAV/ZSAV, exotic encodings, very-long strings, date formats and other SPSS variants were not tested here; the reader may support them, but this delivery does not claim their verification. `.zsav` and `.por` extensions are not enabled. Date-format numeric variables are retained as source numbers, without automatic date conversion. The parser may not expose every SPSS header/document/attribute; only exposed metadata is retained. Confidential data should stay outside the public project and repository; free-text identifiers may occur beyond the known hospital ID and are not automatically anonymised.

No GitHub commit/push, Vercel deployment or live-site verification was performed. Deploy the entire runtime folder including `vendor/spss-reader.js` and both parser licenses; the updated `.vercelignore` includes the reader and excludes tests, samples and analysis files. Existing static Vercel configuration is retained: no framework/build/install command and output directory `.`. Actual repository branch and production settings are unverified.
