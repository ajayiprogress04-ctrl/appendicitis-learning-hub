Hospital-cost comparison update

Replace the five matching files in the existing app root, then serve the app normally. No dependency or deployment configuration changes are needed.

New outputs are in Tables & Figures > Exploratory A and can be selected in Interpretations and Reports. Each comparison has distribution summaries, a statistical-comparison table and a box plot.

Verified original SAV: 85 records; one cost field (total_costs), no missing or zero costs. Age <16: 19; >=16:66. Histopathology codes 1–5 positive:77; code6 reactive lymphoid hyperplasia negative:8. All extracted age/histology/cost values match the original SAV. NGN follows the existing app dictionary; the SAV cost variable itself has no currency label. Original protocol was not available to independently reconfirm currency or the age split.

Mann–Whitney U (two-sided, tie/continuity corrected asymptotic): positive vs negative U396, p0.187859; children vs adults U80, p8.17231e-9. Tests compare distributions, not automatically medians. Both comparisons are exploratory and unadjusted. Rank-biserial percentile bootstrap CI (1,000 fixed-seed resamples), Welch mean-difference CI and median-difference bootstrap CI are displayed. Recorded totals cannot establish incremental diagnostic costs, savings or cost-effectiveness.

Checks: fresh original-SAV audit; independent SciPy summaries/U/p/Welch/CI; zero/missing/invalid age and histology edges; insufficient sample failure; seven existing analyses exactly unchanged. Actual Chromium desktop1440/mobile390, Light/Dark/Colored: all six outputs and interpretation visible; actual Word downloads, no runtime errors or page overflow. Four native Word tables and two embedded figures inspected in DOCX XML. Static app has no production compilation step.
