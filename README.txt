Replace these four files in the existing project.

Bulk Analysis & Report Export: the existing shared disclosure system now places lengthy selection/configuration/instructions behind its clickable heading, collapsed by default. Selected counts, analysis/export actions, progress and error messages remain outside the fold. Existing individual-output lists, previews and qualifications retain their independent controls. The extra surrounding Bulk analysis tools accordion in Reports was removed to avoid unnecessary nesting.

Reports: per-output component/editing controls start collapsed, keeping each inclusion checkbox and title visible. Essence remains outside the editing fold. Existing scientific results, notes and interpretations remain accessible and are not automatically hidden.

Audit: Objectives already use independent objective/method disclosures; Interpretations and Glossary already have shared disclosures; Papers already uses progressive detail panels. Those working behaviours were reused rather than adding another layer to every paragraph.

Open/closed choices persist across bulk rerenders and both workspaces. Existing Expand all / Collapse all controls work with the new folds. Collapse is view state only and does not alter report selection or content. No scientific or export-generation logic changed.

Actual Chromium checks: desktop 1440x900 and mobile 390x844, in all three themes; keyboard Enter expansion, heading clicks, independent sections, closed/open persistence after selection changes, visible key actions and retained report selections. Actual single-output bulk processing completed; progress stayed visible. Downloaded Word export retained all 25 demographic rows plus header as a genuine editable table when report editing controls were collapsed. Changed JS syntax checks passed. No deployment performed.
