# Statistical background refinement — 14 October 2026

Changed runtime files: scientific-backgrounds.css, colored-mode.css, index.html and three new scientific-textures/statistics-{light,dark,colored}.svg assets. Added tests/test_native_statistical_background.cjs and this validation record; refreshed MANIFEST.sha256.

Replaced repeated DNA, molecular and cellular backgrounds with a single fixed, noninteractive original SVG composition: distribution curve, scatter/regression, histogram, box plot, interval markers and restrained schematic appendix linework. These are decorative illustrations, not study results or clinically detailed anatomy. Light/dark/colored opacities are 5.5%/6%/6.5%. Dense output/editor surfaces remain opaque. No animation or dependency was added. Old unused SVGs remain in the complete project to avoid disturbing legacy tooling; runtime backgrounds no longer reference them.

Actual checks passed:
- Native Chromium at 1440×900 and 390×900: five sections, repeated three-theme switching, fixed/pointer-transparent background, 3–8% opacity, no horizontal overflow or JavaScript errors, static reduced-motion fallback.
- Screenshots of all five sections in each theme/viewport inspected as contact sheets; six full screenshots additionally inspected. Generated ROC view inspected on desktop. Page scrolling and programmatic nested-scroll continuity checked; this does not substitute for physical Android touch/performance testing.
- Existing native publication regression: nine generated table/figure outputs, Interpretations, Reports, three themes, actual Word/HTML narrative agreement, both viewports passed.
- Static package check: all 30 entry-point assets served, Vercel configuration and deployment allowlist intact. This vanilla static app has no npm production build; no live deployment performed.

No research calculations, source datasets, navigation behavior or Word formatting changed by this visual update. Prior report-cleaning work is preserved in this complete project. Browser zoom, device performance profiling and physical Android testing were not performed. The texture is static and uses one compositor layer; no claim of measured frame-rate improvement is made.

Run locally: extract the ZIP, open a terminal in its project directory, run `python3 -m http.server 8000`, then open http://localhost:8000. Switch Appearance between Light, Dark and Colored. Import only local data if testing real research records.
