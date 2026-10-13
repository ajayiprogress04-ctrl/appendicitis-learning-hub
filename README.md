## Collapsible navigation update

Use the fixed ☰ button to open/close navigation. Desktop collapse releases workspace width; mobile uses a drawer with a close button, backdrop dismissal and Escape. Desktop/mobile preferences are stored separately, without research data. Mobile is closed on the first visit; desktop is open. The existing three-tab workflow is unchanged. See SIDEBAR_VALIDATION.md for the tested scope and native-browser limitations.

# Appendicitis Research Statistical Test Learning Hub

A buildless research-learning app with three connected primary views, local dataset import and calculation, compact Inter typography and a black/charcoal gradient dark theme.

## Start locally

1. Extract the complete ZIP. Keep the root files and `vendor/` directory together.
2. Open the standalone preview, or serve the extracted project with `python -m http.server 8080` and visit `http://localhost:8080`.
3. Switch between light/dark modes with the header button. The server serves application assets; imported patient files are read in browser memory and are not sent to this server.

No npm installation/build is required. Directly opening `index.html` also provides system-font fallback where a browser blocks local font loading. The standalone preview embeds scripts, styles and Inter for offline use.

## Connected workflow

- **Objectives:** retained approved wording, associated variables, statistical learning methods and counts of calculated results. Selecting an objective synchronises the reporting scope.
- **Tables & Figures:** import/preview a dataset, confirm it, choose an objective and generate the relevant results. Titles, notes, captions and interpretations stay with the result. Each output links to its interpretation and associated objective.
- **Interpretations:** objective-organised prose drawn from the same result objects. Unrun/unavailable analyses show an explicit unavailable message. Links return to the corresponding output/objective.

`Supporting tools` contains the research-variable explorer and optional aggregate-analysis workspace. Learning modes, review/progress, global search and header study notes remain available. The desktop sidebar mirrors the same three primary destinations. The Scope Reports interface remains removed.

Title edits/recalculations update the linked views. Selected publication results retain Move Up/Move Down controls, with complete content kept together. Current table/figure numbers are used by application-generated HTML/DOCX report exports; numbering modes remain available. Interpretations remain directly beneath output previews as well as in the linked interpretation view.

## Private dataset import

Under Tables & Figures, select/drop `.sav`, `.xlsx`, `.xls`, `.csv` or compatible participant JSON. Review names, labels, missing counts, records and warnings; then choose **Use this dataset for analysis**. Limits: 15 MiB input, 5,000 records, 300 variables. Excel formulas require a values-only workbook; CSV uses UTF-8, comma delimiters and first-row variable names. Known study names are matched case-insensitively. Numeric category codes are required for analysis.

SPSS is read locally through bundled datareader-spss 0.2.1. Variable/value labels, missing definitions, formats and measurement settings are retained where supported. Raw imported strings/source values remain in memory; numeric analysis excludes strings, the known hospital identifier and declared missing codes. Uncompressed and row-compressed SAV have been tested with genuine generated fixtures. Zlib-compressed variants and exotic SPSS constructs remain unverified; `.zsav` and `.por` extensions are not enabled. See `SPSS_IMPORT_VALIDATION.md`.

Imported data/generated results are not saved to browser storage or uploaded. Theme and learning-progress preferences are saved locally. Reloading or removing the dataset clears results. The app is not an automatic anonymisation tool: do not put confidential input files in the public source folder/repository.

## Statistical reporting and limits

The app reports available counts, denominators, descriptive estimates, intervals, test statistics and methods. P-values use three decimals or `<0.001`; unrounded stored statistics remain in calculation logs where available. Added footnotes expose existing group summaries, diagnostic definitions, uncertainty and methodological limits. Combined models, sparse subgroups and observational effects are not treated as validated clinical decisions. No unavailable p-value, coefficient interval or conclusion is filled in.

The existing age boundary, thresholds and histology coding are retained working definitions; full protocol approval and unresolved design assumptions still require review. See `BIOSTATISTICS_VALIDATION.md` and `STATISTICAL_REPORTING_INVENTORY.md`. Native mobile/desktop appearance has not been verified for this version.

## Optional local analysis and validation

Install the pinned Python dependencies for the existing analysis tools:

```
python -m pip install -r analysis/requirements.txt
python scripts/test_project.py
```

This test command generates synthetic fixtures temporarily, then checks imports, learning/search, all supported result families, statistical references, reporting, reordering and the three-tab workflow. Node is required for tests. Additional CSS/font checks use `tinycss2`, `fonttools` and `brotli`; they are not browser runtime dependencies.

The optional `analysis/run_analysis.py` and SAV converter tools remain available for producing private aggregate/participant JSON on your computer. They are not required for direct browser SAV upload.

## GitHub and Vercel

No repository or deployment was modified or verified in this task.

1. Update the existing repository with the extracted application files, keeping `vendor/`, `vercel.json`, `.vercelignore` and `.gitignore`.
2. Commit/push to the branch actually connected to your Vercel project; that branch has not been verified here.
3. Use the project folder as the Vercel root directory. The delivered configuration is static: framework `null`, empty install/build commands, output directory `.`.
4. Verify Vercel's project settings agree with the file and allow the automatic deployment to finish.
5. Test the live site: three-tab links, supporting tools, theme, synthetic SAV/CSV import, a table/figure, its interpretation, selected report export and a narrow mobile viewport.

The deployment allowlist includes all runtime assets, both parser libraries, local Inter and their licences. It excludes samples/tests/analysis directories. Do not publish real imports, patient rows, private outputs or credentials. Local validation does not establish live deployment success.
