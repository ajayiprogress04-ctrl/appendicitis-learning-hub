# Closed-by-default sections

## Behaviour

All newly rendered native details and shared disclosure wrappers start closed. Existing expanded-default markup has been removed from objective glossary notes, supporting workspace notes, diagnostic settings, output essence and result-order/selection controls. Dataset import and Google Drive controls are behind the existing Import Private Dataset heading; analysis settings and generated-result controls use the same shared disclosure component. Paper detail, overlap, output-selection and export sections are also wrapped consistently.

Manual expansion remains independent. Within the active tab, rerenders caused by file preview, confirmation, selections or generation retain sections the user explicitly opened; no unrelated section opens. Closing a parent closes its nested disclosures, so reopening it does not reveal all previously expanded children. Switching to another main tab, including via the sidebar, clears disclosure presentation back to closed. This changes view state only, not selected outputs, filters, data or calculated results.

Automatic reveal-on-focus, hash and glossary-link expansion was removed. Navigating to a definition can still select it, but its disclosure stays closed until the user opens it. Explicit Expand all remains available where already present. Report-preview output disclosures also start closed; export inclusion is unchanged.

## Files changed

- disclosure-controls.js: shared closed defaults, unique disclosure keys, nested-close behaviour, import/settings/paper wrappers, tab-entry reset; no automatic reveal.
- results-browser.js: remove open defaults from report order and analysis/result selection lists.
- papers.js: remove automatic opening of merged paper panels during search; new panels default closed through the shared controller.
- script.js, workspace.js, output-essence.js, diagnostic-master.js: remove expanded-default native markup.
- index.html: cache version updates for changed controllers.

## Actual checks

Running Chromium: all five main tabs initially contain no expanded visible disclosures. Manual opening of Import Private Dataset reveals both manual upload and Drive controls. The attached SAV snapshot imports85records, preserves its preview/labels, confirms successfully and generates an existing population result. Only the manually opened import panel remains open through those operations. Tab switching returns sections to closed while retaining dataset and generated results. Glossary panels operate independently. Enter opens a focused summary; closing it hides the Drive control. Mobile390px checked in Light, Dark and Colored modes; no uncaught browser exceptions.

A Word file was actually downloaded while report details were collapsed. Its ZIP/XML was inspected and contains an editable Word table; collapsing the UI did not remove the report content. JavaScript syntax checks passed. Real Google OAuth/private Drive retrieval was not rerun. No production deployment was performed.

## Installation

Deploy the complete supplied runtime app to the existing Vercel project, then refresh. It includes the latest production sharing URL, branding and designated Drive configuration. No private SAV dataset is bundled. No scientific calculations, research findings or export-inclusion rules were changed.
