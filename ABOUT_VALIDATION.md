# About the Developer update

Progress Ajayi approved the profile wording, dedication and supplied photograph before implementation. The About page uses only that approved information. The PhD is explicitly described as in progress. The supplied GitHub URL is a project repository and is labelled accordingly; no separate profile or duplicate portfolio link has been invented.

## Use

Open the navigation using the menu toggle, then choose **About the Developer**. The footer credit also opens the page. Use **Return to research** or Escape to return; research tabs and navigation remain available. The page uses the selected Light, Dark or Colored theme.

Extract the complete project ZIP, run `python -m http.server 8080` from its folder, and visit http://localhost:8080. There are no new runtime dependencies or environment variables. The approved contact details and portrait will be visible to users if you publish the application.

## Changed files

- index.html — About assets, sidebar entry, dedicated section and footer credit.
- about.js — approved profile and reversible navigation that retains mounted research views, selections, scroll state and edits; glossary return is supported.
- about.css — scoped compact responsive profile styling using existing theme tokens, accessible link focus and clearance below the fixed menu toggle.
- assets/progress-ajayi.jpg — optimised version of the supplied photograph, 640 × 640 pixels, 65,372 bytes; original aspect ratio preserved, no AI substitution or facial modification. The original upload is unchanged.
- sidebar.js — adds the About entry to the existing mobile drawer close-on-navigation behaviour.
- .vercelignore — adds only the new runtime assets to the deployment allowlist; vercel.json is unchanged.
- scripts/build_preview.py — includes the local portrait when creating a standalone preview.
- tests/test_native_about.cjs — native browser checks for the addition.
- tests/test_static_package.py — recognises the two additional runtime references.
- README.md and this file — use and verification notes.

## Checks actually passed

- Native Chromium at desktop 1440 × 900 and mobile viewport 390 × 900, in all three themes.
- About entry and footer navigation; actual portrait decoding and dimensions.
- Return from Objectives, Tables & Figures, Legends, Interpretations, Reports, Statistical Glossary, aggregate workspace and variable explorer; active navigation restored.
- Loaded synthetic dataset, calculated results and selection retained; an unsaved title input retains its original DOM and value during an About visit.
- Direct research navigation from About, sidebar access, mobile close behaviour, Escape return, no horizontal overflow and no menu-toggle overlap with the About heading.
- Exact supplied LinkedIn, project GitHub and mailto destinations; external HTTP links use target=_blank with rel=noopener noreferrer.
- All six desktop/mobile theme layouts visually inspected for portrait proportions, wrapping and readable surfaces.
- Native Reports regression at desktop/mobile: selection, ordering, preview, actual DOCX download, sidebar, theme switching and data/title retention.
- Existing sidebar, theme and glossary regression tests; JavaScript syntax and local HTTP/deployment asset checks.
- Standalone preview builder completed and includes the portrait as a data URI.
- Complete ZIP integrity checked and packaged files byte-matched to the current project.

This is a static app, so there is no npm production compilation step. The full Python statistical audit was not rerun for this profile addition. Calculations, imports, reporting code, existing styles/themes and vercel.json were byte-compared against the previously delivered Word Reports project and are unchanged.

External accounts were not visited or authenticated; mail-client launch was not tested. Mobile testing used a Chromium viewport, not a physical Android device. No GitHub push, Vercel deployment or external publication occurred.
