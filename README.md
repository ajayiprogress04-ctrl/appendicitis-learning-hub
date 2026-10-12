# Appendicitis Research Statistical Learning Hub

A static learning app for personal tutoring. The update preserves the six objective titles, approved wording, theme, search and both learning modes. It adds a research introduction, clearer method-name explanations, plain-English glossaries, practical takeaways, review tracking and a searchable dictionary of all 38 SAV variables with objective links.

Method examples are hypothetical, not study findings. The app teaches methods; it does not run the study analysis or make clinical decisions.

## Files

Keep all six files together at the repository root:

| File | Purpose |
|---|---|
| index.html | Page and accessible controls |
| styles.css | Responsive design |
| content.js | Objectives, explanations, glossary and study context |
| variables.js | Source metadata, interpretation and objective links |
| script.js | Navigation, filters, learning modes, copying and review tracking |
| README.md | This guide |

No installation, build command, database, API key or environment variables are needed.

## Update your existing GitHub project

Repository: https://github.com/ajayiprogress04-ctrl/appendicitis-learning-hub

1. Download and extract the updated project ZIP. Open index.html to try it. Alternatively open the separate standalone preview. Do not upload the ZIP or preview to the repository.
2. Open the repository's Code tab. Choose Add file → Upload files.
3. Select the six extracted files above. Upload them directly to the root, without an extra folder. Five existing files are replaced; variables.js is added.
4. Enter the commit message “Improve learning content and add variable explorer” and choose Commit changes.
5. Check that all six files appear in the root. If GitHub creates a branch or pull request instead, the production branch must receive the changes before its deployment updates.
6. For a connected Vercel Git integration, the commit should trigger a new deployment. Open the project's Deployments page and wait for the relevant deployment to reach Ready. If it fails, inspect the logs before continuing.
7. Open the existing production URL and refresh. Verify the update there. This package does not itself update GitHub or Vercel.

During guided tutoring, complete one step and report success before moving on.

## Vercel configuration

Retain Framework preset Other, repository root directory, no build or install command and no environment variables. If an explicit output directory is required, use the root (.). Do not set dist, build or public. Current settings should be checked in Vercel before changing them.

## Check the preview and live site

- Open all six objectives and confirm the approved wording.
- Expand ROC: its name explanation, glossary and practical takeaway should appear.
- Switch between detailed learning and quick revision; an expanded method should remain open.
- Search methods and variables. Clear a search with no matches to recover the list.
- Open the variable explorer, then filter by objective and role. Confirm exact SAV codes are distinguishable from interpretation and assumptions.
- Follow a variable's linked method back to the relevant objective.
- Mark a method as reviewed, reload, and undo the mark. Progress covers 34 objective-method entries, including methods used in more than one objective.
- Copy a takeaway and paste it into a note. Local-file browser restrictions may require manual copying; try HTTPS for the clipboard feature.
- Check the narrow phone layout and desktop layout, including long code labels. Check keyboard focus and native expandable panels.

Review marks and mode preference are stored in the current browser when storage is available. They do not sync between browsers or devices. Progress represents your own review marks, not an assessment of understanding. When storage is blocked, review marks last only for the current visit.

## Dataset documentation and boundaries

The public dictionary contains schema and aggregate completeness information from the supplied SAV: exact variable names, value labels, storage types, SAV measurement levels and missing-value definitions. It does not contain patient rows or actual hospital identifiers. The source includes 85 records and 38 variables, with no SAV variable labels. Plain-language interpretations are explicitly distinguished from source labels. Stored measurement levels are shown alongside appropriate analytical interpretations rather than silently corrected.

All variables have 85 nonmissing records. One anorexia value is outside its labelled code set; the dictionary distinguishes nonmissing from label-valid observations. Undefined units and unexplained abbreviations remain flagged. Context from the protocol or researcher is identified separately from SAV metadata and analyst assumptions. Unmapped variables are not forced into an objective.

Histology codes 1–5 describe appendicitis categories; code 6 describes reactive lymphoid hyperplasia. A negative classification for code 6 assumes no concurrent acute appendicitis. The combined MAS–hsCRP approach remains exploratory because no prespecified AND/OR classification was recovered. Severity mapping has an unresolved proforma crosswalk. Sparse paediatric reference negatives limit age-specific diagnostic comparisons. Confidence ratings are paired within patients, but clinician identifiers and professional groups are unavailable. Monetary amounts are in NGN according to researcher clarification; accounting components, price year and incremental test costs remain unverified.

Do not upload the SAV, patient records, private analysis files or credentials to this repository. The teaching app has no external script dependencies, analytics or API calls. Reference links open external documentation; hosting practices are determined by the provider.

## Troubleshooting

| Problem | Check |
|---|---|
| Blank controls or no variables | All three JavaScript files, especially the new variables.js, are uploaded with exact lowercase names |
| No styling | styles.css exists at the root |
| 404 | index.html is in the configured root, without an extra folder layer |
| Build error | No npm installation or build command is needed |
| Old version | The latest commit reached Ready on the production deployment; refresh the production URL |
| Review marks disappear | Browser storage may be blocked, cleared or different from the browser used previously |
| Copy fails | Try the HTTPS site or select and copy the displayed takeaway manually |

## Verification

236 DOM-stub logic assertions passed, covering navigation, search, modes, glossary and variable rendering, objective links, copying, review persistence and storage failures. JavaScript syntax and package contents were checked. These are not real-browser interaction or visual-layout tests. Complete the preview and live-site checklist above; browser visual QA was unavailable in the authoring environment.
