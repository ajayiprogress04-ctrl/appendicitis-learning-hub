/* Approved objective statements retained unchanged. */
window.HUB_DATA = {
  "title": "Appendicitis Research Statistical Test Learning Hub",
  "researchTitle": "Diagnostic Accuracy of Modified Alvarado Score Plus High Sensitivity C-Reactive Protein in Acute Appendicitis",
  "objectives": [
    {
      "id": 1,
      "short": "MAS plus hsCRP",
      "title": "Does adding hsCRP help?",
      "color": "#166b79",
      "description": "Compare MAS alone with a defensible combined model.",
      "approved": "compare the accuracy of modified Alvarado score (MAS) alone versus MAS plus high sensitivity c-reactive protein (hsCRP) in the diagnosis of acute appendicitis",
      "note": "No prespecified combined AND/OR rule was recovered. The workspace uses exploratory Firth models with a fixed analyst 0.50 probability cutoff and leave-one-out evaluation. MAS \u22657 is protocol-supported categorization; hsCRP >3 mg/L is the confirmed study-positive threshold; ≤3 mg/L is negative.",
      "contribution": "Ask whether hsCRP supplies information beyond MAS, while separating apparent discrimination from validated clinical benefit.",
      "methods": [
        {
          "id": "sensitivity",
          "status": "Measure",
          "here": "Describe each stated classification against the same histological reference.",
          "client": "Sensitivity and specificity show detection and correct disease exclusion together."
        },
        {
          "id": "predictive",
          "status": "Measure",
          "here": "Interpret positive and negative classifications in this selected surgical cohort.",
          "client": "A predictive value describes this case mix; it may change in a different clinical population."
        },
        {
          "id": "accuracy",
          "status": "Measure",
          "here": "Summarise correctness without letting the many positive cases hide poor specificity.",
          "client": "High accuracy alone can be misleading when most participants have appendicitis."
        },
        {
          "id": "roc",
          "status": "Exploratory model assessment",
          "here": "Compare score ranking while retaining continuous hsCRP.",
          "client": "AUC tells us about ranking across thresholds, not how useful our selected cutoff is."
        },
        {
          "id": "ci",
          "status": "Conditional uncertainty",
          "here": "Show imprecision, when reference-negative specimens are sparse.",
          "client": "The interval tells us how uncertain the estimate is; it does not remove model-development bias."
        },
        {
          "id": "logistic",
          "status": "Exploratory model",
          "here": "Compare equally fitted MAS-only and MAS-plus-hsCRP models.",
          "client": "A like-for-like model comparison examines whether the biomarker adds information."
        },
        {
          "id": "firth",
          "status": "Exploratory model",
          "here": "Stabilise the sparse-outcome logistic fits.",
          "client": "Firth stabilises estimation, but sparse negative cases still limit what we can conclude."
        },
        {
          "id": "mcnemar",
          "status": "Exploratory paired comparison",
          "here": "Compare paired binary correctness at explicitly stated thresholds.",
          "client": "This uses patients where the methods disagree; fitted-model comparisons remain exploratory."
        },
        {
          "id": "delong",
          "status": "Fixed-marker comparison only",
          "here": "Compare paired raw-marker AUCs, not claim confirmatory benefit for nested same-data models.",
          "client": "For fixed scores on the same patients, the AUC comparison must account for paired measurements."
        },
        {
          "id": "validation",
          "status": "Internal validation",
          "here": "Refit the whole modelling procedure to assess optimism.",
          "client": "Internal checks show how optimistic the development result may be; independent validation is still needed."
        },
        {
          "id": "youden",
          "status": "Exploratory cutoff",
          "here": "Explain the protocol\u2019s planned empirical cutoff selection.",
          "client": "A sample-optimal cutoff is exploratory and may not match the clinical priority."
        }
      ]
    },
    {
      "id": 2,
      "short": "Simple vs complicated",
      "title": "Does hsCRP distinguish severity?",
      "color": "#7654a3",
      "description": "Compare concentrations and severity discrimination.",
      "approved": "determine the diagnostic value of hsCRP in simple acute appendicitis and complicated appendicitis",
      "note": "Approved histological severity is independent of operative findings: histology 1\u20133 simple, 4\u20135 complicated, 6 not applicable. No combined clinical severity endpoint is inferred.",
      "contribution": "Distinguish a concentration difference from useful severity classification.",
      "methods": [
        {
          "id": "summaries",
          "status": "Description",
          "here": "Describe the group concentration distributions in mg/L.",
          "client": "Group summaries show typical hsCRP concentrations and variation within each group."
        },
        {
          "id": "welch",
          "status": "Conditional group comparison",
          "here": "Compare mean hsCRP in independent pathology groups without requiring equal variances.",
          "client": "The mean difference quantifies separation, but does not itself prove diagnostic usefulness."
        },
        {
          "id": "mann",
          "status": "Rank-based comparison",
          "here": "Assess distributional separation when a rank approach is justified.",
          "client": "This compares relative ranks, not automatically a difference in medians."
        },
        {
          "id": "roc",
          "status": "Conditional discrimination",
          "here": "Use continuous hsCRP to rank complicated versus provisionally simple cases.",
          "client": "A severity AUC addresses a different target from detecting appendicitis itself."
        },
        {
          "id": "sensitivity",
          "status": "Threshold measure",
          "here": "Describe a stated severity cutoff only after fixing the target categories.",
          "client": "A severity threshold must show how many complicated cases it misses as well as detects."
        },
        {
          "id": "ci",
          "status": "Uncertainty",
          "here": "Show imprecision in estimates from the small complicated group.",
          "client": "The interval is especially important because the complicated group is small."
        },
        {
          "id": "youden",
          "status": "Exploratory cutoff",
          "here": "Explain an empirical severity cutoff without presenting it as prespecified.",
          "client": "This cutoff was selected from the sample, so its apparent performance needs validation."
        }
      ]
    },
    {
      "id": 3,
      "short": "Children vs adults",
      "title": "Does performance vary with age?",
      "color": "#bd561b",
      "description": "Use the approved boundary: children <16; adults \u226516.",
      "approved": "compare the accuracy of combined MAS and hsCRP in children (under 16 years) and adults (16 years and above)",
      "note": "Apply the same pooled model and threshold to both groups. The cohort has only one reference-negative child, so paediatric specificity is highly uncertain and a reliable between-group AUC test is not supported.",
      "contribution": "Describe age-group performance without manufacturing differences by separately optimising models or cutoffs.",
      "methods": [
        {
          "id": "sensitivity",
          "status": "Group description",
          "here": "Describe the common classification separately by age.",
          "client": "Both age groups use the same model and threshold, so the comparison has a common basis."
        },
        {
          "id": "accuracy",
          "status": "Group description",
          "here": "Interpret correctness alongside each group\u2019s disease proportion.",
          "client": "A numerical accuracy difference may partly reflect case mix rather than an intrinsically better test."
        },
        {
          "id": "ci",
          "status": "Sparse-data uncertainty",
          "here": "Show how sparse reference-negative children limit subgroup precision.",
          "client": "Very wide specificity intervals prevent a confident age-specific conclusion."
        },
        {
          "id": "fisher",
          "status": "Exploratory conditional comparison",
          "here": "Compare suitable yes/no outcomes between children and adults. Because the rule was fitted on these cases, this comparison is exploratory and omits uncertainty from developing the model.",
          "client": "These are separate age groups, so McNemar is inappropriate; tests of fitted classifications remain exploratory."
        },
        {
          "id": "roc",
          "status": "Descriptive AUC only",
          "here": "Describe ranking while withholding unreliable paediatric AUC inference.",
          "client": "A perfect paediatric AUC with sparse reference negatives is not proof of superior performance."
        },
        {
          "id": "validation",
          "status": "Exploratory internal check",
          "here": "Use pooled refits consistently across ages.",
          "client": "Held-out results can reveal optimism, but sparse reference-negative children limit subgroup inference."
        }
      ]
    },
    {
      "id": 4,
      "short": "Negative appendicectomy",
      "title": "How often was surgery negative?",
      "color": "#26743f",
      "description": "Estimate the histology-based proportion in the operated cohort.",
      "approved": "determine the rate of negative appendicectomy in the study",
      "note": "Histopathology is the protocol reference. Code 6 denotes reactive lymphoid hyperplasia and is negative only under the assumption of no concurrent acute appendicitis. It is not a normal-appendix code. Use the submitted specimen-linked operated cohort, not all assessed patients.",
      "contribution": "Report the negative numerator, operated denominator, verification completeness and precision.",
      "methods": [
        {
          "id": "rate",
          "status": "Primary proportion",
          "here": "Use the verified operated denominator and conditional histology definition.",
          "client": "The rate refers to the analysed operations under our explicit histology definition."
        },
        {
          "id": "wilson",
          "status": "Primary interval",
          "here": "Quantify uncertainty in the negative appendicectomy proportion.",
          "client": "The Wilson interval shows how precisely the observed proportion is estimated."
        },
        {
          "id": "summaries",
          "status": "Supporting description",
          "here": "Describe the operated cohort and histopathological categories.",
          "client": "Descriptive summaries explain the cohort without adding unnecessary hypothesis tests."
        }
      ]
    },
    {
      "id": 5,
      "short": "Diagnostic confidence",
      "title": "Did clinicians feel more confident?",
      "color": "#a43c68",
      "description": "Describe confirmed before-and-after case ratings.",
      "approved": "To assess changes in clinicians’ confidence in diagnosing acute appendicitis before and after receiving combined Modified Alvarado Score (MAS) and hs-CRP information.",
      "note": "The liaison confirmed before/after timing and the same clinician within each patient pair. Clinician IDs and professional-group linkage are unavailable. For Table 5.4, the researcher directs an assumption of one unique doctor per patient and no doctor assessing multiple patients. A two-sided exact paired sign test is used for ordinal change; this independence structure requires protocol confirmation. Clinician-group tests remain unsupported.",
      "contribution": "Show perceived diagnostic assurance while distinguishing it from objectively faster or more accurate diagnosis.",
      "methods": [
        {
          "id": "ordinal",
          "status": "Primary description",
          "here": "Preserve the five confidence categories.",
          "client": "Higher recorded confidence describes diagnostic assurance, not diagnostic accuracy."
        },
        {
          "id": "transitions",
          "status": "Primary paired description",
          "here": "Trace each patient\u2019s confirmed paired ratings.",
          "client": "Paired transitions count higher, unchanged and lower confidence ratings."
        },
        {
          "id": "clustering",
          "status": "Missing linkage",
          "here": "Explain why many rated cases cannot be counted as many independent doctors.",
          "client": "Without clinician IDs, we cannot compare professional groups or account for repeated cases."
        },
        {
          "id": "wilcoxon",
          "status": "Conditional sensitivity analysis",
          "here": "Report tied-rank and zero-change handling and the additional category-increment assumptions.",
          "client": "The primary exact sign test preserves the ordinal direction. Wilcoxon is a conditional sensitivity analysis under rankable category increments and a symmetric-difference null. Both tests depend on the assumed unique doctor per case; clinician clustering cannot be verified."
        }
      ]
    },
    {
      "id": 6,
      "short": "Hospital amounts",
      "title": "What do the monetary records show?",
      "color": "#2c63ad",
      "description": "Summarise recorded amounts without assuming cost savings.",
      "approved": "To estimate the direct hospital cost implications of using combined MAS and hs-CRP in evaluating patients with suspected acute appendicitis.",
      "note": "Currency is confirmed as Nigerian naira. The components, accounting basis and price year of total_costs are unknown. No itemised hsCRP cost or comparable routine pathway is supplied, so incremental cost and savings are not estimable.",
      "contribution": "Describe the available monetary records and identify the evidence needed for a defensible economic comparison.",
      "methods": [
        {
          "id": "cost",
          "status": "Primary description",
          "here": "Summarise total_costs using an accurate neutral label.",
          "client": "These are recorded amounts, not verified resource costs or proven charges."
        },
        {
          "id": "summaries",
          "status": "Distribution summary",
          "here": "Show typical amounts, variability and the cohort sum.",
          "client": "The mean helps summarise the aggregate; the median helps describe a typical record."
        },
        {
          "id": "incremental",
          "status": "Not estimable here",
          "here": "Distinguish the two fixed combination strategies from their unrecorded management-pathway costs.",
          "client": "Separate strategy costs and their difference require resource quantities, unit prices and a documented pathway for MAS and hs-CRP and MAS or hs-CRP. Recorded cohort totals alone do not identify these costs."
        }
      ]
    }
  ],
  "methods": {
    "sensitivity": {
      "id": "sensitivity",
      "name": "Sensitivity and specificity",
      "kind": "Performance measure",
      "origin": "Sensitivity means noticing disease. Specificity means avoiding a disease label when disease is absent.",
      "purpose": "Count disease detected and non-disease correctly excluded at one threshold.",
      "meaning": "Sensitivity = TP/(TP+FN); specificity = TN/(TN+FP). They answer different questions.",
      "interpret": "Report both proportions, their denominators and intervals. High sensitivity alone does not establish a useful test.",
      "example": "80 true positives and 20 false negatives give 80% sensitivity; 90 true negatives and 10 false positives give 90% specificity.",
      "limits": "Define the threshold and reference diagnosis first. A tiny non-disease denominator makes specificity very uncertain.",
      "tags": "TP TN FP FN true positive false negative diagnostic accuracy",
      "terms": [
        "TP",
        "FN",
        "TN",
        "FP",
        "reference standard",
        "threshold"
      ],
      "takeawayKey": "client"
    },
    "predictive": {
      "id": "predictive",
      "name": "Positive and negative predictive values (PPV and NPV)",
      "kind": "Performance measure",
      "origin": "Predictive means what a positive or negative test tells us about the reference diagnosis. It does not mean forecasting future illness.",
      "purpose": "Ask whether a test-positive patient has disease and whether a test-negative patient is disease-free.",
      "meaning": "PPV = TP/(TP+FP); NPV = TN/(TN+FN). These are conditional on the test result.",
      "interpret": "Report the relevant test-result denominator. Predictive values depend on prevalence and patient selection.",
      "example": "18 diseased patients among 20 positive tests give PPV 90%. If there are no negative tests, NPV is undefined.",
      "limits": "Do not transfer predictive values directly from a high-prevalence surgical cohort to an unselected emergency population.",
      "tags": "prevalence rule in rule out",
      "terms": [
        "PPV",
        "NPV",
        "TP",
        "FP",
        "TN",
        "FN",
        "prevalence"
      ],
      "takeawayKey": "client"
    },
    "accuracy": {
      "id": "accuracy",
      "name": "Overall diagnostic accuracy",
      "kind": "Performance measure",
      "origin": "Accuracy means getting the classification right, whether the person has disease or does not.",
      "purpose": "Summarise correct positive and correct negative classifications together.",
      "meaning": "Accuracy = (TP+TN)/(TP+TN+FP+FN).",
      "interpret": "Compare it with sensitivity, specificity and a simple prevalence benchmark. A high total can conceal poor disease exclusion.",
      "example": "If 90 of 100 patients have disease, calling everyone positive achieves 90% accuracy but 0% specificity.",
      "limits": "Accuracy depends on case mix and the chosen threshold; it is not an AUC or proof of clinical usefulness.",
      "tags": "",
      "terms": [
        "TP",
        "TN",
        "FP",
        "FN",
        "AUC",
        "threshold",
        "prevalence"
      ],
      "takeawayKey": "client"
    },
    "roc": {
      "id": "roc",
      "name": "Receiver operating characteristic curve (ROC) and area under the curve (AUC)",
      "kind": "Graph and measure",
      "origin": "The name comes from signal detection: a receiver decides signal versus noise. Operating refers to changing its cutoff; characteristic describes the resulting pattern of detections and false alarms.",
      "purpose": "Show the trade-off between sensitivity and false-positive rate over possible thresholds.",
      "meaning": "AUC summarises ranking: a randomly chosen disease-positive case tends to score above a disease-negative case.",
      "interpret": "With higher scores indicating disease, 0.5 is chance ranking and 1.0 perfect observed ranking. Read uncertainty and operating-point performance separately.",
      "example": "A hypothetical AUC of 0.85 means about 85% of disease/non-disease pairs are correctly ordered, with half-credit for ties.",
      "limits": "AUC is not percent correct at a threshold. A perfect sample AUC with one negative case does not establish perfect population discrimination.",
      "tags": "continuous discrimination ranking",
      "terms": [
        "ROC",
        "AUC",
        "threshold",
        "reference standard",
        "CI"
      ],
      "takeawayKey": "client"
    },
    "ci": {
      "id": "ci",
      "name": "95% confidence interval (CI)",
      "kind": "Uncertainty estimate",
      "origin": "Confidence refers to the reliability of the interval-making procedure over repeated samples, not certainty about one result.",
      "purpose": "Show how precise an estimate is under specified sampling assumptions.",
      "meaning": "Wider intervals mean greater uncertainty; they do not repair biased sampling or miscoding.",
      "interpret": "A valid 95% procedure covers the fixed target in about 95% of repeated samples. It is not a 95% probability assigned to this realised interval.",
      "example": "A hypothetical sensitivity estimate of 80% with a 65\u201390% CI is less precise than the same estimate with a 77\u201383% CI.",
      "limits": "Specify the interval method. Correlation, model development and tiny denominators can invalidate simple intervals.",
      "tags": "confidence limits precision uncertainty",
      "terms": [
        "CI",
        "bias",
        "independent"
      ],
      "takeawayKey": "client"
    },
    "logistic": {
      "id": "logistic",
      "name": "Logistic regression",
      "kind": "Model",
      "origin": "Logistic is the name of an S-shaped curve. It converts a model score into a probability between zero and one.",
      "purpose": "Relate a binary reference outcome to one or more predictors.",
      "meaning": "A MAS-only model and a MAS-plus-hsCRP model can assess whether the biomarker adds information.",
      "interpret": "Read coefficients or odds ratios with intervals, incremental evidence, calibration and validation. A fitted probability still needs a stated classification threshold.",
      "example": "Two hypothetical patients with equal MAS can receive different predicted probabilities if their hsCRP values differ.",
      "limits": "The study has no prespecified AND/OR combination rule. A reconstructed model is exploratory; fitting and evaluating on the same cases overstates performance.",
      "tags": "combined model logit incremental value odds ratio",
      "terms": [
        "MAS",
        "hsCRP",
        "coefficient",
        "odds ratio",
        "threshold",
        "calibration",
        "association",
        "binary"
      ],
      "takeawayKey": "client"
    },
    "firth": {
      "id": "firth",
      "name": "Firth bias-reduced logistic regression",
      "kind": "Model",
      "origin": "Firth is the statistician\u2019s name. Bias-reduced means reducing the small-sample distortion of estimated model coefficients.",
      "purpose": "Stabilise binary regression when outcomes are sparse or separation occurs.",
      "meaning": "It can provide finite coefficient estimates when ordinary logistic regression becomes unstable.",
      "interpret": "Report adjusted coefficients and compatible interval/testing methods. Finite estimates do not mean the data contain enough information.",
      "example": "If a predictor perfectly separates outcomes in a small hypothetical dataset, ordinary estimates may diverge; Firth estimation can stabilise them.",
      "limits": "It cannot create disease-negative cases or provide external validation. Penalisation can affect predicted probabilities.",
      "tags": "penalized separation bias reduced",
      "terms": [
        "bias",
        "coefficient",
        "separation",
        "likelihood"
      ],
      "takeawayKey": "client"
    },
    "mcnemar": {
      "id": "mcnemar",
      "name": "McNemar\u2019s test",
      "kind": "Inferential test",
      "origin": "McNemar is the statistician\u2019s name. His test focuses on the same patients whose two binary results disagree.",
      "purpose": "Compare two binary classifications measured on the same participants.",
      "meaning": "Only the pairs that disagree contribute to the test; paired correctness can assess a change in accuracy.",
      "interpret": "Report both discordant counts and the paired effect, with uncertainty if supported. A small p-value does not measure benefit size.",
      "example": "In 12 hypothetical cases only A is correct, while in 3 only B is correct; McNemar compares those discordant counts.",
      "limits": "Use independent pairs or account for clustering. Same-data model fitting makes such comparisons exploratory. Do not apply it to separate child/adult samples.",
      "tags": "paired binary exact discordance",
      "terms": [
        "paired",
        "discordant",
        "independent",
        "p-value",
        "CI",
        "binary"
      ],
      "takeawayKey": "client"
    },
    "delong": {
      "id": "delong",
      "name": "DeLong\u2019s test for comparing AUCs",
      "kind": "Inferential test",
      "origin": "DeLong is the authors\u2019 family name. Their method estimates uncertainty in the difference between two areas under ROC curves.",
      "purpose": "Compare ROC areas while respecting whether the scores come from the same or different participants.",
      "meaning": "A paired comparison accounts for correlation between two scores measured on the same patients.",
      "interpret": "Read the AUC difference, its interval and p-value together; specify score direction and paired versus independent design.",
      "example": "Two fixed hypothetical markers measured in the same patients have AUCs 0.80 and 0.85; the relevant difference is 0.05.",
      "limits": "Do not use a routine paired DeLong test as confirmatory evidence for nested models trained on the same outcomes. Sparse paediatric reference negatives cannot support reliable group AUC inference.",
      "tags": "paired ROC covariance",
      "terms": [
        "ROC",
        "AUC",
        "paired",
        "p-value",
        "CI"
      ],
      "takeawayKey": "client"
    },
    "validation": {
      "id": "validation",
      "name": "Bootstrap refitting and leave-one-out validation",
      "kind": "Validation procedure",
      "origin": "Bootstrap suggests getting information from the sample itself by resampling it. Leave-one-out means leaving one case out, fitting the model, then predicting that case.",
      "purpose": "Assess development optimism by repeating the actual fitting procedure or predicting held-out cases.",
      "meaning": "Refitting measures instability. Held-out predictions ask how a model behaves beyond its own training cases.",
      "interpret": "Compare apparent with internally validated performance. Neither is external validation.",
      "example": "A hypothetical apparent AUC of 0.90 falls to an optimism-adjusted 0.82 after refitting.",
      "limits": "Resample at the correct independent unit. Repeating the only negative child cannot estimate unseen negative-case variation; overlapping training fits create dependent predictions.",
      "tags": "cross validation optimism resampling",
      "terms": [
        "bootstrap",
        "optimism",
        "independent",
        "cluster",
        "AUC"
      ],
      "takeawayKey": "client"
    },
    "youden": {
      "id": "youden",
      "name": "Youden index (J)",
      "kind": "Exploratory threshold measure",
      "origin": "Youden is the statistician\u2019s name. Index means one summary number combining sensitivity and specificity.",
      "purpose": "Find a threshold that maximises sensitivity + specificity \u2212 1 in the observed data.",
      "meaning": "It gives equal weight to the two classification rates, not necessarily to their clinical consequences.",
      "interpret": "Label a data-selected cutoff exploratory and validate it independently; report its sensitivity and specificity.",
      "example": "Sensitivity 0.80 and specificity 0.75 give hypothetical J = 0.55.",
      "limits": "A best sample cutoff is not automatically a safe clinical threshold. Selection on the evaluation data introduces optimism.",
      "tags": "cutoff threshold exploratory",
      "terms": [
        "J",
        "threshold"
      ],
      "takeawayKey": "client"
    },
    "summaries": {
      "id": "summaries",
      "name": "Mean, median, standard deviation (SD) and interquartile range (IQR)",
      "kind": "Descriptive statistics",
      "origin": "Mean is the average; median is the middle. Standard deviation describes spread around the mean; interquartile means between the first and third quarter-points.",
      "purpose": "Describe central values and variability.",
      "meaning": "Use mean and SD for appropriate distributions; median and quartiles are useful for skewed or ordinal measurements.",
      "interpret": "SD describes variation between observations, not uncertainty in the estimated mean. IQR width is Q3 \u2212 Q1.",
      "example": "Hypothetical amounts 10, 10, 10 and 50 have mean 20 but median 10: the upper value pulls the mean upward.",
      "limits": "Check units and distribution. Mean \u00b1 SD is not a confidence interval; report the denominator and define displayed quartile limits.",
      "tags": "average descriptive continuous distribution skewness",
      "terms": [
        "SD",
        "IQR",
        "Q1 / Q3",
        "CI",
        "ordinal"
      ],
      "takeawayKey": "client"
    },
    "welch": {
      "id": "welch",
      "name": "Welch\u2019s independent-samples t-test",
      "kind": "Inferential test",
      "origin": "Welch is the statistician\u2019s name. His t-test allows the two groups to have different amounts of variation.",
      "purpose": "Compare the means of two independent groups.",
      "meaning": "It asks whether the underlying mean concentration differs between the defined groups.",
      "interpret": "Report the mean difference and CI alongside t, degrees of freedom and p. Welch degrees of freedom can be fractional.",
      "example": "If hypothetical group means are 12 and 20 mg/L, the second-minus-first difference is 8 mg/L.",
      "limits": "Requires independent observations and a defensible mean comparison; small, heavily skewed samples or influential values need care. It is not a paired test.",
      "tags": "student t unequal variance df",
      "terms": [
        "t",
        "df",
        "CI",
        "p-value",
        "independent",
        "mg/L"
      ],
      "takeawayKey": "client"
    },
    "mann": {
      "id": "mann",
      "name": "Mann\u2013Whitney U test",
      "kind": "Inferential test",
      "origin": "Mann and Whitney are the authors\u2019 names. U is the statistic based on how observations from the two groups rank against one another.",
      "purpose": "Compare the distributions of two independent groups using ranks.",
      "meaning": "It assesses whether one group tends to have larger observations, without requiring normally distributed raw values.",
      "interpret": "Report U, a compatible effect estimate and uncertainty where feasible, and the p-value. It is not automatically a test of medians.",
      "example": "Hypothetical complicated cases tend to rank above simple cases even when both groups contain skewed hsCRP values.",
      "limits": "Independence is still required. Interpreting a location/median shift needs additional shape assumptions; small samples and ties require an appropriate calculation.",
      "tags": "nonparametric ranks independent",
      "terms": [
        "U",
        "rank",
        "p-value",
        "independent",
        "CI"
      ],
      "takeawayKey": "client"
    },
    "fisher": {
      "id": "fisher",
      "name": "Fisher\u2019s exact test",
      "kind": "Inferential test",
      "origin": "Fisher is the statistician\u2019s name. Exact means using table probabilities rather than a large-sample approximation.",
      "purpose": "Compare categorical outcomes between independent groups using table probabilities. Chi-square instead uses a large-sample approximation and needs adequate expected counts.",
      "meaning": "For a 2\u00d72 table, assess a binary outcome across independent groups.",
      "interpret": "Report the cell counts, effect such as an odds ratio with suitable interval, and the exact p-value. A non-significant result is not equivalence.",
      "example": "A hypothetical independent child/adult comparison has only two failures in one group; an exact calculation avoids a crude large-sample approximation.",
      "limits": "Sparse data still mean wide uncertainty. Use disease-positive denominators for sensitivity and disease-negative denominators for specificity. It is not a paired comparison.",
      "tags": "small cells chi square independent categorical",
      "terms": [
        "odds ratio",
        "p-value",
        "independent",
        "CI",
        "paired",
        "null hypothesis",
        "chi-square (\u03c7\u00b2)",
        "expected count",
        "association",
        "binary"
      ],
      "takeawayKey": "client"
    },
    "rate": {
      "id": "rate",
      "name": "Negative appendicectomy proportion",
      "kind": "Descriptive measure",
      "origin": "Negative means the defined histology outcome after appendix removal. The proportion counts those outcomes among the eligible operations.",
      "purpose": "Divide negative appendicectomies by the defined operated denominator.",
      "meaning": "This describes how often surgery in the analysed cohort yielded no acute appendicitis under the operational definition.",
      "interpret": "Report numerator, operated denominator, percentage, histology completeness and interval.",
      "example": "Five hypothetical negative specimens among 100 eligible appendicectomies give a 5% rate.",
      "limits": "Do not use all assessed patients when some were not operated. Normal operative appearance is not normal histology; missing outcomes remain unknown.",
      "tags": "negative appendectomy denominator surgical",
      "terms": [
        "reference standard",
        "CI",
        "threshold"
      ],
      "takeawayKey": "client"
    },
    "wilson": {
      "id": "wilson",
      "name": "Wilson score confidence interval for a proportion",
      "kind": "Uncertainty estimate",
      "origin": "Wilson is the statistician\u2019s name. Score refers to a statistical calculation for a proportion, not the clinical MAS score.",
      "purpose": "Provide bounded uncertainty limits for a proportion, including near zero or one.",
      "meaning": "It avoids some problems of a simple symmetric normal interval.",
      "interpret": "State Wilson, the numerator and denominator; width reflects limited information, not a tolerance range.",
      "example": "A small hypothetical operated cohort can have a 5% negative rate but a wide Wilson interval.",
      "limits": "It assumes an appropriate binomial sampling framework. It does not correct pathology misclassification, convenience sampling or uncertain eligibility.",
      "tags": "binomial proportion interval",
      "terms": [
        "CI",
        "binomial",
        "MAS"
      ],
      "takeawayKey": "client"
    },
    "ordinal": {
      "id": "ordinal",
      "name": "Ordinal response distributions",
      "kind": "Descriptive statistics",
      "origin": "Ordinal comes from order: slightly, moderately and very confident have a sequence, but not necessarily equal gaps.",
      "purpose": "Count each original confidence category and summarise its central rank.",
      "meaning": "A higher category denotes greater confidence, not necessarily a known amount of improvement.",
      "interpret": "Show category n (%) and median with quartiles. Do not invent a validated composite or treat confidence as correctness.",
      "example": "\u201cModerately confident\u201d moving to \u201cvery confident\u201d is a one-category rise, not a proven clinical improvement of a fixed size.",
      "limits": "Distinguish patient assessments from unique clinicians. Preserve labels and disclose missing responses.",
      "tags": "Likert confidence ordered survey",
      "terms": [
        "ordinal",
        "IQR",
        "Q1 / Q3"
      ],
      "takeawayKey": "client"
    },
    "transitions": {
      "id": "transitions",
      "name": "Paired transition table and change direction",
      "kind": "Descriptive paired analysis",
      "origin": "Transition means movement: follow one patient\u2019s rating from the before category to the after category.",
      "purpose": "Display within-case higher, unchanged and lower confidence ratings.",
      "meaning": "The diagonal records unchanged cases; off-diagonal cells show the direction of change.",
      "interpret": "Use the number of complete pairs as denominator. Describe category steps without claiming equal clinical distances.",
      "example": "In 20 hypothetical case pairs, 15 ratings rise, 5 are unchanged and none fall.",
      "limits": "Within-case pairing does not establish independence across cases if one clinician assesses many patients.",
      "tags": "before after paired confidence change",
      "terms": [
        "paired",
        "ordinal",
        "cluster"
      ],
      "takeawayKey": "client"
    },
    "wilcoxon": {
      "id": "wilcoxon",
      "name": "Wilcoxon signed-rank test",
      "kind": "Conditional inferential test",
      "origin": "Wilcoxon is the statistician\u2019s name. Signed means increase or decrease; rank means order the sizes of those paired changes.",
      "purpose": "Test a paired difference distribution under suitable assumptions.",
      "meaning": "It can analyse linked quantitative differences; it is not the independent-samples Mann\u2013Whitney test.",
      "interpret": "Read the paired effect and interval if supported, signed-rank statistic and p-value.",
      "example": "Independent hypothetical pairs have changes of \u22122, +1 and +3; the test uses signed ranks of their magnitudes.",
      "limits": "Requires appropriate independent pairs and difference symmetry for a location interpretation. Equal category-step magnitudes in Likert ratings are debatable; a sign test needs fewer spacing assumptions. Clinician linkage is missing here.",
      "tags": "paired nonparametric future not used",
      "terms": [
        "paired",
        "rank",
        "independent",
        "p-value",
        "CI",
        "ordinal"
      ],
      "takeawayKey": "client"
    },
    "clustering": {
      "id": "clustering",
      "name": "Repeated observations and clinician clustering",
      "kind": "Design requirement",
      "origin": "A cluster is a group of linked observations, such as several patient ratings made by one clinician.",
      "purpose": "Identify the true independent unit before inference.",
      "meaning": "Multiple patient ratings from one doctor do not become independent clinician opinions.",
      "interpret": "With clinician IDs and sufficient clusters, consider a suitable ordinal mixed model, GEE or cluster-aware resampling; the estimand must be defined first.",
      "example": "Ten doctors each rating ten cases produce 100 case assessments but only ten clinician clusters.",
      "limits": "No adjustment can be verified without clinician identifiers and group linkage. Do not infer these from hospital location or patient occupation.",
      "tags": "repeated measures mixed model GEE intraclass",
      "terms": [
        "cluster",
        "GEE",
        "independent",
        "ordinal"
      ],
      "takeawayKey": "client"
    },
    "cost": {
      "id": "cost",
      "name": "Descriptive analysis of recorded amounts",
      "kind": "Descriptive statistics",
      "origin": "Descriptive means showing what was recorded before deciding whether it represents a charge or a resource cost.",
      "purpose": "Summarise a documented monetary field using total, mean/SD, median/quartiles and range.",
      "meaning": "An aggregate amount is not automatically a provider resource cost or patient charge.",
      "interpret": "State currency, period, accounting basis and included components; distinguish a dataset sum from audited expenditure.",
      "example": "Three hypothetical recorded amounts of NGN 100, 200 and 300 sum to NGN 600 and average NGN 200.",
      "limits": "The actual total_costs components, accounting basis and price year are unverified. No economic label or inflation adjustment can be guessed.",
      "tags": "hospital cost naira NGN charges resource tariff",
      "terms": [
        "NGN",
        "SD",
        "IQR",
        "Q1 / Q3",
        "resource cost",
        "tariff"
      ],
      "takeawayKey": "client"
    },
    "incremental": {
      "id": "incremental",
      "name": "Incremental cost comparison",
      "kind": "Conditional economic calculation",
      "origin": "Incremental means extra compared with a specified alternative, not the entire bill.",
      "purpose": "Calculate combined-strategy cost minus comparator cost on a comparable basis.",
      "meaning": "It isolates what changes when hsCRP is added, if the relevant resource and comparator data exist.",
      "interpret": "Report the signed difference, component contributions and appropriate uncertainty; lower total cost needs actual comparative evidence.",
      "example": "If documented hypothetical pathways cost NGN 12,000 and NGN 10,000, the additional amount is NGN 2,000.",
      "limits": "No itemised hsCRP cost or comparator pathway is available here. Do not convert negative specimens or improved AUC into assumed savings.",
      "tags": "budget cost savings comparator not estimable",
      "terms": [
        "NGN",
        "comparator",
        "AUC",
        "resource cost"
      ],
      "takeawayKey": "client"
    }
  },
  "studyNotes": [
    {
      "title": "Reference standard",
      "text": "Histopathology is the approved reference. Histology codes 1\u20135 are positive; code 6 is negative under the agreed isolated reactive lymphoid hyperplasia interpretation. Histological severity is independent of operative findings."
    },
    {
      "title": "Combined approach",
      "text": "No prespecified combined classification was recovered. The added models use Firth logistic regression and continuous recorded predictors. The 0.50 probability operating point and additional comparisons are exploratory; no optimized cutoff or AND/OR rule is invented."
    },
    {
      "title": "Evidence boundary",
      "text": "Numerical examples in learning cards are hypothetical. Analysis modules display actual locally generated aggregate results only after a results file is loaded. This is a research workspace, not a clinical decision system. Patient rows are not bundled or uploaded."
    },
    {
      "title": "Study sources",
      "text": "Approved Form A dated September 2026; supplied study proforma; the current categorized SAV and its dictionary; documented researcher decisions on independent histology/operation measurements, units, confidence pairing and source uncertainty."
    }
  ],
  "sources": [
    {
      "name": "SciPy \u2014 Welch/independent t-test",
      "url": "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_ind.html"
    },
    {
      "name": "SciPy \u2014 Mann\u2013Whitney U",
      "url": "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.mannwhitneyu.html"
    },
    {
      "name": "SciPy \u2014 Wilcoxon signed ranks",
      "url": "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.wilcoxon.html"
    },
    {
      "name": "SciPy \u2014 Fisher exact",
      "url": "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.fisher_exact.html"
    },
    {
      "name": "statsmodels \u2014 McNemar",
      "url": "https://www.statsmodels.org/stable/generated/statsmodels.stats.contingency_tables.mcnemar.html"
    },
    {
      "name": "NIST \u2014 proportion confidence intervals",
      "url": "https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm"
    },
    {
      "name": "pROC \u2014 AUC comparisons and uncertainty",
      "url": "https://cran.r-project.org/web/packages/pROC/refman/pROC.html"
    },
    {
      "name": "Medical University of Vienna \u2014 Firth correction",
      "url": "https://data-science.meduniwien.ac.at/services/klinische-biometrie/software/statistische-software/firth-correction/"
    }
  ],
  "glossary": {
    "MAS": "Modified Alvarado Score: the study\u2019s clinical score, based on symptoms, signs and white blood cells.",
    "hsCRP": "High-sensitivity C-reactive protein: the blood measurement used alongside MAS; CRP is its field name in this dataset.",
    "TP": "True positive: test-positive and disease-positive by the reference standard.",
    "FP": "False positive: test-positive but disease-negative by the reference standard.",
    "TN": "True negative: test-negative and disease-negative by the reference standard.",
    "FN": "False negative: test-negative despite disease by the reference standard.",
    "reference standard": "The method used to establish the target diagnosis. This protocol specifies histopathology.",
    "threshold": "The cutoff that turns a score or measurement into a positive or negative classification.",
    "prevalence": "The proportion with the target condition in a population or analysed sample.",
    "PPV": "Positive predictive value: among positive tests, the proportion with the target disease.",
    "NPV": "Negative predictive value: among negative tests, the proportion without the target disease.",
    "ROC": "Receiver operating characteristic: a graph of sensitivity versus false-positive rate across cutoffs.",
    "AUC": "Area under the curve: how well scores rank target-positive above target-negative cases.",
    "CI": "Confidence interval: an uncertainty interval calculated under stated statistical assumptions.",
    "p-value": "Assuming the specified null hypothesis and test assumptions, the probability of a result at least as extreme as observed. It is not the probability the null is true.",
    "null hypothesis": "The claim the test evaluates, often no difference or no association.",
    "odds ratio": "A ratio comparing odds. It is not the same as a ratio of probabilities.",
    "coefficient": "A model\u2019s estimated number describing a predictor\u2019s contribution.",
    "calibration": "Whether predicted probabilities agree with observed outcome frequencies.",
    "bias": "A systematic distortion of an estimate, not simply random variation.",
    "separation": "A predictor divides binary outcomes so completely that ordinary logistic estimates can become unstable.",
    "likelihood": "A way to assess how well possible model parameters explain the observed data.",
    "paired": "Two observations linked to the same case; this alone does not make different case pairs independent.",
    "independent": "Observations are not linked in a way that makes their errors or responses depend on each other.",
    "discordant": "A paired case where two binary results disagree.",
    "bootstrap": "Create repeated samples from the observed cases, with replacement, to examine uncertainty or optimism.",
    "optimism": "Performance looks better on cases used to build the model than it is likely to look on new cases.",
    "J": "Youden index: sensitivity + specificity \u2212 1.",
    "SD": "Standard deviation: spread of individual values around their mean; not uncertainty in the mean.",
    "IQR": "Interquartile range: Q3 minus Q1, describing the middle half of observations.",
    "Q1 / Q3": "First and third quartiles: the quarter-point and three-quarter-point of ordered observations.",
    "mg/L": "Milligrams per litre: the hsCRP concentration unit specified in the protocol.",
    "t": "The t-test statistic: the estimated mean difference relative to its statistical uncertainty.",
    "df": "Degrees of freedom: a quantity used to calculate the test\u2019s reference distribution; Welch\u2019s df can be fractional.",
    "rank": "A value\u2019s position when observations are ordered.",
    "U": "The Mann\u2013Whitney rank-comparison statistic; its direction depends on which group is listed first.",
    "binomial": "A model for the number of yes/no outcomes in a set of suitable independent trials.",
    "ordinal": "Ordered categories whose numerical gaps are not necessarily equal.",
    "GEE": "Generalised estimating equations: a modelling approach that can allow for correlated observations.",
    "cluster": "A set of linked observations, such as cases assessed by the same doctor.",
    "NGN": "Nigerian naira: the currency confirmed for total_costs.",
    "comparator": "The alternative pathway used as the basis of a comparison.",
    "tariff": "A listed service price; it is not automatically a measure of hospital resource expenditure.",
    "resource cost": "The value of resources consumed; different from an amount charged to a patient.",
    "nominal": "Categories without a required order, such as sex or religion.",
    "scale": "SPSS\u2019s measurement setting for interval/ratio-style numerical values; a setting does not verify units.",
    "PCV": "Packed cell volume: a blood measurement; its source unit is not recorded here.",
    "WBC": "White blood cell count, recorded in \u00d710\u2079/L. The protocol MAS threshold is >10 \u00d710\u2079/L; laboratory reference categories are separate.",
    "AIR": "Appendicitis Inflammatory Response score: a separate stored score, not a replacement for MAS in these approved objectives.",
    "RIF": "Right iliac fossa: the lower-right abdominal region.",
    "SSI": "Surgical site infection; the complication value labels use this abbreviation.",
    "RVS": "An unexpanded comorbidity label in the dataset; its clinical meaning remains unverified.",
    "chi-square (\u03c7\u00b2)": "An independent-category test based on squared differences between observed and expected counts; it uses a large-sample approximation.",
    "expected count": "The count predicted for a table cell under the null hypothesis, not the actual observed count.",
    "association": "Two variables vary together. This alone does not show causation or useful diagnostic performance.",
    "binary": "A two-category outcome, such as disease present versus absent."
  },
  "overview": "Appendicitis can be difficult to identify from symptoms alone. This study asks whether combining the clinical MAS score with the blood marker hsCRP improves diagnosis. It also examines severity, age groups, negative surgery, diagnostic confidence and recorded hospital amounts. The findings could inform patient evaluation, but the conclusions depend on valid definitions and appropriate validation.",
  "version": "2.0",
  "dictionaryNotes": "Current categorized SAV: 38 original and 54 derived variables. Histology and operative findings remain independent. AIR, PCV and clinical-sign analyses are explicitly exploratory. The public dictionary contains variable definitions; completeness is calculated only from the currently loaded private dataset.",
  "bindings": {
    "1": [
      {
        "name": "MAS",
        "role": "Main diagnostic predictor",
        "why": "Evaluate the clinical score and an equally fitted MAS-only comparator.",
        "methods": [
          "logistic",
          "firth",
          "sensitivity",
          "roc"
        ],
        "result": "Classifications or model scores to compare with histology."
      },
      {
        "name": "CRP",
        "role": "Main diagnostic predictor",
        "why": "Test incremental information from continuous hsCRP.",
        "methods": [
          "logistic",
          "firth",
          "roc"
        ],
        "result": "Added discrimination or model information, not assumed benefit."
      },
      {
        "name": "histology",
        "role": "Reference standard",
        "why": "Establish target-positive and target-negative status under the stated mapping.",
        "methods": [
          "sensitivity",
          "predictive",
          "accuracy",
          "roc"
        ],
        "result": "The diagnosis used to count correct and incorrect tests."
      },
      {
        "name": "hosp_n0",
        "role": "Record linkage",
        "why": "Pair both methods on the same patients and check duplicates.",
        "methods": [
          "mcnemar",
          "validation"
        ],
        "result": "Correct pairing, without exposing the identifier."
      },
      {
        "name": "comorbidity",
        "role": "Eligibility context",
        "why": "Review uncertain exclusion-related labels, not guess their meaning.",
        "methods": [
          "validation"
        ],
        "result": "Transparent eligibility sensitivity checks."
      },
      {
        "name": "migratory",
        "role": "Score audit \u2014 not extra predictors",
        "why": "Check the recorded MAS against protocol components; measured temperature and full component observations are incomplete.",
        "methods": [
          "summaries"
        ],
        "result": "A conditional score audit, not a silently corrected predictor."
      },
      {
        "name": "anorexia",
        "role": "Score audit \u2014 not extra predictors",
        "why": "Check the recorded MAS against protocol components; measured temperature and full component observations are incomplete.",
        "methods": [
          "summaries"
        ],
        "result": "A conditional score audit, not a silently corrected predictor."
      },
      {
        "name": "Vomiting",
        "role": "Score audit \u2014 not extra predictors",
        "why": "Check the recorded MAS against protocol components; measured temperature and full component observations are incomplete.",
        "methods": [
          "summaries"
        ],
        "result": "A conditional score audit, not a silently corrected predictor."
      },
      {
        "name": "fever",
        "role": "Score audit \u2014 not extra predictors",
        "why": "Check the recorded MAS against protocol components; measured temperature and full component observations are incomplete.",
        "methods": [
          "summaries"
        ],
        "result": "A conditional score audit, not a silently corrected predictor."
      },
      {
        "name": "tendernessRIF",
        "role": "Score audit \u2014 not extra predictors",
        "why": "Check the recorded MAS against protocol components; measured temperature and full component observations are incomplete.",
        "methods": [
          "summaries"
        ],
        "result": "A conditional score audit, not a silently corrected predictor."
      },
      {
        "name": "reboundtenderness",
        "role": "Score audit \u2014 not extra predictors",
        "why": "Check the recorded MAS against protocol components; measured temperature and full component observations are incomplete.",
        "methods": [
          "summaries"
        ],
        "result": "A conditional score audit, not a silently corrected predictor."
      },
      {
        "name": "wbc",
        "role": "Score audit \u2014 not extra predictors",
        "why": "Check the recorded MAS against protocol components; measured temperature and full component observations are incomplete.",
        "methods": [
          "summaries"
        ],
        "result": "A conditional score audit, not a silently corrected predictor."
      },
      {
        "name": "HISTOLOGY_ACUTE_APPENDICITIS",
        "role": "Derived reference standard",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 1; 6 -> 0; other or missing source -> system missing",
        "result": "Histopathological acute appendicitis reference diagnosis. User agreed mapping, verified against SAV labels. Code 6 assumes isolated reactive lymphoid hyperplasia without acute appendicitis. Unlisted diagnoses are not negative.",
        "methods": [
          "sensitivity",
          "predictive",
          "accuracy",
          "roc"
        ]
      },
      {
        "name": "HISTOLOGY_SEVERITY",
        "role": "Derived reference standard",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 2; 5 -> 2; 6 -> 0; other or missing source -> system missing",
        "result": "Histological appendicitis severity independent of operative findings. Researcher approved operational histology crosswalk: codes 1 to 3 simple; gangrenous code 4 and perforated code 5 complicated; isolated reactive lymphoid hyperplasia code 6 not applicable. Operative findings do not modify this classification. Not recovered as a prespecified protocol severity definition.",
        "methods": [
          "sensitivity",
          "predictive",
          "accuracy",
          "roc"
        ]
      },
      {
        "name": "APPENDICITIS_SEVERITY",
        "role": "Derived reference standard",
        "why": "Traceable derivation from histology. Exact copy of HISTOLOGY_SEVERITY; no operative override",
        "result": "Histological severity alias of HISTOLOGY_SEVERITY. ",
        "methods": [
          "sensitivity",
          "predictive",
          "accuracy",
          "roc"
        ]
      },
      {
        "name": "REBOUND_TENDERNESS",
        "role": "Derived score audit \u2014 not extra predictors",
        "why": "Traceable derivation from reboundtenderness. 1 -> 1; 2 -> 0; other or missing source -> system missing",
        "result": "Documented rebound tenderness. ",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "RIF_TENDERNESS",
        "role": "Derived score audit \u2014 not extra predictors",
        "why": "Traceable derivation from tendernessRIF. 1 -> 1; 2 -> 0; other or missing source -> system missing",
        "result": "Documented right iliac fossa tenderness. Tenderness is not a substitute for a separately documented RIF pain variable.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "MAS_CATEGORY",
        "role": "Derived main diagnostic predictor",
        "why": "Traceable derivation from MAS. Integer MAS 0 to 4 ->1; 5 to 6 ->2; 7 to 9 ->3; other or missing ->system missing",
        "result": "Modified Alvarado Score category using approved protocol boundaries. Descriptive probability labels follow the requested category names; they do not provide an independently validated disease classification. No original MAS was recalculated.",
        "methods": [
          "logistic",
          "firth",
          "sensitivity",
          "roc"
        ]
      },
      {
        "name": "HS_CRP_3MG_CATEGORY",
        "role": "Derived main diagnostic predictor",
        "why": "Traceable derivation from CRP. Nonnegative nonmissing CRP <=3 ->0; CRP >3 ->1; negative or missing ->system missing",
        "result": "hsCRP elevation using study laboratory upper reference limit of 3 mg/L. Protocol specifies elevation above 3 mg/L. This is the confirmed study diagnostic cutoff: >3 mg/L positive and ≤3 mg/L negative; it is not a universal cutoff. Continuous CRP is retained without conversion.",
        "methods": [
          "logistic",
          "firth",
          "roc"
        ]
      },
      {
        "name": "ANOREXIA_PRESENT",
        "role": "Derived score audit \u2014 not extra predictors",
        "why": "Traceable derivation from anorexia. 1 -> 1; 2 -> 0; other or missing source -> system missing",
        "result": "Anorexia presence from labelled source responses. Only labelled responses are classified; unlabelled source values remain unchanged and derived status is system missing.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "WBC_CATEGORY",
        "role": "Derived score audit \u2014 not extra predictors",
        "why": "Traceable derivation from wbc; age. Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing",
        "result": "WBC classification against external reference intervals. WBC laboratory intervals are distinct from the protocol MAS diagnostic threshold. No conversion of original counts.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "WBC_MAS_THRESHOLD",
        "role": "Derived score audit \u2014 not extra predictors",
        "why": "Traceable derivation from wbc. Nonnegative WBC <=10 ->0; WBC >10 ->1; missing or negative ->system missing",
        "result": "Protocol MAS leukocytosis threshold greater than 10 x 10^9 cells/L. Protocol MAS table specifies this exact cutoff. This does not replace the age appropriate WBC laboratory reference classification. No separate neutrophil threshold is in the approved Modified Alvarado Score.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "MIGRATORY_PAIN",
        "role": "Derived score audit \u2014 not extra predictors",
        "why": "Traceable derivation: 1 -> 1; 2 -> 0; other or missing source -> system missing",
        "result": "Recorded migratory abdominal pain presence. Confirmed Yes/No source mapping; no imputation.",
        "methods": [
          "summaries"
        ]
      }
    ],
    "2": [
      {
        "name": "CRP",
        "role": "Main diagnostic measurement",
        "why": "Compare continuous concentration and severity ranking.",
        "methods": [
          "summaries",
          "welch",
          "mann",
          "roc"
        ],
        "result": "Concentration difference and conditional severity discrimination."
      },
      {
        "name": "histology",
        "role": "Reference and grouping",
        "why": "Derive provisional simple/complicated groups, retaining ambiguity.",
        "methods": [
          "welch",
          "mann",
          "roc",
          "sensitivity"
        ],
        "result": "A severity comparison conditional on the pathology interpretation."
      },
      {
        "name": "INTRAOP_FINDING",
        "role": "Pathology audit",
        "why": "Inspect disagreement with histology without replacing the reference.",
        "methods": [
          "summaries"
        ],
        "result": "Source-adjudication questions, not a new gold standard."
      },
      {
        "name": "hosp_n0",
        "role": "Record linkage",
        "why": "Ensure each case is counted once.",
        "methods": [
          "summaries"
        ],
        "result": "A consistent patient-level denominator."
      },
      {
        "name": "comorbidity",
        "role": "Eligibility context",
        "why": "Review uncertain infection/immunocompromise labels.",
        "methods": [
          "summaries"
        ],
        "result": "Qualified analysis eligibility."
      },
      {
        "name": "HISTOLOGY_ACUTE_APPENDICITIS",
        "role": "Derived reference and grouping",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 1; 6 -> 0; other or missing source -> system missing",
        "result": "Histopathological acute appendicitis reference diagnosis. User agreed mapping, verified against SAV labels. Code 6 assumes isolated reactive lymphoid hyperplasia without acute appendicitis. Unlisted diagnoses are not negative.",
        "methods": [
          "welch",
          "mann",
          "roc",
          "sensitivity"
        ]
      },
      {
        "name": "HISTOLOGY_SEVERITY",
        "role": "Derived reference and grouping",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 2; 5 -> 2; 6 -> 0; other or missing source -> system missing",
        "result": "Histological appendicitis severity independent of operative findings. Researcher approved operational histology crosswalk: codes 1 to 3 simple; gangrenous code 4 and perforated code 5 complicated; isolated reactive lymphoid hyperplasia code 6 not applicable. Operative findings do not modify this classification. Not recovered as a prespecified protocol severity definition.",
        "methods": [
          "welch",
          "mann",
          "roc",
          "sensitivity"
        ]
      },
      {
        "name": "APPENDICITIS_SEVERITY",
        "role": "Derived reference and grouping",
        "why": "Traceable derivation from histology. Exact copy of HISTOLOGY_SEVERITY; no operative override",
        "result": "Histological severity alias of HISTOLOGY_SEVERITY. ",
        "methods": [
          "welch",
          "mann",
          "roc",
          "sensitivity"
        ]
      },
      {
        "name": "OPERATIVE_RUPTURE",
        "role": "Derived pathology audit",
        "why": "Traceable derivation from INTRAOP_FINDING. 2 -> 1; 3 -> 0; other or missing source -> system missing",
        "result": "Operative rupture documented independently of histology. Ruptured category supports Yes; normal appendix supports No. Inflamed or gangrenous alone does not explicitly exclude rupture and remains unknown. Original operative categories retained.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "HS_CRP_3MG_CATEGORY",
        "role": "Derived main diagnostic measurement",
        "why": "Traceable derivation from CRP. Nonnegative nonmissing CRP <=3 ->0; CRP >3 ->1; negative or missing ->system missing",
        "result": "hsCRP elevation using study laboratory upper reference limit of 3 mg/L. Protocol specifies elevation above 3 mg/L. This is the confirmed study diagnostic cutoff: >3 mg/L positive and ≤3 mg/L negative; it is not a universal cutoff. Continuous CRP is retained without conversion.",
        "methods": [
          "summaries",
          "welch",
          "mann",
          "roc"
        ]
      },
      {
        "name": "INTRAOP_FINDING_STD",
        "role": "Derived pathology audit",
        "why": "Traceable derivation from INTRAOP_FINDING. 1 -> 1; 2 -> 2; 4 -> 3; 3 -> 4; other or missing source -> system missing",
        "result": "Standardized single recorded intraoperative finding. INTRAOP_FINDING already exists; an STD suffix avoids overwriting it. The single selected source category does not exclude additional operative findings; no separate absent indicators were inferred.",
        "methods": [
          "summaries"
        ]
      }
    ],
    "3": [
      {
        "name": "age",
        "role": "Grouping variable",
        "why": "Derive <16 versus \u226516 years exactly as approved.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ],
        "result": "Age-specific descriptions using the common test."
      },
      {
        "name": "MAS",
        "role": "Main diagnostic predictor",
        "why": "Use the same pooled fitted combination in both groups.",
        "methods": [
          "sensitivity",
          "roc",
          "validation"
        ],
        "result": "Comparable score-based classification."
      },
      {
        "name": "CRP",
        "role": "Main diagnostic predictor",
        "why": "Use continuous hsCRP in that same combination.",
        "methods": [
          "sensitivity",
          "roc",
          "validation"
        ],
        "result": "Comparable biomarker contribution across groups."
      },
      {
        "name": "histology",
        "role": "Reference standard",
        "why": "Provide group-specific disease denominators.",
        "methods": [
          "sensitivity",
          "ci",
          "fisher",
          "roc"
        ],
        "result": "Sensitivity/specificity or AUC with sparse-data qualifications."
      },
      {
        "name": "hosp_n0",
        "role": "Record linkage",
        "why": "Keep independent patient identities distinct.",
        "methods": [
          "fisher",
          "validation"
        ],
        "result": "No paired age-group test."
      },
      {
        "name": "sex",
        "role": "Supplementary description",
        "why": "Describe each age-group sample; no adjustment is automatically fitted.",
        "methods": [
          "summaries"
        ],
        "result": "Baseline cohort context."
      },
      {
        "name": "AGE_GROUP",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from age. Nonmissing age >=0 and <16 ->1; age >=16 ->2; missing or negative -> system missing",
        "result": "Age group using the approved 16 year boundary. No protocol age limits are specified. No cohort age range is embedded in the public package.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "HISTOLOGY_ACUTE_APPENDICITIS",
        "role": "Derived reference standard",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 1; 6 -> 0; other or missing source -> system missing",
        "result": "Histopathological acute appendicitis reference diagnosis. User agreed mapping, verified against SAV labels. Code 6 assumes isolated reactive lymphoid hyperplasia without acute appendicitis. Unlisted diagnoses are not negative.",
        "methods": [
          "sensitivity",
          "ci",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "HISTOLOGY_SEVERITY",
        "role": "Derived reference standard",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 2; 5 -> 2; 6 -> 0; other or missing source -> system missing",
        "result": "Histological appendicitis severity independent of operative findings. Researcher approved operational histology crosswalk: codes 1 to 3 simple; gangrenous code 4 and perforated code 5 complicated; isolated reactive lymphoid hyperplasia code 6 not applicable. Operative findings do not modify this classification. Not recovered as a prespecified protocol severity definition.",
        "methods": [
          "sensitivity",
          "ci",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "APPENDICITIS_SEVERITY",
        "role": "Derived reference standard",
        "why": "Traceable derivation from histology. Exact copy of HISTOLOGY_SEVERITY; no operative override",
        "result": "Histological severity alias of HISTOLOGY_SEVERITY. ",
        "methods": [
          "sensitivity",
          "ci",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "MAS_CATEGORY",
        "role": "Derived main diagnostic predictor",
        "why": "Traceable derivation from MAS. Integer MAS 0 to 4 ->1; 5 to 6 ->2; 7 to 9 ->3; other or missing ->system missing",
        "result": "Modified Alvarado Score category using approved protocol boundaries. Descriptive probability labels follow the requested category names; they do not provide an independently validated disease classification. No original MAS was recalculated.",
        "methods": [
          "sensitivity",
          "roc",
          "validation"
        ]
      },
      {
        "name": "HS_CRP_3MG_CATEGORY",
        "role": "Derived main diagnostic predictor",
        "why": "Traceable derivation from CRP. Nonnegative nonmissing CRP <=3 ->0; CRP >3 ->1; negative or missing ->system missing",
        "result": "hsCRP elevation using study laboratory upper reference limit of 3 mg/L. Protocol specifies elevation above 3 mg/L. This is the confirmed study diagnostic cutoff: >3 mg/L positive and ≤3 mg/L negative; it is not a universal cutoff. Continuous CRP is retained without conversion.",
        "methods": [
          "sensitivity",
          "roc",
          "validation"
        ]
      },
      {
        "name": "PCV_REF_LOW",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from age; sex. Assign age and sex specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "PCV external reference low bound. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "PCV_REF_HIGH",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from age; sex. Assign age and sex specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "PCV external reference high bound. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "PCV_CATEGORY",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from pcv; age; sex. Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing",
        "result": "PCV classification against external reference intervals. Units follow researcher instructions. Reference intervals vary by age and, for PCV, sex. No diagnostic disease state is inferred. Percentage data retained without conversion.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "WBC_REF_LOW",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from age. Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "WBC external reference low bound. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "WBC_REF_HIGH",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from age. Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "WBC external reference high bound. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "WBC_CATEGORY",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from wbc; age. Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing",
        "result": "WBC classification against external reference intervals. WBC laboratory intervals are distinct from the protocol MAS diagnostic threshold. No conversion of original counts.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "NEUTROPHIL_REF_LOW",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from age. Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "NEUTROPHIL external reference low bound. External research reference, not an EKSUTH laboratory limit. Source: Children Minnesota CBC. See reference interval table in dictionary.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "NEUTROPHIL_REF_HIGH",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from age. Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "NEUTROPHIL external reference high bound. External research reference, not an EKSUTH laboratory limit. Source: Children Minnesota CBC. See reference interval table in dictionary.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      },
      {
        "name": "NEUTROPHIL_CATEGORY",
        "role": "Derived grouping variable",
        "why": "Traceable derivation from neutrophil; age. Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing",
        "result": "NEUTROPHIL classification against external reference intervals. Units follow researcher instructions. Reference intervals vary by age and, for PCV, sex. No diagnostic disease state is inferred. Percentage data retained without conversion.",
        "methods": [
          "sensitivity",
          "fisher",
          "roc"
        ]
      }
    ],
    "4": [
      {
        "name": "histology",
        "role": "Primary outcome and reference",
        "why": "Define the conditional negative specimen group.",
        "methods": [
          "rate",
          "wilson"
        ],
        "result": "Negative numerator and pathology composition."
      },
      {
        "name": "INTRAOP_FINDING",
        "role": "Operation evidence",
        "why": "Support an operated cohort and keep appearance distinct from histology.",
        "methods": [
          "rate"
        ],
        "result": "A defensible operated denominator."
      },
      {
        "name": "hosp_n0",
        "role": "Record linkage",
        "why": "Prevent duplicate operations being counted.",
        "methods": [
          "rate"
        ],
        "result": "Distinct submitted patient records."
      },
      {
        "name": "Appendix_position",
        "role": "Operation evidence",
        "why": "Support the specimen-linked surgical pathway.",
        "methods": [
          "rate"
        ],
        "result": "Supporting evidence, not an independent operation-status variable."
      },
      {
        "name": "length_of_appendix",
        "role": "Operation evidence",
        "why": "Support specimen-linked surgery; length is recorded in centimetres.",
        "methods": [
          "rate"
        ],
        "result": "Supporting operation evidence."
      },
      {
        "name": "age",
        "role": "Supplementary description",
        "why": "Describe the cohort and approved age groups.",
        "methods": [
          "summaries",
          "wilson"
        ],
        "result": "Descriptive age-specific rates, not forced comparisons."
      },
      {
        "name": "sex",
        "role": "Supplementary description",
        "why": "Describe the operated cohort.",
        "methods": [
          "summaries"
        ],
        "result": "Baseline sex distribution."
      },
      {
        "name": "MAS",
        "role": "Supplementary description",
        "why": "Describe recorded preoperative scores, not redefine negative surgery.",
        "methods": [
          "summaries"
        ],
        "result": "Clinical context."
      },
      {
        "name": "CRP",
        "role": "Supplementary description",
        "why": "Describe baseline concentration, not the negative numerator.",
        "methods": [
          "summaries"
        ],
        "result": "Clinical context."
      },
      {
        "name": "AGE_GROUP",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from age. Nonmissing age >=0 and <16 ->1; age >=16 ->2; missing or negative -> system missing",
        "result": "Age group using the approved 16 year boundary. No protocol age limits are specified. No cohort age range is embedded in the public package.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "HISTOLOGY_ACUTE_APPENDICITIS",
        "role": "Derived primary outcome and reference",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 1; 6 -> 0; other or missing source -> system missing",
        "result": "Histopathological acute appendicitis reference diagnosis. User agreed mapping, verified against SAV labels. Code 6 assumes isolated reactive lymphoid hyperplasia without acute appendicitis. Unlisted diagnoses are not negative.",
        "methods": [
          "rate",
          "wilson"
        ]
      },
      {
        "name": "HISTOLOGY_SEVERITY",
        "role": "Derived primary outcome and reference",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 2; 5 -> 2; 6 -> 0; other or missing source -> system missing",
        "result": "Histological appendicitis severity independent of operative findings. Researcher approved operational histology crosswalk: codes 1 to 3 simple; gangrenous code 4 and perforated code 5 complicated; isolated reactive lymphoid hyperplasia code 6 not applicable. Operative findings do not modify this classification. Not recovered as a prespecified protocol severity definition.",
        "methods": [
          "rate",
          "wilson"
        ]
      },
      {
        "name": "APPENDICITIS_SEVERITY",
        "role": "Derived primary outcome and reference",
        "why": "Traceable derivation from histology. Exact copy of HISTOLOGY_SEVERITY; no operative override",
        "result": "Histological severity alias of HISTOLOGY_SEVERITY. ",
        "methods": [
          "rate",
          "wilson"
        ]
      },
      {
        "name": "OPERATIVE_RUPTURE",
        "role": "Derived operation evidence",
        "why": "Traceable derivation from INTRAOP_FINDING. 2 -> 1; 3 -> 0; other or missing source -> system missing",
        "result": "Operative rupture documented independently of histology. Ruptured category supports Yes; normal appendix supports No. Inflamed or gangrenous alone does not explicitly exclude rupture and remains unknown. Original operative categories retained.",
        "methods": [
          "rate"
        ]
      },
      {
        "name": "MAS_CATEGORY",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from MAS. Integer MAS 0 to 4 ->1; 5 to 6 ->2; 7 to 9 ->3; other or missing ->system missing",
        "result": "Modified Alvarado Score category using approved protocol boundaries. Descriptive probability labels follow the requested category names; they do not provide an independently validated disease classification. No original MAS was recalculated.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "HS_CRP_3MG_CATEGORY",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from CRP. Nonnegative nonmissing CRP <=3 ->0; CRP >3 ->1; negative or missing ->system missing",
        "result": "hsCRP elevation using study laboratory upper reference limit of 3 mg/L. Protocol specifies elevation above 3 mg/L. This is the confirmed study diagnostic cutoff: >3 mg/L positive and ≤3 mg/L negative; it is not a universal cutoff. Continuous CRP is retained without conversion.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "INTRAOP_FINDING_STD",
        "role": "Derived operation evidence",
        "why": "Traceable derivation from INTRAOP_FINDING. 1 -> 1; 2 -> 2; 4 -> 3; 3 -> 4; other or missing source -> system missing",
        "result": "Standardized single recorded intraoperative finding. INTRAOP_FINDING already exists; an STD suffix avoids overwriting it. The single selected source category does not exclude additional operative findings; no separate absent indicators were inferred.",
        "methods": [
          "rate"
        ]
      },
      {
        "name": "APPENDIX_LENGTH_CM",
        "role": "Derived operation evidence",
        "why": "Traceable derivation from length_of_appendix. Exact copy of source; no multiplication, division or conversion",
        "result": "Recorded appendix length in centimetres. ",
        "methods": [
          "rate"
        ]
      },
      {
        "name": "PCV_REF_LOW",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from age; sex. Assign age and sex specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "PCV external reference low bound. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "PCV_REF_HIGH",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from age; sex. Assign age and sex specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "PCV external reference high bound. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "PCV_CATEGORY",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from pcv; age; sex. Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing",
        "result": "PCV classification against external reference intervals. Units follow researcher instructions. Reference intervals vary by age and, for PCV, sex. No diagnostic disease state is inferred. Percentage data retained without conversion.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "WBC_REF_LOW",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from age. Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "WBC external reference low bound. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "WBC_REF_HIGH",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from age. Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "WBC external reference high bound. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "WBC_CATEGORY",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from wbc; age. Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing",
        "result": "WBC classification against external reference intervals. WBC laboratory intervals are distinct from the protocol MAS diagnostic threshold. No conversion of original counts.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "NEUTROPHIL_REF_LOW",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from age. Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "NEUTROPHIL external reference low bound. External research reference, not an EKSUTH laboratory limit. Source: Children Minnesota CBC. See reference interval table in dictionary.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "NEUTROPHIL_REF_HIGH",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from age. Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap",
        "result": "NEUTROPHIL external reference high bound. External research reference, not an EKSUTH laboratory limit. Source: Children Minnesota CBC. See reference interval table in dictionary.",
        "methods": [
          "summaries",
          "wilson"
        ]
      },
      {
        "name": "NEUTROPHIL_CATEGORY",
        "role": "Derived supplementary description",
        "why": "Traceable derivation from neutrophil; age. Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing",
        "result": "NEUTROPHIL classification against external reference intervals. Units follow researcher instructions. Reference intervals vary by age and, for PCV, sex. No diagnostic disease state is inferred. Percentage data retained without conversion.",
        "methods": [
          "summaries",
          "wilson"
        ]
      }
    ],
    "5": [
      {
        "name": "diagnostic_confi1",
        "role": "Primary paired outcome",
        "why": "Initial rating before combined assessment, as clarified.",
        "methods": [
          "ordinal",
          "transitions"
        ],
        "result": "The starting confidence category."
      },
      {
        "name": "diagnostic_confi2",
        "role": "Primary paired outcome",
        "why": "After rating by the same clinician for the same patient.",
        "methods": [
          "ordinal",
          "transitions"
        ],
        "result": "Direction of within-case confidence change."
      },
      {
        "name": "hosp_n0",
        "role": "Within-patient linkage",
        "why": "Link paired case ratings; it is not a clinician ID.",
        "methods": [
          "transitions",
          "clustering"
        ],
        "result": "Case pairing without claiming clinician independence."
      },
      {
        "name": "time_to_diagnosis",
        "role": "Boundary \u2014 not paired ease outcome",
        "why": "Single time field with unverified unit.",
        "methods": [
          "summaries"
        ],
        "result": "At most a qualified timeline description; no faster-diagnosis claim."
      },
      {
        "name": "diagnosis_satisfaction",
        "role": "Boundary \u2014 patient outcome",
        "why": "Distinguish patient satisfaction from clinician ease.",
        "methods": [
          "ordinal"
        ],
        "result": "Patient satisfaction only, not the primary objective outcome."
      },
      {
        "name": "DIAG_CONFIDENCE_1",
        "role": "Derived primary paired outcome",
        "why": "Traceable derivation from diagnostic_confi1. 1 -> 1; 2 -> 2; 3 -> 3; 4 -> 4; 5 -> 5; other or missing source -> system missing",
        "result": "Doctor's diagnostic confidence before receiving MAS and hs-CRP information.. Researcher clarification: stage 1 is before any MAS or hsCRP information; stage 2 is after receiving both. Protocol confirms the five point scale; the supplied proforma omits confidence fields. The same clinician supplies both ratings for a case. Original responses copied, not inferred or calculated. See confidence methods note.",
        "methods": [
          "ordinal",
          "transitions"
        ]
      },
      {
        "name": "DIAG_CONFIDENCE_2",
        "role": "Derived primary paired outcome",
        "why": "Traceable derivation from diagnostic_confi2. 1 -> 1; 2 -> 2; 3 -> 3; 4 -> 4; 5 -> 5; other or missing source -> system missing",
        "result": "Doctor's diagnostic confidence after receiving MAS and hs-CRP information.. Researcher clarification: stage 1 is before any MAS or hsCRP information; stage 2 is after receiving both. Protocol confirms the five point scale; the supplied proforma omits confidence fields. The same clinician supplies both ratings for a case. Original responses copied, not inferred or calculated. See confidence methods note.",
        "methods": [
          "ordinal",
          "transitions"
        ]
      },
      {
        "name": "DIAGNOSTIC_SATISFACTION",
        "role": "Derived boundary \u2014 patient outcome",
        "why": "Traceable derivation from diagnosis_satisfaction. 1 -> 1; 2 -> 2; 3 -> 3; other or missing source -> system missing",
        "result": "Patient satisfaction with diagnosis using original questionnaire wording. Original questionnaire includes not satisfied, not slightly satisfied. This is patient satisfaction, distinct from clinician confidence.",
        "methods": [
          "ordinal"
        ]
      },
      {
        "name": "TIME_TO_DIAGNOSIS_HRS",
        "role": "Derived boundary \u2014 not paired ease outcome",
        "why": "Traceable derivation from time_to_diagnosis. Exact copy of source; no multiplication, division or conversion",
        "result": "Recorded time to diagnosis in hours. Exact recorded interval; see methods notes.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "TIME_TO_DIAGNOSIS_CAT",
        "role": "Derived boundary \u2014 not paired ease outcome",
        "why": "Traceable derivation from time_to_diagnosis. 0 to 6 inclusive ->1; >6 to 12 ->2; >12 to 24 ->3; >24 ->4; negative or missing ->system missing",
        "result": "Recorded hour category of recorded time to diagnosis. Analyst operational categories explicitly authorized in the correction prompt; not protocol prespecified. All original numeric values treated as hours without rescaling.",
        "methods": [
          "summaries"
        ]
      }
    ],
    "6": [
      {
        "name": "total_costs",
        "role": "Recorded monetary outcome",
        "why": "Summarise the one supplied aggregate amount.",
        "methods": [
          "cost",
          "summaries"
        ],
        "result": "Sum and typical recorded amounts; no verified economic cost."
      },
      {
        "name": "histology",
        "role": "Descriptive grouping",
        "why": "Describe amounts by conditional pathology group.",
        "methods": [
          "cost",
          "summaries"
        ],
        "result": "Case-mix summaries, not incremental strategy costs."
      },
      {
        "name": "hosp_n0",
        "role": "Record linkage",
        "why": "Aggregate distinct patient entries without duplicate records.",
        "methods": [
          "cost"
        ],
        "result": "The submitted monetary-record denominator."
      },
      {
        "name": "Duration_of_admission",
        "role": "Resource context \u2014 unpriced",
        "why": "Describe stay length using the recorded day unit.",
        "methods": [
          "summaries"
        ],
        "result": "Resource-use context; no bed-day component cost."
      },
      {
        "name": "postop_complication",
        "role": "Resource context \u2014 unpriced",
        "why": "Describe complication categories without treatment prices.",
        "methods": [
          "summaries"
        ],
        "result": "Clinical context, not identified cost drivers."
      },
      {
        "name": "abd_SCAN",
        "role": "Resource context \u2014 unpriced",
        "why": "Describe recorded scan categories, not scan quantities or prices.",
        "methods": [
          "summaries"
        ],
        "result": "No component cost from scan results alone."
      },
      {
        "name": "MAS",
        "role": "Diagnostic context \u2014 not a price",
        "why": "Identify the score studied without assigning a monetary value.",
        "methods": [
          "incremental"
        ],
        "result": "No unsupported MAS cost or zero-cost assumption."
      },
      {
        "name": "CRP",
        "role": "Diagnostic context \u2014 not a price",
        "why": "A concentration is not an hsCRP test price.",
        "methods": [
          "incremental"
        ],
        "result": "Incremental cost remains unavailable without costing inputs."
      },
      {
        "name": "HISTOLOGY_ACUTE_APPENDICITIS",
        "role": "Derived descriptive grouping",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 1; 6 -> 0; other or missing source -> system missing",
        "result": "Histopathological acute appendicitis reference diagnosis. User agreed mapping, verified against SAV labels. Code 6 assumes isolated reactive lymphoid hyperplasia without acute appendicitis. Unlisted diagnoses are not negative.",
        "methods": [
          "cost",
          "summaries"
        ]
      },
      {
        "name": "HISTOLOGY_SEVERITY",
        "role": "Derived descriptive grouping",
        "why": "Traceable derivation from histology. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 2; 5 -> 2; 6 -> 0; other or missing source -> system missing",
        "result": "Histological appendicitis severity independent of operative findings. Researcher approved operational histology crosswalk: codes 1 to 3 simple; gangrenous code 4 and perforated code 5 complicated; isolated reactive lymphoid hyperplasia code 6 not applicable. Operative findings do not modify this classification. Not recovered as a prespecified protocol severity definition.",
        "methods": [
          "cost",
          "summaries"
        ]
      },
      {
        "name": "APPENDICITIS_SEVERITY",
        "role": "Derived descriptive grouping",
        "why": "Traceable derivation from histology. Exact copy of HISTOLOGY_SEVERITY; no operative override",
        "result": "Histological severity alias of HISTOLOGY_SEVERITY. ",
        "methods": [
          "cost",
          "summaries"
        ]
      },
      {
        "name": "MAS_CATEGORY",
        "role": "Derived diagnostic context \u2014 not a price",
        "why": "Traceable derivation from MAS. Integer MAS 0 to 4 ->1; 5 to 6 ->2; 7 to 9 ->3; other or missing ->system missing",
        "result": "Modified Alvarado Score category using approved protocol boundaries. Descriptive probability labels follow the requested category names; they do not provide an independently validated disease classification. No original MAS was recalculated.",
        "methods": [
          "incremental"
        ]
      },
      {
        "name": "HS_CRP_3MG_CATEGORY",
        "role": "Derived diagnostic context \u2014 not a price",
        "why": "Traceable derivation from CRP. Nonnegative nonmissing CRP <=3 ->0; CRP >3 ->1; negative or missing ->system missing",
        "result": "hsCRP elevation using study laboratory upper reference limit of 3 mg/L. Protocol specifies elevation above 3 mg/L. This is the confirmed study diagnostic cutoff: >3 mg/L positive and ≤3 mg/L negative; it is not a universal cutoff. Continuous CRP is retained without conversion.",
        "methods": [
          "incremental"
        ]
      },
      {
        "name": "SCAN_DIAGNOSIS",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from abd_SCAN. 1 -> 1; 4 -> 2; 2 -> 3; 5 -> 5; 6 -> 9; other or missing source -> system missing",
        "result": "Standardized recorded abdominal scan diagnosis - ambiguous source code 3 unclassified. Source code 3 combines normal study and inconclusive. Its 11 records remain system missing in this derived field and require source report review. Code 9 is user missing. No scan accuracy binary was fabricated.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "SUPERFICIAL_SSI",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from postop_complication. 1 -> 1; 7 -> 0; other or missing source -> system missing",
        "result": "Recorded superficial surgical site infection status. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "DEEP_SSI",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from postop_complication. 2 -> 1; 7 -> 0; other or missing source -> system missing",
        "result": "Recorded deep surgical site infection status. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "ORGAN_SPACE_SSI",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from postop_complication. 3 -> 1; 7 -> 0; other or missing source -> system missing",
        "result": "Recorded organ space surgical site infection status. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "INCISIONAL_COMPLICATION",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from postop_complication. 4 -> 1; 7 -> 0; other or missing source -> system missing",
        "result": "Recorded incisional dehiscence status. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "INCISIONAL_HERNIA",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from postop_complication. 5 -> 1; 7 -> 0; other or missing source -> system missing",
        "result": "Recorded incisional hernia status. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "POSTOPERATIVE_ILEUS",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from postop_complication. 8 -> 1; 7 -> 0; other or missing source -> system missing",
        "result": "Recorded postoperative ileus status. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "POSTOPERATIVE_DEATH",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from postop_complication. 6 -> 1; 7 -> 0; other or missing source -> system missing",
        "result": "Recorded postoperative death status. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "ANY_POSTOP_COMPLICATION",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from postop_complication. 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 1; 6 -> 1; 7 -> 0; 8 -> 1; other or missing source -> system missing",
        "result": "Any documented postoperative complication in the recorded category. No is assigned only to explicit source category none; see methods notes.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "LENGTH_OF_STAY_DAYS",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from Duration_of_admission. Exact copy of source; no multiplication, division or conversion",
        "result": "Recorded length of stay in days. Exact recorded days; see methods notes.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "TOTAL_COST",
        "role": "Derived recorded monetary outcome",
        "why": "Traceable derivation from total_costs. Exact copy of source; no multiplication, division or conversion",
        "result": "Recorded total hospital cost in NGN. Exact recorded NGN totals; see methods notes.",
        "methods": [
          "cost",
          "summaries"
        ]
      },
      {
        "name": "LENGTH_OF_STAY_CAT",
        "role": "Derived resource context \u2014 unpriced",
        "why": "Traceable derivation from Duration_of_admission. 1 to 3 inclusive ->1; >3 to 7 ->2; >7 ->3; <1 or missing ->system missing",
        "result": "Provisional recorded hospital stay category in days. Zero and same-day stays remain unclassified rather than forced into 1 to 3 days.",
        "methods": [
          "summaries"
        ]
      },
      {
        "name": "TOTAL_COST_CAT",
        "role": "Derived recorded monetary outcome",
        "why": "Traceable derivation from total_costs. Cost >=0 classified using the loaded dataset one-third and two-thirds quantiles; negative or missing ->system missing",
        "result": "Sample relative total cost tertile group in Nigerian naira. Cut points must be calculated from the intended dataset nonnegative recorded costs at the one-third and two-thirds empirical quantiles using linear interpolation (type 7). Tied costs stay together, so group sizes can differ. Boundaries are sample relative, not universal economic or protocol thresholds. No sample-derived boundaries are embedded in this public dictionary. Review or derive categories locally for the intended dataset.",
        "methods": [
          "cost",
          "summaries"
        ]
      }
    ]
  },
  "missingByObjective": {
    "1": "No prespecified combined classification; a model output is derived, not a raw SAV field.",
    "2": "Histological severity is available under the approved histology-only operational mapping. A separate abscess endpoint is not ascertainable from the SAV codes.",
    "3": "Paediatric AUC uncertainty depends on reference-class counts; sparse negatives may prevent reliable estimation.",
    "4": "No explicit operation-status or normal-histology code; operated evidence and the negative rule are qualified.",
    "5": "No clinician ID, professional group, direct ease item or recorded binary clinician decisions.",
    "6": "No itemised hsCRP cost, unit prices, comparator pathway, price year or verified accounting basis."
  }
};

/* Supplementary planning only: retains the six approved primary objectives. */
(()=>{const d=window.HUB_DATA;if(d.objectives.some(o=>o.id===7))return;
const plans=[
['AIR score alone','Supported for planning','Estimate TP/FP/FN/TN, sensitivity, specificity, accuracy, PPV/NPV and Wilson 95% intervals at the researcher-established AIR ≥9 threshold. Use the recorded ordinal score for ROC/AUC with stratified bootstrap intervals where both reference groups support estimation.','AIR, histology'],
['AIR versus MAS alone','Supported paired comparison','Use common complete cases; exact paired McNemar comparisons for sensitivity among reference-positive patients, specificity among reference-negative patients and correct classifications overall. Compare raw-score AUCs with paired DeLong only if estimable; report absolute differences and intervals.','AIR, MAS, histology'],
['AIR versus MAS and hs-CRP','Supported paired comparison','MAS and hs-CRP requires both tests positive. Use paired binary comparisons against AIR ≥9; do not give the binary combination an artificial ROC curve or treat overlapping tests as independent. Preserve the documented objective-specific hs-CRP units/cutoff; no cutoff is changed here.','AIR, MAS, CRP, histology'],
['AIR versus MAS or hs-CRP','Supported paired comparison','MAS or hs-CRP requires either test positive. Use common-case paired McNemar comparisons of sensitivity, specificity and accuracy, effect differences and intervals. Define the comparison family before testing and use Holm adjustment where justified. No AIR versus hs-CRP-alone comparison is planned.','AIR, MAS, CRP, histology'],
['AIR in children versus adults','Conditional on sparse denominators','Children <16 years versus adults ≥16 years: independent groups. Estimate rates with Wilson intervals; use Fisher exact comparisons and appropriate independent-proportion difference intervals where informative. One reference-negative child limits paediatric specificity and AUC uncertainty; do not use paired age-group tests.','AIR, age, histology'],
['AIR in simple versus complicated appendicitis','Conditional severity analysis','Retain histology 1–3 simple and 4–5 complicated, excluding negative histology. Define whether the question is score distribution or discrimination of complication. Consider Mann–Whitney with a rank effect, or valid score-based ROC/AUC and fixed-threshold estimates; do not equate severity discrimination with detection of any appendicitis.','AIR, histology'],
['AIR-related negative appendicectomy outcomes','Supported descriptive analysis','Describe AIR values/categories among operated patients with reactive lymphoid hyperplasia (negative) versus appendicitis-positive histology. Use transparent specimen-linked denominators and Wilson intervals for negative proportions. Do not claim that applying AIR would have prevented surgery from these observed records.','AIR, histology, INTRAOP_FINDING'],
['Direct hospital cost implications of AIR-based strategies','Recorded costs only; incremental costing unsupported','Summarise observed total hospital costs and recorded admission/timing measures where relevant. Do not allocate the same cohort total to different strategies. Separate AIR-pathway costs, resource quantities, unit prices and comparator management are absent, so incremental costs, savings and cost-effectiveness cannot be estimated.','AIR, total_costs, Duration_of_admission, time_to_diagnosis, time_to_surgery'],
['Confidence before and after AIR-related information','Not supported by recorded questionnaire fields','The two confidence fields concern information from MAS and hs-CRP, not AIR. No AIR-specific before/after exposure or confidence ratings are recorded. Do not relabel these responses, run an AIR confidence test or infer a professional-group effect.','diagnostic_confi1, diagnostic_confi2']
];
const methods=plans.map(([name,status,here,variables],i)=>{const id='air7_'+(i+1),m={id,name,kind:'Exploratory analysis plan',status,here,client:here,origin:'A planned supplementary question using existing study variables.',purpose:name,interpret:'Exploratory and not protocol-prespecified; perform only justified analyses after checking the eligible data and denominators.',example:'Supported results are available under Exploratory Objective Seven in Tables & Figures; unsupported strategy costing and AIR confidence are explicitly excluded.',limits:'Recorded score construction and original AIR-specific protocol are not verified; use existing outputs without duplicating analyses.',terms:[],tags:['AIR','Objective Seven','planned'],variables};d.methods[id]=m;return m;});
d.objectives.push({id:7,supplementary:true,short:'Exploratory AIR score',title:'Exploratory Objective Seven: Evaluation of the Appendicitis Inflammatory Response (AIR) Score',color:'#2c63ad',description:'Exploratory AIR diagnostic performance, paired comparisons, clinical subgroups and recorded cost context.',approved:'To explore the diagnostic performance and potential clinical and hospital cost implications of the AIR score, both alone and in combination with MAS and hs-CRP, among patients with suspected acute appendicitis.',note:'Exploratory, not a seventh approved primary objective. The source AIR field has 85 recorded integer values (observed 4–10), with no missing or out-of-range values under the existing 0–12 working domain. AIR ≥9 positive and <9 negative is the established researcher threshold; low 0–4, intermediate 5–8 and high 9–12 categories are retained. The original AIR-specific protocol, full scoring weights and assay used to construct the stored score are not available, so the score is not reconstructed. Published standard AIR includes vomiting, right lower quadrant pain, graded rebound/defence, measured temperature, WBC, neutrophil proportion and CRP; complete component grading and measured temperature are not recorded here. hs-CRP substitution is not verified. Overlap with MAS and CRP prevents a claim of independent added value from simply adding components again. Published reference: Andersson et al., World J Surg 2021;45:2081–2091, doi:10.1007/s00268-021-06042-2. No AIR versus hs-CRP-alone comparison or new prediction model is proposed.',contribution:'Six tables and two figures evaluate the supported questions using existing recorded data. Strategy-specific costs and AIR-related confidence cannot be estimated; no AIR versus hs-CRP-alone comparison is included.',methods});
d.missingByObjective['7']='AIR construction and AIR-specific protocol remain unverified. Only one reference-negative child is recorded. Separate strategy costs and AIR-specific confidence assessments are absent. Load the study data to generate the supported Objective Seven outputs. Unsupported incremental costing and AIR-specific confidence are not calculated.';
d.bindings['7']=[];for(const name of ['AIR','MAS','CRP','histology','age','INTRAOP_FINDING','total_costs','Duration_of_admission','time_to_diagnosis','time_to_surgery','diagnostic_confi1','diagnostic_confi2'])d.bindings['7'].push({name,role:name==='AIR'?'Primary recorded score':name==='histology'?'Reference standard':'Supporting recorded field',why:'Used only for the eligible supplementary questions listed here.',result:'A planned exploratory analysis, not a new calculated finding.',methods:methods.filter(m=>m.variables.split(', ').includes(name)).map(m=>m.id)});
})();
