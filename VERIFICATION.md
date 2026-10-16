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
