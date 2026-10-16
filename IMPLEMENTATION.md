# Consolidated implementation and latest requirements

## Current interface (supersedes earlier requests)

- Landing: existing branded header, Quick Start Guide, Copy App Link, Share App;
  study topic and collapsible background; one Import Dataset panel; hub search;
  three primary navigation buttons; existing export shortcuts. Objective-Linked
  Results is absent on initial load and Home, not a landing accordion.
- Primary navigation ONLY **Objectives → Reports → Papers**. Glossary,
  Interpretations, variable explorer and other retained useful tools are
  secondary. Do not restore the former five-tab navigation.
- Objectives: objective dropdown (All, 1–6, exploratory 7 AIR, exploratory 8
  ultrasound), relevant methods, Generate Outputs with genuine task status,
  table/figure previews, Open Report, Open Paper. The duplicate objective-button list is removed; retain the dropdown only.
  No internal importer, obsolete
  exploratory letter categories or visible standalone bulk-export panels.
- Reports: objective dropdown; output selection; actual output
  previews; compiled Word-document preview; editable Word download; only Open
  Objective/Open Paper as contextual navigation. Empty/uncomputed selections
  receive explicit feedback rather than dummy content. Selection/cache signatures
  prevent downloading stale previews.
- Papers: individual objective dropdown; editable proposed manuscript
  title; sub-objectives; existing methods; linked verifiable references; Export
  Paper; Open Objective/Open Report. Removed cross-objective planning panels,
  Current Findings and Manuscript Components do not reappear in this view.
  Proposals/plans are not completed publications or invented study results.
- Collapsible content, three themes, independent content scrolling, responsive
  header, Supporting Tools, Back history, search and manual import are retained.
  Preserve the compact typography and existing colour tokens; no redesign here.

## Scientific definitions retained

MAS ≥7; hs-CRP >3 **mg/L**; AIR ≥9. MAS and hs-CRP means both positive; MAS or
hs-CRP means either positive. Do not substitute mg/dL or fitted-model labels for
these fixed rules. Histopathology: reactive lymphoid hyperplasia negative;
acute, suppurative, phlegmonous, gangrenous and perforated appendicitis positive.
Original labels/missingness are handled by existing mappings, not new recoding.
Age groups: under 16 versus 16 and above. Objective One excludes AIR comparisons.
AIR remains exploratory Objective Seven; ultrasound is exploratory Eight.

Ultrasound mass-positive classification is conditional on an appendicitis-
consistent report. Inconclusive, mixed normal/inconclusive categories and missing
records remain separate/excluded as documented in outputs. The original free-
text mass report is not present here; this limitation must remain visible.
Recorded hospital cost is not strategy-attributable incremental cost or cost-
effectiveness. Confidence ratings are paired ordinal observations; a unique
clinician per patient is an assumption, not fabricated clinician identifiers.
No new statistical results or models were introduced during consolidation.

## Shared architecture / files

| Area | Files |
| --- | --- |
| Shell, landing, identity, themes | index.html, script.js, styles.css, landing-layout.js, public-* files, colored-mode.css, scientific-backgrounds.css |
| Objectives/Reports coordination | objective-workflow.js, objective-workflow.css; eight profiles and existing output keys |
| Independent Papers state/Word builder | paper-objective-workflow.js; readonly shared profile metadata; separate titles/status/export |
| Import and Google access | data-import.js, google-drive-import.js, google-drive-config.js, results-browser.js |
| Existing calculations/catalogue | analysis-engine.js, result-catalog.js, variables.js, reference-standard.js |
| Results/report support | results-browser.js, reports.js, result-exports.js, client-report-style.js, report-preview.js, word-document-preview.js |
| Shared explanations/navigation | glossary-data.js, clinical-glossary.js, statistical-glossary.js, navigation-history.js, supporting-tools.js, sidebar.js, user-guide.js |

Legacy support modules are retained when existing handlers or other modules
reference them. Their presence is not permission to restore removed interface
panels or obsolete objective categories. Remove modules only after dependency
analysis; do not delete statistical branches just to simplify navigation.

## Word exports

