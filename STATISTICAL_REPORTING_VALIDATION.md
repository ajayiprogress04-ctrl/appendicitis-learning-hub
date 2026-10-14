# Statistical reporting review and implementation 14 October 2026

## Scope and conclusion

Reviewed the actual catalogue, statistical engine, data dictionary, aggregate-analysis schema, results/legend panels and report generator. The catalogue contains **86 outputs: 79 supported calculations and 7 source-limited analyses**. The separate aggregate workspace contains **14 additional output templates**, with figure variants determined by selected model or pair. Thus the review covers 100 output definitions/templates, not 100 independent new analyses. Data-import previews, variable codebooks and glossary classification tables are descriptive/reference interface views, not research findings requiring hypothesis tests.

The complete catalogue inventory is STATISTICAL_REPORTING_INVENTORY.md/.json. The supporting inventory is AGGREGATE_STATISTICAL_REPORTING_INVENTORY.md/.json. These files identify method, analysis type, inference applicability, statistic/p evidence, effects/intervals, sample information, export path and remaining issues for every definition. The packaged validation results use clearly synthetic fixtures, not actual patient findings.

No original patient-level SAV or approved protocol was supplied for this task. The audit reviews the available project implementation and checks its actual calculations on synthetic inputs; the app's live audit applies to the user's locally loaded data. This does not certify clinical source-record accuracy or approve the study analysis plan.

## Corrections

- Statistical evidence is now displayed immediately with the selected output, rather than only in a calculation log or another screen. Methods, U/t/z where applicable, df, calculated p-values, adjustment, effects, available 95% intervals and relevant sample/stratum sizes share one reporting path.
- Existing AIR/PCV histology comparison tables and association tables supply evidence alongside their corresponding box/scatter/forest figures. These are existing catalogue analyses, calculated locally using their declared method when the figure is generated. The report verifies compatible cohort sizes before attaching evidence; a mismatch or failed companion calculation is flagged instead of presenting unrelated inference.
- Paired DeLong/McNemar comparisons retain their unrounded calculated evidence as reporting metadata. Negative-reference subgroup comparisons retain exact counts/p-values, and binary-sign comparisons retain their actual analysis/group sizes. Statistical formulas, decisions and numerical output rows are unchanged.
- The correlation t approximation/df are recovered from the same stored rho/n used by the existing calculation, with the approximation identified. No new correlation method is selected. Updated generated scatter prose now describes its available adjacent inference rather than claiming none is available. Saved authored writing is not overwritten; existing source-review warnings still apply.
- Existing thresholds/reference coding are retained. Diagnostic rates/AUC are estimates with available precision, not automatically null tests. Raw-marker paired tests remain distinct from unsupported comparisons of learned models. Purely descriptive outputs do not acquire new hypothesis-test p-values.
- P-values below 0.001 use p < 0.001. Adjacent evidence retains up to six decimals, with extra precision near 0.05 to avoid a rounding/significance contradiction. Original rounded table cells and unrounded logs remain intact. Zero denominators and unestimable results stay explicit.
- Holm-adjusted results are interpreted on the adjusted scale where the existing family supplies Holm values. Other exploratory families remain labelled unadjusted and flagged for a prespecified multiplicity plan; no silent adjustment or significance-driven test selection is introduced.
- Essential statistical evidence reaches app panels, Reports preview and Word independently of optional explanatory-note, legend or narrative inclusion. Catalogue CSV export also carries the recorded statistical evidence. The approved Word layout/formatting specification is retained.
- Aggregate workspace tables/figures receive adjacent evidence from their loaded aggregate source, including group effects and actual paired comparisons. This workspace still exports CSV/JSON and has no native mapping into Reports/Word; the audit states that limitation.

## Live audit use

Open **Statistical reporting completeness** in Tables & Figures or Reports. It lists all 100 definitions/templates and distinguishes Not run, source-limited, failed/data-required and generated evidence. Download its JSON for the current local reporting review. No participant records are included in that audit file. A generated/reporting-checked status is a reporting-path check, not approval of assumptions or protocol.

## Remaining gaps and scientific review

The seven withheld catalogue outputs remain: reliable between-age-group AUC inference; paired confidence inference; resident/medical-officer comparison; incremental hs-CRP cost; adjusted cost regression; prespecified adjusted associations; and additional clinical-sign model development. Their source requirements are preserved.

Additional limitations remain visible:

