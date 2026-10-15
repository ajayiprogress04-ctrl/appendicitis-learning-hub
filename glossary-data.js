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

HUB_GLOSSARY_DATA.entries.push({id:"validity-reliability",term:"Validity and Reliability",aliases:["methodological quality","assessment register","model validation","measurement quality"],category:"Statistical reporting and interpretation",definition:"Validity concerns support for a specified interpretation or use; reliability concerns measurement consistency. Neither follows merely because software calculated a result.",purpose:"Review study-specific diagnostic, measurement, data and methodological evidence.",formula:"",assumptions:"Assessment depends on the intended construct, population, design and evidence.",interpretation:"The register distinguishes calculated checks, documented methodological evidence and unperformed recommendations.",example:"Illustrative: before/after clinician ratings are not a test–retest reliability design.",mistake:"Treating statistical significance, successful calculation or reliability as proof of all forms of validity.",related:["reference","bias","roc"]});

/* Short, study-specific reading text; authoritative coding and formulas elsewhere remain unchanged. */
HUB_GLOSSARY_DATA.entries.push({id:"loocv",term:"Leave-One-Out Cross-Validation (LOOCV)",category:"Correlation and regression",aliases:["LOOCV","leave-one-out","cross-validation"],definition:"Repeatedly fit a model leaving out one observation, then test it on that observation.",purpose:"Assess held-out diagnostic prediction performance in this appendicitis study.",interpretation:"Internal validation, not a diagnostic cut-off or independent external validation.",related:["roc","bias"]});
window.HUB_GLOSSARY_BRIEF = {
  "loocv": [
    "Fit a model repeatedly, leaving out one observation each time and testing it on that observation.",
    "Helps assess appendicitis-model predictions on observations not used to fit them, when the sample, model and validation design are suitable. It is internal validation, not a diagnostic cut-off or independent external validation."
  ],
  "mean": [
    "The average: add the values and divide by the number measured.",
    "Summarises average hs-CRP, hospital stay or expenditure; extreme values can pull it away from a typical patient."
  ],
  "median": [
    "The middle value after sorting the measurements.",
    "Describes a typical patient's hs-CRP, stay or cost when a few very large values distort the average."
  ],
  "sd": [
    "How widely individual measurements spread around their average.",
    "Shows whether patients' hs-CRP, stay or costs vary little or substantially within an appendicitis group."
  ],
  "se": [
    "How uncertain an estimated average is.",
    "Describes precision of a group average, not differences between individual appendicitis patients."
  ],
  "iqr": [
    "The span containing the middle half of the measurements.",
    "Shows the usual spread of hs-CRP, stay or costs without giving extreme patients undue weight."
  ],
  "proportion": [
    "The share of an eligible group with a particular finding.",
    "Makes histology and symptom counts comparable; check which patients form the denominator."
  ],
  "null": [
    "The no-difference or no-association explanation tested against the data.",
    "A cost or hs-CRP comparison asks whether the observed group differences provide evidence against that explanation."
  ],
  "pvalue": [
    "How compatible the observed result, or something more extreme, is with the tested no-difference explanation.",
    "Helps assess group differences under the chosen test; it is not the probability that our conclusion is wrong."
  ],
  "significance": [
    "A result meeting the chosen statistical evidence threshold.",
    "The app uses p < 0.05 as its reporting convention; this does not establish a clinically useful diagnostic improvement."
  ],
  "multiple": [
    "Running several tests increases the chance of a chance finding.",
    "Holm-adjusted p-values account for the comparison family shown in our tables; read them before claiming a group difference."
  ],
  "ci": [
    "An interval showing how precisely a value has been estimated.",
    "Wide sensitivity, specificity or cost-difference intervals mean the study leaves substantial uncertainty about the estimate."
  ],
  "welch": [
    "A comparison of two group averages that allows different variability.",
    "Used where reported for hs-CRP or costs; its estimate concerns the mean difference, not the median difference."
  ],
  "mann": [
    "A comparison of how two groups' measurements rank against each other.",
    "Checks hs-CRP, stay or cost distributions; a difference need not be only a shift in the median."
  ],
  "signed": [
    "A comparison of paired measurements using the ranks of their changes.",
    "Could examine valid before/after assessments, but clinician clustering is unresolved; no confidence p-value should be invented."
  ],
  "anova": [
    "A test comparing averages across three or more independent groups.",
    "Relevant to a planned multi-group numerical comparison only if its assumptions are supported; its presence here does not mean it was run."
  ],
  "kruskal": [
    "A rank-based comparison of three or more independent groups.",
    "Checks negative, simple and complicated groups' recorded costs or durations; follow the displayed method and actual p-value."
  ],
  "contingency": [
    "A table counting combinations of categories.",
    "Links test-positive/negative results with histology-positive/negative status to show correct classifications and errors."
  ],
  "chi": [
    "A test checking whether two categorical findings are associated.",
    "Can compare histology with grouped findings when expected counts are adequate; sparse tables may need an exact test instead."
  ],
  "fisher": [
    "A test of categorical association that works with small cell counts.",
    "Useful for sparse histology-negative or subgroup counts; the p-value describes association, not diagnostic usefulness by itself."
  ],
  "accuracy": [
    "The share of all evaluated patients classified correctly: correct positives plus correct negatives, divided by everyone evaluated.",
    "Combines sensitivity and specificity weighted by the study's disease frequency; it is not generally their simple average."
  ],
  "reference": [
    "The diagnosis used as the benchmark for judging another test.",
    "Our app compares MAS, hs-CRP and supported combinations with the removed appendix's histopathology, using the confirmed disease categories."
  ],
  "sensitivity": [
    "Among patients who truly have the disease, the share the test identifies as positive.",
    "Shows how often a diagnostic strategy detects histology-confirmed appendicitis; missed cases are false negatives."
  ],
  "specificity": [
    "Among patients without the disease, the share the test identifies as negative.",
    "Shows how often a strategy correctly excludes the study's histology-negative cases; incorrect positives reduce specificity."
  ],
  "ppv": [
    "Among positive test results, the share that really have the disease.",
    "Shows how often a positive strategy agrees with appendicitis-positive histology in this cohort; it changes with disease frequency."
  ],
  "npv": [
    "Among negative test results, the share that really do not have the disease.",
    "Shows how often a negative strategy agrees with negative histology in this cohort; it changes with disease frequency."
  ],
  "prevalence": [
    "The share of evaluated patients who have the disease.",
    "Here it refers to histology-positive participants in the selected analysis cohort, not appendicitis frequency in the general population."
  ],
  "likelihood": [
    "How much more common a test result is in diseased versus non-diseased patients.",
    "LR+ and LR− describe how results change diagnostic odds; zero error cells can leave some estimates infinite or undefined."
  ],
  "odds": [
    "A comparison of odds between groups.",
    "Where a model reports an odds ratio, it describes an appendicitis association, not a risk ratio or proof of causation."
  ],
  "risk": [
    "The chance of an outcome in one group divided by that in another.",
    "Use only when the reported analysis estimates risks with suitable denominators; do not relabel a model's odds ratio as relative risk."
  ],
  "pearson": [
    "How strongly two numerical measurements follow a straight-line relationship.",
    "Could relate continuous study measurements; it is not interchangeable with the rank-based Spearman analyses currently reported."
  ],
  "spearman": [
    "How consistently higher values of one measurement accompany higher or lower values of another.",
    "Describes ordered relationships between recorded scores, hs-CRP, costs and durations; association does not establish cause."
  ],
  "regression": [
    "A model describing how a numerical outcome changes with selected predictors.",
    "Table A.3 examines recorded hospital costs against age, stay and diagnosis time together. Its coefficients are conditional mean differences, not causal costs; severity adjustment was not retained."
  ],
  "logistic": [
    "A model predicting the chance of a yes/no outcome.",
    "Our fitted diagnostic models combine recorded measurements to predict histology-positive appendicitis; internal evaluation is not independent clinical validation."
  ],
  "roc": [
    "A curve showing the trade-off between detecting disease and incorrectly flagging its absence as the cutoff changes.",
    "Shows how MAS, hs-CRP or model scores distinguish the histology groups across thresholds, rather than at just one cutoff."
  ],
  "auc": [
    "How often a score ranks a disease-positive patient above a disease-negative patient, with half-credit for ties.",
    "Measures appendicitis discrimination; it does not tell us whether one chosen cutoff is safe or a model's probabilities are well calibrated."
  ],
  "threshold": [
    "The boundary used to call a test positive or negative.",
    "Current fixed rules use MAS ≥7, hs-CRP >3 mg/L and AIR ≥9; they must not be confused with fitted-model probability cutoffs."
  ],
  "delong": [
    "A comparison of two ROC areas measured on the same patients.",
    "The app uses it for unfitted markers; it must not be used to claim superiority of overlapping-training fitted models."
  ],
  "effect": [
    "The size of a difference or association.",
    "Shows whether a cost, biomarker or diagnostic comparison is substantial; read its interval alongside the p-value."
  ],
  "power": [
    "The chance a planned test detects a specified effect if that effect exists.",
    "A small reference-negative or complicated group can miss meaningful differences; a nonsignificant result does not prove equality."
  ],
  "sample": [
    "The number of patients actually included in a calculation.",
    "Check each table's evaluable n: missing fields or subgroup selection can change which patients support the result."
  ],
  "missing": [
    "Information that was not recorded or could not be used.",
    "Missing hs-CRP, histology or cost is not zero or a negative finding; exclusions change the analysis denominator."
  ],
  "mcar": [
    "Missingness unrelated to either recorded or unrecorded patient characteristics.",
    "Would make exclusions less selective, but the study does not establish this merely because some values are absent."
  ],
  "mar": [
    "Missingness explained by other recorded information.",
    "Recorded characteristics might explain an absent cost or measurement; this assumption is not automatically verified or an instruction to impute."
  ],
  "mnar": [
    "Missingness related to the unseen value itself, even after considering recorded information.",
    "If extreme costs or measurements are selectively absent, available-case appendicitis comparisons may be distorted."
  ],
  "quality": [
    "Whether recorded information is complete, consistent and correctly coded.",
    "Unexpected histology labels or invalid scores must be reviewed before diagnostic counts or group comparisons are trusted."
  ],
  "normality": [
    "Whether measurements or model errors approximately follow a bell-shaped distribution, as required by the chosen method.",
    "Helps assess some mean-based comparisons; it is not required for every diagnostic or rank-based analysis."
  ],
  "distribution": [
    "The pattern of values, including their centre, spread and extremes.",
    "Shows whether hs-CRP, stay or costs cluster tightly or contain extreme values, helping choose summaries and comparisons."
  ],
  "paired": [
    "Two observations linked to the same patient or assessment unit.",
    "Before/after confidence ratings are paired within cases; different tests on the same patients also require paired diagnostic comparisons."
  ],
  "independent": [
    "Observations that do not repeat or depend on the same assessment unit.",
    "Patient-group tests require this structure; repeated clinician ratings may need clustering rather than being treated as independent cases."
  ],
  "mcnemar": [
    "A comparison of two yes/no classifications on the same patients, focusing on where they disagree.",
    "Checks paired diagnostic strategies' discordant classifications; it does not compare independent patient groups."
  ],
  "clinical": [
    "Whether a result matters for patient care, beyond meeting a statistical threshold.",
    "A diagnostic difference needs evidence about missed disease and unnecessary positives; a small p-value alone does not establish benefit."
  ],
  "reporting": [
    "Presenting findings with enough detail to understand the evidence.",
    "Our tables and narratives need denominators, appropriate tests and uncertainty; descriptive histology counts do not need invented p-values."
  ],
  "bias": [
    "A systematic distortion, including apparent relationships caused by other patient differences.",
    "Selection into the operated cohort and differences in case mix can limit diagnostic and cost conclusions."
  ],
  "mas": [
    "A clinical appendicitis score combining symptoms, examination and laboratory findings.",
    "The recorded modified score runs from 0 to 9; current binary analyses use ≥7 as positive and compare it with histology."
  ],
  "hscrp": [
    "A blood marker of inflammation measured using a sensitive CRP assay.",
    "The app evaluates recorded hs-CRP against histology; >3 mg/L is the confirmed positive-test rule and ≤3 mg/L is negative, relative to histopathology."
  ],
  "negative": [
    "The share of eligible appendix removals whose histology does not confirm appendicitis.",
    "Reactive lymphoid hyperplasia is negative here; this surgical outcome is different from a false-positive MAS or hs-CRP result."
  ],
  "complicated": [
    "Simple and complicated describe the study's histological severity groups.",
    "Acute, suppurative and phlegmonous are simple; gangrenous and perforated are complicated. Reactive lymphoid hyperplasia remains separate and negative."
  ],
  "validity-reliability": [
    "Validity asks whether a measure supports its intended conclusion; reliability asks whether measurements are consistent.",
    "Calculating diagnostic metrics does not establish clinical validation; before/after confidence changes are not a test of repeatability."
  ],
  "study-histopathology": [
    "The study's rule for deciding whether the removed appendix confirms appendicitis.",
    "Reactive lymphoid hyperplasia is negative. Acute, suppurative, phlegmonous, gangrenous and perforated appendicitis are positive; unknown findings need review."
  ],
  "index-test": [
    "The test or rule whose diagnostic performance is being assessed.",
    "MAS, hs-CRP and supported combined strategies are index tests; each is compared with the same defined histology reference status."
  ],
  "AIR": [
    "An appendicitis score based on signs of inflammation.",
    "The recorded score is 0–12; working groups are 0–4, 5–8 and 9–12, with ≥9 positive in current fixed-rule analyses."
  ],
  "AIR_CATEGORY": [
    "The recorded AIR score grouped into low, intermediate or high probability.",
    "The app uses 0–4, 5–8 and 9–12 respectively; these working groups are not confirmed diagnoses."
  ],
  "AIR_RISK_CATEGORY": [
    "The recorded AIR score grouped into low, intermediate or high probability.",
    "The app uses 0–4, 5–8 and 9–12 respectively; these working groups are not confirmed diagnoses."
  ],
  "MAS_CATEGORY": [
    "The recorded MAS grouped into lower, intermediate or higher probability.",
    "The dictionary uses 0–4, 5–6 and 7–9; a score ≥7 is positive for the fixed MAS-versus-histology analysis."
  ],
  "HS_CRP_3MG_CATEGORY": [
    "Whether recorded hs-CRP is above the study laboratory limit.",
    "Values >3 mg/L count as elevated; exactly 3 does not. Elevation alone does not confirm appendicitis."
  ],
  "combined-rule": [
    "A diagnostic approach using both MAS and hs-CRP.",
    "The app distinguishes fitted probability models from exploratory AND/OR rules; their classifications must not be treated as interchangeable."
  ],
  "tp": [
    "The test is positive and the reference diagnosis confirms disease.",
    "Counts patients correctly identified as having appendicitis when the selected diagnostic rule is compared with histology."
  ],
  "tn": [
    "The test is negative and the reference diagnosis does not confirm disease.",
    "Counts correctly negative classifications among the study’s reactive-lymphoid-hyperplasia cases."
  ],
  "fp": [
    "The test is positive but the reference diagnosis does not confirm disease.",
    "Counts diagnostic false alarms against negative histology; it is not itself the negative appendicectomy rate."
  ],
  "fn": [
    "The test is negative but the reference diagnosis confirms disease.",
    "Counts appendicitis missed by the selected diagnostic rule, directly affecting sensitivity."
  ],
  "age": [
    "A patient’s age in years.",
    "Describes the sample and supports the current children-under-16 versus adults-16-and-over comparisons."
  ],
  "AGE_GROUP": [
    "Whether a patient belongs to the study’s child or adult group.",
    "Under 16 is a child group; 16 or older is an adult group. This grouping does not define laboratory reference bands."
  ],
  "sex": [
    "The patient’s recorded sex category.",
    "Supports demographic and negative-histology subgroup summaries; it also affects the external PCV reference used by the app."
  ],
  "education": [
    "The patient’s recorded level of education.",
    "The demographic table counts each recorded education category; these categories are not years of schooling or evidence of diagnostic performance."
  ],
  "religion": [
    "The patient’s recorded religious affiliation.",
    "The demographic table describes recorded religious groups; no religion–appendicitis association or causal effect is estimated."
  ],
  "occupation": [
    "The patient’s recorded occupation.",
    "The demographic table preserves recorded occupations, including the unexplained code label cs. Small categories do not establish occupational differences in appendicitis or costs."
  ],
  "marital_status": [
    "The patient’s recorded marital status.",
    "The demographic table counts single, married and widow responses. It does not test marital-status differences in diagnosis, confidence or hospital costs."
  ],
  "hosp_n0": [
    "The source record’s hospital identifier.",
    "Links source records during verification; it must not appear in public results or be analysed as a measurement."
  ],
  "abdominal_pain": [
    "Whether abdominal pain was reported.",
    "Describes clinical presentation; source Yes/No responses determine the derived presence field."
  ],
  "ABDOMINAL_PAIN_PRESENT": [
    "Whether abdominal pain was reported.",
    "Describes clinical presentation; source Yes/No responses determine the derived presence field."
  ],
  "migratory": [
    "Whether the patient reported pain moving from one area to another.",
    "A recorded clinical feature examined against histology; do not infer the exact starting or ending location from this Yes/No item."
  ],
  "MIGRATORY_PAIN": [
    "Whether the patient reported pain moving from one area to another.",
    "A recorded clinical feature examined against histology; do not infer the exact starting or ending location from this Yes/No item."
  ],
  "duration_of_pain": [
    "How long the recorded abdominal pain had lasted.",
    "The dictionary treats this as hours for presentation comparisons; it is not a pain-intensity score."
  ],
  "ABDOMINAL_PAIN_DURATION_HRS": [
    "How long the recorded abdominal pain had lasted.",
    "The dictionary treats this as hours for presentation comparisons; it is not a pain-intensity score."
  ],
  "ABDOMINAL_PAIN_DURATION_CAT": [
    "Pain duration grouped into time bands.",
    "The app’s working bands are 0–6, over 6–12, over 12–24 and over 24 hours; these are descriptive, not severity grades."
  ],
  "tendernessRIF": [
    "Tenderness found when examining the right lower abdomen.",
    "A recorded examination finding evaluated against histology."
  ],
  "RIF_TENDERNESS": [
    "Tenderness found when examining the right lower abdomen.",
    "A recorded examination finding evaluated against histology."
  ],
  "reboundtenderness": [
    "Pain elicited when pressure on the abdomen is released.",
    "A recorded examination finding, not proof of complicated appendicitis; its Yes/No coding supports the app’s clinical-sign comparisons."
  ],
  "REBOUND_TENDERNESS": [
    "Pain elicited when pressure on the abdomen is released.",
    "A recorded examination finding, not proof of complicated appendicitis; its Yes/No coding supports the app’s clinical-sign comparisons."
  ],
  "anorexia": [
    "Reported loss of appetite.",
    "Only labelled Yes/No responses are classified; unexpected source codes remain unknown rather than being treated as absent."
  ],
  "ANOREXIA_PRESENT": [
    "Reported loss of appetite.",
    "Only labelled Yes/No responses are classified; unexpected source codes remain unknown rather than being treated as absent."
  ],
  "Vomiting": [
    "The recorded nausea/vomiting response.",
    "A clinical presentation item examined alongside histology; it does not by itself establish appendicitis or its severity."
  ],
  "fever": [
    "Whether fever was recorded.",
    "Describes a clinical feature in our diagnostic comparisons; it does not identify the cause of inflammation by itself."
  ],
  "diarrhea": [
    "Whether diarrhoea was reported.",
    "Describes presentation and supports recorded-sign comparisons; it is not a standalone appendicitis diagnosis."
  ],
  "signs": [
    "One clinical sign selected in the source record.",
    "The selected sign is documented; other unselected signs are unknown, not confirmed absent."
  ],
  "POINTING_SIGN": [
    "Whether pointing sign was selected in the recorded examination category.",
    "The derived field documents selected positives only; other selections cannot be used as confirmed negative findings."
  ],
  "ROVSING_SIGN": [
    "Whether Rovsing sign was selected in the recorded examination category.",
    "The derived field documents selected positives only; other selections cannot be used as confirmed negative findings."
  ],
  "PSOAS_SIGN": [
    "Whether psoas sign was selected in the recorded examination category.",
    "The derived field documents selected positives only; other selections cannot be used as confirmed negative findings."
  ],
  "OBTURATOR_SIGN": [
    "Whether obturator sign was selected in the recorded examination category.",
    "The derived field documents selected positives only; other selections cannot be used as confirmed negative findings."
  ],
  "GENERALIZED_TENDERNESS": [
    "Whether generalised tenderness was selected in the recorded examination category.",
    "The derived field documents selected positives only; other selections cannot be used as confirmed negative findings."
  ],
  "comorbidity": [
    "Another recorded health condition alongside the suspected appendicitis.",
    "May describe case mix, but the source label “RVS” is undefined; no diagnosis or exclusion can be assumed from it."
  ],
  "abd_SCAN": [
    "The diagnosis category recorded from an abdominal scan.",
    "Describes scan findings; the modality and ambiguous source code 3 need confirmation before treating it as a binary diagnostic strategy."
  ],
  "SCAN_DIAGNOSIS": [
    "The diagnosis category recorded from an abdominal scan.",
    "Describes scan findings; the modality and ambiguous source code 3 need confirmation before treating it as a binary diagnostic strategy."
  ],
  "Appendix_position": [
    "The recorded anatomical position of the appendix.",
    "Describes the surgical specimen or operative setting, independently of the histopathological disease-status classification."
  ],
  "length_of_appendix": [
    "The recorded length of the removed appendix.",
    "Retained in centimetres under the dictionary; length alone does not classify simple, complicated or negative appendicitis."
  ],
  "APPENDIX_LENGTH_CM": [
    "The recorded length of the removed appendix.",
    "Retained in centimetres under the dictionary; length alone does not classify simple, complicated or negative appendicitis."
  ],
  "faecolith": [
    "Whether a hardened faecal deposit was recorded in the appendix.",
    "Describes the finding independently of histology; it does not automatically establish appendicitis or complicated disease."
  ],
  "FECALITH": [
    "Whether a hardened faecal deposit was recorded in the appendix.",
    "Describes the finding independently of histology; it does not automatically establish appendicitis or complicated disease."
  ],
  "INTRAOP_FINDING": [
    "The surgeon’s single recorded description of the appendix’s appearance.",
    "Helps identify the specimen-linked operated cohort; histology, not operative appearance alone, determines the app’s disease and severity groups."
  ],
  "INTRAOP_FINDING_STD": [
    "The surgeon’s single recorded description of the appendix’s appearance.",
    "Helps identify the specimen-linked operated cohort; histology, not operative appearance alone, determines the app’s disease and severity groups."
  ],
  "OPERATIVE_RUPTURE": [
    "Whether rupture was specifically recorded during surgery.",
    "Kept separate from histological perforation; it must not silently override the histology-based severity group."
  ],
  "HISTOLOGY_ACUTE_APPENDICITIS": [
    "Whether histology confirms appendicitis under the study’s case definition.",
    "Codes 1–5 are positive and reactive lymphoid hyperplasia, code 6, is negative; missing or unknown labels are not negative."
  ],
  "HISTOLOGY_SEVERITY": [
    "The severity group assigned from the recorded histological diagnosis.",
    "Codes 1–3 are simple and 4–5 complicated; code 6 is negative, not simple appendicitis."
  ],
  "APPENDICITIS_SEVERITY": [
    "The severity group assigned from the recorded histological diagnosis.",
    "Codes 1–3 are simple and 4–5 complicated; code 6 is negative, not simple appendicitis."
  ],
  "diagnostic_confi1": [
    "How confident the doctor felt before receiving MAS and hs-CRP information.",
    "Compared with the same case’s after-rating; the five ordered responses measure confidence, not verified diagnostic accuracy."
  ],
  "DIAG_CONFIDENCE_1": [
    "How confident the doctor felt before receiving MAS and hs-CRP information.",
    "Compared with the same case’s after-rating; the five ordered responses measure confidence, not verified diagnostic accuracy."
  ],
  "diagnostic_confi2": [
    "How confident the doctor felt after receiving MAS and hs-CRP information.",
    "Shows the recorded after-rating; a higher response does not prove a correct diagnosis or that the information caused improvement."
  ],
  "DIAG_CONFIDENCE_2": [
    "How confident the doctor felt after receiving MAS and hs-CRP information.",
    "Shows the recorded after-rating; a higher response does not prove a correct diagnosis or that the information caused improvement."
  ],
  "confidence-change": [
    "Whether confidence rose, stayed the same or fell within a case.",
    "Preserves before/after pairing without assuming equal distances between ratings; repeated clinician involvement limits unrestricted inference."
  ],
  "diagnosis_satisfaction": [
    "The patient’s recorded satisfaction with the diagnostic experience.",
    "Describes patient experience using the original questionnaire categories; it is not a measure of diagnostic correctness."
  ],
  "DIAGNOSTIC_SATISFACTION": [
    "The patient’s recorded satisfaction with the diagnostic experience.",
    "Describes patient experience using the original questionnaire categories; it is not a measure of diagnostic correctness."
  ],
  "Duration_of_admission": [
    "The recorded number of days admitted to hospital.",
    "Measures hospital use for the histological groups; longer stays are not themselves monetary costs or proof of greater disease severity."
  ],
  "LENGTH_OF_STAY_DAYS": [
    "The recorded number of days admitted to hospital.",
    "Measures hospital use for the histological groups; longer stays are not themselves monetary costs or proof of greater disease severity."
  ],
  "LENGTH_OF_STAY_CAT": [
    "Recorded hospital stay grouped into shorter or longer bands.",
    "Working bands are 1–3, over 3–7 and over 7 days; same-day or missing stays are not forced into these categories."
  ],
  "time_to_diagnosis": [
    "The recorded time taken to reach a diagnosis.",
    "Retained as hours for timing comparisons; it does not establish faster diagnosis from MAS and hs-CRP without a suitable comparator."
  ],
  "TIME_TO_DIAGNOSIS_HRS": [
    "The recorded time taken to reach a diagnosis.",
    "Retained as hours for timing comparisons; it does not establish faster diagnosis from MAS and hs-CRP without a suitable comparator."
  ],
  "time_to_surgery": [
    "The recorded time until surgery.",
    "Retained as hours; group differences describe timing, not why surgery was delayed or whether a diagnostic strategy reduced delay."
  ],
  "TIME_TO_SURGERY_HRS": [
    "The recorded time until surgery.",
    "Retained as hours; group differences describe timing, not why surgery was delayed or whether a diagnostic strategy reduced delay."
  ],
  "TIME_TO_DIAGNOSIS_CAT": [
    "The recorded time to diagnosis grouped into time bands.",
    "Working bands are 0–6, over 6–12, over 12–24 and over 24 hours; these are not clinical delay thresholds."
  ],
  "TIME_TO_SURGERY_CAT": [
    "The recorded time to surgery grouped into time bands.",
    "Working bands are 0–6, over 6–12, over 12–24 and over 24 hours; these are not clinical delay thresholds."
  ],
  "total_costs": [
    "The recorded total hospital expenditure, in Nigerian naira.",
    "Supports cost comparisons across histological groups; there are no itemised costs or verified incremental MAS–hs-CRP pathway savings."
  ],
  "TOTAL_COST": [
    "The recorded total hospital expenditure, in Nigerian naira.",
    "Supports cost comparisons across histological groups; there are no itemised costs or verified incremental MAS–hs-CRP pathway savings."
  ],
  "TOTAL_COST_CAT": [
    "Recorded costs grouped relative to this dataset’s lower and upper thirds.",
    "Describes comparatively lower or higher spending in this sample, not universal affordability bands; tied values may give unequal group sizes."
  ],
  "postop_complication": [
    "The single recorded postoperative outcome category.",
    "Describes complications after surgery; an unselected complication is not necessarily confirmed absent when another category was selected."
  ],
  "ANY_POSTOP_COMPLICATION": [
    "Whether the selected postoperative category documents any complication.",
    "Distinguishes explicit “none” from a recorded complication; missing categories stay unknown, not complication-free."
  ],
  "SUPERFICIAL_SSI": [
    "Whether superficial wound infection was specifically recorded after surgery.",
    "Documents that selected outcome; explicit “none” supports absence, while a different selected complication does not exclude coexistence."
  ],
  "DEEP_SSI": [
    "Whether deep wound infection was specifically recorded after surgery.",
    "Documents that selected outcome; explicit “none” supports absence, while a different selected complication does not exclude coexistence."
  ],
  "ORGAN_SPACE_SSI": [
    "Whether infection in the operated body space was specifically recorded after surgery.",
    "Documents that selected outcome; explicit “none” supports absence, while a different selected complication does not exclude coexistence."
  ],
  "INCISIONAL_COMPLICATION": [
    "Whether wound separation was specifically recorded after surgery.",
    "Documents that selected outcome; explicit “none” supports absence, while a different selected complication does not exclude coexistence."
  ],
  "INCISIONAL_HERNIA": [
    "Whether incisional hernia was specifically recorded after surgery.",
    "Documents that selected outcome; explicit “none” supports absence, while a different selected complication does not exclude coexistence."
  ],
  "POSTOPERATIVE_DEATH": [
    "Whether postoperative death was specifically recorded after surgery.",
    "Documents that selected outcome; explicit “none” supports absence, while a different selected complication does not exclude coexistence."
  ],
  "POSTOPERATIVE_ILEUS": [
    "Whether postoperative bowel inactivity was specifically recorded after surgery.",
    "Documents that selected outcome; explicit “none” supports absence, while a different selected complication does not exclude coexistence."
  ],
  "pcv": [
    "The percentage of blood volume occupied by red blood cells.",
    "Describes a recorded blood measurement; the app’s external age/sex reference is not a verified local appendicitis diagnostic cutoff."
  ],
  "wbc": [
    "The concentration of white blood cells.",
    "A recorded inflammatory measurement and score component; the app does not infer a standalone WBC diagnostic strategy without a defined rule."
  ],
  "neutrophil": [
    "The recorded percentage of white blood cells that are neutrophils.",
    "Retained as a percentage, not an absolute count; inflammatory patterns are not specific proof of appendicitis."
  ],
  "PCV_CATEGORY": [
    "Whether the recorded red-cell proportion is below, within or above the selected external reference.",
    "The app uses an external laboratory comparison; these labels do not establish appendicitis and require local applicability checks."
  ],
  "PCV_REF_LOW": [
    "The lower limit of the selected external reference for red-cell proportion.",
    "Used to classify the corresponding blood measurement; it is not a threshold for histology-positive appendicitis."
  ],
  "PCV_REF_HIGH": [
    "The upper limit of the selected external reference for red-cell proportion.",
    "Used to classify the corresponding blood measurement; it is not a threshold for histology-positive appendicitis."
  ],
  "WBC_CATEGORY": [
    "Whether the recorded white-cell count is below, within or above the selected external reference.",
    "The app uses an external laboratory comparison; these labels do not establish appendicitis and require local applicability checks."
  ],
  "WBC_REF_LOW": [
    "The lower limit of the selected external reference for white-cell count.",
    "Used to classify the corresponding blood measurement; it is not a threshold for histology-positive appendicitis."
  ],
  "WBC_REF_HIGH": [
    "The upper limit of the selected external reference for white-cell count.",
    "Used to classify the corresponding blood measurement; it is not a threshold for histology-positive appendicitis."
  ],
  "NEUTROPHIL_CATEGORY": [
    "Whether the recorded neutrophil percentage is below, within or above the selected external reference.",
    "The app uses an external laboratory comparison; these labels do not establish appendicitis and require local applicability checks."
  ],
  "NEUTROPHIL_REF_LOW": [
    "The lower limit of the selected external reference for neutrophil percentage.",
    "Used to classify the corresponding blood measurement; it is not a threshold for histology-positive appendicitis."
  ],
  "NEUTROPHIL_REF_HIGH": [
    "The upper limit of the selected external reference for neutrophil percentage.",
    "Used to classify the corresponding blood measurement; it is not a threshold for histology-positive appendicitis."
  ],
  "WBC_MAS_THRESHOLD": [
    "Whether WBC exceeds the MAS component boundary.",
    "The documented rule is >10 ×10⁹/L; this score-component flag is different from age-specific laboratory normality."
  ],
  "brier-score": [
    "The average squared gap between predicted probability and actual yes/no disease status.",
    "Lower values mean better probability predictions in the stated model evaluation; apparent and held-out values must be kept separate."
  ],
  "log-loss": [
    "A measure that penalises incorrect probability predictions, especially confident mistakes.",
    "Lower values favour better model probabilities in the reported evaluation; they do not establish external validation."
  ],
  "calibration": [
    "How closely predicted chances match observed disease frequency.",
    "Shows whether a model’s appendicitis probabilities agree with histology in the evaluated patients; good ranking alone does not guarantee this."
  ],
  "cramer-v": [
    "The strength of an association between categorical findings.",
    "Complements categorical histology or AIR comparisons; it describes strength, not the direction or a causal relationship."
  ],
  "rank-biserial": [
    "How often one group’s measurements rank above rather than below another’s.",
    "Describes direction and size in rank-based hs-CRP, stay or cost comparisons; use the table’s stated first-minus-second orientation."
  ],
  "degrees-freedom": [
    "The amount of independent information used in a test’s reference distribution.",
    "Helps interpret a reported t or chi-square-type statistic; exact tests may have no applicable degrees of freedom."
  ],
  "t-statistic": [
    "The estimated difference expressed relative to its uncertainty.",
    "In a reported Welch comparison it relates group mean differences to variability; it is not the difference in NGN or mg/L itself."
  ],
  "z-statistic": [
    "A result expressed in standard-error units.",
    "Used in the app’s DeLong or approximate rank procedures; read the associated method and p-value rather than interpreting z as clinical size."
  ]
};