All report/paper sections use A4 portrait. Report tables remain editable OOXML;
wide content is split/wrapped into portrait panels, not landscape. Figures are
embedded generated graphics. Times New Roman report formatting and existing
objective-specific content/interpretations are retained. Reports exports compile
and cache a selected document, and download the exact preview package. The
browser preview is an OOXML content view, not Microsoft Word's pagination engine.

Papers has its own selection, per-objective edited titles, status and OOXML
writer. It shares a pure ZIP utility but does NOT invoke or mutate Reports'
writer/state. Explicit Open Report/Open Objective navigates to the chosen
objective; merely choosing/editing/exporting a paper does not alter Reports.

## Maintenance

Use the current source files together; do not mix previous ZIP versions. The
historical audit documents, generated inventories, obsolete tests, duplicate
reports, previews, caches and stale manifests were excluded. The statistical
engine, import code and existing report writer are byte-identical to the preceding
working project. The Vercel ignore rules were corrected so new workflow modules
and social/icon assets are deployed. Update the canonical/share URLs together
using scripts/configure-sharing-url.py when your domain changes.

## Approved reports and global glossary update

Approved Demographics and Objectives 1–8 Word files supplied in Appendicitis
Report.zip are represented by approved-templates/0.json through 8.json. Their
styles, table layouts, captions, figure placement, methods and prose are the
reference standard. approved-report-templates.js integrates them with the
existing writer. Complete report selections can use the approved wording only
when every required live calculated evidence fingerprint matches the audited
reference results. Partial selections or changed results are regenerated with
current calculations and reference typography/section structure; reference
numerical sentences and figures are never copied onto a different result set.
The active dataset is still required and computations must finish before export.
Do not weaken the match guard or regenerate its index merely to hide a mismatch.
Changes to approved reports require a fresh numerical review against their source.

Demographics is a separate Reports dropdown option, not a ninth study objective.
All Objectives still denotes Objectives 1–8. The redundant Search Objectives
inputs are removed from all three tabs; use their dropdowns. Reports no longer
repeats the View Tables and Figures accordion list: choose outputs, then inspect
the actual Word preview. The detailed scientific workspace remains in Objectives.

The preview now reads named and direct OOXML paragraph/run styles, table column
spans and shading. Its source is the exact package subsequently downloaded.
Browser pagination is still not Microsoft Word pagination. Glossary links are
presentation-only and never inserted into the actual downloaded Word XML.

statistical-glossary.js now annotates registered statistical/clinical phrases
and variable aliases in Objectives, Papers, import previews, generated results
and supported HTML/Word preview frames. Matching SVG labels are keyboard
accessible. Native buttons, selects and inputs are excluded from rewriting.
Select unfamiliar text and choose Look up in Glossary when it has no inline
link. Unknown terms get an explicit missing-definition message, not a guessed
entry. The same central glossary opens its matching definition and expands it;
Back restores the origin and selected objective. Rasterised text inside images
cannot be linked word-by-word; captions and surrounding text remain linkable.

## Separate operation monitors

Objective result calculation and report preparation/export now use separate
progress objects and error state in objective-workflow.js. Objectives shows
only calculation completion; Reports shows only Word compilation, preview,
download-start or report errors. A completed results job does not appear as
an exported report. Both still use the existing shared busy guard to prevent
conflicting simultaneous work. Data replacement resets both monitors.

### Included preview and monitoring update
Upload this complete project together. `objective-workflow.js` keeps result generation separate from report compilation/export progress; both preview entry points now use the same generated Word bytes through `report-preview.js`. No additional dependencies or configuration are required.

### Flexible approved report selections
`approved-report-templates.js` now uses the same verified approved output blocks for full and partial selections, including cross-objective reports. Original output numbering is retained. If active numerical evidence changes, current calculated results are regenerated instead of reusing stale approved findings. The separate monitoring and unified-preview updates are included in this package.

### Explain This Graph
Click a generated graph or its Explain This Graph button to read the selected graph’s values, methods and interpretation. Close explanation returns focus to its control. Glossary lookup reuses the central glossary and Back restores the preview and panel. The new graph-explanations.js is dependency-free; keep it loaded before objective-workflow.js. Interactive explanation controls are not inserted into Word content. All prior monitoring, report subset, glossary table and scroll-restoration fixes are retained.
