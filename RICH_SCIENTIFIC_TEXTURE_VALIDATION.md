# Rich scientific textures in light and dark modes

## Implemented

The previous single dark-only embedded scene was removed. The app now uses one shared theme-aware stylesheet and six complementary original SVG families, each in a light and dark colour treatment:
- Large DNA helices.
- Molecular bonds, hexagonal structures and connected nodes.
- Irregular cellular membranes, nuclei and organelle marks.
- Decorative schematic intestine and appendix linework.
- Scientific grids, scatter points and computational matrices.
- Abstract biomedical waveforms.

The body distributes different large motifs across its full height. Welcome, objectives/workflow, outputs, legends, interpretations, glossary, variables, import and aggregate analysis use contextual compositions. Navigation/header areas also receive adapted artwork. Motif placement and size change at the existing mobile breakpoint; illustrative layers do not use repeating image tiles.

Light mode uses warm-grey artwork on an off-white base. Dark mode retains a pure-black base with charcoal/grey artwork and restrained ambient gradients. Six CSS image variables switch together with the existing theme class. No theme or navigation JavaScript was changed.

The main DNA layer is 480×960 CSS px on desktop and 300×600 on mobile, with other body illustrations approximately 920–1300 px across on desktop. This replaces the earlier small motifs within one 1200×750 scene. Multiple scales and per-section placements provide a substantially larger, more varied appearance.

Dense tables, chart containers, output cards, interpretation text, glossary definitions and writing editors have opaque theme-appropriate surfaces. Background textures have no DOM overlay or hit area; they cannot intercept clicks or create layout dimensions. Static SVGs/gradients use no animation, blur filters or extra runtime JavaScript.

The original SVGs total 91,984 source bytes across 12 files. They contain no external image references, scripts or patient recordings. The standalone preview embeds them for offline use.

## Files changed

Runtime / deployment packaging:
- `scientific-backgrounds.css` — new central texture system, theme tokens, contextual placements and protected reading surfaces.
- `scientific-textures/*.svg` — 12 original assets: dna, molecules, cells, anatomy, data and waveforms, each with light/dark variants.
- `styles.css` — remove the superseded embedded dark-only texture and obsolete texture sizing; replace the old light body gradient with the existing base background.
- `index.html` — load the new stylesheet and update the existing stylesheet cache reference.
- `.vercelignore` — allow the new stylesheet and SVG assets through the existing runtime allowlist.

Documentation / tooling:
- `README.md` — latest visual update and run instructions.
- `scientific-textures/README.md` — provenance and decorative scope.
- `scripts/build_preview.py` — embed local SVG assets in the standalone preview.
- `tests/test_static_package.py` — 20 entry-point assets.
- `tests/test_scientific_assets.py` — new asset, theme, CSS syntax and deployment checks.
- `tests/test_native_textures.cjs` — new native theme/section/mobile tests.
- `RICH_SCIENTIFIC_TEXTURE_VALIDATION.md` — this report.
- `MANIFEST.sha256` — refreshed package checksums.

All existing application JavaScript, including statistical calculations, imports, report exports, legends, glossary, search, sidebar and workflow controllers, remains byte-identical to the previous completed project. `vercel.json` and bundled fonts/libraries are unchanged. Synthetic SAV fixtures regenerated during the audit were restored to baseline bytes before packaging.

## Tests actually passed

Native headless Chromium 153 at **1440×1000** and **390×844**:
- Eight actual views inspected in both themes: dashboard, objective learning, tables/figures, legends, interpretations, glossary, variables and aggregate analysis.
- Correct light/dark SVG variants in each view, import area, sidebar and header; all six motif families are present in the body composition.
- Opaque result previews and glossary reading surfaces verified through computed styles.
- Working glossary search/entry opening, repeated theme switching and sidebar toggling.
- No JavaScript page errors, failed asset responses or page-level horizontal overflow.
- Reduced-motion emulation confirmed no background animation.
- Rendered screenshots of all eight views in both themes were captured for internal visual review; desktop light/dark review grids and key full-size desktop/mobile screenshots were inspected.

Retained native regression tests at desktop/mobile widths passed:
- Actual wheel scrolling is independent between catalogue and selected-output panels.
- Reordering retains scroll offsets, selection and title drafts.
- Long tables, lengthy text and a tall SVG fixture remain scrollable.
- Legends/interpretations editing and saving, source-change review warnings, related links, sidebar access and glossary return preserve existing state.

Additional checks passed:
- All 12 SVGs parsed, local references exist, light/dark colours differ appropriately, no script/raster/external/animation content, deployment allowlist complete, and artwork source under 100 kB.
- Both stylesheets parse successfully; existing OLED contrast and compact-font checks pass.
- Complete `python scripts/test_project.py` regression audit: SPSS/Excel/CSV import/error paths, learning/search, results/reporting/reordering, glossary/legends/sidebar, 372 synthetic numerical reference checks and 63 catalogue/controller assertions.
- Local HTTP entry point and all 20 entry-point assets return successfully; missing files correctly return 404.
- Complete ZIP checked for corruption and byte-for-byte agreement with the actual updated files; standalone preview verified to embed local SVGs, scripts, styles and font.

No test remains failing. The initial texture test attempt tried to click a supporting-tool button without first opening its disclosure; the test was corrected and rerun successfully. No application navigation change was needed.

## Verification limits

Mobile testing used a narrow Chromium viewport, not physical Android hardware. Other browser engines, device-specific GPU performance and exhaustive pixel-by-pixel contrast were not tested. Standard text/background contrast checks and visual review support readability but do not constitute a full accessibility certification. Decorative anatomy/molecules are not scientifically validated diagrams.

No new research feature, result, analysis or guided interaction was added. Earlier project limitations (including writing saves lasting for the current visit) remain unchanged.

## Run / production build

Extract the ZIP, keep the scientific-textures/ and vendor/ folders, then run:

```sh
python -m http.server 8080
```

Open http://localhost:8080, or open the supplied standalone preview. No new runtime dependency or environment variable is required.

This existing app is buildless. `vercel.json` retains empty installation/build commands and output directory `.`; there is no compilation build to run. Static delivery/configuration checks passed. No GitHub push or Vercel deployment was performed.

Optional native checks require development-only playwright-core plus a compatible Chromium executable in HUB_CHROMIUM_PATH. Run `node tests/test_native_textures.cjs`, `node tests/test_native_scroll.cjs` and `node tests/test_native_legends.cjs`. SVG/CSS checks require tinycss2. Runtime users need none of those development dependencies.