/* Educational interpretation guides only: never diagnostic cutoffs or analysis rules. */
window.HUB_GLOSSARY_GUIDES=(()=>{
 const guides={},add=(ids,rows,note,source)=>ids.split(' ').forEach(id=>guides[id]={rows,note,source});
 const cdc={title:'CDC, Principles of Epidemiology: diagnostic test measures',url:'https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson5/quizanswers.html'},asa={title:'ASA Statement on Statistical Significance and P-Values (2016)',url:'https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf'},lr={title:'Altman & Bland. Diagnostic tests 4: likelihood ratios. BMJ 2004;329:168.',url:'https://www.bmj.com/content/329/7458/168'},prediction={title:'Riley et al. Evaluation of clinical prediction models (part 2). BMJ 2024;384:e074820.',url:'https://www.bmj.com/content/384/bmj-2023-074820'},nist={title:'NIST/SEMATECH statistical handbook',url:'https://www.itl.nist.gov/div898/handbook/'};
 add('auc',[
 ['0 ≤ AUC < 0.50','Worse than chance for the stated direction'],['AUC = 0.50','Chance-level discrimination'],['0.50 < AUC < 0.60','Poor'],['0.60 ≤ AUC < 0.70','Weak'],['0.70 ≤ AUC < 0.80','Acceptable'],['0.80 ≤ AUC < 0.90','Good'],['0.90 ≤ AUC < 1.00','Excellent'],['AUC = 1.00','Perfect discrimination in the evaluated sample']
 ],'Approximate descriptive guides requested for this app, not universal standards or diagnostic cut-offs. Exactly 0.50 is reserved for chance; classify unrounded values. Below 0.50 may indicate reversed ranking. Read the 95% CI; sample perfection does not establish external performance.',null);
 add('roc',[['Both axes: 0–1','Sensitivity versus 1 − specificity'],['Diagonal (AUC = 0.50)','Chance-level ranking'],['Towards upper left','More favourable sensitivity/specificity trade-off']],'ROC has no single quality range; use the related AUC guide. A chosen operating point is a separate diagnostic cutoff.',prediction);
 const meanings={sensitivity:'Histopathology-positive cases correctly identified',specificity:'Histopathology-negative cases correctly identified',accuracy:'All evaluated participants correctly classified',ppv:'Test-positive participants with positive histopathology',npv:'Test-negative participants with negative histopathology'};
 for(const [id,meaning] of Object.entries(meanings))add(id,[['0–1 (0–100%)',meaning],['0% / 100%','None / all correct within this measure’s denominator']],'No universal poor/good/excellent cutoffs. Read denominators and 95% CIs; clinical consequences matter. '+(['ppv','npv','accuracy'].includes(id)?'Disease prevalence changes interpretation.':'Sparse reference groups can give very imprecise estimates.'),cdc);
 add('likelihood',[['0 ≤ LR < 1','This result lowers disease odds'],['LR = 1','No change in disease odds'],['LR > 1','This result raises disease odds'],['LR+ > 10','Conventional guide: large increase in odds'],['0 ≤ LR− < 0.10','Conventional guide: large decrease in odds']],'LR+ concerns a positive result; LR− a negative result. Exactly 10 or 0.10 is outside these strict guide bands. Interpret with pretest odds and the CI; zero/infinite sample estimates may have unestimable intervals. These are approximate evidence guides, not diagnoses.',lr);
 add('pvalue significance',[['0 ≤ p < 0.05','Meets the app’s retained significance convention'],['0.05 ≤ p ≤ 1','Does not meet that convention']],'Not effect size, clinical importance or the probability a hypothesis is true. Use adjusted p-values where supplied; sample size affects p. Report very small values as p < 0.001 when justified, never p = 0.000.',asa);
 add('ci',[['95% confidence level','About 95% coverage over repeated samples under the method’s assumptions'],['Difference interval includes 0','Compatible with no difference'],['OR/RR/LR interval includes 1','Compatible with no relative change']],'No universal narrow/wide or good/poor limits: scale, sample size and method matter. The interval is not a 95% probability for this fixed parameter. CI/test conclusions align only for matching methods; including the null does not prove equivalence.',nist);
 add('effect',[['Difference = 0; ratio = 1','Null effect on the corresponding scale'],['Other values','Interpret direction, units, size and 95% CI']],'No single numerical scale covers every effect size. In this study, NGN differences, rank-biserial effects and Cramér V answer different questions; statistical significance is not clinical importance.',asa);
 add('pearson spearman rank-biserial',[['−1 ≤ value < 0','Negative direction'],['Value = 0','No association on this statistic’s scale'],['0 < value ≤ 1','Positive direction']],'No universal small/moderate/large bands. Pearson describes linear and Spearman monotonic association; rank-biserial describes first-group rank dominance. Zero does not rule out every relationship; use the stated coding, group direction and CI.',nist);
 add('cramer-v',[['0 ≤ V ≤ 1','Nonnegative categorical association strength'],['V = 0','No observed association on this scale'],['Larger V','Stronger association, without direction']],'No universal small/medium/large thresholds: table dimensions, sample size and context matter. A large association does not establish clinical usefulness or causation.',nist);
 add('odds risk',[['0 ≤ ratio < 1','Lower odds/risk in the numerator group'],['Ratio = 1','Equal odds/risk'],['Ratio > 1','Higher odds/risk in the numerator group']],'OR and RR are different measures. Use reference coding and 95% CI; boundary estimates may be infinite or undefined. These are direction guides, not universal effect-size grades.',cdc);
 add('brier-score',[['0–1, binary mean squared error','Lower prediction error is better'],['0 / 1','Perfect predictions / maximally wrong predictions']],'No universal good/poor cutoff; the constant-prevalence benchmark is π(1−π), not always 0.25. Brier score reflects calibration and discrimination, not clinical utility.',{title:'scikit-learn: binary Brier score definition',url:'https://scikit-learn.org/stable/modules/generated/sklearn.metrics.brier_score_loss.html'});
 add('log-loss',[['0 to +∞','Lower probability-prediction loss is better'],['0','Perfect outcome probabilities'],['Towards +∞','Confidently wrong predictions']],'No universal good/poor bands. Compare the same patients and evaluation design; the app clips probabilities for numerical stability.',{title:'scikit-learn: log loss definition',url:'https://scikit-learn.org/stable/modules/generated/sklearn.metrics.log_loss.html'});
 add('calibration',[['Predicted/observed proportions: 0–1','Compare on the same probability scale'],['On the identity line','Predicted risk matches observed frequency'],['Above / below the line','Risk underprediction / overprediction (observed on vertical axis)']],'No universal acceptable-distance cutoff. The app uses grouped observed-rate intervals; sparse bins and wide CIs limit interpretation. AUC ranking alone does not establish calibration.',prediction);
 const aliases={auc:['area under the receiver operating characteristic curve'],roc:['receiver operating characteristic','receiver operating characteristic curve'],sensitivity:['true positive rate','TPR'],specificity:['true negative rate','TNR'],accuracy:['ACC','classification accuracy'],ppv:['PPV'],npv:['NPV'],likelihood:['LR−','LR minus','LR plus','LR negative','LR positive'],ci:['95% CI','95% confidence interval'],effect:['ES'],odds:['OR'],risk:['RR']};
 for(const e of HUB_GLOSSARY_DATA.entries)if(aliases[e.id])e.aliases=[...new Set([...e.aliases,...aliases[e.id]])];
 return guides;
})();

