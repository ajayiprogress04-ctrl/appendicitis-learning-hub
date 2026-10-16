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
