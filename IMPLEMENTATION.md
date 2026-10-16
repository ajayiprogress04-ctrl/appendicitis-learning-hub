# Consolidated implementation and latest requirements

## Current interface (supersedes earlier requests)

- Landing: existing branded header, Quick Start Guide, Copy App Link, Share App;
  study topic and collapsible background; one Import Dataset panel; hub search;
  three primary navigation buttons; existing export shortcuts. Objective-Linked
  Results is absent on initial load and Home, not a landing accordion.
- Primary navigation ONLY **Objectives → Reports → Papers**. Glossary,
  Interpretations, variable explorer and other retained useful tools are
  secondary. Do not restore the former five-tab navigation.
- Objectives: searchable selector (All, 1–6, exploratory 7 AIR, exploratory 8
  ultrasound), relevant methods, Generate Outputs with genuine task status,
  table/figure previews, Open Report, Open Paper. The duplicate objective-button list is removed; retain the dropdown only.
  No internal importer, obsolete
  exploratory letter categories or visible standalone bulk-export panels.
- Reports: searchable objective selector; output selection; actual output
  previews; compiled Word-document preview; editable Word download; only Open
  Objective/Open Paper as contextual navigation. Empty/uncomputed selections
  receive explicit feedback rather than dummy content. Selection/cache signatures
  prevent downloading stale previews.
- Papers: individual objective search/selection; editable proposed manuscript
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
