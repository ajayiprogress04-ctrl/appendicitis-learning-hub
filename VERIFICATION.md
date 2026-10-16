# Consolidation verification — 16 October 2026

## Executed on the staged application

- Local HTML/CSS asset existence and all root JavaScript syntax checks passed.
- Exactly three primary tabs: Objectives, Reports, Papers; eight objective
  profiles, plus All Objectives in Objectives/Reports.
- Actual participant-level input used locally: 85 records; All Objectives
  generated 42 logical report outputs without changing the input JSON.
- Actual All Objectives Word preview compiled, then downloaded a valid DOCX:
  54 editable table panels and 10 embedded figures, all A4 portrait sections.
- All eight paper plans were independently downloaded. Paper selection/export
  left Reports configuration, selection and calculated items unchanged.
- All nine downloaded DOCX packages passed ZIP integrity, XML parsing and
  A4 portrait dimension checks. No landscape sections were present.
- All three primary views and Home were exercised in Light, OLED Dark and
  Colored themes at desktop 1440px and mobile 375px. No horizontal page
  overflow, uncaught JavaScript errors or missing local resource responses.
- The bundled synthetic browser smoke test exercises landing visibility,
  manual SAV import/confirmation, one importer, six objective steps, Objective
  Four generation, contextual Report/Paper links, Home and unchanged source
  data under navigation. It uses an explicit synthetic operative cohort for
  generation; those test records are not research findings.
- Statistical engine, importer and existing report writer are unchanged from
  the preceding delivered project; SHA-256 inventory records packaged files.

## Limits / not claimed

Live Vercel deployment, actual social-platform cache previews, private Google
OAuth/Drive permission flows, native Microsoft Word opening/pagination and
exhaustive runtime testing of every secondary legacy tool were not performed.
The current browser Word preview is a content preview, not Word's page renderer.
Separate researcher accounts still require Drive sharing and Cloud consent.

Optional Python statistical unit tests were attempted but could not run because
pyreadstat is unavailable in this environment. Install analysis/requirements.txt
in a virtual environment before running tests/test_statistics.py. This did not
prevent the browser's actual calculations or DOCX generation tested above.
No new analysis results were invented or silently substituted.

## Dropdown-only objective navigation correction
Removed the duplicate objective-button list above Objective-Linked Results.
The searchable dropdown remains the sole objective selector in that view.
Actual Chromium checks passed at 1440px and 375px: opening an objective from
a linked route, all eight dropdown options plus All, no objective-nav buttons,
output generation, Report/Paper links and unchanged imported dataset.
Only script.js and its index.html cache version changed in runtime code.

## Approved-template and glossary checks

Actual running-app checks: generated the study results, previewed and downloaded
all nine objective-specific/Demographics Word files and the combined Objectives
1–8 document. Each of the nine matched its approved reference's complete body
text, table/cell text, captions, table count, style XML and final paragraph.
Preview text matched exported content. Files opened with python-docx, passed
ZIP/XML checks and contained only A4 portrait sections. Combined output opened
with 33 editable tables, 10 figures and eight portrait sections. Objective Four
was rendered: both pages were pixel-identical to the approved reference's
rendered pages. Independently checked negative rate 8/85, 9.4118%, Wilson interval
4.8465%–17.4871%. No statistical engine changes were made.

Empty selection was blocked; a different 60-record input caused fresh report
assembly rather than reuse of approved numerical prose. All objective-search
inputs and the duplicated Reports output-inspection list were absent. Three
primary tabs/themes were exercised at 1440px/375px with no page overflow or
uncaught errors. Objective dropdowns remain.

Glossary checks exercised links from Objectives, Papers and the actual Word
preview iframe; matching definitions, automatic definition expansion, glossary
search, explicit undefined-term state, context/selection restoration and Back.
Selected unfamiliar text lookup was also tested. Only registered text matches
and supported SVG labels are linked; no claim covers every word or words
embedded inside raster images. Live deployment and private Google permissions
remain outside the checks completed here.
Imported real SAV preview variable links were additionally tested, including
returning to the still-pending import confirmation. Generated SVG chart-label
activation via Enter was tested; Back restored the same objective and the
expanded figure. These passed without uncaught errors.

## Separate result/report monitoring check

Actual Chromium checks passed: calculate Objective Four; switch to Reports and
verify no calculation progress appears there; observe genuine Word compilation
updates; prepare preview and download a valid DOCX; verify the Objectives
monitor remains unchanged. A controlled report-writer failure and successful
retry changed only the report status. Objective-specific idle state and
independent monitors were checked at 1440px and 375px. Syntax/static checks
passed. This test does not change calculations or report contents.

## Unified previews and separate monitoring — 16 October 2026
Both Objective export and Reports preview now open the same generated-Word viewer in the shared reading dialog. Approved template content and downloaded bytes are unchanged. Result-generation and report-preparation/export monitors remain separate.

Targeted Chromium test using 85 participant records: Objective Four generated; both entry points displayed identical report text with the same selection; desktop/mobile preview inspected; compilation progress, cached download, controlled failure/retry, objective scoping and isolated result/report status passed. Download inspected: valid DOCX XML, two editable tables, A4 portrait. Project asset/syntax checks passed. No live deployment performed.

## Approved partial selections — 16 October 2026
Root cause: the approved-template guard required a complete objective selection, so partial selections used the generic writer. Verified-data subsets now retain only the selected approved table/figure blocks, captions, notes and interpretations, with original numbering. A scope note replaces the full-report overview; the full-report conclusion is omitted when it would describe excluded results. Source fingerprint checks and the current-data fallback remain in place.

Actual Chromium checks: all 43 individual logical outputs across Demographics and Objectives 1–8; mixed table/figure subsets within every multi-output objective; mixed Objective One/Four report; actual Objective One comparison-only modal preview and downloaded DOCX. No runtime errors. Downloaded XML/ZIP valid, approved Table 3 present, unselected Table 1 and generic Panel A absent; all sections A4 portrait. Preview visually inspected. Separate result/report monitors retained. Full reports continue through the unchanged full-template branch. No deployment performed.

## AND/OR glossary combination table
Added the same four-row classification table to both MAS and hs-CRP and MAS or hs-CRP entries, with MAS ≥7 and hs-CRP >3 mg/L thresholds. No calculation changes. Chromium checks passed: both term lookups, all four Boolean outcomes, search, mobile display, no runtime errors; project asset and syntax checks passed.

## Return from glossary to preview
The shared preview now participates in navigation snapshots. Glossary navigation suspends the existing dialog instead of discarding it; Back restores that same frame, title, focus and reading scroll position. Explicit Close remains separate. Updated report-preview.js, navigation-history.js, statistical-glossary.js and cache versions in index.html.

Actual Chromium test with Objective Four and 85 records: preview term link opens glossary; global Back restores identical document and reading position; repeat with browser Back; explicit Close closes; no runtime errors. Project checks passed. Prior approved partial-selection fix, AND/OR table, unified previews and independent progress monitors are included.
