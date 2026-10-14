# Histopathology classification learning update

## Verified project sources
variables.js preserves the six histology labels and the derived HISTOLOGY_ACUTE_APPENDICITIS / HISTOLOGY_SEVERITY definitions. analysis-engine.js implements disease codes 1–5 positive, 6 negative under the isolated lymphoid-hyperplasia assumption; severity codes 1–3 simple, 4–5 complicated, 6 excluded. analysis/run_analysis.py independently agrees. These source files were inspected, and calculation code was not changed.

| Original code | Dictionary category | Documented grouping |
|---|---|---|
| 1 | acute appendicitis | Simple; reference-positive |
| 2 | suppurative appendicitis | Simple; reference-positive |
| 3 | phlemonous appendicitis | Simple; reference-positive |
| 4 | gangrenous appendix | Complicated; reference-positive |
| 5 | perforated appendicitis | Complicated; reference-positive |
| 6 | reactive lymphoid hyperplasia | Reference-negative only if isolated; severity not applicable |

Display names use Phlegmonous appendicitis and Gangrenous appendicitis while displaying the exact dictionary label alongside them. Original labels and source codes are not edited. Missing/unlisted diagnoses are not automatically negative. Simple as internal severity 0 is explicitly distinguished from a negative disease reference.

The dictionary records researcher approval of the operational crosswalk but explicitly says a prespecified protocol severity definition was not recovered. The interface discloses this. Formal protocol verification therefore remains incomplete: supply the approved histopathology/classification section to establish prespecification. Original patient SAV/source pathology reports were not available for a new row-level audit in this task. No claim is made that each candidate occurred in the original study; displayed counts are calculated only from the currently loaded browser dataset.

## Implemented interaction
Interpretations has Simple Appendicitis, Complicated Appendicitis and Negative / non-appendicitis buttons. Selecting one updates only the educational detail panel, with definition, verified code/name table and reasons. Reactive lymphoid hyperplasia is excluded from both positive-example tables. If loaded histology labels differ from the dictionary, a visible warning identifies the upload as unverified against this crosswalk; existing data and analyses are retained. Without histology observations, examples are labelled as dictionary examples rather than findings.

General pathology context is separated from study rules. Histological phlegmonous appendicitis is not equated to an appendiceal inflammatory mass; this distinction was checked using the WSES authors’ 2026 terminology clarification (https://jamanetwork.com/journals/jamasurgery/fullarticle/2848847) and an original histopathological study (https://www.nature.com/articles/s41598-025-85904-4). Clinical definitions vary; these sources do not establish this study’s approval or contribute any borrowed results. Suppurative inflammation alone is not used to infer gangrene/perforation. Gangrene and perforation are the documented complicated categories, irrespective of operative override. Mixed acute inflammation with lymphoid hyperplasia requires review of the source diagnosis rather than automatic code-6 negativity.

## Tests actually passed
- Native Chromium 1440×900 and 390×900: actual category clicks reveal exactly codes 1–3, 4–5 and 6; appropriate source labels, reasons, positive/negative distinction, local counts and no-data message.
- Twelve synthetic records (two per code) produce six simple and four complicated observations in the existing hsCRP descriptive analysis, with code 6 excluded and analysis n=10. This checks UI/analysis agreement, not clinical findings.
- Conflicting imported label (code 1 named lymphoid hyperplasia) triggers the review warning without changing the code. Clicking educational buttons preserves dataset, completed results and selected output exactly.
- Light/dark/colored themes, desktop/mobile layout, no horizontal page overflow and no runtime errors.
- Existing five-tab/legend/Word regression passed at both widths: navigation, editing/save/drafts/reordering, Report links, Word legend inclusion/exclusion and actual download, themes and unchanged dataset/results.
- Static package checks passed (26 assets, HTTP, dependency order and deployment allowlist); syntax and preview bundling passed. Static app: no npm compilation step.

No physical Android testing, repeat audit of original source records, full protocol confirmation or every-analysis-family rerun was performed. No calculations, coding, thresholds, report writing, themes, navigation or deployment configuration were changed. No GitHub push or Vercel deployment was performed.

## Changed files and run instructions
Runtime: results-browser.js (educational section/event handler), index.html (asset version). Added tests/test_histology_help.cjs. Documentation: README.md and this file.
Extract the ZIP, run `python -m http.server 8000` from project and open http://localhost:8000. Open Interpretations and use the three category buttons. No npm installation, API keys or external patient-data processing are required. The source references are optional external links; patient rows remain local.
