# Context-aware educational Back navigation — 14 October 2026

## Behaviour

Select a linked term in Tables & Figures, a legend/note, Interpretations or Reports. The glossary displays **← Back to Tables & Figures**, **← Back to Interpretations**, **← Back to report**, or another appropriate origin label. Back restores the originating mounted view rather than reconstructing it or generating analyses again.

Following a related glossary term creates one history frame. Back retraces that sequence before returning to the source. Glossary frames retain their actual DOM, filters, scroll position and expanded/edited educational controls. Re-rendering or reopening the same selected term does not add a visit. Direct entry into a definition through the public open API starts with a glossary-landing fallback; selecting a definition from the glossary landing returns there first. Deliberately changing main sections clears the educational history. History is in memory only; no research data is added to storage and no router dependency is introduced. Ordinary external links retain their existing behaviour.

The origin keeps its selected output identifier, results and list scroll offsets, inner fit/zoom viewport offsets, page position, resized/collapsed list, global navigation-sidebar state and unsaved inputs. Focus workspace is temporarily suspended so the glossary can scroll normally and is reinstated on return. Keyboard focus returns to the original term control. The visible arrow is decorative; each Back button has a contextual accessible name and retains the existing theme styling.

## Reports preview

The same generated report preview receives glossary term buttons after its local iframe loads. Its sandbox allows same-origin access for this parent-owned link bridge but **does not allow scripts**. No scripts are added to the preview. Back restores the exact iframe and its internal scroll position, together with the report draft and outer preview scroll. Generated HTML/Word files remain free of these interactive teaching controls: the original export generator is unchanged.

Inline linking is restrained to one occurrence of a term per text block, at most three glossary links in a block. Charts, inputs, code, existing controls, and explicitly excluded content remain unannotated; terminology in legends, table headings and explanatory notes can be opened without rewriting their scientific content.

## Files changed

- statistical-glossary.js: educational history, contextual arrow button, mounted DOM snapshots, scroll/focus restore, direct-entry fallback, safe report-preview binding and restrained inline annotation.
- result-viewer.js: small suspend/resume hooks; glossary links no longer discard focused viewing.
- sidebar.js: existing layout controller exposed for restoring its open/closed state without rewriting stored preferences.
- reports.js: preview binding and shared preview creation; exported report content/generation is unchanged.
- glossary.css: scoped Back-button layout using existing styles.
- index.html: cache versions for the modified local runtime files.
- tests/test_native_context_back.cjs: complete origin/Back sequences.
- tests/test_native_parameters.cjs: its exhaustive entry-opening sweep explicitly exits after the sweep instead of expecting one Back to skip all visits.
- tests/test_native_reference.cjs: returns through three actual glossary visits in sequence.
- README.md, this report and regenerated MANIFEST.sha256: instructions and package audit.

Statistical engine, dictionary, imports, reference teaching content, parameter definitions, legends logic, core themes and vercel.json were byte-compared with the previous verified project ZIP and are unchanged. Exactly the five main tabs are retained.

## Actual tests passed

New Chromium sequence test at **1440×900 and 390×900, each in Light, Dark and Colored mode**:

1. Loaded synthetic records and generated an actual diagnostic-performance table. Opened Sensitivity from its notes after scrolling the right panel, retaining list and inner viewport offsets. Back restored the same output, original DOM, all recorded scroll positions, manually adjusted zoom, focus mode and an unsaved legend draft. Desktop divider keyboard resizing was preserved.
2. Followed Sensitivity → Reference standard → Specificity and retraced the actual sequence. Reference-standard educational selection/expanded details and previous glossary scrolling were retained. Re-rendering and reopening the same term added no duplicate history frame.
3. Opened a reference definition from an actual ROC figure, with the left list collapsed. Back restored the figure, selection, layout and recorded viewport/panel offsets.
4. Opened Specificity from Interpretations. Back restored page position and the expanded hypothetical-classification controls, including their changed input.
5. Opened Sensitivity from a genuinely scrolled report iframe note. Back restored that same iframe, its internal scroll, outer report preview and page positions, plus unsaved report prose. Sandbox scripts remained disabled.
6. Tested glossary landing/search → definition → Back, direct programmatic definition fallback, deliberate main-section changes and stale-history clearing. No runtime errors or horizontal page overflow were observed.

Additional passing checks:

- Existing five-tab desktop/mobile regression: navigation, inline legend save/draft/reorder, separate Interpretations, report links, independent Word inclusion/exclusion, actual Word download, all three themes and unchanged data.
- Histopathology teaching desktop/mobile regression: all four cells, hypothetical outcomes, missing reference, formulas, glossary navigation and actual Word/HTML reference notes.
- All **161** parameter selectors and glossary entries opened at both viewports, with complete definitions, search/empty/reset, explicit exit/state preservation, Reports reference and theme checks.
- Reference-standard formula/coding/engine-agreement tests; JavaScript syntax; 28-asset HTTP/Vercel allowlist checks; standalone-preview generation.

Two early test attempts needed harness corrections: a summary selector matched a nested summary, and a main-tab click was attempted behind the intentionally focused workspace. The harness now targets the editor's own summary and exits focus before changing sections. The application Back and state assertions passed; no forced-click bypass was used.

Not run: physical Android hardware, Safari/Firefox, native Microsoft Word or a new Word-pagination comparison, or live deployment. Same-size scroll restoration was tested; after a user deliberately resizes the browser, offsets can be bounded by the new available dimensions. An externally altered/replaced dataset while away is not represented as a frozen historical dataset. No private patient data is included in the new tests or package.

## Run

Extract the ZIP, enter `project`, run `python3 -m http.server 8000` and open http://localhost:8000. No additional dependencies, API keys or environment variables are required. Open a diagnostic result, select a linked term and use the visible arrow Back. Follow related terms to try the history sequence. No GitHub push or Vercel deployment was performed.
