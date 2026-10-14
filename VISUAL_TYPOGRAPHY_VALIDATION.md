# Biomedical visual and typography refinement — 14 October 2026

## Changed files
- styles.css: shared section accents, refined heading weights/spacing, objective-card hierarchy, active navigation, glossary definition grid, formula font fallback, table/reading hierarchy and focus states. Existing desktop/phone sizes retained.
- result-viewer.css: content-based table columns and normal word wrapping, including inline glossary buttons. Dense tables may require horizontal scrolling rather than unreadable scaling.
- index.html: stylesheet cache versions only.
- tests/test_native_visual_hierarchy.cjs: new generated-table/glossary visual regression exercise.
- tests/test_native_statistical_background.cjs: screenshot timing increased to allow theme colour transitions to finish.
- This record and refreshed MANIFEST.sha256.

## Design
Locally hosted variable Inter remains the single downloaded font. Headings use 600–650 weight, body 400, controls 500, and numerical tables retain tabular numerals. Formula/code styling uses the system monospace fallback; occasional existing quotations use a serif italic fallback. No external font request, extra font dependency or rewritten scientific prose. Teal, muted blue, violet and amber accents identify sections only; they do not encode statistical significance. OLED backgrounds and the existing faint statistical artwork remain intact. Shared tokens adapt the same components to Light, Dark and Colored themes. Existing five primary tabs and behavior remain unchanged.

## Checks actually completed
- Native Chromium 1440×900 and 390×900: all five sections and three themes, page scrolling, static reduced-motion behavior and no page-level horizontal overflow. All-section screenshots inspected in contact sheets; representative full screenshots inspected.
- Generated diagnostic performance table and Sensitivity definition in all three themes at both widths; glossary return exercised. Final dense table screenshots inspected after correcting split words. Wide mobile tables remain horizontally scrollable inside the results viewer.
- Existing five-tab regression passed: exact tab order, inline legend editing/saving/draft/reordering, separate interpretations, report links, independent inclusion/exclusion, actual download, all three themes and preserved data at both widths.
- Existing publication regression passed on nine synthetic calculated output examples: tables/figures/Interpretations, themes, single paragraphs and actual Word/HTML narrative agreement at both widths. Word formatting logic was not modified and document pages were not rerendered in this visual task.
- Static package checks passed: 30 runtime assets, local HTTP delivery, unchanged static Vercel setup and deployment allowlist. No npm build is defined for this static project.

An early new visual-test timeout came from opening a glossary entry as a direct landing-page visit, then treating one Back action as return to the result. The fixture was corrected to supply its actual originating context and reran successfully. Screenshot inspection caught a light filter wash leaking into Colored Mode; active-theme token resolution was corrected before delivery.

Not performed: physical Android/touch testing, formal WCAG audit, exhaustive inspection of every possible generated output, live deployment, GitHub changes. No statistical calculations, datasets or report templates were changed. Browser screenshots are internal QA and excluded from the project package.

## Run
Extract the ZIP, open a terminal in project, run `python3 -m http.server 8000`, and open http://localhost:8000. No environment variables or secrets are required. Use Appearance to switch themes. Review wide tables using the existing viewer and scroll controls.
