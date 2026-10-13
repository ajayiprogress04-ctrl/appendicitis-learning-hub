# Subtle scientific background texture

## Actual changes

Runtime changes are limited to styles.css and the stylesheet cache query in index.html. An original SVG is embedded in the dark-theme CSS: stylised DNA linework, molecular/node motifs and sparse scientific data marks. Main motifs use 5–5.5% opacity; the sparse dot/grid detail is fainter (about 2.5%). These are decorative motifs, not representations of a specific molecule, dataset or anatomical diagnosis.

The texture sits behind existing black/charcoal surfaces. Results tables, charts, inputs, sidebar and interpretation panels retain their opaque backgrounds. No DOM overlay, pointer hit area, blur filter, animation or external asset request was added. The responsive rule scales/positions the pattern for narrower screens. Light-mode backgrounds are unchanged. No Vercel configuration, JavaScript, statistical logic, import routine or navigation item was changed.

The requested dedicated Statistical Glossary remains unfinished and is not included: this visual task was kept separate from that work. Existing inline glossaries, three tabs and the collapsible sidebar remain intact. No tour or task assistant was added.

## Tests passed

- Embedded SVG decoded and parsed as XML; no script, external image or animation elements.
- Texture rendered against black and visually inspected at its native 1200×750 dimensions.
- CSS syntax, standard dark text contrast, consolidated palette, focus/reduced-motion coverage and local Inter checks.
- Sidebar simulated desktop/mobile toggles, dismissal, preferences and dataset/view preservation.
- Connected three-tab workflow and export-numbering tests.
- Local HTTP runtime assets and static Vercel configuration/allowlist checks.
- Every runtime JavaScript file, import/statistical dependency and Vercel configuration byte-matched the preceding sidebar-enabled package.
- Final ZIP integrity, required assets and source-byte comparison verified.

Native desktop/mobile page rendering, actual scrolling/overflow and in-app text readability were not visually checked. SVG/DOM/CSS tests are not browser layout verification. Existing standard colour-pair contrast checks do not measure every textured pixel. A working Chromium installation is unavailable here. No compiled production build exists: this is a buildless static app; local HTTP delivery and static-package checks passed.

## Run and deployment

Extract the full ZIP, keep vendor beside index.html, run `python -m http.server 8080`, and open http://localhost:8080. Alternatively open the standalone preview. No npm build, environment variable, API key or new dependency is required. Switch to dark mode to see the texture.

Before deployment, check desktop/mobile scrolling, sidebar, focus indicators, inputs and dense results at your preferred screen width. The original static Vercel configuration is retained. No GitHub push, Vercel deployment or live-site verification was performed. Only synthetic fixtures are packaged; no patient data or credentials are included.
