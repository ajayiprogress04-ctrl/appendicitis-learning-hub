/* Original concise teaching summaries. No participant findings or diagnostic cutoffs. */
window.HUB_GLOSSARY_DATA = {
  "categories": [
    "Descriptive statistics",
    "Hypothesis testing and p-values",
    "Confidence intervals",
    "Parametric and non-parametric tests",
    "Categorical data and contingency tables",
    "Diagnostic accuracy",
    "Sensitivity, specificity, PPV and NPV",
    "Odds ratios and relative risks",
    "Correlation and regression",
    "ROC curves and AUC",
    "Effect sizes and statistical power",
    "Sample size and missing data",
    "Statistical assumptions",
    "Paired versus independent observations",
    "Statistical reporting and interpretation",
    "Appendicitis research concepts"
  ],
  "entries": [
    {
      "id": "mean",
      "term": "Mean",
      "category": "Descriptive statistics",
      "aliases": [
        "average",
        "arithmetic mean"
      ],
      "definition": "Sum of observations divided by their number.",
      "purpose": "Summarise the centre of quantitative measurements.",
      "formula": "x̄ = Σxᵢ/n; xᵢ is observation i and n is the number observed.",
      "assumptions": "Units and valid observations must be defined; outliers can strongly influence the mean.",
      "interpretation": "Report with spread and the number of non-missing observations.",
      "example": "Illustrative: Summarise hs-CRP concentrations in an explicitly defined patient group.",
      "mistake": "Assuming a mean alone describes a skewed distribution.",
      "related": [
        "median",
        "sd"
      ]
    },
    {
      "id": "median",
      "term": "Median",
      "category": "Descriptive statistics",
      "aliases": [
        "50th percentile"
      ],
      "definition": "Middle ordered value, averaging the two middle values for an even sample.",
      "purpose": "Describe the centre when measurements are skewed.",
      "formula": "",
      "assumptions": "Use meaningful ordering and specify the population analysed.",
      "interpretation": "Half the ordered observations lie at or below the median, subject to ties.",
      "example": "Illustrative: Describe length of stay when a few admissions are very long.",
      "mistake": "Interpreting the median as the arithmetic mean.",
      "related": [
        "iqr",
        "distribution"
      ]
    },
    {
      "id": "sd",
      "term": "Standard deviation",
      "category": "Descriptive statistics",
      "aliases": [
        "SD"
      ],
      "definition": "Spread of individual measurements around their mean.",
      "purpose": "Describe variation between patients.",
      "formula": "s = √[Σ(xᵢ−x̄)²/(n−1)]; s is sample SD, x̄ the mean, n the sample size.",
      "assumptions": "Use quantitative data and inspect outliers; SD does not require normality to be calculated.",
      "interpretation": "Expressed in the original measurement units.",
      "example": "Illustrative: Report variation in age within the adult group.",
      "mistake": "Confusing SD with standard error or uncertainty in the mean.",
      "related": [
        "se",
        "mean"
      ]
    },
    {
      "id": "se",
      "term": "Standard error",
      "category": "Descriptive statistics",
      "aliases": [
        "SE",
        "SEM"
      ],
      "definition": "Sampling variability of an estimated statistic.",
      "purpose": "Quantify precision and form confidence intervals.",
      "formula": "SE(x̄) = s/√n; s is sample SD and n the independent sample size.",
      "assumptions": "This mean formula assumes independent observations and finite variance.",
      "interpretation": "Smaller SE indicates greater precision under the model.",
      "example": "Illustrative: Estimate precision of mean age rather than variation between patients.",
      "mistake": "Using SE to describe the spread of patient values.",
      "related": [
        "sd",
        "ci"
      ]
    },
    {
      "id": "iqr",
      "term": "Interquartile range",
      "category": "Descriptive statistics",
      "aliases": [
        "IQR"
      ],
      "definition": "Difference between the 75th and 25th percentiles.",
      "purpose": "Describe the central half of a distribution.",
      "formula": "IQR = Q3−Q1; Q1 and Q3 are the 25th and 75th percentiles.",
      "assumptions": "Specify the quantile convention when reproducibility matters.",
      "interpretation": "Often report median with Q1–Q3; this interval is not a confidence interval.",
      "example": "Illustrative: Describe skewed hs-CRP values using median and quartiles.",
      "mistake": "Treating Q1–Q3 as a 95% interval.",
      "related": [
        "median",
        "ci"
      ]
    },
    {
      "id": "proportion",
      "term": "Proportion",
      "category": "Descriptive statistics",
      "aliases": [
        "percentage",
        "percent"
      ],
      "definition": "Count meeting a condition divided by the eligible count.",
      "purpose": "Summarise categorical outcomes.",
      "formula": "p̂ = k/n; k is the event count, n the denominator; percentage = 100p̂.",
      "assumptions": "Define eligibility, missing-data handling and whether each participant is counted once.",
      "interpretation": "Always identify numerator and denominator.",
      "example": "Illustrative: Report complicated cases among patients with a confirmed diagnosis.",
      "mistake": "Using all recruited patients as denominator when only some were assessed.",
      "related": [
        "contingency",
        "missing"
      ]
    },
    {
      "id": "null",
      "term": "Null hypothesis",
      "category": "Hypothesis testing and p-values",
      "aliases": [
        "H0",
        "hypothesis testing"
      ],
      "definition": "A specified model or parameter value against which evidence is assessed.",
      "purpose": "State the claim a statistical test evaluates.",
      "formula": "",
      "assumptions": "Specify the hypothesis and test before inspecting results where possible.",
      "interpretation": "Failure to reject does not demonstrate equality.",
      "example": "Illustrative: Test whether mean hs-CRP differs between two defined groups.",
      "mistake": "Treating a non-significant result as proof of no difference.",
      "related": [
        "pvalue",
        "power"
      ]
    },
    {
      "id": "pvalue",
      "term": "P-value",
      "category": "Hypothesis testing and p-values",
      "aliases": [
        "p value",
        "p-values",
        "p-values"
      ],
      "definition": "Probability, under the null model and its assumptions, of a test statistic at least as incompatible with that model as observed.",
      "purpose": "Quantify incompatibility of data with a specified null model.",
      "formula": "",
      "assumptions": "Requires a valid test, design and handling of selection or multiple testing.",
      "interpretation": "Interpret alongside effect estimates, intervals and study design.",
      "example": "Illustrative: Assess evidence for a difference in a predefined comparison of children and adults.",
      "mistake": "Calling the p-value the probability that the null is true.",
      "related": [
        "null",
        "significance",
        "multiple"
      ]
    },
    {
      "id": "significance",
      "term": "Statistical significance",
      "category": "Hypothesis testing and p-values",
      "aliases": [
        "alpha",
        "significance level"
      ],
      "definition": "A decision that a p-value meets a prespecified testing threshold.",
      "purpose": "Implement a planned error-control rule.",
      "formula": "α is the chosen Type I error level under the test assumptions.",
      "assumptions": "Choose the threshold in the analysis plan and consider multiplicity.",
      "interpretation": "Significance alone says little about effect magnitude or clinical value.",
      "example": "Illustrative: Apply the approved analysis plan to a group comparison.",
      "mistake": "Treating one threshold as a universal measure of importance.",
      "related": [
        "pvalue",
        "clinical",
        "multiple"
      ]
    },
    {
      "id": "multiple",
      "term": "Multiple testing",
      "category": "Hypothesis testing and p-values",
      "aliases": [
        "multiplicity",
        "multiple comparisons"
      ],
      "definition": "Conducting several tests creates more opportunities for false-positive conclusions.",
      "purpose": "Plan family-wise or false-discovery error control where appropriate.",
      "formula": "Bonferroni uses α/m for m tests and family-wise target α.",
      "assumptions": "Define the family of tests and distinguish planned from exploratory analyses.",
      "interpretation": "Report the adjustment strategy and both the context and uncertainty.",
      "example": "Illustrative: Compare several diagnostic markers under a stated testing plan.",
      "mistake": "Selecting only significant comparisons for reporting.",
      "related": [
        "significance",
        "reporting"
      ]
    },
    {
      "id": "ci",
      "term": "Confidence interval",
      "category": "Confidence intervals",
      "aliases": [
        "CI",
        "95% CI",
        "95% confidence intervals",
        "95% confidence interval",
        "confidence intervals"
      ],
      "definition": "Range generated by a procedure with a stated long-run coverage rate under its assumptions.",
      "purpose": "Show precision and the range of effects compatible with the estimation procedure.",
      "formula": "Mean CI: x̄ ± t* s/√n; t* is the t critical value, s the sample SD, n the independent sample size.",
      "assumptions": "This formula assumes independent observations and adequate normal approximation for the mean; other estimands need different methods.",
      "interpretation": "A 95% procedure covers the fixed true parameter in 95% of repetitions under its model.",
      "example": "Illustrative: Report a diagnostic sensitivity estimate together with an appropriate binomial interval.",
      "mistake": "Saying a realised frequentist interval gives a 95% probability for the fixed parameter.",
      "related": [
        "se",
        "effect",
        "reporting"
      ]
    },
    {
      "id": "welch",
      "term": "Welch t-test",
      "category": "Parametric and non-parametric tests",
      "aliases": [
        "t-test",
        "independent t test",
        "Welch"
      ],
      "definition": "Test comparing two independent population means without assuming equal variances.",
      "purpose": "Compare quantitative outcomes between independent groups.",
      "formula": "t = (x̄₁−x̄₂)/√(s₁²/n₁+s₂²/n₂); subscripts identify groups; use Welch degrees of freedom.",
      "assumptions": "Independent observations; inspect extreme outliers and adequacy of mean normal approximation, especially for small groups.",
      "interpretation": "Report the mean difference and its interval alongside t, degrees of freedom and p.",
      "example": "Illustrative: Compare mean age across two independently sampled diagnostic groups.",
      "mistake": "Assuming the test is appropriate for repeated measurements.",
      "related": [
        "paired",
        "normality",
        "ci"
      ]
    },
    {
      "id": "mann",
      "term": "Mann–Whitney U test",
      "category": "Parametric and non-parametric tests",
      "aliases": [
        "Mann Whitney",
        "Mann-Whitney U test",
        "Mann–Whitney",
        "Wilcoxon rank-sum",
        "rank sum"
      ],
      "definition": "Rank-based comparison of two independent distributions.",
      "purpose": "Compare ordered or continuous measurements without a normal model for individual values.",
      "formula": "",
      "assumptions": "Independent observations; ties require appropriate handling; a pure location interpretation needs similarly shaped distributions.",
      "interpretation": "A significant result indicates a distributional difference, not automatically a median difference.",
      "example": "Illustrative: Compare skewed hs-CRP measurements between simple and complicated cases.",
      "mistake": "Describing every Mann–Whitney result as a test of medians.",
      "related": [
        "paired",
        "distribution"
      ]
    },
    {
      "id": "signed",
      "term": "Wilcoxon signed-rank test",
      "category": "Parametric and non-parametric tests",
      "aliases": [
        "signed rank",
        "Wilcoxon signed rank"
      ],
      "definition": "Rank-based test of paired differences around zero.",
      "purpose": "Analyse matched or repeated quantitative observations.",
      "formula": "",
      "assumptions": "Pairs are independent of other pairs; a location interpretation assumes symmetric differences; handle zeros and ties.",
      "interpretation": "Explain the paired difference and the assumptions supporting the location claim.",
      "example": "Illustrative: Compare a measurement before and after an intervention within each patient.",
      "mistake": "Using it for two independent patient groups.",
      "related": [
        "paired",
        "mann"
      ]
    },
    {
      "id": "anova",
      "term": "Analysis of variance",
      "category": "Parametric and non-parametric tests",
      "aliases": [
        "ANOVA",
        "F-test"
      ],
      "definition": "Framework testing equality of several population means through variation within and between groups.",
      "purpose": "Compare means across more than two groups.",
      "formula": "F = MSbetween/MSwithin for classical one-way ANOVA; MS denotes mean square.",
      "assumptions": "Classical ANOVA assumes independent errors, common error variance and suitable residual normality.",
      "interpretation": "An omnibus result does not identify which groups differ.",
      "example": "Illustrative: Compare a quantitative outcome across several prespecified diagnostic categories.",
      "mistake": "Running unplanned pairwise tests without considering multiplicity.",
      "related": [
        "multiple",
        "normality",
        "welch"
      ]
    },
    {
      "id": "kruskal",
      "term": "Kruskal–Wallis test",
      "category": "Parametric and non-parametric tests",
      "aliases": [
        "Kruskal Wallis"
      ],
      "definition": "Rank-based comparison across independent groups.",
      "purpose": "Compare ordered outcomes across several groups.",
      "formula": "",
      "assumptions": "Independent observations; similar shapes are needed for a location-only interpretation.",
      "interpretation": "An omnibus distributional result needs appropriate follow-up comparisons.",
      "example": "Illustrative: Compare length of stay across prespecified categories.",
      "mistake": "Assuming it proves every group differs.",
      "related": [
        "mann",
        "multiple"
      ]
    },
    {
      "id": "contingency",
      "term": "Contingency table",
      "category": "Categorical data and contingency tables",
      "aliases": [
        "cross-tabulation",
        "2x2",
        "2×2"
      ],
      "definition": "Counts classified jointly by categorical variables.",
      "purpose": "Show associations and diagnostic classification counts.",
      "formula": "For a diagnostic 2×2 table: TP true positive, FP false positive, FN false negative, TN true negative.",
      "assumptions": "Categories must be defined; denominator and observation unit must be clear.",
      "interpretation": "Show counts and specify whether percentages use rows, columns or the total.",
      "example": "Illustrative: Cross-tabulate a test classification against histopathology.",
      "mistake": "Mixing row and column percentages without labels.",
      "related": [
        "chi",
        "fisher",
        "sensitivity"
      ]
    },
    {
      "id": "chi",
      "term": "Pearson chi-square test",
      "category": "Categorical data and contingency tables",
      "aliases": [
        "chi-square",
        "chi squared",
        "χ²"
      ],
      "definition": "Compares observed categorical counts with counts expected under independence.",
      "purpose": "Assess association between categorical variables.",
      "formula": "χ² = Σ(O−E)²/E; O is observed and E expected count over cells.",
      "assumptions": "Independent observations; expected counts must support the approximation; use another method when sparse.",
      "interpretation": "A significant association is not a measure of its strength or causality.",
      "example": "Illustrative: Compare diagnostic categories between children and adults.",
      "mistake": "Applying it to paired classifications or very sparse tables without checking.",
      "related": [
        "fisher",
        "mcnemar",
        "effect"
      ]
    },
    {
      "id": "fisher",
      "term": "Fisher’s exact test",
      "category": "Categorical data and contingency tables",
      "aliases": [
        "Fisher's exact test",
        "Fisher exact"
      ],
      "definition": "Conditional exact test of association, commonly for a 2×2 table.",
      "purpose": "Assess association when small counts make an asymptotic approximation unsuitable.",
      "formula": "",
      "assumptions": "Independent observations; conditioning and two-sided convention should be specified.",
      "interpretation": "Report the association estimate and interval as well as the exact p-value.",
      "example": "Illustrative: Compare uncommon complications across independent groups.",
      "mistake": "Using it for paired outcomes or assuming exact means bias-free.",
      "related": [
        "contingency",
        "odds",
        "mcnemar"
      ]
    },
    {
      "id": "accuracy",
      "term": "Diagnostic accuracy",
      "category": "Diagnostic accuracy",
      "aliases": [
        "diagnostic performance",
        "accuracy"
      ],
      "definition": "Agreement of a diagnostic classification with a specified reference standard.",
      "purpose": "Evaluate classification in the target population.",
      "formula": "Accuracy = (TP+TN)/(TP+FP+FN+TN); symbols are defined in the contingency-table entry.",
      "assumptions": "Define test threshold, reference standard, timing, verification and target population.",
      "interpretation": "Overall accuracy is prevalence-dependent and may conceal poor sensitivity.",
      "example": "Illustrative: Evaluate MAS classification against a clearly defined reference diagnosis.",
      "mistake": "Presenting accuracy as sufficient evidence of clinical usefulness.",
      "related": [
        "reference",
        "sensitivity",
        "specificity",
        "roc"
      ]
    },
    {
      "id": "reference",
      "term": "Reference standard",
      "category": "Diagnostic accuracy",
      "aliases": [
        "gold standard",
        "histopathology"
      ],
      "definition": "Method used to establish the target condition for evaluating another test.",
      "purpose": "Define the diagnostic truth used in accuracy calculations.",
      "formula": "",
      "assumptions": "State its definition, limitations, blinding and completeness of verification.",
      "interpretation": "A flawed or selectively applied reference can bias measured accuracy.",
      "example": "Illustrative: Use the protocol-defined histopathology classification for operated patients.",
      "mistake": "Assuming an operated-only sample represents all suspected cases.",
      "related": [
        "bias",
        "accuracy"
      ]
    },
    {
      "id": "sensitivity",
      "term": "Sensitivity",
      "category": "Sensitivity, specificity, PPV and NPV",
      "aliases": [
        "true positive rate",
        "TPR"
      ],
      "definition": "Proportion with the target condition whose test is positive.",
      "purpose": "Assess detection among affected patients.",
      "formula": "TP/(TP+FN); TP true positives, FN false negatives.",
      "assumptions": "Requires a defined threshold and valid reference diagnosis; spectrum and verification matter.",
      "interpretation": "Higher sensitivity means fewer missed cases in that evaluated group.",
      "example": "Illustrative: Evaluate how often a marker identifies reference-positive appendicitis.",
      "mistake": "Equating sensitivity with the probability of disease after a positive test.",
      "related": [
        "specificity",
        "ppv",
        "reference"
      ]
    },
    {
      "id": "specificity",
      "term": "Specificity",
      "category": "Sensitivity, specificity, PPV and NPV",
      "aliases": [
        "true negative rate",
        "TNR"
      ],
      "definition": "Proportion without the target condition whose test is negative.",
      "purpose": "Assess correct exclusion among unaffected patients.",
      "formula": "TN/(TN+FP); TN true negatives, FP false positives.",
      "assumptions": "Requires defined threshold, reference standard and relevant non-diseased comparison group.",
      "interpretation": "Higher specificity means fewer false positives among reference-negative patients.",
      "example": "Illustrative: Evaluate negative test classifications among patients without confirmed appendicitis.",
      "mistake": "Assuming specificity describes predictive value.",
      "related": [
        "sensitivity",
        "npv",
        "reference"
      ]
    },
    {
      "id": "ppv",
      "term": "Positive predictive value",
      "category": "Sensitivity, specificity, PPV and NPV",
      "aliases": [
        "PPV"
      ],
      "definition": "Proportion of positive test results that have the target condition.",
      "purpose": "Interpret a positive result in the evaluated population.",
      "formula": "TP/(TP+FP); TP true positives, FP false positives.",
      "assumptions": "Depends on prevalence, case mix and test performance; avoid transporting uncritically.",
      "interpretation": "Answers the disease frequency among those testing positive.",
      "example": "Illustrative: Describe confirmed appendicitis among marker-positive patients in the evaluated cohort.",
      "mistake": "Treating PPV as an intrinsic, prevalence-independent property.",
      "related": [
        "npv",
        "prevalence",
        "sensitivity"
      ]
    },
    {
      "id": "npv",
      "term": "Negative predictive value",
      "category": "Sensitivity, specificity, PPV and NPV",
      "aliases": [
        "NPV"
      ],
      "definition": "Proportion of negative test results without the target condition.",
      "purpose": "Interpret a negative result in the evaluated population.",
      "formula": "TN/(TN+FN); TN true negatives, FN false negatives.",
      "assumptions": "Depends on prevalence, case mix and the validity of reference diagnosis.",
      "interpretation": "Answers the non-disease frequency among those testing negative.",
      "example": "Illustrative: Assess reference-negative diagnoses among marker-negative patients.",
      "mistake": "Claiming a high NPV alone proves safe discharge.",
      "related": [
        "ppv",
        "prevalence",
        "specificity"
      ]
    },
    {
      "id": "prevalence",
      "term": "Prevalence",
      "category": "Diagnostic accuracy",
      "aliases": [
        "pretest probability"
      ],
      "definition": "Proportion with a condition in a defined population at a specified time or period.",
      "purpose": "Describe disease frequency and contextualise predictive values.",
      "formula": "Cases/population eligible; specify the time and target condition.",
      "assumptions": "Representative ascertainment is needed for population interpretation.",
      "interpretation": "A surgical cohort's disease proportion may differ from community prevalence.",
      "example": "Illustrative: State the appendicitis proportion in the evaluated suspected-case cohort.",
      "mistake": "Using prevalence and incidence interchangeably.",
      "related": [
        "ppv",
        "npv",
        "bias"
      ]
    },
    {
      "id": "likelihood",
      "term": "Likelihood ratio",
      "category": "Diagnostic accuracy",
      "aliases": [
        "LR+",
        "LR-",
        "positive likelihood ratio",
        "negative likelihood ratio"
      ],
      "definition": "Ratio comparing the probability of a test result with versus without the condition.",
      "purpose": "Update pretest odds under applicable diagnostic evidence.",
      "formula": "LR+ = sensitivity/(1−specificity); LR− = (1−sensitivity)/specificity; posttest odds = pretest odds × LR.",
      "assumptions": "Requires valid estimates applicable to the patient population; report uncertainty.",
      "interpretation": "LR+ above one increases and LR− below one decreases disease odds.",
      "example": "Illustrative: Use a validated marker classification to update a stated pretest assessment.",
      "mistake": "Confusing odds with probability or assuming universal clinical cutoffs.",
      "related": [
        "odds",
        "sensitivity",
        "specificity"
      ]
    },
    {
      "id": "odds",
      "term": "Odds ratio",
      "category": "Odds ratios and relative risks",
      "aliases": [
        "OR",
        "odds ratios"
      ],
      "definition": "Ratio of outcome odds between two groups.",
      "purpose": "Describe association, including in logistic regression and case-control studies.",
      "formula": "OR = (a/b)/(c/d) = ad/bc; a,b are event/non-event counts in group 1; c,d in group 2.",
      "assumptions": "Design, confounding, sampling and zero-cell handling affect estimation.",
      "interpretation": "One denotes no odds association; odds are not risks.",
      "example": "Illustrative: Compare odds of complicated appendicitis between prespecified groups.",
      "mistake": "Interpreting a common-outcome OR as a risk ratio.",
      "related": [
        "risk",
        "logistic",
        "ci"
      ]
    },
    {
      "id": "risk",
      "term": "Relative risk",
      "category": "Odds ratios and relative risks",
      "aliases": [
        "RR",
        "risk ratio",
        "relative risks"
      ],
      "definition": "Ratio of event probabilities between groups.",
      "purpose": "Compare risks in designs where risks can be estimated.",
      "formula": "RR = [a/(a+b)]/[c/(c+d)]; a,c are event counts and b,d non-event counts in groups 1,2.",
      "assumptions": "Comparable follow-up and valid denominators; confounding remains possible.",
      "interpretation": "One denotes equal risks; use an interval and absolute risks.",
      "example": "Illustrative: Compare complication risk in two prospectively observed groups.",
      "mistake": "Estimating risk from a case-control sample without accounting for sampling.",
      "related": [
        "odds",
        "effect"
      ]
    },
    {
      "id": "pearson",
      "term": "Pearson correlation",
      "category": "Correlation and regression",
      "aliases": [
        "Pearson r",
        "correlation coefficient"
      ],
      "definition": "Standardised measure of linear association between quantitative variables.",
      "purpose": "Describe linear co-variation.",
      "formula": "r = covariance(X,Y)/(SD(X)SD(Y)); X,Y are variables.",
      "assumptions": "Independent pairs for conventional inference; inspect linearity and influential outliers.",
      "interpretation": "Ranges −1 to 1; zero does not rule out a nonlinear relationship.",
      "example": "Illustrative: Assess linear association between two inflammatory markers.",
      "mistake": "Treating correlation as agreement or causation.",
      "related": [
        "spearman",
        "regression"
      ]
    },
    {
      "id": "spearman",
      "term": "Spearman correlation",
      "category": "Correlation and regression",
      "aliases": [
        "Spearman rho",
        "rank correlation"
      ],
      "definition": "Correlation of ranks measuring monotonic association.",
      "purpose": "Analyse ordinal or monotonic quantitative relationships.",
      "formula": "ρ = Pearson correlation of the two sets of ranks; use tie-aware ranks.",
      "assumptions": "Independent observation pairs for conventional inference; inspect monotonicity.",
      "interpretation": "Measures rank association rather than linear association in original units.",
      "example": "Illustrative: Explore whether higher scores accompany higher hs-CRP.",
      "mistake": "Calling it a measure of diagnostic agreement.",
      "related": [
        "pearson",
        "distribution"
      ]
    },
    {
      "id": "regression",
      "term": "Linear regression",
      "category": "Correlation and regression",
      "aliases": [
        "regression",
        "residual"
      ],
      "definition": "Model for the conditional mean of a quantitative outcome.",
      "purpose": "Estimate adjusted associations or predictions.",
      "formula": "E(Y given X) = β₀+ΣβⱼXⱼ; Y outcome, Xⱼ predictors, βⱼ coefficients.",
      "assumptions": "Check mean-model form, independent errors, variance and influential points; normal errors matter for some inference.",
      "interpretation": "A coefficient is a conditional mean change under the model, not automatically causal.",
      "example": "Illustrative: Model hospital stay using prespecified predictors with suitable diagnostics.",
      "mistake": "Ignoring confounding or confusing prediction with causation.",
      "related": [
        "logistic",
        "bias",
        "normality"
      ]
    },
    {
      "id": "logistic",
      "term": "Logistic regression",
      "category": "Correlation and regression",
      "aliases": [
        "logit",
        "adjusted odds ratio"
      ],
      "definition": "Model relating predictors to the log odds of a binary outcome.",
      "purpose": "Estimate adjusted odds associations and predicted probabilities.",
      "formula": "log[p/(1−p)] = β₀+ΣβⱼXⱼ; p outcome probability; exp(βⱼ) is a conditional OR.",
      "assumptions": "Independent outcomes or appropriate clustered model; check continuous predictor form, separation and overfitting.",
      "interpretation": "Coefficients describe conditional odds, with uncertainty and model context.",
      "example": "Illustrative: Model complicated versus simple appendicitis using prespecified predictors.",
      "mistake": "Fitting too many predictors to too few events or interpreting OR as RR.",
      "related": [
        "odds",
        "power",
        "bias"
      ]
    },
    {
      "id": "roc",
      "term": "ROC curve",
      "category": "ROC curves and AUC",
      "aliases": [
        "receiver operating characteristic",
        "ROC"
      ],
      "definition": "Plot of sensitivity against 1−specificity across decision thresholds.",
      "purpose": "Describe discrimination and threshold trade-offs.",
      "formula": "Horizontal axis = false-positive rate; vertical axis = true-positive rate.",
      "assumptions": "Define reference diagnosis, marker direction and target population; use validation for tuned models.",
      "interpretation": "Threshold choice needs clinical costs and context, not just curve shape.",
      "example": "Illustrative: Compare marker discrimination for a defined appendicitis endpoint.",
      "mistake": "Treating the ROC curve as evidence of probability calibration.",
      "related": [
        "auc",
        "threshold",
        "sensitivity"
      ]
    },
    {
      "id": "auc",
      "term": "Area under the ROC curve",
      "category": "ROC curves and AUC",
      "aliases": [
        "AUC",
        "AUROC",
        "area under curve"
      ],
      "definition": "Summary of ranking discrimination across thresholds.",
      "purpose": "Compare overall discrimination with appropriate uncertainty.",
      "formula": "AUC = P(score in affected > score in unaffected) + ½P(tie), with the positive direction defined.",
      "assumptions": "Reference labels and marker direction must be valid; paired comparisons require paired methods.",
      "interpretation": "It measures ranking, not calibration or clinical benefit; avoid universal quality bands.",
      "example": "Illustrative: Estimate how well a marker ranks complicated above simple cases.",
      "mistake": "Calling AUC diagnostic accuracy at one threshold.",
      "related": [
        "roc",
        "delong",
        "ci"
      ]
    },
    {
      "id": "threshold",
      "term": "Diagnostic threshold",
      "category": "ROC curves and AUC",
      "aliases": [
        "cut-off",
        "cutoff",
        "Youden index"
      ],
      "definition": "Decision boundary converting a marker into a test classification.",
      "purpose": "Define the sensitivity–specificity trade-off.",
      "formula": "Youden J = sensitivity+specificity−1; it weights the two measures equally.",
      "assumptions": "Specify units and direction; data-selected thresholds need independent validation.",
      "interpretation": "Choose according to intended use, harms and target setting.",
      "example": "Illustrative: Evaluate a protocol-specified marker threshold without inventing one.",
      "mistake": "Optimising and claiming validated performance on the same sample.",
      "related": [
        "roc",
        "bias",
        "accuracy"
      ]
    },
    {
      "id": "delong",
      "term": "DeLong comparison",
      "category": "ROC curves and AUC",
      "aliases": [
        "DeLong",
        "paired AUC"
      ],
      "definition": "Method estimating covariance and testing a difference between correlated ROC AUC estimates.",
      "purpose": "Compare markers measured in the same participants.",
      "formula": "z = ΔAUC/SE(ΔAUC); ΔAUC is the AUC difference and SE its estimated standard error.",
      "assumptions": "Paired scores and shared binary reference labels; sufficient cases/non-cases and valid variance estimation.",
      "interpretation": "Report AUC difference, uncertainty and p; significance does not prove clinical superiority.",
      "example": "Illustrative: Compare MAS and hs-CRP ranking in the same evaluated cohort.",
      "mistake": "Using an independent-AUC variance calculation for paired measurements.",
      "related": [
        "auc",
        "paired",
        "effect"
      ]
    },
    {
      "id": "effect",
      "term": "Effect size",
      "category": "Effect sizes and statistical power",
      "aliases": [
        "effect sizes",
        "mean difference"
      ],
      "definition": "Magnitude of an association or difference.",
      "purpose": "Assess practical meaning beyond a p-value.",
      "formula": "Mean difference = x̄₁−x̄₂; other effects include RR, OR and standardised differences.",
      "assumptions": "Choose a measure matching design, outcome and clinical question.",
      "interpretation": "Report units, direction and uncertainty; importance depends on context.",
      "example": "Illustrative: Report a group difference in hospital stay rather than only its p-value.",
      "mistake": "Assuming statistically significant means large or important.",
      "related": [
        "ci",
        "clinical",
        "pvalue"
      ]
    },
    {
      "id": "power",
      "term": "Statistical power",
      "category": "Effect sizes and statistical power",
      "aliases": [
        "power",
        "beta",
        "Type II error"
      ],
      "definition": "Probability of rejecting a specified null under a particular alternative and design.",
      "purpose": "Plan sample size and understand sensitivity to meaningful effects.",
      "formula": "Power = 1−β; β is Type II error probability under the specified alternative.",
      "assumptions": "Depends on effect, variance, design, sample size, significance level and analysis method.",
      "interpretation": "Power is tied to the specified alternative; non-significance does not prove no effect.",
      "example": "Illustrative: Plan a study to detect a clinically justified difference.",
      "mistake": "Using observed post-hoc power to explain a p-value.",
      "related": [
        "sample",
        "null",
        "ci"
      ]
    },
    {
      "id": "sample",
      "term": "Sample size",
      "category": "Sample size and missing data",
      "aliases": [
        "n",
        "number of records"
      ],
      "definition": "Number of observational units, with analysis-specific eligible counts.",
      "purpose": "Plan precision or power and report actual denominators.",
      "formula": "",
      "assumptions": "Account for design, missingness, clustering, groups and expected events.",
      "interpretation": "Record count may differ from the independent analysis sample size.",
      "example": "Illustrative: Report how many paired marker measurements contribute to an AUC comparison.",
      "mistake": "Reporting one total n for every analysis despite exclusions.",
      "related": [
        "power",
        "missing",
        "paired"
      ]
    },
    {
      "id": "missing",
      "term": "Missing data",
      "category": "Sample size and missing data",
      "aliases": [
        "missing values",
        "complete case"
      ],
      "definition": "Required measurements that are unavailable or invalid.",
      "purpose": "Understand exclusions, precision and possible selection bias.",
      "formula": "",
      "assumptions": "Describe extent, reasons and handling; distinguish true missingness from valid zero or declared missing codes.",
      "interpretation": "Complete-case analysis may be biased depending on the missingness process.",
      "example": "Illustrative: Report missing hs-CRP measurements and which analysis excludes them.",
      "mistake": "Replacing missing values with zero or assuming all missingness is random.",
      "related": [
        "mcar",
        "mar",
        "mnar",
        "quality"
      ]
    },
    {
      "id": "mcar",
      "term": "Missing completely at random",
      "category": "Sample size and missing data",
      "aliases": [
        "MCAR"
      ],
      "definition": "Missingness is independent of observed and unobserved data values.",
      "purpose": "Consider whether complete cases can represent the original sample.",
      "formula": "",
      "assumptions": "A strong condition; observed-data checks alone cannot establish it.",
      "interpretation": "Under MCAR, complete cases avoid selection bias for many estimands but lose precision.",
      "example": "Illustrative: An unrelated random laboratory failure is an illustrative possibility, not an established study mechanism.",
      "mistake": "Declaring MCAR solely because a test is non-significant.",
      "related": [
        "missing",
        "mar",
        "mnar"
      ]
    },
    {
      "id": "mar",
      "term": "Missing at random",
      "category": "Sample size and missing data",
      "aliases": [
        "MAR",
        "multiple imputation"
      ],
      "definition": "Missingness does not depend on the missing value after conditioning on relevant observed data.",
      "purpose": "Support appropriate imputation or likelihood-based analyses.",
      "formula": "",
      "assumptions": "Requires an adequate observed-data model and sensitivity assessment; cannot be proved from observed data alone.",
      "interpretation": "MAR does not mean values are missing casually or unconditionally at random.",
      "example": "Illustrative: Missing marker results may depend on recorded age if age adequately explains the missingness process.",
      "mistake": "Treating multiple imputation as automatically valid regardless of model.",
      "related": [
        "missing",
        "mnar",
        "mcar"
      ]
    },
    {
      "id": "mnar",
      "term": "Missing not at random",
      "category": "Sample size and missing data",
      "aliases": [
        "MNAR"
      ],
      "definition": "Missingness still depends on unobserved values after accounting for observed information.",
      "purpose": "Motivate explicit assumptions and sensitivity analyses.",
      "formula": "",
      "assumptions": "The mechanism cannot generally be identified from observed values alone.",
      "interpretation": "Conclusions may depend on plausible unobserved-value scenarios.",
      "example": "Illustrative: Very high unrecorded marker values could be associated with missing assay results.",
      "mistake": "Assuming complete-case analysis resolves informative missingness.",
      "related": [
        "missing",
        "mar",
        "bias"
      ]
    },
    {
      "id": "quality",
      "term": "Data quality",
      "category": "Sample size and missing data",
      "aliases": [
        "data cleaning",
        "validation"
      ],
      "definition": "Fitness of recorded data for the intended analysis.",
      "purpose": "Check labels, units, ranges, codes, duplicates and missingness.",
      "formula": "",
      "assumptions": "Preserve source records and document corrections; distinguish unusual values from errors.",
      "interpretation": "Passing checks does not prove absence of error or bias.",
      "example": "Illustrative: Validate patient identifiers and SPSS value labels before analysis.",
      "mistake": "Deleting outliers only because they affect significance.",
      "related": [
        "missing",
        "bias"
      ]
    },
    {
      "id": "normality",
      "term": "Normality assumption",
      "category": "Statistical assumptions",
      "aliases": [
        "normal distribution",
        "Gaussian",
        "Shapiro–Wilk"
      ],
      "definition": "Assumption that a relevant distribution or model error has a normal shape.",
      "purpose": "Support methods whose inference relies on that approximation.",
      "formula": "",
      "assumptions": "Check the quantity required by the method: paired differences or model residuals may matter, rather than every raw variable.",
      "interpretation": "Use graphical checks, design and robustness together; a normality test is not an automatic test-selection rule.",
      "example": "Illustrative: Inspect paired differences before a paired t-test.",
      "mistake": "Using a non-significant normality test as proof of normality.",
      "related": [
        "distribution",
        "welch",
        "paired"
      ]
    },
    {
      "id": "distribution",
      "term": "Data distribution",
      "category": "Statistical assumptions",
      "aliases": [
        "distribution",
        "skewness",
        "outlier"
      ],
      "definition": "Pattern of possible values and their relative frequency.",
      "purpose": "Choose summaries and assess analytic assumptions.",
      "formula": "",
      "assumptions": "Consider measurement scale, bounds, outliers and sampling design.",
      "interpretation": "Shape affects which summaries and models are useful.",
      "example": "Illustrative: Inspect hs-CRP histograms for skewness without inferring a result in advance.",
      "mistake": "Assuming every biomedical variable is normally distributed.",
      "related": [
        "median",
        "normality",
        "mann"
      ]
    },
    {
      "id": "paired",
      "term": "Paired observations",
      "category": "Paired versus independent observations",
      "aliases": [
        "paired",
        "matched",
        "repeated measures",
        "paired t-test"
      ],
      "definition": "Measurements linked within the same person or matched unit.",
      "purpose": "Analyse within-pair differences or agreement using methods that account for dependence.",
      "formula": "Paired t: t = d̄/(s_d/√n); d̄ mean difference, s_d SD of differences, n independent pairs.",
      "assumptions": "Pairs are independent of other pairs; the selected method has additional assumptions.",
      "interpretation": "The analysis unit and effective sample size are pairs.",
      "example": "Illustrative: Compare two diagnostic measurements taken in the same participants.",
      "mistake": "Treating two measurements per patient as independent patients.",
      "related": [
        "independent",
        "signed",
        "mcnemar",
        "delong"
      ]
    },
    {
      "id": "independent",
      "term": "Independent observations",
      "category": "Paired versus independent observations",
      "aliases": [
        "independent groups",
        "independence"
      ],
      "definition": "Observations whose sampling dependence is absent under the design/model.",
      "purpose": "Justify standard errors for unpaired analyses.",
      "formula": "",
      "assumptions": "Assess design, repeated participants, families and clinical-site clustering.",
      "interpretation": "Ignoring dependence can underestimate uncertainty.",
      "example": "Illustrative: Different patients form independent groups only when the sampling design supports it.",
      "mistake": "Assuming independence merely because rows are separate.",
      "related": [
        "paired",
        "welch",
        "bias"
      ]
    },
    {
      "id": "mcnemar",
      "term": "McNemar test",
      "category": "Paired versus independent observations",
      "aliases": [
        "McNemar's test",
        "McNemar’s test"
      ],
      "definition": "Test of marginal equality for paired binary classifications, based on discordant pairs.",
      "purpose": "Compare binary classifications in the same participants.",
      "formula": "Uncorrected χ² = (b−c)²/(b+c); b,c are the two discordant-pair counts; exact methods may be preferable when sparse.",
      "assumptions": "Independent pairs; both classifications on the same units; use suitable sparse-count method.",
      "interpretation": "Tests marginal proportions, not agreement or independence.",
      "example": "Illustrative: Compare two tests' positive classifications within the same cohort.",
      "mistake": "Applying Pearson chi-square to paired binary classifications.",
      "related": [
        "paired",
        "chi",
        "fisher"
      ]
    },
    {
      "id": "clinical",
      "term": "Clinical significance",
      "category": "Statistical reporting and interpretation",
      "aliases": [
        "clinical importance",
        "clinical relevance"
      ],
      "definition": "Importance of an effect for patient care, considering benefit, harm and context.",
      "purpose": "Judge usefulness beyond statistical testing.",
      "formula": "",
      "assumptions": "Use credible clinical criteria, uncertainty, feasibility and study limitations.",
      "interpretation": "A precise small effect may be unimportant; an uncertain meaningful effect needs further evidence.",
      "example": "Illustrative: Consider missed diagnoses and unnecessary operations when evaluating a marker.",
      "mistake": "Using a p-value alone to declare clinical benefit.",
      "related": [
        "effect",
        "ci",
        "significance"
      ]
    },
    {
      "id": "reporting",
      "term": "Statistical reporting",
      "category": "Statistical reporting and interpretation",
      "aliases": [
        "interpretation",
        "Chapter Four"
      ],
      "definition": "Transparent presentation of design, denominators, methods, effect estimates, uncertainty and limitations.",
      "purpose": "Let readers assess and reproduce evidence.",
      "formula": "",
      "assumptions": "Distinguish planned/exploratory analyses, missingness, units and actual findings from illustrations.",
      "interpretation": "Use consistent table/figure references and avoid causal claims unsupported by design.",
      "example": "Illustrative: Describe the actual computed estimate, eligible n and interval in Chapter Four.",
      "mistake": "Fabricating interpretations before an analysis has run.",
      "related": [
        "pvalue",
        "ci",
        "effect",
        "bias"
      ]
    },
    {
      "id": "bias",
      "term": "Bias and confounding",
      "category": "Statistical assumptions",
      "aliases": [
        "confounding",
        "selection bias",
        "verification bias"
      ],
      "definition": "Systematic distortion; confounding mixes an exposure association with other causes related to exposure and outcome.",
      "purpose": "Evaluate threats to validity and plan design or adjustment.",
      "formula": "",
      "assumptions": "Use subject knowledge and design; statistical adjustment alone cannot ensure validity.",
      "interpretation": "Larger samples reduce random error but do not remove systematic bias.",
      "example": "Illustrative: Operated-only verification may limit generalisation of diagnostic performance.",
      "mistake": "Assuming association proves causation or a narrow interval rules out bias.",
      "related": [
        "reference",
        "regression",
        "quality"
      ]
    },
    {
      "id": "mas",
      "term": "Modified Alvarado Score",
      "category": "Appendicitis research concepts",
      "aliases": [
        "MAS",
        "Modified Alvarado"
      ],
      "definition": "Clinical scoring system combining selected symptoms, examination findings and laboratory information for suspected appendicitis.",
      "purpose": "Evaluate or describe the score as defined in the approved protocol.",
      "formula": "",
      "assumptions": "Record the exact score version, components, timing and allowed range; do not assume a threshold.",
      "interpretation": "A score is a predictor, not the reference diagnosis; performance needs evaluation in the target population.",
      "example": "Illustrative: Assess recorded MAS against the protocol-defined appendicitis endpoint.",
      "mistake": "Importing another study's cut-off or treating the score as definitive diagnosis.",
      "related": [
        "accuracy",
        "roc",
        "hscrp"
      ]
    },
    {
      "id": "hscrp",
      "term": "High-sensitivity C-reactive protein",
      "category": "Appendicitis research concepts",
      "aliases": [
        "hs-CRP",
        "hsCRP",
        "hs CRP",
        "CRP"
      ],
      "definition": "C-reactive protein measured using a high-sensitivity assay; a marker of inflammation, not an appendicitis-specific diagnosis.",
      "purpose": "Evaluate the recorded biomarker against a defined clinical question.",
      "formula": "",
      "assumptions": "Verify units, assay, timing, measurement limits and confounding inflammatory conditions.",
      "interpretation": "Values need clinical and study context; no universal appendicitis threshold is specified here.",
      "example": "Illustrative: Evaluate recorded hs-CRP discrimination using the actual reference labels.",
      "mistake": "Inventing a diagnostic cutoff or assuming elevated CRP identifies appendicitis alone.",
      "related": [
        "mas",
        "roc",
        "bias"
      ]
    },
    {
      "id": "negative",
      "term": "Negative appendicectomy rate",
      "category": "Appendicitis research concepts",
      "aliases": [
        "negative appendectomy",
        "NAR"
      ],
      "definition": "Proportion of eligible appendicectomies classified as lacking appendicitis by the study's stated reference definition.",
      "purpose": "Describe unnecessary-operation outcomes under a defined protocol.",
      "formula": "Rate = negative appendicectomies/eligible appendicectomies × 100%; state numerator and denominator.",
      "assumptions": "Define histological criteria, inclusion/exclusion and missing reference results.",
      "interpretation": "Interpret in the clinical pathway and studied operative population.",
      "example": "Illustrative: Calculate only after actual operative and reference-diagnosis records are available.",
      "mistake": "Counting non-operated patients in the operative denominator without justification.",
      "related": [
        "reference",
        "proportion",
        "accuracy"
      ]
    },
    {
      "id": "complicated",
      "term": "Simple and complicated appendicitis",
      "category": "Appendicitis research concepts",
      "aliases": [
        "simple appendicitis",
        "complicated appendicitis",
        "children and adults"
      ],
      "definition": "Clinical or pathological categories whose exact definitions must come from the study protocol.",
      "purpose": "Define a target outcome or stratify analyses consistently.",
      "formula": "",
      "assumptions": "Specify classification, reference method and paediatric/adult age boundaries from the approved protocol.",
      "interpretation": "Group comparisons must use actual eligible counts and appropriate methods.",
      "example": "Illustrative: Compare recorded marker distributions across protocol-defined groups.",
      "mistake": "Inventing severity definitions, age cutoffs or findings.",
      "related": [
        "reference",
        "mann",
        "welch",
        "bias"
      ]
    }
  ]
};
