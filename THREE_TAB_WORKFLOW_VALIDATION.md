> Historical validation only. The current Objectives → Reports → Papers navigation is documented in OBJECTIVE_REPORT_WORKFLOW.md.

# Three connected research tabs — validation

## Implemented

Three primary navigation buttons: Objectives, Tables & Figures, Interpretations. Research variables and aggregate analysis are retained under a compact Supporting tools disclosure. The desktop sidebar mirrors the three workflow destinations; duplicate direct aggregate-module shortcuts are removed, while their functionality remains in the workspace.

Objectives retain approved text and methods, show variable links and calculated-result status. Objective selection synchronises the reporting scope. Tables & Figures links each result to its objective and interpretation. Interpretations reads the existing completed-results Map, titles and numbering, rather than copying calculations or maintaining separate text. Unrun results show unavailable evidence. Recalculation, title edits and report reordering are reflected by both views. Cross-objective previews are prevented from appearing under the wrong scope.

Current application caption numbers are passed into HTML/DOCX exports. Direct export-helper callers without supplied numbers retain consecutive report-local numbering. Data import and numerical calculation functions are not changed by the navigation work. All statistical-reporting changes from the immediately preceding active task are included; see BIOSTATISTICS_VALIDATION.md.

The compact Inter scale and black gradients remain. The three-button row uses equal columns; text wraps, with 40 px minimum targets at the mobile breakpoint. Supporting menus and interpretation cards use the established compact styling.

## Passed tests

- Exactly three primary buttons; supporting features retain their IDs/handlers.
- All three views open, with matching active-button state.
- Objective selection -> corresponding outputs -> linked interpretation -> output -> objective.
- Objective-associated variable links and completion counts.
- Explicit unavailable interpretations before calculation and after clearing data.
- Shared result updates, recalculation, edited titles, reordered publication selection and caption equality between views/exports.
- Dataset and result-object invariance under navigation/reordering.
- Research-variable explorer and aggregate workspace remain accessible; only one research view is displayed.
- Full local audit passed: imports/SAV fixtures, empty/missing/invalid data, learning/progress, search, 79 result families, Chapter Four reporting/exports, reordering, local assets and statistical reference checks.
- 372 numerical reference checks against Python/SciPy and 63 catalogue/controller assertions passed. An additional comparison confirmed unrounded logged statistics, sample counts and plotted data for all 79 families match the pre-reporting engine.
- CSS/font/contrast checks passed; font bytes are bundled and embedded in the standalone preview.

Tests used synthetic data, DOM simulation and the actual worker engine. No patient data was used. Re-run `python scripts/test_project.py`; the dedicated workflow check is `node tests/test_three_tab_workflow.cjs`.

## Not verified

Native browser/mobile layout, touch/keyboard interaction on real hardware, Safari/Firefox and live Vercel behaviour were not tested. A working Chromium installation is unavailable after its download returned an invalid archive. The CSS and simulated-DOM checks are not visual-layout verification. Actual study eligibility, thresholds and clinical protocol approval remain methodological review items.

No GitHub commit/push, Vercel deployment or live-site test was performed. The complete package includes sources, dependencies/licences, configuration, tests, synthetic fixtures, README and validation reports. The standalone preview includes the same runtime app.
