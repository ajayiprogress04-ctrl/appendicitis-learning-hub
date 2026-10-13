# Report reordering update

Continued from the latest Chapter Four project. Existing interpretation and Chapter Four formatting code was preserved.

## Implemented
- Added Move Up / Move Down controls in Scope report order and Selected publication order lists, with a preview button for each complete result.
- Order is stored as result identifiers. Titles, data, figures, methods, notes and interpretations are retrieved from the same existing result objects; movement does not copy, recalculate or alter them.
- Scope and selected report exports follow the chosen order. Tables and figures are numbered independently in export order. Publication numbering in the app follows the selected order; per-objective numbering follows the chosen within-objective order.
- Boundary buttons are disabled. Moves are blocked during calculations/exports, and invalid or out-of-range requests are ignored. Focus returns to the moved item's corresponding button when available.
- Search and scope changes preserve order within the session. Deselecting and reselecting an item preserves its position. Activating/removing a dataset resets order to catalogue order. Reloading the page starts a fresh session; no private results are persisted.
- Calculation logs include the chosen report order.
- Drag-and-drop was not added. Existing dataset-import drag/drop behaviour remains unchanged.

## Files changed
results-browser.js and styles.css only, plus a new tests/test_report_reordering.cjs and this report. A byte comparison against the prior working ZIP confirmed all other existing project files are unchanged, including calculation, interpretation and export-formatting implementations.

## Tests actually completed
- Moved a table and a figure Down then Up in both scope and selected publication lists (eight successful moves), followed by additional Down moves to verify new table/figure numbering.
- Confirmed complete result objects remained identical: table rows or figure data, methods, notes and interpretation. Edited titles remained attached to the same identifiers. Dataset and catalogue snapshots remained unchanged.
- Checked complete result blocks and order in HTML exports, and DOCX XML sequence for captions, interpretations and notes. The DOCX reorder test uses an injected rasterizer placeholder solely to inspect package content; it is not a rendered Word visual test.
- Exercised the actual selected-HTML export action, boundary/no-op moves, busy guard, deselection/reselection, navigation and dataset removal/reset.
- Existing tests passed: 79 interpretation result families, Chapter Four export structure, import-controller CSV/XLS/XLSX/private JSON workflow, 309 learning assertions, and global search. JavaScript syntax check passed.
- Rebuilt the standalone preview and complete project ZIP.

## Not tested
Native browser rendering, keyboard/focus behaviour in a real browser, mobile layout, real browser PNG rasterisation, scope DOCX export through the live browser, and Word visual rendering after reordering. No real-patient dataset was used in these tests. Drag-and-drop report reordering is not implemented or tested.

Run from the project directory: node tests/test_report_reordering.cjs.
