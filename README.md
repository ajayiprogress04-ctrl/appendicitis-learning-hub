# Appendicitis Research — Statistical Learning Hub

Complete static application, consolidated 16 October 2026. This package is the
current source of truth. It supersedes historical five-tab layouts, exploratory
letter categories, duplicate import panels and earlier reporting instructions.

## Run locally

Extract this folder, open a terminal inside it, then run:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. Use HTTP/HTTPS rather than opening index.html as a
file: worker calculations and browser imports require a served origin.
No npm install, build process, database or backend is needed to run the app.
Use a current Chrome, Edge, Firefox or Safari. HTTPS/localhost is required by
some sharing and authentication APIs.

## Upload once to GitHub / deploy to Vercel

Upload the CONTENTS of this folder to your repository, retaining vendor/,
assets/, scientific-textures/ and all root JavaScript/CSS files. Select that
repository in Vercel, Framework: Other, project root: the folder containing
index.html, no build/install command, output directory: `.` (or leave unset
for a static root). vercel.json supplies static cache headers; .vercelignore
excludes development/private files without excluding new runtime modules.
Connect your existing production domain rather than creating conflicting links.
This delivery is source code, not a verified deployment.

## Start using the app

1. Import and confirm your private dataset from the single landing-page importer.
2. Open **Objectives**. Choose one of Objectives 1–8 or All Objectives; review
   applicable methods, Generate Outputs and inspect tables/figures.
3. Open **Reports**. Select relevant outputs, inspect results, compile the Word
   document preview and Export Report. The download uses the previewed bytes.
4. Open **Papers**. Choose an individual objective, edit its proposed title,
   review sub-objectives/methods/references and export an independent paper plan.

See IMPLEMENTATION.md for the consolidated requirements and architecture,
DEPENDENCIES.md for bundled libraries and optional checks, GOOGLE_DRIVE_SETUP.md
for account configuration and VERIFICATION.md for the checks actually run.

## Approved reports and glossary

The nine approved Word templates are integrated with the live-result match
guard. Reports also offers Demographic Characteristics separately. Objective
dropdowns replace the redundant search inputs; detailed result inspection is
in Objectives, and Reports keeps its actual Word preview and export. Click
underlined terms or select unfamiliar text to Look up in Glossary, then use Back.

## Private study data

The original participant dataset is NOT embedded in this public-ready package.
Approved templates contain aggregate report findings, not participant rows.
The participant dataset is not deleted or modified: import your original SAV locally or through the
existing authorised Drive workflow. Variables, labels, declared missing values
and actual analyses remain in the existing import/calculation pipeline. Do not
commit participant files, result exports, access tokens or passwords to GitHub.
The sole bundled SAV is explicitly synthetic and used only for developer tests.
