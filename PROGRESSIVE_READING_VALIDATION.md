# Readability and progressive disclosure — 14 October 2026

## Actual changes
- styles.css: restrained shared typography scale (desktop body 16px, title 25px; phone body 16px, title 22px), more compact labels and objective spacing; shared disclosure styles and selective editorial serif accent. Existing local Inter and numeric alignment retained.
- index.html: study-purpose text moved into a native expandable section without changing its wording; cache versions updated.
- statistical-glossary.js: scannable term/category list; definition, range/units, formula, interpretation and important limitation visible for selected term; supporting purpose, assumptions, examples, study classifications and source material on demand. Alphabetical browsing is expandable. Search still searches definitions. Per-term expansion remembered in memory during the session and across rerenders, with existing history retaining DOM state.
- results-browser.js: supplementary import-format notes and reference-standard teaching expandable; unrun interpretations collapsed without deleting their content/controls. Actual generated narratives and statistical evidence remain visible. Active sidebar markers synchronized with Tables & Figures/Interpretations/Reports tab state.
- reports.js: internal methodology/review area grouped separately; concise introduction and prominent title/export controls; detailed formatting guidance expandable. Existing blocking warnings remain visible outside the disclosure. Document generation logic/templates unchanged.
- tests/test_native_progressive_reading.cjs (new), tests/test_native_context_back.cjs (updated fixtures for supporting disclosures and current reviewed-export prerequisites); this record and MANIFEST.sha256.

## Verification
Passed in native Chromium:
- All five sections in Light, Dark and Colored modes at 1440×900, 390×900 and 960×600. Disclosure defaults/expansion, remembered glossary expansion, no JavaScript errors/page-level horizontal overflow. Corresponding screenshot contact sheets inspected; representative full screenshots inspected.
- 960×600 is an effective-viewport simulation of the space available with a 1440×900 screen at 150% zoom. Actual browser zoom was not changed or visually verified at 150%.
- Five-tab regression at desktop/phone: exact order, inline legend edit/save/draft/reorder, separate interpretations, report links/options, actual Word download and unchanged data.
- Publication regression at desktop/phone: nine generated synthetic output examples, all themes, single paragraphs and actual Word/HTML narrative agreement.
- Context-aware Back at both widths in all themes: table, figure, interpretation and iframe-report links; sequential history/direct fallback; selected result, dataset, zoom, sidebar, independent scroll positions, DOM and unsaved drafts restored.
- Static package check: 30 local assets, HTTP delivery, unchanged Vercel configuration/allowlist. No npm production build is defined for this static app.

### Known test limitation
The legacy tests/test_glossary.cjs mock-DOM test fails with `root.childNodes is not iterable`. The identical failure was reproduced from the prior complete project ZIP, before these changes. That mock does not implement the existing DOM-based history mechanism. It is not reported as passed. Native glossary/Back/disclosure tests above exercise the actual browser instead. Initial native fixture failures caused by closed supporting content, unsaved legend prerequisites and an obsolete report-note selector were corrected and reran successfully.

No calculations, research findings, diagnostic classification rules, data source, approved report formatting or glossary wording were changed. No real participant data or QA screenshots are included as new deliverables. Physical Android/touch, formal accessibility audit, every possible long output and document page rerendering were not performed in this task. No GitHub/Vercel deployment.

## Manual use
Extract the complete ZIP. From its project directory run `python3 -m http.server 8000`, then open http://localhost:8000. No secret or environment variable is required. Choose the theme via Appearance. Open Study background, Reference standard, Read supporting explanation, Browse alphabetically or Methodology/review when needed. Use the existing viewer for wide tables; native details support keyboard activation. Upload the contents of project to the existing static repository root, preserving its existing deployment configuration; keep patient datasets local.
