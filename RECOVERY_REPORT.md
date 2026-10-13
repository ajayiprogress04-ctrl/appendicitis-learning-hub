# Recovered usable project

New feature development has stopped. This package contains the actual files currently present in the working project, not a reconstruction.

## Ready and implemented

- Objectives, Tables & Figures and Interpretations are the three functioning primary tabs. Objective/output/interpretation links share result state and current caption numbering.
- Research variables and the aggregate-analysis workspace remain under Supporting tools. Statistical learning, search, review/progress and existing inline/study-notes glossary remain available.
- Local SAV, CSV, XLSX, XLS and compatible participant-JSON import; preview and confirmation; existing statistical calculations.
- Result interpretations, statistical notes, diagnostic denominators, available group summaries/test evidence, improved figure labels/line patterns, Chapter Four exports and selected-report reordering.
- Compact locally hosted Inter, OLED black/charcoal gradients and light/dark switching.
- Scope Reports remains removed.

## Incomplete or never created

The requested dedicated Statistical Glossary fourth tab is NOT implemented. No `glossary-data.js` or `statistical-glossary.js` file was created, and neither is referenced by index.html. Dedicated glossary category filtering, bookmarking and cross-linked comprehensive entries were only planned. The previously existing inline glossary is still present. No partially built glossary component is included.

## Files ready to use

Runtime: index.html, styles.css, content.js, variables.js, script.js, workspace.js, analysis-engine.js, data-import.js, result-catalog.js, result-exports.js, results-browser.js, global-search.js.

Bundled assets: vendor/xlsx.full.min.js, vendor/spss-reader.js, vendor/inter-latin-variable.woff2 and their licences. Configuration: vercel.json, .vercelignore, .gitignore. README, validation reports, reporting inventory, synthetic fixtures, optional analysis tools and tests are included. MANIFEST.sha256 lists the complete packaged file set and hashes.

Changes since the last delivered compact-Inter package are in index.html, styles.css, script.js, workspace.js, results-browser.js, global-search.js, result-exports.js and reporting portions of analysis-engine.js, plus README, audit runner, new tests/reporting inventory scripts and validation documents. Research content/dictionaries, import parsers and bundled runtime dependencies are retained.

## Test evidence and limitations

The full local audit passed during the three-tab implementation: imports/error handling, genuine generated SAVs, 309 learning assertions, search, all 79 result families, report placement/exports/reordering, connected navigation, local HTTP assets, 372 Python/SciPy numerical reference checks and 63 catalogue/controller assertions.

Additional checks compared all 79 unrounded calculation logs, counts and plotted observations with the pre-reporting engine; checked reporting fields and CSS/font/contrast; tested linked-title/recalculation/numbering behaviour and standalone SVG caption export. At recovery, the latest three-tab workflow, Chapter Four export and static-package checks were rerun successfully. Subsequent focused checks are distinguished from the earlier full audit; this is not a blanket claim of every possible interaction being verified.

28 synthetic SVG figure families were rendered; a representative eight-page synthetic Word export was inspected. Native desktop/mobile browser layout, physical Android interaction, Safari/Firefox, all Word report combinations and live deployment remain unverified. Chromium installation returned an invalid archive. Full clinical protocol/eligibility/threshold approval and unresolved statistical assumptions are not certified by these tests. Zlib-compressed SAV variants remain unverified.

No GitHub commit/push or Vercel deployment/live-site check was performed.

## Run and test before deployment

1. Extract the complete ZIP. Keep vendor beside index.html.
2. Open the standalone recovery preview, or run `python -m http.server 8080` inside the extracted folder and open http://localhost:8080.
3. No npm installation, build, API key or environment variable is required for the app. Browser runtime dependencies are bundled.
4. Check all three tabs and Supporting tools, theme switching and search. Import a supplied SYNTHETIC sample; confirm it, generate a supported result and use its interpretation/objective links. Test selected-report export/reordering and a phone-width viewport. Some small fixtures intentionally lack fields for other analyses.
5. For automated validation, install Node and Python dependencies using `python -m pip install -r analysis/requirements.txt`, then run `python scripts/test_project.py`. Optional typography checks require tinycss2, fonttools and brotli. No environment variables are required; optional HUB_NODE can select a different Node executable for the test runner.
6. Only after your browser checks, replace repository runtime files including vendor and configuration. Check the actual Vercel-connected branch/root/settings. Delivered Vercel configuration is static: no framework/install/build command, output directory `.`. These live settings have not been accessed here.

The ZIP includes synthetic fixtures only, no real patient dataset or credentials. Imported patient files must stay outside the public project/repository. Learning/theme preferences are stored locally; imported data/results remain in memory.
