# Colored Mode — third appearance option

## Implemented and how to select

Use the header's **Appearance** selector and choose **Light Mode**, **Dark Mode** or **Colored Mode**. The existing preference key, appendicitis-hub-theme, now accepts light, dark or colored; existing light/dark choices still restore correctly. Storage denial and invalid saved values are handled safely.

Colored Mode uses the existing dark-contrast component base plus a separate colored-theme modifier, shared palette tokens and its own scientific artwork. It is a distinct third selectable theme; the original light and OLED dark styles and artwork remain unchanged.

The colored design combines violet/purple, cyan/teal, magenta and restrained warm highlights, with static ambient radial gradients, varied panel washes and luminous action gradients. Six original gradient SVG variants reuse the existing scientific geometry: DNA, molecular networks, cells, intestine/appendix, data grids/matrices and waveforms. The waveform variant adds an abstract ECG-inspired trace. These are decorative illustrations, not patient recordings, real molecular compounds or anatomical reference diagrams.

The same theme applies to dashboard/workflow, objective learning, outputs, Legends, Interpretations, Glossary, import/inspection, variable exploration, aggregate analysis, selected-publication/report-order controls, navigation and supporting controls. Dense tables, charts, definitions and editors retain opaque surfaces. Existing report-builder controls receive editorial gradients; exported academic reports retain their existing print layout and report-generation logic.

Categorical aggregate-chart colours with poor contrast are lightened through CSS, consistently in both plot strokes/fills and corresponding HTML legends. Series labels/order, line patterns, numeric values, axes and calculations are retained. No gradient or new colour threshold encodes statistical significance. Raw SVG/export data are unchanged.

Theme switching updates style classes and preference only. It does not reconstruct research sections, reset selected results, alter datasets or overwrite drafts. Preferences store only the appearance string; research data is not persisted by the theme controller.

## Exact changed files

Runtime / packaging:
- `index.html`: three-option Appearance selector, new stylesheet and workspace cache reference.
- `workspace.js`: only the theme-controller/preference block changed; aggregate analysis and navigation functions are unchanged.
- `colored-mode.css`: new tokens, gradients, scientific-asset selection, component/reading/interactive/chart styling and mobile/reduced-motion rules.
- `scientific-textures/dna-colored.svg`, `molecules-colored.svg`, `cells-colored.svg`, `anatomy-colored.svg`, `data-colored.svg`, `waveforms-colored.svg`: six new original gradient variants.
- `.vercelignore`: allow the new runtime stylesheet/SVGs.

Documentation/tests:
- `README.md` and `scientific-textures/README.md`: appearance instructions and updated original-art inventory.
- `tests/test_theme_toggle.cjs`: three-theme selection/preference/fallback checks.
- `tests/test_static_package.py`: 21 entry-point assets.
- `tests/test_native_textures.cjs`: use the new selector for existing light/dark tests.
- `tests/test_scientific_assets.py`: continue checking the original 12 light/dark assets separately.
- `scripts/test_project.py`: include the three-theme preference test in the full audit.
- `tests/test_colored_mode.py`: new CSS/SVG/asset/contrast checks.
- `tests/test_native_colored_mode.cjs`: new native tests across all three themes and state/persistence checks.
- `COLORED_MODE_VALIDATION.md` and `MANIFEST.sha256`: report and package checksums.

All original light/dark CSS and SVG assets, statistics, dataset import, reporting/export, glossary, legends, results, search, sidebar and other research controllers remain byte-identical. The workspace source was compared outside its theme block and is also byte-identical. `vercel.json` is unchanged. Synthetic SAV files regenerated during the audit were restored to baseline bytes before packaging.

## Actual successful tests

Headless Chromium 153 at **1440×1000** and **390×844**:
- All three choices selectable; correct asset variants and theme colours across eight actual views in every theme.
- Native switching preserves preview DOM identity, dataset identity, selected output, completed-result content, unsaved legend text and right-panel scroll offset.
- Preference survives refresh; Colored Mode restores as selected.
- Sidebar toggles and glossary-definition return preserve the selected Legends view and unsaved text.
- Keyboard focus remains visible; reduced-motion mode has no background animation.
- Opaque result surfaces and theme-appropriate glossary controls verified through computed styles.
- Existing report-order controls have the intended editorial gradient.
- Synthetic aggregate diagnostic charts loaded; plot stroke and corresponding HTML legend both use the same contrast-adapted series colour.
- No JavaScript page errors, asset 404s or page-level horizontal overflow.

Colored screenshots of all eight views were captured for internal review; full-size desktop dashboard/output and mobile dashboard/glossary views were visually inspected. Tests used synthetic data only. No screenshots or patient-level fixture files were added to the deliverable.

Retained native light/dark section tests, independent wheel-scroll/reordering tests and Legends/Interpretations editing/linking/review tests passed at desktop/mobile widths.

Additional checks passed:
- Full `python scripts/test_project.py` audit, including SPSS/Excel/CSV import/error handling, learning/search, results/reporting/reordering, glossary/legends/sidebar and three-theme preferences.
- 372 synthetic numerical/reference checks and 63 catalogue/controller assertions.
- Colored CSS and six SVGs parse correctly; assets are local, original, included and deployment-allowlisted, with no scripts, raster dependencies or animation.
- Original OLED/compact-font/scientific-asset checks passed.
- Representative text/action/placeholder contrast: primary text 16.41:1, secondary 9.02:1, action/hover stops at least 4.80:1 and placeholder 8.84:1.
- Local static delivery, dependency ordering and 21 entry-point asset checks passed.
- Complete ZIP verified for corruption and byte-for-byte agreement; standalone preview embeds all 18 scientific SVGs plus local scripts/styles/font.

No test remains failing. Physical Android hardware, other browser engines, exhaustive pixel-level contrast and device-specific performance profiling were not tested. Static gradients and vector artwork avoid animation/blur overhead, but this is not a hardware performance certification. No requested appearance feature is intentionally incomplete.

## Install, run and production build

Extract the complete ZIP and keep scientific-textures/ and vendor/. Run:

```sh
python -m http.server 8080
```

Open http://localhost:8080, then select Colored Mode from Appearance. The standalone preview can be opened offline. No new runtime dependency, API key or environment variable is needed.

The existing app is buildless: installation/build commands remain empty and output directory is `.`. There is no compiled production-build command. Static delivery/configuration checks passed. No GitHub push or Vercel deployment was performed.

Optional development checks require Node.js/Python dependencies documented in the existing project. Native checks additionally need playwright-core and a compatible Chromium executable in HUB_CHROMIUM_PATH. `node tests/test_native_colored_mode.cjs` starts its own local server. Set HUB_AGGREGATE_FIXTURE to a synthetic aggregate JSON to run the optional aggregate plot/legend check. None of these development settings is needed to use the app.
