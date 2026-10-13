# Collapsible navigation update

The actual recovered app has a left-hand sidebar and three workflow links. These were preserved. No dedicated Statistical Glossary tab or guided tour was added. The broader attached tour instructions were not implemented because this task explicitly requests an isolated sidebar modification.

## Changed application files

- index.html: accessible fixed menu toggle, sidebar ID/close button, dismissible mobile backdrop, sidebar.js load and stylesheet cache update.
- styles.css: slide transform/visibility, desktop workspace expansion, mobile drawer/backdrop, adaptive header offset, tap targets and reduced-motion behaviour. Existing typography/theme/content styles remain.
- sidebar.js (new): open/close, focus handling, Escape/mobile Tab cycling, close after mobile navigation, responsive mode changes and lightweight open/closed preferences.
- .vercelignore: allows the new runtime script.

Supporting changes: tests/test_sidebar.cjs (new), tests/test_static_package.py (asset count), scripts/test_project.py (adds sidebar test), README.md, this report and refreshed MANIFEST.sha256. Existing calculation/import/search/reporting controllers and dictionaries are byte-identical to the recovered baseline.

## Behaviour

Desktop starts open unless its saved preference is closed. Mobile starts closed unless the user previously saved it open. Preferences are separate for desktop/mobile; blocked storage falls back safely. Only UI state is stored. The script does not read, reset or store research data. Sidebar toggling does not rerender content, change tabs or reload the page.

The fixed menu button remains reachable after scrolling. Closed navigation is inert/hidden from assistive technology. Mobile open state has dialog semantics and a focus cycle that includes the menu toggle; Close, backdrop, Escape and navigation provide exits. Desktop uses navigation semantics without a focus trap. Reduced-motion CSS disables transitions.

## Tests actually passed

- Syntax check for new JavaScript.
- Simulated desktop/mobile modes: eight repeated toggles, expanded/inert attributes, backdrop, close button, Escape, focus cycle, header offset, preference saving/defaults and denied storage.
- Loaded synthetic dataset and current rendered result/view unchanged through toggles; mobile navigation still opens the destination and closes the drawer.
- Existing three-tab linked workflow, Chapter Four reporting and CSV/XLSX/XLS/SAV preview/activation/worker-result/removal checks passed.
- Local HTTP entry point/runtime assets and static Vercel configuration/deployment allowlist passed.
- Byte comparison with the preserved recovered ZIP confirmed unrelated runtime scripts and statistical/import dependencies unchanged.
- ZIP integrity/source-byte comparison and required asset inclusion checked before delivery.

These are DOM/worker simulation and CSS/source checks, not native-browser rendering. Actual desktop/mobile overlap, horizontal overflow, touch behaviour and physical Android interaction remain unverified. A working Chromium installation is unavailable here. No live site was checked.

## Run and deploy

Extract the entire ZIP and keep vendor beside index.html, then run `python -m http.server 8080` and open http://localhost:8080, or open the standalone preview. No npm build, API key or environment variable is required. The buildless static package and HTTP assets were checked; no compiled production build exists to run.

For automated tests, install the existing Python requirements and Node, then run `python scripts/test_project.py`; the isolated test is `node tests/test_sidebar.cjs`.

Before deployment, check repeated toggles on desktop/phone width, scrolling, keyboard navigation, dataset preview and charts/tables. Update the existing runtime files including sidebar.js and configuration. Vercel uses no framework/install/build commands and output directory `.`. Actual connected branch/settings remain unverified.

No GitHub push, Vercel deployment or live deployment verification was performed. Package fixtures are synthetic; no patient dataset or credentials are included. Sidebar_Prechange_Baseline.zip preserves the recovered prechange package locally.
