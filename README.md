# Appendicitis Research Learning and Analysis Hub

This is the existing static app, extended with a private results workspace. The six approved objectives, detailed learning, quick revision, search, review/completion buttons and browser progress are preserved. The screenshot references informed the rounded search, sidebar, navigation chips, cards and optional dark mode.

## Open locally

Open `index.html` in Chrome. Keep `styles.css`, `content.js`, `variables.js`, `script.js` and `workspace.js` beside it. No framework, npm installation or browser API key is required. The standalone preview is an alternative single-file version.

## Use the real analyses

1. Open **Analysis workspace → Data management**.
2. Choose the separately supplied `Appendicitis_Private_Analysis_Results.json`. It contains actual aggregate analyses from the 85-record categorized SAV, without patient identifiers or patient-level rows.
3. Open **Costs & severity**, **Diagnostics** or **Associations**. Select strategies or relationships to update charts. Export tables with the CSV buttons; export the complete loaded JSON for all estimates and confidence intervals.
4. Reloading the page removes loaded results. Learning progress and theme are saved in this browser; results are not.

To rerun on your SAV locally, use Python 3.12 and the pinned dependencies:

```text
python -m pip install -r analysis/requirements.txt
python analysis/run_analysis.py "PATH/Acute_Appendicitis_Categorized.sav" --output "results.json"
```

The analysis script reads the source fields and derives reference/severity in memory using the approved mappings. It does not write to the SAV. It accepts the original or current categorized SAV when required source columns exist. It does not silently reconstruct unknown variables.

## Update your existing GitHub repository

1. Make a local copy of your current project before replacing files.
2. Extract the updated ZIP. Its `index.html` is directly at the ZIP root.
3. In `ajayiprogress04-ctrl/appendicitis-learning-hub`, choose **Add file → Upload files**.
4. Upload the extracted project contents into the existing repository root, including the new `workspace.js`, `vercel.json`, `.vercelignore`, `.gitignore` and the `analysis` and `tests` folders. Preserve folder names. On systems that hide dotfiles, enable hidden-file display.
5. Commit to `main` with a message such as **Add reproducible research workspace v3**.
6. Verify that all five JavaScript/CSS assets referenced by `index.html` are present with exact lowercase filenames. Do not upload the SAV, private results JSON, private source documents or backups.

The newest GitHub commit inspected before this work was `95df367`, **Fix outdated script and stylesheet**. The previous missing updated script/style pair has therefore been corrected in GitHub. The new workspace has not been committed by the assistant.

## Vercel

Use the same GitHub repository and `main` production branch. Framework: **Other**. Root directory: the directory containing `index.html`, normally the repository root. Build and install commands: leave empty. Output directory: `.`. `vercel.json` explicitly keeps the framework static and root output and makes HTML/JS/CSS revalidate. `.vercelignore` excludes local analysis/test files and private data patterns from hosting. There is no service worker or external script dependency in this project.

After the commit, let Vercel create the new production deployment. Open **Deployments**, select the newest entry, and verify its commit matches your new GitHub commit and its status is **Ready**. If no deployment starts, check the linked repository/production branch before using **Redeploy** on the correct latest source deployment. Redeploying an old commit can still serve an old app.

Use **Visit** to open the public `.vercel.app` URL. Confirm the footer says **v3**, Research Variables includes `HISTOLOGY_SEVERITY`, and Analysis workspace is available. Test result loading, all three modules, strategy changes, variable objective filtering, both learning modes and completion persistence. In developer tools, confirm CSS and four JavaScript files load with HTTP 200 and no console exceptions. Repeat at Android/mobile width and desktop width; test dark mode.

No successful live deployment or browser layout verification is claimed. See `IMPLEMENTATION_REPORT.md` for tested and unverified parts.

## Objective-by-objective generation — v4

1. Open **Tables & figures**. You can also open this catalogue directly from any of the six objective cards.
2. Select `Appendicitis_Private_Browser_Data.json` using the private dataset chooser. This file contains the actual numerical study records, with hospital identifiers removed. It is private participant data, not an anonymous public dataset: keep it on your device and do not upload it to GitHub/Vercel.
3. Choose Objective 1–6 or an exploratory scope. AIR, PCV and clinical signs have separate exploratory scopes.
4. Choose **Generate table**, **Generate figure**, or **Generate all eligible results**. Calculations run in this browser's worker. Entries that require genuinely unavailable data explain the gap.
5. Preview results/methods, edit titles, select publication entries and choose objective/publication numbering. Rerunning does not duplicate IDs.
6. Export CSV, SVG, high-resolution PNG or genuine Word DOCX. Select completed results to create a combined report. The calculation log preserves source metadata and numerical results; keep it private.

To prepare browser input from an updated SAV locally:

```text
python analysis/export_browser_data.py "PATH/Acute_Appendicitis_Categorized.sav" --output "private_browser_data.json"
```

The older **Analysis workspace → Data management** still accepts the separate aggregate `Appendicitis_Private_Analysis_Results.json`; it is not the raw-record input for the new catalogue. Both modes are preserved.

Upload **all nine root CSS/JavaScript assets** plus `index.html` and configuration from the updated ZIP. New required scripts are `analysis-engine.js`, `result-catalog.js`, `result-exports.js` and `results-browser.js`. The project footer now displays **v4**. No install/build step is needed for the static app; Python is only for local SAV conversion/reference analysis.

Live checklist: confirm every versioned script returns HTTP 200; load the private browser input locally; generate a table and figure in each objective; check AIR/PCV/sign scopes; verify title edits and publication numbering; test CSV/SVG/PNG/DOCX downloads; switch back to learning/variables and confirm progress survives. Test desktop and Android widths, light/dark modes, and console errors. Native browser Worker or download errors should be reported with the console message; no successful live deployment is claimed here.