/* Focused adjusted-cost terminology; no statistical calculations. */
HUB_GLOSSARY_DATA.entries.push({id:'adjusted-cost',term:'Adjusted hospital-cost association',category:'Correlation and regression',aliases:['adjusted cost','adjusted mean cost difference','multivariable cost regression'],definition:'A cost difference estimated while holding selected recorded factors constant.',purpose:'Read Table A.3 conditional cost associations.',interpretation:'Not a causal or incremental pathway effect.',related:['regression','ci']},{id:'hc3',term:'HC3 robust standard errors',category:'Correlation and regression',aliases:['HC3','heteroskedasticity-robust standard errors','robust standard errors'],definition:'Uncertainty estimates allowing unequal residual variability, with leverage adjustment.',purpose:'Interpret uncertainty in Table A.3.',interpretation:'Not a correction for confounding or poor model specification.',related:['regression','ci']});
HUB_GLOSSARY_BRIEF['adjusted-cost']=['A cost difference estimated while holding the model’s other recorded factors constant.','Table A.3 adjusts for age, stay and diagnosis time. It does not estimate a causal severity effect, added hs-CRP costs or savings.'];
HUB_GLOSSARY_BRIEF.hc3=['A way to estimate uncertainty when residual variability differs, with adjustment for influential predictor values.','Table A.3 uses HC3 intervals for its cost coefficients. This does not fix confounding, dependence or an unsuitable model.'];

