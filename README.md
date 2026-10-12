# Appendicitis Research Statistical Test Learning Hub

A buildless HTML/CSS/JavaScript app for personal tutoring. It includes six approved research objectives, 23 method explanations, search, quick revision, detailed learning, study notes and copying of client-friendly summaries. All method-card numerical examples are hypothetical. No individual patient data are bundled.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page and accessible controls |
| `styles.css` | Responsive visual design |
| `content.js` | Method explanations, objective wording and study context |
| `script.js` | Search, navigation, modes and copying |
| `README.md` | This guide |

There is no `package.json`, installation step, server, database, API key or build command. A `vercel.json` is unnecessary for this single HTML entry point. Files must be in the repository root, with their exact lowercase filenames.

## Stage A — Try the files

1. Download and extract the project ZIP. Uploading the ZIP itself to GitHub will **not** deploy the app: upload the extracted files.
2. Open `index.html` in a browser. All five files should remain together in the same folder.
3. Open an objective and a method. Switch modes, search, open study notes and try copying.
4. If your Android file manager cannot open a multi-file website correctly, use the separately provided standalone preview HTML, or wait for the hosted version. Desktop extraction and uploading are usually easier. The hosted app needs only a normal browser on Android.

Quick-revision preference is saved locally in your browser when browser storage is available. No patient information is collected, no analytics are installed, and the app makes no API requests. External reference links open the method documentation in a new tab. Hosting-provider logs remain subject to that provider's practices.

## Stage B — Create a GitHub account

GitHub stores the files and keeps a history of changes. Vercel can publish them automatically.

1. Open https://github.com/ and choose **Sign up** if you do not have an account.
2. Enter your email, choose a username and password, and complete email verification. Do not share your password or verification codes with a tutor.
3. Success means you can sign in and see your GitHub dashboard. If the page is different, look for **Sign up** or the account menu. On Android, request **Desktop site** from the browser menu when upload controls are hidden.

## Stage C — Create and upload a repository

1. While signed in, open https://github.com/new. A repository is a project folder stored on GitHub.
2. Name it `appendicitis-learning-hub`. A **public** repository is the simplest starting point; this project contains teaching content, not raw patient records. A personal private repository can also be connected if you prefer.
3. Select **Add a README file**, then **Create repository**.
4. On its file page choose **Add file → Upload files**. If menus look different, open the repository's **Code** tab and look for **Add file**.
5. Select the five extracted files. Put them at the top level, not inside an extra folder. Replace the default README with the supplied README if prompted.
6. In the commit-message box enter `Add statistical learning hub` and choose **Commit changes**. A commit is a saved revision.
7. Confirm the file list includes `index.html`, `styles.css`, `content.js`, `script.js` and `README.md`. Do not upload patient data, credentials, the ZIP or the separate preview file.

Stop here during live mentoring and report success or the error text before continuing.

## Stage D — Connect to Vercel

Vercel serves the files online, independently of your own computer.

1. Open https://vercel.com/signup and choose **Continue with GitHub**. Sign in to GitHub when asked.
2. For your confirmed personal, non-commercial tutoring use, select **Hobby** when asked for a plan. Avoid starting a paid Pro trial accidentally.
3. In Vercel choose **Add New → Project**. The equivalent label may be **New Project**.
4. Under **Import Git Repository**, locate `appendicitis-learning-hub` and choose **Import**. If it is absent, use **Adjust GitHub App Permissions** or **Configure GitHub App**, then grant access to this repository. You do not need to grant access to unrelated repositories.
5. Set the project name to `appendicitis-learning-hub` or an available variation.
6. Framework preset: **Other**. Root directory: the repository root; leave it unchanged when the files are already at the top level.
7. Build command: leave unset/disabled. Install command: leave unset/disabled. Output directory: use the project root (`.`) if an explicit output directory is requested. Do not use `dist`, `build` or `public` for this project. With the **Other** preset and no build command, Vercel can serve the root directly.
8. Add no environment variables. Choose **Deploy**.
9. A successful deployment reaches **Ready** and offers **Visit** or a production domain such as `your-project.vercel.app`. This is an example pattern, not a live URL provided by this project.
10. Open the production domain and confirm all six cards appear. Copy that HTTPS URL for sharing. If a signed-out visitor sees a login gate, check **Project Settings → Deployment Protection** and the production access configuration. Share the public production URL, not an authenticated preview URL.

