/* Verified 92-variable categorized SAV metadata; no patient rows. */
window.HUB_VARIABLES = {
  "n": null,
  "verified": "12 October 2026",
  "variables": [
    {
      "name": "hosp_n0",
      "label": "Hospital identifier as recorded",
      "storage": "string",
      "measure": "nominal",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Hospital record identifier",
      "analysisType": "Identifier",
      "unit": "No measurement unit",
      "issue": "Identifiers are excluded from this public dictionary and the aggregate results export.",
      "nonmissing": null,
      "objectives": [
        1,
        2,
        3,
        4,
        5,
        6
      ]
    },
    {
      "name": "age",
      "label": "Age in years",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Age",
      "analysisType": "Numerical age",
      "unit": "Years: protocol/context; no SAV unit label",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        3,
        4
      ]
    },
    {
      "name": "sex",
      "label": "Participant sex",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "male",
        "2.0": "female"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Sex",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        3,
        4
      ]
    },
    {
      "name": "religion",
      "label": "Religion as recorded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "christianity",
        "2.0": "islam",
        "3.0": "traditional",
        "4.0": "others"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Religion",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "education",
      "label": "Highest recorded education category",
      "storage": "double",
      "measure": "ordinal",
      "codes": {
        "0.0": "none",
        "1.0": "pry",
        "2.0": "sec",
        "3.0": "tertiary"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Education level",
      "analysisType": "Ordered categories",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "marital_status",
      "label": "Marital status as recorded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "single",
        "2.0": "married",
        "3.0": "widow"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Marital status",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "occupation",
      "label": "Participant occupation as recorded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "student",
        "2.0": "artisan",
        "3.0": "farming",
        "4.0": "business",
        "5.0": "nysc",
        "6.0": "cs",
        "7.0": "teacher",
        "8.0": "driver"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Patient occupation",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "abdominal_pain",
      "label": "Abdominal pain reported",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Abdominal pain",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "migratory",
      "label": "Migratory abdominal pain reported",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Migratory pain",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1
      ]
    },
    {
      "name": "duration_of_pain",
      "label": "Recorded abdominal pain duration in hours",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Duration of pain",
      "analysisType": "Numerical duration",
      "unit": "Hours, confirmed; no rescaling",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "anorexia",
      "label": "Anorexia response as originally recorded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Anorexia",
      "analysisType": "Binary response with an unlabelled entry",
      "unit": "Not applicable",
      "issue": "Unlabelled source response remains unchanged; ANOREXIA_PRESENT is missing where the source response cannot be established.",
      "nonmissing": null,
      "objectives": [
        1
      ]
    },
    {
      "name": "Vomiting",
      "label": "Nausea or vomiting as recorded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Nausea/vomiting item",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1
      ]
    },
    {
      "name": "fever",
      "label": "Fever recorded - measured temperature unavailable",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Fever checkbox",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1
      ]
    },
    {
      "name": "diarrhea",
      "label": "Diarrhea reported",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Diarrhoea",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "tendernessRIF",
      "label": "Right iliac fossa tenderness recorded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Right iliac fossa tenderness",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1
      ]
    },
    {
      "name": "reboundtenderness",
      "label": "Rebound tenderness recorded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Rebound tenderness",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1
      ]
    },
    {
      "name": "signs",
      "label": "Single selected clinical sign category - other signs not excluded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "pointing sign",
        "2.0": "rovsings",
        "3.0": "psoas",
        "4.0": "obturator",
        "5.0": "generalised"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Recorded clinical sign category",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "comorbidity",
      "label": "Single recorded comorbidity category",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "htn",
        "2.0": "dm",
        "3.0": "asthma",
        "4.0": "pud",
        "5.0": "others",
        "6.0": "none",
        "7.0": "hepatitis",
        "8.0": "RVS"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Comorbidity category",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "RVS is an undefined value label, not a confirmed diagnosis or automatic exclusion.",
      "nonmissing": null,
      "objectives": [
        1,
        2
      ]
    },
    {
      "name": "diagnostic_confi1",
      "label": "Doctor's diagnostic confidence before receiving MAS and hs-CRP information.",
      "storage": "double",
      "measure": "ordinal",
      "codes": {
        "1.0": "not confident at all",
        "2.0": "slightly confident",
        "3.0": "moderately confident",
        "4.0": "very confident",
        "5.0": "extremely confident"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Diagnostic confidence before combined assessment",
      "analysisType": "Ordered five-category rating",
      "unit": "Category code 1\u20135",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        5
      ]
    },
    {
      "name": "pcv",
      "label": "Packed cell volume in percent under the specified working representation",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Packed cell volume",
      "analysisType": "Numerical blood measure",
      "unit": "Percent",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations. See exploratory PCV; external age/sex intervals are not appendicitis diagnostic thresholds.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "wbc",
      "label": "White blood cell count in 10^9 cells/L under the specified working unit",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "White blood cell count",
      "analysisType": "Numerical blood measure",
      "unit": "\u00d710\u2079/L",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1
      ]
    },
    {
      "name": "neutrophil",
      "label": "Neutrophil percentage per researcher clarification",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Neutrophil measurement",
      "analysisType": "Numerical blood measure",
      "unit": "Percent",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "MAS",
      "label": "Recorded Modified Alvarado Score - protocol range 0 to 9",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Modified Alvarado Score",
      "analysisType": "Bounded ordered clinical score",
      "unit": "Protocol maximum: 9 points",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1,
        3,
        4,
        6
      ]
    },
    {
      "name": "AIR",
      "label": "Recorded AIR score - assumed standard 0 to 12 range per researcher instruction",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Appendicitis Inflammatory Response score",
      "analysisType": "Stored clinical score",
      "unit": "Scoring construction not verified",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations. See exploratory AIR and diagnostic strategies. Working categories; no AIR-specific approved protocol recovered.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "CRP",
      "label": "High sensitivity C reactive protein concentration in mg/L per study context",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Protocol hsCRP measurement",
      "analysisType": "Numerical concentration",
      "unit": "mg/L",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1,
        2,
        3,
        4,
        6
      ]
    },
    {
      "name": "abd_SCAN",
      "label": "Recorded abdominal scan diagnosis - code 3 combines normal and inconclusive",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "acute appendicitis",
        "2.0": "other diagnosis",
        "3.0": "normal study/inconclusive",
        "4.0": "appendiceal mass",
        "5.0": "inconclusive",
        "6.0": "not done"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Abdominal scan category",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        6
      ]
    },
    {
      "name": "diagnostic_confi2",
      "label": "Doctor's diagnostic confidence after receiving MAS and hs-CRP information.",
      "storage": "double",
      "measure": "ordinal",
      "codes": {
        "1.0": "not confident at all",
        "2.0": "slightly confident",
        "3.0": "moderately confident",
        "4.0": "very confident",
        "5.0": "extremely confident"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Diagnostic confidence after combined assessment",
      "analysisType": "Ordered five-category rating",
      "unit": "Category code 1\u20135",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        5
      ]
    },
    {
      "name": "INTRAOP_FINDING",
      "label": "Single recorded intraoperative finding category",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "inflamed appendix",
        "2.0": "ruptured appendix",
        "3.0": "normal appendix",
        "4.0": "gangrenous"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Intraoperative appearance",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        2,
        4
      ]
    },
    {
      "name": "Appendix_position",
      "label": "Appendix anatomical position as recorded",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "retrocaecal",
        "2.0": "pelvic",
        "3.0": "paracecal",
        "4.0": "subcecal",
        "5.0": "preileal",
        "6.0": "postileal"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Appendix position",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        4
      ]
    },
    {
      "name": "length_of_appendix",
      "label": "Recorded appendix length in centimetres per researcher instruction",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Appendix length",
      "analysisType": "Numerical measurement",
      "unit": "Centimetres",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        4
      ]
    },
    {
      "name": "histology",
      "label": "Original detailed histopathological diagnosis",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "acute appendicitis",
        "2.0": "suppurative appendicitis",
        "3.0": "phlemonous appendicitis",
        "4.0": "gangrenous appendix",
        "5.0": "perforated appendicitis",
        "6.0": "reactive lymphoid hyperplasia"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Appendix histology reference",
      "analysisType": "Nominal pathology category",
      "unit": "Category code",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        1,
        2,
        3,
        4,
        6
      ]
    },
    {
      "name": "faecolith",
      "label": "Faecolith documented - obstruction status not distinguished",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Faecolith present",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "time_to_diagnosis",
      "label": "Recorded time to diagnosis in hours",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Time to diagnosis",
      "analysisType": "Numerical duration",
      "unit": "Recorded hours",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        5
      ]
    },
    {
      "name": "time_to_surgery",
      "label": "Recorded time to surgery in hours",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Time to surgery",
      "analysisType": "Numerical duration",
      "unit": "Recorded hours",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": []
    },
    {
      "name": "postop_complication",
      "label": "Recorded postoperative complication category",
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "superficial ssi",
        "2.0": "deep ssi",
        "3.0": "organ space ssi",
        "4.0": "dehiscence",
        "5.0": "hernia",
        "6.0": "death",
        "7.0": "none",
        "8.0": "ileus"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Postoperative complication category",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        6
      ]
    },
    {
      "name": "Duration_of_admission",
      "label": "Recorded duration of admission in days per researcher instruction",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Duration of admission",
      "analysisType": "Numerical duration",
      "unit": "Recorded days",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        6
      ]
    },
    {
      "name": "total_costs",
      "label": "Recorded total hospital cost in NGN",
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Recorded total amount",
      "analysisType": "Numerical monetary amount",
      "unit": "NGN; original totals unchanged",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        6
      ]
    },
    {
      "name": "diagnosis_satisfaction",
      "label": "Patient satisfaction with diagnosis",
      "storage": "double",
      "measure": "ordinal",
      "codes": {
        "1.0": "not satisfied",
        "2.0": "satisfied",
        "3.0": "very satisfied"
      },
      "systemMissing": null,
      "userMissing": [],
      "invalid": null,
      "meaning": "Patient satisfaction with diagnosis",
      "analysisType": "Ordered categories",
      "unit": "Category code",
      "issue": "Original values and value labels retained. See the current derived definitions; no inference from unrecorded observations.",
      "nonmissing": null,
      "objectives": [
        5
      ]
    },
    {
      "name": "AGE_GROUP",
      "meaning": "Age group using the approved 16 year boundary",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Nonmissing age >=0 and <16 ->1; age >=16 ->2; missing or negative -> system missing. No protocol age limits are specified. No cohort age range is embedded in the public package.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "Age group using the approved 16 year boundary",
      "measure": "ordinal",
      "codes": {
        "1.0": "Children younger than 16 years",
        "2.0": "Adults aged 16 years and above"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "HISTOLOGY_ACUTE_APPENDICITIS",
      "meaning": "Histopathological acute appendicitis reference diagnosis",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 1; 6 -> 0; other or missing source -> system missing. User agreed mapping, verified against SAV labels. Code 6 assumes isolated reactive lymphoid hyperplasia without acute appendicitis. Unlisted diagnoses are not negative.",
      "objectives": [
        1,
        2,
        3,
        4,
        6
      ],
      "invalid": null,
      "label": "Histopathological acute appendicitis reference diagnosis",
      "measure": "nominal",
      "codes": {
        "0.0": "Negative acute appendicitis",
        "1.0": "Positive acute appendicitis"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "HISTOLOGY_SEVERITY",
      "meaning": "Histological appendicitis severity independent of operative findings",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 1; 3 -> 1; 4 -> 2; 5 -> 2; 6 -> 0; other or missing source -> system missing. Researcher approved operational histology crosswalk: codes 1 to 3 simple; gangrenous code 4 and perforated code 5 complicated; isolated reactive lymphoid hyperplasia code 6 not applicable. Operative findings do not modify this classification. Not recovered as a prespecified protocol severity definition.",
      "objectives": [
        1,
        2,
        3,
        4,
        6
      ],
      "invalid": null,
      "label": "Histological appendicitis severity independent of operative findings",
      "measure": "nominal",
      "codes": {
        "0.0": "Negative acute appendicitis / not applicable",
        "1.0": "Simple acute appendicitis",
        "2.0": "Complicated acute appendicitis"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "APPENDICITIS_SEVERITY",
      "meaning": "Histological severity alias of HISTOLOGY_SEVERITY",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Exact copy of HISTOLOGY_SEVERITY; no operative override. ",
      "objectives": [
        1,
        2,
        3,
        4,
        6
      ],
      "invalid": null,
      "label": "Histological severity alias of HISTOLOGY_SEVERITY",
      "measure": "nominal",
      "codes": {
        "0.0": "Negative acute appendicitis / not applicable",
        "1.0": "Simple acute appendicitis",
        "2.0": "Complicated acute appendicitis"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "OPERATIVE_RUPTURE",
      "meaning": "Operative rupture documented independently of histology",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "2 -> 1; 3 -> 0; other or missing source -> system missing. Ruptured category supports Yes; normal appendix supports No. Inflamed or gangrenous alone does not explicitly exclude rupture and remains unknown. Original operative categories retained.",
      "objectives": [
        2,
        4
      ],
      "invalid": null,
      "label": "Operative rupture documented independently of histology",
      "measure": "nominal",
      "codes": {
        "0.0": "No rupture - normal appendix recorded",
        "1.0": "Yes - ruptured appendix recorded"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "FECALITH",
      "meaning": "Documented fecalith presence",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 0; other or missing source -> system missing. Source does not distinguish incidental from obstructing fecalith. It does not determine severity.",
      "objectives": [],
      "invalid": null,
      "label": "Documented fecalith presence",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "DIAG_CONFIDENCE_1",
      "meaning": "Doctor's diagnostic confidence before receiving MAS and hs-CRP information.",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 2; 3 -> 3; 4 -> 4; 5 -> 5; other or missing source -> system missing. Researcher clarification: stage 1 is before any MAS or hsCRP information; stage 2 is after receiving both. Protocol confirms the five point scale; the supplied proforma omits confidence fields. The same clinician supplies both ratings for a case. Original responses copied, not inferred or calculated. See confidence methods note.",
      "objectives": [
        5
      ],
      "invalid": null,
      "label": "Doctor's diagnostic confidence before receiving MAS and hs-CRP information.",
      "measure": "ordinal",
      "codes": {
        "1.0": "Not confident at all",
        "2.0": "Slightly confident",
        "3.0": "Moderately confident",
        "4.0": "Very confident",
        "5.0": "Extremely confident"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "DIAG_CONFIDENCE_2",
      "meaning": "Doctor's diagnostic confidence after receiving MAS and hs-CRP information.",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 2; 3 -> 3; 4 -> 4; 5 -> 5; other or missing source -> system missing. Researcher clarification: stage 1 is before any MAS or hsCRP information; stage 2 is after receiving both. Protocol confirms the five point scale; the supplied proforma omits confidence fields. The same clinician supplies both ratings for a case. Original responses copied, not inferred or calculated. See confidence methods note.",
      "objectives": [
        5
      ],
      "invalid": null,
      "label": "Doctor's diagnostic confidence after receiving MAS and hs-CRP information.",
      "measure": "ordinal",
      "codes": {
        "1.0": "Not confident at all",
        "2.0": "Slightly confident",
        "3.0": "Moderately confident",
        "4.0": "Very confident",
        "5.0": "Extremely confident"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "REBOUND_TENDERNESS",
      "meaning": "Documented rebound tenderness",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 0; other or missing source -> system missing. ",
      "objectives": [
        1
      ],
      "invalid": null,
      "label": "Documented rebound tenderness",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "RIF_TENDERNESS",
      "meaning": "Documented right iliac fossa tenderness",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 0; other or missing source -> system missing. Tenderness is not a substitute for a separately documented RIF pain variable.",
      "objectives": [
        1
      ],
      "invalid": null,
      "label": "Documented right iliac fossa tenderness",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "POINTING_SIGN",
      "meaning": "Pointing sign documented as the selected clinical sign",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; other or missing source -> system missing. Positive only extraction. Other selected categories do not document absence or exclude coexistence; they remain system missing. Source code 5 means generalized tenderness per researcher clarification.",
      "objectives": [],
      "invalid": null,
      "label": "Pointing sign documented as the selected clinical sign",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "ROVSING_SIGN",
      "meaning": "Rovsing sign documented as the selected clinical sign",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "2 -> 1; other or missing source -> system missing. Positive only extraction. Other selected categories do not document absence or exclude coexistence; they remain system missing. Source code 5 means generalized tenderness per researcher clarification.",
      "objectives": [],
      "invalid": null,
      "label": "Rovsing sign documented as the selected clinical sign",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "PSOAS_SIGN",
      "meaning": "Psoas sign documented as the selected clinical sign",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "3 -> 1; other or missing source -> system missing. Positive only extraction. Other selected categories do not document absence or exclude coexistence; they remain system missing. Source code 5 means generalized tenderness per researcher clarification.",
      "objectives": [],
      "invalid": null,
      "label": "Psoas sign documented as the selected clinical sign",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "OBTURATOR_SIGN",
      "meaning": "Obturator sign documented as the selected clinical sign",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "4 -> 1; other or missing source -> system missing. Positive only extraction. Other selected categories do not document absence or exclude coexistence; they remain system missing. Source code 5 means generalized tenderness per researcher clarification.",
      "objectives": [],
      "invalid": null,
      "label": "Obturator sign documented as the selected clinical sign",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "GENERALIZED_TENDERNESS",
      "meaning": "Generalized tenderness documented as the selected clinical sign",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "5 -> 1; other or missing source -> system missing. Researcher confirms signs code 5 means generalized tenderness. Other selected categories remain unknown, not absent.",
      "objectives": [],
      "invalid": null,
      "label": "Generalized tenderness documented as the selected clinical sign",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "MAS_CATEGORY",
      "meaning": "Modified Alvarado Score category using approved protocol boundaries",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Integer MAS 0 to 4 ->1; 5 to 6 ->2; 7 to 9 ->3; other or missing ->system missing. Descriptive probability labels follow the requested category names; they do not provide an independently validated disease classification. No original MAS was recalculated.",
      "objectives": [
        1,
        3,
        4,
        6
      ],
      "invalid": null,
      "label": "Modified Alvarado Score category using approved protocol boundaries",
      "measure": "ordinal",
      "codes": {
        "1.0": "Low probability (0 to 4)",
        "2.0": "Intermediate probability / equivocal (5 to 6)",
        "3.0": "High probability (7 to 9)"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "HS_CRP_3MG_CATEGORY",
      "meaning": "hsCRP elevation using study laboratory upper reference limit of 3 mg/L",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Nonnegative nonmissing CRP <=3 ->0; CRP >3 ->1; negative or missing ->system missing. Protocol specifies elevation above 3 mg/L. This is a study laboratory elevation threshold, not a universally validated appendicitis cutoff. Continuous CRP is retained without conversion.",
      "objectives": [
        1,
        2,
        3,
        4,
        6
      ],
      "invalid": null,
      "label": "hsCRP elevation using study laboratory upper reference limit of 3 mg/L",
      "measure": "nominal",
      "codes": {
        "0.0": "At or below 3 mg/L",
        "1.0": "Above 3 mg/L"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "SCAN_DIAGNOSIS",
      "meaning": "Standardized recorded abdominal scan diagnosis - ambiguous source code 3 unclassified",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 4 -> 2; 2 -> 3; 5 -> 5; 6 -> 9; other or missing source -> system missing. Source code 3 combines normal study and inconclusive. Its 11 records remain system missing in this derived field and require source report review. Code 9 is user missing. No scan accuracy binary was fabricated.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Standardized recorded abdominal scan diagnosis - ambiguous source code 3 unclassified",
      "measure": "nominal",
      "codes": {
        "1.0": "Acute appendicitis",
        "2.0": "Appendiceal mass",
        "3.0": "Other diagnosis",
        "4.0": "Normal study",
        "5.0": "Inconclusive",
        "9.0": "Not done / not performed"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": [
        {
          "lo": 9.0,
          "hi": 9.0
        }
      ]
    },
    {
      "name": "INTRAOP_FINDING_STD",
      "meaning": "Standardized single recorded intraoperative finding",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 2; 4 -> 3; 3 -> 4; other or missing source -> system missing. INTRAOP_FINDING already exists; an STD suffix avoids overwriting it. The single selected source category does not exclude additional operative findings; no separate absent indicators were inferred.",
      "objectives": [
        2,
        4
      ],
      "invalid": null,
      "label": "Standardized single recorded intraoperative finding",
      "measure": "nominal",
      "codes": {
        "1.0": "Inflamed appendix",
        "2.0": "Ruptured / perforated appendix",
        "3.0": "Gangrenous appendix",
        "4.0": "Normal appendix",
        "5.0": "Other documented finding"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "SUPERFICIAL_SSI",
      "meaning": "Recorded superficial surgical site infection status",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 7 -> 0; other or missing source -> system missing. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded superficial surgical site infection status",
      "measure": "nominal",
      "codes": {
        "0.0": "No",
        "1.0": "Yes"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "DEEP_SSI",
      "meaning": "Recorded deep surgical site infection status",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "2 -> 1; 7 -> 0; other or missing source -> system missing. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded deep surgical site infection status",
      "measure": "nominal",
      "codes": {
        "0.0": "No",
        "1.0": "Yes"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "ORGAN_SPACE_SSI",
      "meaning": "Recorded organ space surgical site infection status",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "3 -> 1; 7 -> 0; other or missing source -> system missing. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded organ space surgical site infection status",
      "measure": "nominal",
      "codes": {
        "0.0": "No",
        "1.0": "Yes"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "INCISIONAL_COMPLICATION",
      "meaning": "Recorded incisional dehiscence status",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "4 -> 1; 7 -> 0; other or missing source -> system missing. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded incisional dehiscence status",
      "measure": "nominal",
      "codes": {
        "0.0": "No",
        "1.0": "Yes"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "INCISIONAL_HERNIA",
      "meaning": "Recorded incisional hernia status",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "5 -> 1; 7 -> 0; other or missing source -> system missing. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded incisional hernia status",
      "measure": "nominal",
      "codes": {
        "0.0": "No",
        "1.0": "Yes"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "POSTOPERATIVE_ILEUS",
      "meaning": "Recorded postoperative ileus status",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "8 -> 1; 7 -> 0; other or missing source -> system missing. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded postoperative ileus status",
      "measure": "nominal",
      "codes": {
        "0.0": "No",
        "1.0": "Yes"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "POSTOPERATIVE_DEATH",
      "meaning": "Recorded postoperative death status",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "6 -> 1; 7 -> 0; other or missing source -> system missing. Selected complication ->Yes; explicit none ->No; other categories ->unknown. See postoperative complication definitions.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded postoperative death status",
      "measure": "nominal",
      "codes": {
        "0.0": "No",
        "1.0": "Yes"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "ANY_POSTOP_COMPLICATION",
      "meaning": "Any documented postoperative complication in the recorded category",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 1; 6 -> 1; 7 -> 0; 8 -> 1; other or missing source -> system missing. No is assigned only to explicit source category none; see methods notes.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Any documented postoperative complication in the recorded category",
      "measure": "nominal",
      "codes": {
        "0.0": "No documented postoperative complication",
        "1.0": "At least one postoperative complication"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "DIAGNOSTIC_SATISFACTION",
      "meaning": "Patient satisfaction with diagnosis using original questionnaire wording",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 2; 3 -> 3; other or missing source -> system missing. Original questionnaire includes not satisfied, not slightly satisfied. This is patient satisfaction, distinct from clinician confidence.",
      "objectives": [
        5
      ],
      "invalid": null,
      "label": "Patient satisfaction with diagnosis using original questionnaire wording",
      "measure": "ordinal",
      "codes": {
        "1.0": "Not satisfied",
        "2.0": "Satisfied",
        "3.0": "Very satisfied"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "ANOREXIA_PRESENT",
      "meaning": "Anorexia presence from labelled source responses",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 -> 1; 2 -> 0; other or missing source -> system missing. Only labelled responses are classified; unlabelled source values remain unchanged and derived status is system missing.",
      "objectives": [
        1
      ],
      "invalid": null,
      "label": "Anorexia presence from labelled source responses",
      "measure": "nominal",
      "codes": {
        "0.0": "No",
        "1.0": "Yes"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "ABDOMINAL_PAIN_DURATION_HRS",
      "meaning": "Recorded abdominal pain duration in hours",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Exact copy of source; no multiplication, division or conversion. Hours are the explicitly requested working unit. Fractional recorded values such as 0.25 and 0.5 remain unchanged; no days to hours conversion was made.",
      "objectives": [],
      "invalid": null,
      "label": "Recorded abdominal pain duration in hours",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "APPENDIX_LENGTH_CM",
      "meaning": "Recorded appendix length in centimetres",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Exact copy of source; no multiplication, division or conversion. ",
      "objectives": [
        4
      ],
      "invalid": null,
      "label": "Recorded appendix length in centimetres",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "TIME_TO_DIAGNOSIS_HRS",
      "meaning": "Recorded time to diagnosis in hours",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Exact copy of source; no multiplication, division or conversion. Exact recorded interval; see methods notes.",
      "objectives": [
        5
      ],
      "invalid": null,
      "label": "Recorded time to diagnosis in hours",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "TIME_TO_SURGERY_HRS",
      "meaning": "Recorded time to surgery in hours",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Exact copy of source; no multiplication, division or conversion. Exact recorded interval; see methods notes.",
      "objectives": [],
      "invalid": null,
      "label": "Recorded time to surgery in hours",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "LENGTH_OF_STAY_DAYS",
      "meaning": "Recorded length of stay in days",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Exact copy of source; no multiplication, division or conversion. Exact recorded days; see methods notes.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded length of stay in days",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "TOTAL_COST",
      "meaning": "Recorded total hospital cost in NGN",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Exact copy of source; no multiplication, division or conversion. Exact recorded NGN totals; see methods notes.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Recorded total hospital cost in NGN",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "ABDOMINAL_PAIN_DURATION_CAT",
      "meaning": "Recorded hour category of recorded abdominal pain duration",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "0 to 6 inclusive ->1; >6 to 12 ->2; >12 to 24 ->3; >24 ->4; negative or missing ->system missing. Analyst operational categories explicitly authorized in the correction prompt; not protocol prespecified. All original numeric values treated as hours without rescaling.",
      "objectives": [],
      "invalid": null,
      "label": "Recorded hour category of recorded abdominal pain duration",
      "measure": "ordinal",
      "codes": {
        "1.0": "6 hours or less",
        "2.0": "More than 6 to 12 hours",
        "3.0": "More than 12 to 24 hours",
        "4.0": "More than 24 hours"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "TIME_TO_DIAGNOSIS_CAT",
      "meaning": "Recorded hour category of recorded time to diagnosis",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "0 to 6 inclusive ->1; >6 to 12 ->2; >12 to 24 ->3; >24 ->4; negative or missing ->system missing. Analyst operational categories explicitly authorized in the correction prompt; not protocol prespecified. All original numeric values treated as hours without rescaling.",
      "objectives": [
        5
      ],
      "invalid": null,
      "label": "Recorded hour category of recorded time to diagnosis",
      "measure": "ordinal",
      "codes": {
        "1.0": "6 hours or less",
        "2.0": "More than 6 to 12 hours",
        "3.0": "More than 12 to 24 hours",
        "4.0": "More than 24 hours"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "TIME_TO_SURGERY_CAT",
      "meaning": "Recorded hour category of recorded time to surgery",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "0 to 6 inclusive ->1; >6 to 12 ->2; >12 to 24 ->3; >24 ->4; negative or missing ->system missing. Analyst operational categories explicitly authorized in the correction prompt; not protocol prespecified. All original numeric values treated as hours without rescaling.",
      "objectives": [],
      "invalid": null,
      "label": "Recorded hour category of recorded time to surgery",
      "measure": "ordinal",
      "codes": {
        "1.0": "6 hours or less",
        "2.0": "More than 6 to 12 hours",
        "3.0": "More than 12 to 24 hours",
        "4.0": "More than 24 hours"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "LENGTH_OF_STAY_CAT",
      "meaning": "Provisional recorded hospital stay category in days",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "1 to 3 inclusive ->1; >3 to 7 ->2; >7 ->3; <1 or missing ->system missing. Zero and same-day stays remain unclassified rather than forced into 1 to 3 days.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Provisional recorded hospital stay category in days",
      "measure": "ordinal",
      "codes": {
        "1.0": "1 to 3 days",
        "2.0": "4 to 7 days",
        "3.0": "More than 7 days"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "AIR_CATEGORY",
      "meaning": "Provisional standard AIR score probability category",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Integer AIR 0 to 4 ->1; 5 to 8 ->2; 9 to 12 ->3; other or missing ->system missing. Standard AIR identity and 0 to 12 range are working assumptions explicitly supplied by the researcher. The protocol and proforma do not define AIR. Original score was not recalculated. See exploratory AIR and diagnostic strategies. Working categories; no AIR-specific approved protocol recovered.",
      "objectives": [],
      "invalid": null,
      "label": "Provisional standard AIR score probability category",
      "measure": "ordinal",
      "codes": {
        "1.0": "Low probability (0 to 4)",
        "2.0": "Intermediate probability (5 to 8)",
        "3.0": "High probability (9 to 12)"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "PCV_REF_LOW",
      "meaning": "PCV external reference low bound",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Assign age and sex specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary. See exploratory PCV; external age/sex intervals are not appendicitis diagnostic thresholds.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "PCV external reference low bound",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "PCV_REF_HIGH",
      "meaning": "PCV external reference high bound",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Assign age and sex specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary. See exploratory PCV; external age/sex intervals are not appendicitis diagnostic thresholds.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "PCV external reference high bound",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "PCV_CATEGORY",
      "meaning": "PCV classification against external reference intervals",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing. Units follow researcher instructions. Reference intervals vary by age and, for PCV, sex. No diagnostic disease state is inferred. Percentage data retained without conversion. See exploratory PCV; external age/sex intervals are not appendicitis diagnostic thresholds.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "PCV classification against external reference intervals",
      "measure": "ordinal",
      "codes": {
        "1.0": "Low PCV",
        "2.0": "Normal PCV",
        "3.0": "High PCV"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "WBC_REF_LOW",
      "meaning": "WBC external reference low bound",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "WBC external reference low bound",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "WBC_REF_HIGH",
      "meaning": "WBC external reference high bound",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap. External research reference, not an EKSUTH laboratory limit. Source: Mayo CBC. See reference interval table in dictionary.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "WBC external reference high bound",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "WBC_CATEGORY",
      "meaning": "WBC classification against external reference intervals",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing. WBC laboratory intervals are distinct from the protocol MAS diagnostic threshold. No conversion of original counts.",
      "objectives": [
        1,
        3,
        4
      ],
      "invalid": null,
      "label": "WBC classification against external reference intervals",
      "measure": "ordinal",
      "codes": {
        "1.0": "Low",
        "2.0": "Normal",
        "3.0": "High"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "NEUTROPHIL_REF_LOW",
      "meaning": "NEUTROPHIL external reference low bound",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap. External research reference, not an EKSUTH laboratory limit. Source: Children Minnesota CBC. See reference interval table in dictionary.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "NEUTROPHIL external reference low bound",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "NEUTROPHIL_REF_HIGH",
      "meaning": "NEUTROPHIL external reference high bound",
      "storage": "double",
      "analysisType": "scale derived measurement",
      "unit": "See exact operational definition",
      "issue": "Assign age specific reference bound; age below 8 or missing required age or sex remains missing; adult bounds have no upper age cap. External research reference, not an EKSUTH laboratory limit. Source: Children Minnesota CBC. See reference interval table in dictionary.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "NEUTROPHIL external reference high bound",
      "measure": "scale",
      "codes": {},
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "NEUTROPHIL_CATEGORY",
      "meaning": "NEUTROPHIL classification against external reference intervals",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Below lower reference bound ->1; within inclusive bounds ->2; above upper bound ->3; invalid measurement or missing reference ->system missing. Units follow researcher instructions. Reference intervals vary by age and, for PCV, sex. No diagnostic disease state is inferred. Percentage data retained without conversion.",
      "objectives": [
        3,
        4
      ],
      "invalid": null,
      "label": "NEUTROPHIL classification against external reference intervals",
      "measure": "ordinal",
      "codes": {
        "1.0": "Low",
        "2.0": "Normal",
        "3.0": "High"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "WBC_MAS_THRESHOLD",
      "meaning": "Protocol MAS leukocytosis threshold greater than 10 x 10^9 cells/L",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Nonnegative WBC <=10 ->0; WBC >10 ->1; missing or negative ->system missing. Protocol MAS table specifies this exact cutoff. This does not replace the age appropriate WBC laboratory reference classification. No separate neutrophil threshold is in the approved Modified Alvarado Score.",
      "objectives": [
        1
      ],
      "invalid": null,
      "label": "Protocol MAS leukocytosis threshold greater than 10 x 10^9 cells/L",
      "measure": "nominal",
      "codes": {
        "0.0": "Not above the threshold",
        "1.0": "Above the threshold"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "TOTAL_COST_CAT",
      "meaning": "Sample relative total cost tertile group in Nigerian naira",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "See exact operational definition",
      "issue": "Cost >=0 classified using the loaded dataset one-third and two-thirds quantiles; negative or missing ->system missing. Cut points must be calculated from the intended dataset nonnegative recorded costs at the one-third and two-thirds empirical quantiles using linear interpolation (type 7). Tied costs stay together, so group sizes can differ. Boundaries are sample relative, not universal economic or protocol thresholds. No sample-derived boundaries are embedded in this public dictionary. Review or derive categories locally for the intended dataset.",
      "objectives": [
        6
      ],
      "invalid": null,
      "label": "Sample relative total cost tertile group in Nigerian naira",
      "measure": "ordinal",
      "codes": {
        "1.0": "Lower-cost group",
        "2.0": "Middle-cost group",
        "3.0": "Higher-cost group"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "AIR_RISK_CATEGORY",
      "meaning": "Working AIR risk category preserving the recorded score",
      "storage": "double",
      "analysisType": "ordinal derived measurement",
      "unit": "Category code",
      "issue": "0 -> 1; 1 -> 1; 2 -> 1; 3 -> 1; 4 -> 1; 5 -> 2; 6 -> 2; 7 -> 2; 8 -> 2; 9 -> 3; 10 -> 3; 11 -> 3; 12 -> 3; other or missing source -> system missing. Requested naming alias for existing AIR_CATEGORY. Identical working categories, no score replacement. No AIR-specific approved protocol or complete component algorithm is supplied; this is the researcher-approved working interpretation, not recovered protocol-prespecified scoring. See exploratory AIR and diagnostic strategies. Working categories; no AIR-specific approved protocol recovered.",
      "objectives": [],
      "invalid": null,
      "label": "Working AIR risk category preserving the recorded score",
      "measure": "ordinal",
      "codes": {
        "1.0": "Low probability (0 to 4)",
        "2.0": "Intermediate probability (5 to 8)",
        "3.0": "High probability (9 to 12)"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "MIGRATORY_PAIN",
      "meaning": "Recorded migratory abdominal pain presence",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "Category code",
      "issue": "1 -> 1; 2 -> 0; other or missing source -> system missing. Confirmed Yes/No source mapping; no imputation.",
      "objectives": [
        1
      ],
      "invalid": null,
      "label": "Recorded migratory abdominal pain presence",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    },
    {
      "name": "ABDOMINAL_PAIN_PRESENT",
      "meaning": "Recorded abdominal pain presence",
      "storage": "double",
      "analysisType": "nominal derived measurement",
      "unit": "Category code",
      "issue": "1 -> 1; 2 -> 0; other or missing source -> system missing. Confirmed source mapping. General abdominal pain is not a separate RIF pain variable.",
      "objectives": [],
      "invalid": null,
      "label": "Recorded abdominal pain presence",
      "measure": "nominal",
      "codes": {
        "0.0": "Absent",
        "1.0": "Present"
      },
      "systemMissing": null,
      "nonmissing": null,
      "userMissing": []
    }
  ]
};
