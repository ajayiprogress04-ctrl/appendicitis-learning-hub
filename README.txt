Preview Report repair — 15 October 2026

Apply: copy the eight application files from this archive into the existing project root, replacing matching files. Keep report-preview.js beside index.html. Deploy using your usual manual workflow; no live deployment was performed here.

Cause: report and bulk previews reused strict publication-export validation, so a single unresolved note or non-estimable statistic stopped the entire preview. Papers had no dedicated preview action, and uncalculated bulk selections could abort assembly.

Changes: one shared, read-only report renderer; Preview Report in paper details; individual table/figure report previews; shared Reports and bulk previews. Selected titles, output IDs and content are retained. Pending/unsupported and review-required outputs are explicitly identified, not silently omitted. Existing Word validation, calculations and data remain unchanged. Escape/Close returns to the originating interface. Preview glossary links dismiss the dialog before opening the existing glossary.

Checks actually performed in Chromium with the original 85-record dataset:
- All 117 individual catalogue Preview Report buttons: correct ID and actual table/SVG for every calculated output.
- 104 cleared previews, nine review previews retaining their calculated content, four unsupported definitions with explicit reasons.
- All 17 paper preview actions: exact selected output IDs and correct paper title.
- Combined preview: all 113 calculated outputs, no missing or duplicate IDs.
- Desktop/mobile modal sizing and Escape in Light, OLED Dark and Colored themes (six combinations); desktop/mobile screenshots inspected.
- Bulk preview before analysis: all 113 selected eligible outputs listed as pending.
- Edited paper title appears in preview; source data and calculated result unchanged by preview.
- Existing Reports Word button downloaded a DOCX; ZIP/XML inspected and one genuine editable Word table confirmed. Microsoft Word opening/pagination was not tested in this task.
- Syntax checks passed for all five changed JavaScript modules.

No unsupported analyses were invented or publication checks relaxed. The four unsupported definitions remain unsupported; the nine existing publication-review issues remain visible and continue to prevent unsafe Word export. Generate available results from the active dataset before expecting populated reports.