/* OLS/HC3 explanations verified against costOLS() and adjustedCost(). */
HUB_GLOSSARY_DATA.entries.push({id:'ols',term:'Exploratory OLS (Ordinary Least Squares) Regression',category:'Correlation and regression',aliases:['OLS','OLS regression','Exploratory OLS Regression','ordinary least squares','ordinary least squares regression','exploratory linear regression'],definition:'Fits a linear mean relationship by minimising squared residuals, the gaps between observed and fitted outcomes.',purpose:'Explore how a numerical outcome relates to one or more justified predictors.',interpretation:'Coefficients are conditional mean differences, not automatically causal effects.',related:['hc3','adjusted-cost','regression','ci','pvalue']});
HUB_GLOSSARY_BRIEF.ols=[
 'Ordinary least squares (OLS) fits a linear mean relationship by making the squared gaps between observed and fitted outcomes as small as possible. It explores how a numerical outcome relates to one or more predictors.',
 'Table A.3 uses OLS for recorded total hospital cost against age, stay and diagnosis time together. A coefficient is the NGN difference per predictor unit, holding the others constant. It is exploratory association, not a causal cost or saving.'
];
{
 const e=HUB_GLOSSARY_DATA.entries.find(e=>e.id==='hc3');
 Object.assign(e,{term:'HC3 Robust Confidence Intervals',definition:'HC3 means heteroskedasticity-consistent covariance estimator, type 3; it estimates OLS uncertainty with residual and leverage adjustment.',purpose:'Allow unequal residual variance in OLS coefficient confidence intervals and tests.',interpretation:'Changes standard errors, intervals and p-values, not the OLS coefficient estimates.',related:['ols','adjusted-cost','ci','pvalue']});
 e.aliases=[...new Set([...e.aliases,'HC3 robust confidence intervals','HC3 confidence intervals','HC3 robust standard errors','heteroskedasticity-consistent covariance estimator type 3','heteroskedasticity-consistent covariance estimator, type 3','heteroscedasticity','heteroskedasticity','leverage adjustment'])];
}
HUB_GLOSSARY_BRIEF.hc3=[
 'HC3 means heteroskedasticity-consistent covariance estimator, type 3. It adjusts the residual-based uncertainty calculation for unequal residual variance and predictor leverage, without refitting or changing the OLS coefficients.',
 'Table A.3 actually uses HC3 standard errors, approximate t-based 95% intervals and two-sided p-values. Robust intervals can be wider or narrower than ordinary OLS intervals; they are not a different cost estimate.'
];
HUB_GLOSSARY_GUIDES.ols={rows:[['Coefficient = 0','No conditional mean association on that predictor’s scale'],['Positive / negative coefficient','Higher / lower mean outcome per predictor unit, holding others constant'],['Standard error ≥0','Uncertainty in the coefficient; smaller means more precision on the same scale'],['95% CI includes 0','Compatible with no coefficient effect; does not prove equivalence'],['p <0.05 / p ≥0.05','Meets / does not meet the app’s retained convention; use multiplicity adjustment where supplied'],['In-sample R²: 0–1 (OLS with intercept)','Fraction of observed outcome variation explained; not external prediction performance']],note:'No universal good coefficient, standard-error or R² cutoff. Use an appropriate numerical outcome, a plausible linear conditional mean, independent observations and adequate residual behaviour. Inspect residual patterns, skewness, leverage and deletion sensitivity; binary/ordinal outcomes usually need different models. Ordinary OLS intervals assume equal residual variance; exact small-sample t inference also assumes normally distributed errors. Neither significance nor model fit establishes causation.',source:{title:'NIST/SEMATECH: linear least-squares regression and model validation',url:'https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm'}};
HUB_GLOSSARY_GUIDES.hc3={rows:[['OLS coefficient','Unchanged by choosing HC3 covariance'],['HC3 standard error','Uses squared residuals divided by (1 − leverage)² in the sandwich covariance'],['App’s 95% CI','Coefficient ± t critical value × HC3 standard error'],['App’s test statistic','Coefficient ÷ HC3 standard error; approximate two-sided t inference'],['CI includes 0 / excludes 0','Compatible with zero / excludes zero under this interval method; not a clinical-importance grade']],note:'The app uses residual df = n − p, counting the intercept in p; robust t inference is approximate. Ordinary OLS intervals suit independent, correctly specified models with constant residual variance; HC3 allows unequal variance and adjusts for leverage. HC3 does not correct omitted-variable bias, misspecified/nonlinear mean relationships, dependent observations, poor data or an unsuitable outcome. It does not make an influential or small-sample model reliable automatically.',source:{title:'statsmodels: HC3 covariance and robust inference (MacKinnon–White estimator)',url:'https://www.statsmodels.org/stable/generated/statsmodels.regression.linear_model.OLSResults.html'}};

// Researcher-confirmed diagnostic thresholds; concentrations unchanged.
HUB_GLOSSARY_BRIEF.CRP=["High-sensitivity C-reactive protein, an inflammatory marker recorded in mg/L.","In this study >3 mg/L is a positive index test and ≤3 mg/L is negative, compared with histopathology. This is separate from defining a combined MAS–hs-CRP rule."];
HUB_GLOSSARY_BRIEF.HS_CRP_3MG_CATEGORY=HUB_GLOSSARY_BRIEF.CRP;

HUB_GLOSSARY_BRIEF.AIR=["Appendicitis Inflammatory Response score, recorded on a 0–12 point scale.","The confirmed study rule is AIR ≥9 positive and AIR <9 negative against histopathology. Probability bands remain 0–4 low,5–8 intermediate,9–12 high. Its published components include CRP, WBC, neutrophils and clinical findings; it is not independent of these components."];
HUB_GLOSSARY_BRIEF.AIR_CATEGORY=HUB_GLOSSARY_BRIEF.AIR;HUB_GLOSSARY_BRIEF.AIR_RISK_CATEGORY=HUB_GLOSSARY_BRIEF.AIR;
