## Three selectable appearances

Choose **Light Mode**, **Dark Mode** or **Colored Mode** from the header's Appearance selector. Colored Mode adds coordinated violet/cyan/teal/magenta gradients and original gradient scientific illustrations throughout the existing app. Dense research content stays on solid reading surfaces.

The selected theme is remembered using the existing browser preference. Switching does not reload the app or clear current datasets, outputs or drafts. No new runtime dependencies or environment variables are required. See `COLORED_MODE_VALIDATION.md` for the exact changed files, actual tests and limits.

## Rich scientific backgrounds in both themes

The app now uses large DNA, molecular, cellular, schematic intestine/appendix, waveform and data-grid artwork throughout its existing views. Light mode uses warm grey on off-white; dark mode keeps black/charcoal. Dense results, charts, writing and definitions retain solid reading surfaces.

Keep `scientific-textures/` with the project when serving or deploying. The standalone preview embeds the artwork for offline use. No runtime dependencies or environment variables were added. See `RICH_SCIENTIFIC_TEXTURE_VALIDATION.md` for changed files, actual native-browser tests and verification limits.

## Legends and Interpretations update

Use **Legends** to select a table/figure, inspect the actual output and edit its four writing components. Save the reviewed legend, then use **View / write interpretation** to explain the finding's meaning separately. Saved writing appears in the linked output and HTML/DOCX reports. Source changes flag writing for review; stale edited prose is excluded from reports until reviewed and saved again.

**Save lasts for this visit. Download legend/interpretation text before closing or reloading.** Drafts require scientific review; no unsupported tests, units, error bars or significance are inferred. The four-component structure follows the recovered 30 September reference. See `LEGENDS_VALIDATION.md` for changed files, native desktop/mobile tests and limitations.

## Independent scrolling update

Tables & Figures now has separate scroll containers for its list and selected output. Scroll offsets and title drafts survive reordering and rendering. See INDEPENDENT_SCROLL_VALIDATION.md for native desktop/mobile viewport tests.

## Dedicated Statistical Glossary update

Select **Statistical Glossary** from the sidebar or the Statistical Glossary tab. Search definitions/abbreviations, filter by category, browse A–Z, and select an entry. Underlined statistical terms in explanatory text, tables and captions open the same reference. **Return to previous section** restores the current view without recreating it or clearing the dataset. Reopen the sidebar using ☰ at any time.

Includes 57 entries in 16 categories; examples are illustrative, not actual study findings. No extra runtime dependencies or environment variables are needed. See `STATISTICAL_GLOSSARY_VALIDATION.md` for changed files, tests and remaining visual-verification limits.

## Collapsible navigation update

Use the fixed ☰ button to open/close navigation. Desktop collapse releases workspace width; mobile uses a drawer with a close button, backdrop dismissal and Escape. Desktop/mobile preferences are stored separately, without research data. Mobile is closed on the first visit; desktop is open. The three reporting tabs retain their connected workflow; Legends and the glossary are separate reporting/reference tabs. See SIDEBAR_VALIDATION.md for the tested scope and native-browser limitations.

# Appendicitis Research Statistical Test Learning Hub

A buildless research-learning app with three connected reporting views plus a dedicated Statistical Glossary, local dataset import and calculation, comfortable Inter typography and a black/charcoal gradient dark theme.

## Start locally

1. Extract the complete ZIP. Keep the root files and `vendor/` directory together.
2. Open the standalone preview, or serve the extracted project with `python -m http.server 8080` and visit `http://localhost:8080`.
3. Switch between Light, Dark and Colored modes with the header Appearance selector. The server serves application assets; imported patient files are read in browser memory and are not sent to this server.

No npm installation/build is required. Directly opening `index.html` also provides system-font fallback where a browser blocks local font loading. The standalone preview embeds scripts, styles and Inter for offline use.

## Connected workflow

- **Objectives:** retained approved wording, associated variables, statistical learning methods and counts of calculated results. Selecting an objective synchronises the reporting scope.
- **Tables & Figures:** import/preview a dataset, confirm it, choose an objective and generate the relevant results. Titles, notes, captions and interpretations stay with the result. Each output links to its interpretation and associated objective.
- **Interpretations:** objective-organised prose drawn from the same result objects. Unrun/unavailable analyses show an explicit unavailable message. Links return to the corresponding output/objective.

`Supporting tools` contains the research-variable explorer and optional aggregate-analysis workspace. Learning modes, review/progress, global search and header study notes remain available. The desktop sidebar mirrors the same five primary destinations. The Scope Reports interface remains removed.

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

## Approved Word report export

Open **Reports**, choose calculated outputs and reviewed legends/interpretations, arrange them, preview and **Export to Word**. The approved combined reporting style is the permanent default. Missing/stale requested writing must be reviewed or deselected. See WORD_REPORT_VALIDATION.md for the measured format, actual tests and limitations. App use needs no additional dependencies or environment variables.

## About the Developer

Choose **About the Developer** in the collapsible sidebar or click the footer name. The approved profile, portrait and professional links adapt to all three themes. Return to research without losing the mounted workspace. See ABOUT_VALIDATION.md for changed files and actual checks. Profile details become public when the app is published.

## Comfortable default size

At 100% browser zoom, the current default follows the previous 150% appearance: larger shared type, proportional controls/spacing and responsive research panels. Phones use a balanced adaptation. Browser zoom remains available, and exports retain the approved Word format. See READABLE_DEFAULT_VALIDATION.md for measured values, comparison method, changed files and actual checks.

## Five main research tabs

Objectives → Tables & Figures → Interpretations → Statistical Glossary → Reports. Figure legends and table notes are now edited beside the selected output in Tables & Figures. Reports can include or exclude legends independently and links directly to that inline editor. About remains in the sidebar/footer. See FIVE_TAB_NAVIGATION_VALIDATION.md for changed files and actual tests.
