# Reports Word export fix — 14 October 2026

## Reproduced cause

In the latest working project, a newly selected calculated table did not enable Export Word. The Reports defaults selected “Include reviewed legend / table notes” for every output, including outputs with no saved reviewed writing. The readiness audit then disabled the button because the selected optional legend was missing. This affected the default selection and the objective-level “Include all” action.

Before changing code, the browser reproduction selected one generated baseline table: one selected output, `disabled=true`, legend checkbox checked, and a warning stating that no current reviewed legend/table notes had been saved. Unchecking the optional legend immediately produced an actual `Appendicitis_Results_Report.docx` download with no browser errors. Thus the existing click handler, built-in DOCX generator, figure rasterisation architecture and basic download API were present; no replacement document library was needed. This diagnoses the checked local project, not an independently inspected live deployment.

## Targeted repair

- New output defaults include authored legends only when saved writing exists. Missing optional writing is not silently fabricated or requested by default. Captions, calculated evidence and selected explanatory notes remain available.
- “Include all calculated outputs and available components” follows the same readiness policy. The user can still explicitly request a legend; if it is missing or requires review, the export is blocked with the existing scientific-review message.
- Export Word is a distinct primary action with a small document marker, theme-aware contrast, keyboard focus, hover/pressed states, disabled state, loading label and `aria-busy`.
- A visible live status states whether the report is ready, no output is selected, scientific review is required, generation is underway, download has started, or export has failed.
- Unsaved results paragraphs continue to block export until reviewed/saved; typing immediately updates readiness and the reason beside the button.
- The async handler guards repeated clicks before generation begins. It captures selected outputs, uses the existing generator, rejects an empty returned file, attaches the temporary download anchor to the document, initiates the `.docx` download, removes the anchor and releases the object URL after the existing delay.
- Success/failure restores the action and gives explicit feedback. An injected generation failure was tested; retry worked. Export status updates do not remount the report preview or editable controls.

No new application dependency, analysis, statistical threshold, diagnosis coding, source dataset, output result, scientific-content generator, document layout template, routing or deployment configuration was changed. Byte comparison against the preceding complete project verified that only the three runtime files below changed.

## Files changed

| File | Change |
| --- | --- |
| `reports.js` | Available-writing defaults; consistent selection settings; accessible readiness/loading/failure feedback; duplicate guard; attached-anchor download; retained report DOM |
| `styles.css` | Scoped primary Word action styles using existing theme tokens; readable dark/colored button text; focus/loading/disabled states |
| `index.html` | Cache versions for the two changed assets |
| `tests/test_native_word_export.cjs` | New actual browser-download regression covering the complete workflow and failure recovery |
| `WORD_EXPORT_FIX_VALIDATION.md`, `README.md`, `MANIFEST.sha256` | Delivery instructions, evidence and refreshed checksums |

## Tests actually completed

| Check | Result |
| --- | --- |
| Pre-fix browser reproduction of disabled button with a calculated selected output | Confirmed missing optional legend blocked readiness; excluding it produced a real download |
| Actual Export Word workflow | PASS at 1440 × 900 and 390 × 900 in Light, OLED Dark and Colored themes |
| Empty selection | PASS: disabled action with clear selection/generation instructions; no empty report created |
| Default ready state without authored legend | PASS: calculated table/figure selection exports without manually unchecking a nonexistent legend |
| Explicit request for an absent legend | PASS: review blocker and remedy remain visible; no invented writing |
| Saved legend | PASS: saved through existing output editor and included in the actual downloaded report |
| Changed selections and repeat export | PASS: mixed baseline-table/ROC-figure report, then diagnostic-table-only report; excluded content absent from second document |
| Keyboard/focus | PASS: visible keyboard focus and Enter initiated the actual first download in each viewport/theme |
| Unsaved prose | PASS: immediate export block/reason; reviewing/saving restored readiness |
| Async loading and repeated-click guard | PASS: loading/disabled state; repeated dispatched clicks resulted in one generator call |
| Injected generation failure and retry | PASS: useful error, restored button, same preview DOM and data, subsequent actual download |
| Console/runtime and document overflow | PASS: no page errors or horizontal document overflow in the six configurations |
| Saved downloaded files | PASS: 12 actual downloads saved for inspection; ZIP CRC, XML/relationships, selected content, genuine editable Word tables, figure PNG/legend inclusion/exclusion and Times New Roman styles checked |
| Word visual inspection | PASS: actual mixed export (three pages) and table-only export (two pages), reopened/rendered and all five pages visually inspected; no cropped figure/axis/legend or clipped table values |
| Interface screenshots | PASS: six desktop/mobile/theme screenshots visually inspected, with accessible primary-action contrast |
| Existing five-tab workflow | PASS: `test_native_five_tabs.cjs`, inline legend editing/saving/drafts/reorder, interpretation links, component inclusion/exclusion, actual Word download, themes and unchanged data |
| Existing context-aware Back | PASS: `test_native_context_back.cjs`, both viewports/all themes, table/figure/Interpretations/iframe report links, retained selections/data/drafts/scroll/layout |
| Static application checks | PASS: `test_static_package.py`, 31 runtime assets, HTTP/configuration/dependency order/deployment allowlist |
| JavaScript syntax | PASS: `reports.js` |
| Production npm build | Not applicable: existing static HTML/JavaScript app; no npm production build step |
| GitHub/Vercel deployment | Not performed; manual workflow preserved |

The tests use synthetic participant records, not the actual study cohort. ROC and confidence-figure downloads were covered by the new test and existing navigation regression. Not every possible output combination or all historic stage-specific tests were rerun. Browser testing used Chromium desktop/mobile viewports; physical Android, Safari and Firefox were not tested. Files were inspected with OOXML parsing and a Word-compatible rendering workflow, not Microsoft Word's native application. Existing template pagination was retained: long statistical notes/prose can continue onto subsequent pages.

## Use and manual implementation

1. Keep your current project backup. From this ZIP's `project` folder, replace `reports.js`, `styles.css` and `index.html` together in the existing app; or use the complete updated project folder.
2. Generate the required outputs in Tables & Figures, then open Reports.
3. Select the desired calculated outputs. Saved legends are available for independent inclusion. If a requested legend has not been saved, save it beside the output or exclude that optional component.
4. Review/save edited results prose. When the status says “Ready to export”, click **Export Word** (or focus it and press Enter).
5. Look for `Appendicitis_Results_Report.docx` in your browser's downloads. Download destination and save prompts are controlled by the browser.
6. Reopen the downloaded document and review the selected scientific content before submission. This fix preserves the existing report template.

To test the extracted static app locally:

```bash
cd project
python3 -m http.server 8000
```

Open `http://localhost:8000`. On Windows, `py -m http.server 8000` is an alternative. No application environment variables, keys or extra Word-generation packages are required. Uploaded patient data remain local to the browser and are not included in this package.

Static check:

```bash
python3 tests/test_static_package.py
```

The new native test additionally requires Playwright Core and a Chromium binary; its `CODEX_PRIMARY_RUNTIME_NODE_MODULES` and `HUB_CHROMIUM_PATH` settings identify those testing dependencies, not production-app requirements.

Upload these source changes through your existing manual GitHub/Vercel process. A local successful test does not update the live deployment. After your deployment, refresh the app so the new asset versions load and repeat a small report export before using a complete report.