- Original protocol confirmation for retained α=0.05, score construction, clinical rule, eligibility and histopathology crosswalk; code 6 remains negative only under the documented isolated reactive lymphoid hyperplasia assumption. This task does not reopen pathology source records or recode diagnoses.
- Patient independence, paired clinician clustering, distributional assumptions, and the existing size/skewness primary-test heuristic need methodological review. Ancillary calculations in a shared engine routine do not make a descriptive output an inferential claim.
- Cramér V intervals, paired-classification effect intervals, negative-reference proportion-difference intervals and other unimplemented/unstable intervals are flagged, not invented. No arbitrary effect-size grades or clinical-importance threshold is supplied.
- Model coefficient/adjusted OR inference, valid learned-model superiority tests, external validation, and full training-uncertainty intervals are unavailable. Prediction evaluation is labelled separately.
- Rare reference-negative subgroups, missing/invalid observations and absent-class diagnostic denominators may make estimates or tests unavailable in a real upload. The live audit reflects failures/missing cells rather than reusing synthetic values.
- The existing group routine can require two observations per group even for its shared descriptive family; sparse uploads may therefore fail that output. This remains a data/implementation limitation rather than a fabricated summary.
- The legacy aggregate workspace has no native Word-export mapping. Corresponding participant-data catalogue results have the checked Word path.

## Tests actually passed

1. **All 79 supported catalogue branches** calculated on a 36-record synthetic fixture. Every branch received app/report evidence or an explicit appropriate qualification; every expected inferential branch had recorded p evidence or a gap. Pure descriptive branches had no added hypothesis-test p-value.
2. **Baseline numeric regression:** all 79 branches compared with the previous engine. Original result rows, plotted observations, raw logs and sample counts agreed; new reporting-only metadata is additional. The fixture's input records were unchanged.
3. Every enriched catalogue evidence line was present in the app notes HTML and report HTML, even with optional notes/narrative disabled. Companion cohort alignment, stored paired test records, binary-sign sample sizes, unavailable cases and p-value boundaries were tested.
4. **14 aggregate templates:** source evidence checked for group comparisons, paired diagnostics and associations; missing labels/undefined values absent. The inventory explicitly records the lack of native Word export. Native app views for costs, diagnostics and associations displayed their loaded source evidence.
5. **Native Chromium 1440×900 and 390×900:** descriptive table, comparison figure, categorical table, paired diagnostic table, association scatter, diagnostic-performance table and paired-descriptive figure tested. The 100-row audit rendered and its JSON download was verified. Light/Dark/Colored switching and page-overflow/runtime checks passed.
6. A real synthetic Word export and its HTML preview contained every mandatory evidence line with optional notes excluded. The Word document was reopened/rendered in LibreOffice; **all six pages** were visually inspected. Tables, figures, captions, p-values/effects and footers were readable without clipping or missing glyphs. This is not native Microsoft Word certification or an exhaustive pagination test of every possible selection.
7. Existing five-tab regression passed at desktop/mobile: legend edits/save/draft/reordering, Interpretations, Report links, independent legend inclusion/exclusion, actual Word download, all three themes and unchanged data.
8. Context-aware Back regression passed at both widths in all three themes: table/figure/Interpretations/report-preview origins, sequential glossary visits, state/drafts, scrolling, focus/zoom and sidebar layout.
9. JavaScript syntax, 29-asset static HTTP/Vercel allowlist checks and standalone-preview generation passed. This static project has no npm compilation step.

Not performed: new patient-source validation, native Android hardware, Safari/Firefox, native Microsoft Word, independent statistical certification of every legacy method, or live deployment. No claim that every clinical/statistical gap is resolved.

## Files changed

New: statistical-reporting.js; tests/test_reporting_completeness.cjs; tests/test_native_reporting_audit.cjs; STATISTICAL_REPORTING_INVENTORY.json; the two aggregate inventory files; this report.

Modified: STATISTICAL_REPORTING_INVENTORY.md (replaced the previous audit with this complete review); analysis-engine.js (retained reporting metadata only); results-browser.js (local evidence enrichment and audit/failure exposure); result-exports.js (shared app/CSV/HTML/Word evidence); workspace.js (aggregate evidence); reports.js (audit and essential-evidence clarification); index.html (new local script/cache versions); .vercelignore (allowlist); tests/test_static_package.py (29 assets); README.md; MANIFEST.sha256.

Research data, dictionary codes, imports, approved objectives, navigation, themes, glossary/Back logic and Vercel configuration were preserved. New statistical-reporting metadata can appropriately flag previously saved writing for source review; saved edits are retained by the existing writing mechanism.

## Reporting references

Lang TA, Altman DG. Basic statistical reporting for articles published in clinical medical journals: the SAMPL Guidelines. In Smart P, Maisonneuve H, Polderman A, editors. Science Editors' Handbook. European Association of Science Editors; 2013. https://www.equator-network.org/wp-content/uploads/2013/07/SAMPL-Guidelines-6-27-13.pdf

Bossuyt PM et al. STARD 2015: an updated list of essential items for reporting diagnostic accuracy studies. BMJ. 2015;351:h5527. doi:10.1136/bmj.h5527. These sources support reporting practice; they do not supply the study-specific clinical rules or certify the current dataset.

## Run before deployment

Extract the ZIP and run `python3 -m http.server 8000` inside `project`; open http://localhost:8000. No new runtime dependencies or API keys are needed. Load the actual dataset locally, generate outputs, inspect the live audit and resolve flagged scientific/source issues before final reporting. The package includes synthetic validation inventories and existing public assets, not newly supplied patient data. No GitHub push or Vercel deployment was performed.
