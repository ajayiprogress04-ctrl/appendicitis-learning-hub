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