GitHub file uploading is possible in an Android browser; selecting and managing several files is often easier on a desktop. No Node.js, npm, terminal or CLI is required for this route. A CLI deployment is an alternative, but it adds installation and account-authentication steps and is not our beginner workflow.

## Stage E — Check the live app

- Open the production URL in a signed-out/private browser window.
- Open all six objective sections; check approved wording and study-context notes.
- Expand a method; detailed mode should show nine explanation fields.
- Select quick revision; the concise fields and study limitations remain visible.
- Select **Read all nine fields**; the method should remain open in detailed mode.
- Search `ROC`, `paired`, `Wilson`, `Firth` and `costs` from Home. In an objective, search applies only to that objective.
- Search nonsense, then clear it; check the empty-state recovery.
- Copy a client explanation on HTTPS and paste it into a note. A restricted browser may require manual copying, which the app reports.
- Use the objective navigation, Home and Study notes buttons.
- Check portrait layout at a narrow phone width and desktop layout. Verify no page-wide horizontal scrolling or overlapping cards.
- Use Tab and Enter/Space to reach buttons and expand native details. Check visible focus outlines.

## Updating

1. Edit the relevant file in GitHub (open the file, then the pencil/edit control). Most scientific text changes belong in `content.js`.
2. Keep the structured keys and commas intact; edit the explanation strings carefully.
3. Choose **Commit changes**. With the connected Git integration, Vercel normally creates a deployment automatically.
4. Wait for **Ready**, then reload the production URL. A failed update is not a successful deployment; inspect its logs. Keep or restore the previous working revision if needed.

## Troubleshooting

| Symptom | Check |
|---|---|
| 404 at the production root | `index.html` exists in the configured root; no extra folder layer; output directory is not `dist` |
| Bare page without styling | `styles.css` name/path and upload; filenames are case-sensitive |
| Cards or controls missing | `content.js` and `script.js` are present; the browser has JavaScript enabled; content edits have no syntax error |
| npm/build errors | Framework is **Other** and no build/install command was added; this app has no npm dependencies |
| Repository missing in Vercel | GitHub app permission includes this repository and you are using the intended account |
| Site requests Vercel sign-in | Use the production domain and check its deployment-protection settings |
| Copy fails from local files | Try the HTTPS deployment; otherwise select and copy the displayed sentence manually |
| Old version appears | Confirm the latest deployment is Ready and is the production deployment, then refresh |

## Verification performed before packaging

Syntax checks and a DOM-stub logic test cover objective navigation, search, escaping, both modes, method-field completeness, copy success/fallback, missing-storage handling and notes toggling. Source checks confirm relative assets, six objectives, 23 method definitions and the absence of external script dependencies. These are **not** real-browser interaction or visual layout tests: browser QA was unavailable in the authoring environment. Complete Stage E on the live site before relying on its presentation.

## Scientific boundaries

- Histopathology is confirmed by the approved protocol; the report mapping of reactive lymphoid hyperplasia assumes no concurrent acute appendicitis.
- The combined model is exploratory, with no recovered prespecified AND/OR rule. Do not replace it with a fabricated bedside score.
- Severity grouping is conditional on pathology labels and an unresolved proforma crosswalk.
- A single reference-negative child prevents reliable paediatric AUC uncertainty and a dependable formal between-group AUC comparison.
- Confirmed paired confidence ratings lack clinician identifiers and professional-group linkage. No independence or clinician-group comparison is assumed.
- Recorded monetary amounts are in NGN, but their components, accounting basis and price year remain unverified. Incremental hsCRP cost and savings cannot be calculated.
- The app teaches methods and hypothetical examples. It does not execute the study's statistical analysis or provide clinical decisions.

## Hosting terms and costs

Vercel's Hobby plan is currently free for personal, non-commercial use and has usage limits. Commercial use requires a qualifying paid plan. Pro currently starts at USD 20/month with possible additional usage charges. A custom domain is optional; the default production domain suffices. Terms, limits and prices can change. Check the current official pages before deployment:

- https://vercel.com/pricing
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/limits/fair-use-guidelines
- https://vercel.com/docs/deployments

The architecture and plan guidance were checked on 12 October 2026. Personal tutoring was confirmed by the user. No deployment, account creation or public URL is claimed before those steps actually succeed.
