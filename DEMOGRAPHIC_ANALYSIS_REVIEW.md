# Demographic analysis review — 15 October 2026

Source checked: original `CRP MAS SPSS DATA_1.sav`, 85 records. Numeric values for all four fields match the app's private input extract. The SAV reader reports no user-missing codes for these fields. All 85 responses are recognised and non-missing for each variable. Codes and source labels below are preserved.

| Variable | Source coding | Observed counts |
|---|---|---|
| religion | 1 christianity; 2 islam; 3 traditional; 4 others | 78; 7; 0; 0 |
| education | 0 none; 1 pry; 2 sec; 3 tertiary | 0; 13; 21; 51 |
| marital_status | 1 single; 2 married; 3 widow | 66; 17; 2 |
| occupation | 1 student; 2 artisan; 3 farming; 4 business; 5 nysc; 6 cs; 7 teacher; 8 driver | 58; 3; 3; 6; 2; 10; 2; 1 |

The source marks these fields nominal. Education labels have a natural ordering, but codes are not years of schooling or equally spaced scores. No ordinal trend or continuous educational effect was assumed. `cs` is unresolved; neither `cs` nor `nysc` was expanded or pooled on an assumed meaning.

## Implemented

Expanded existing Table 1.1 (stable output ID `1:baseline`) rather than adding a duplicate output. Original age/sex cells remain unchanged. Every defined demographic category has a count, valid-response percentage and explicit denominator. Zero categories are retained. Missing and unknown codes receive separate rows if encountered, are excluded from valid-response percentages, and are never recoded. Missing optional fields do not prevent the original age/sex summary.

The same calculated data feed Tables & Figures, Interpretations, Papers selection, previews and editable Word export. Updated the output's purpose and four existing glossary explanations. No redundant demographic figure was added.

## Evaluation of further uses

- Diagnosis/severity: only eight histology-negative and eight complicated cases overall. Several demographic categories contain zero negative or complicated cases. A blanket Pearson chi-square approach is unsuitable. Exact tests could answer a separately justified, narrow question, but small groups still provide imprecise estimates and do not justify a demographic prediction model.
- Education, marital status and occupation strongly overlap with age: all 19 children are single students; eight have `pry` and eleven `sec`, with none in `tertiary`. All seven Islam responses are adults. A crude demographic difference cannot be interpreted as an independent demographic effect.
- Scores/confidence: social-background fields are not clinical score components, and education is not a measured health-literacy scale. Confidence is paired within patient; no independent-rating subgroup analysis was introduced.
- Costs: costs are available, so a focused age-aware exploratory education/cost question could be considered in a future justified analysis. Broad occupation/cost modelling would require an unverified coding interpretation and numerous small-category contrasts. No claim of affordability, income, access, causation or cost-effectiveness follows from these fields.
- Protocol status: existing approved objective statements and code do not prespecify these demographic association hypotheses. An original protocol/questionnaire establishing such hypotheses was not available in this workspace. Their prespecification cannot be claimed. Descriptive inclusion is cohort background, not a new original objective.

Decision: descriptive additions only in this update. No p-values, subgroup diagnostic estimates, demographic regression predictors, category pooling or multiple-comparison family were introduced. This is not a claim that every exact or exploratory test is mathematically impossible; it avoids an unjustified sweep of associations selected after inspecting outcomes.

## Verification

Original SAV audit; independent category-count reconciliation; valid denominators and zero categories; simulated missing, unknown and absent-field cases. Original six age/sex rows and seven unrelated calculated outputs are exactly unchanged. In-app table and Interpretations checked at desktop/mobile sizes in all three themes. Shared preview, edited paper preview and actual Word download passed. DOCX editable table and all category rows inspected; rendered pages reviewed. No deployment performed.
