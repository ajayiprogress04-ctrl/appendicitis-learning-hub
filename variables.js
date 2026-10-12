/* Schema and aggregate completeness only. Never add patient rows or identifiers. */
window.HUB_VARIABLES = {
  "n": 85,
  "verified": "12 October 2026",
  "variables": [
    {
      "name": "hosp_n0",
      "label": null,
      "storage": "string",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Hospital record identifier",
      "analysisType": "Identifier",
      "unit": "No measurement unit",
      "issue": "Links assessments belonging to the same patient. Values are deliberately hidden.",
      "nonmissing": 85,
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
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Age",
      "analysisType": "Numerical age",
      "unit": "Years: protocol/context; no SAV unit label",
      "issue": "Children <16 and adults ≥16 are the approved groups. The stored nominal setting does not make age categorical.",
      "nonmissing": 85,
      "objectives": [
        3,
        4
      ]
    },
    {
      "name": "sex",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "male",
        "2.0": "female"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Sex",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Use the labelled categories to describe participants; no adjusted sex model is assumed.",
      "nonmissing": 85,
      "objectives": [
        3,
        4
      ]
    },
    {
      "name": "religion",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "christianity",
        "2.0": "islam",
        "3.0": "traditional",
        "4.0": "others"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Religion",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Descriptive background only; not a primary outcome of any approved objective.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "education",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "0.0": "none",
        "1.0": "pry",
        "2.0": "sec",
        "3.0": "tertiary"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Education level",
      "analysisType": "Ordered categories",
      "unit": "Not applicable",
      "issue": "The labels imply an order; the stored level is nominal. Include only when relevant to describing participants.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "marital_status",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "single",
        "2.0": "married",
        "3.0": "widow"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Marital status",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Descriptive background; no primary association test is justified simply because this field exists.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "occupation",
      "label": null,
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
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Patient occupation",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "This describes patients, not the clinician’s professional group. “cs” and “nysc” are retained as stored abbreviations.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "abdominal_pain",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Abdominal pain",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Supports recruited symptom context; not itself the reference diagnosis.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "migratory",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Migratory pain",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "A recorded MAS component. Audit against the original score, not a new diagnostic outcome.",
      "nonmissing": 85,
      "objectives": [
        1
      ]
    },
    {
      "name": "duration_of_pain",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Duration of pain",
      "analysisType": "Numerical duration",
      "unit": "Unit not recorded; confirmation required",
      "issue": "Do not silently call the values hours or days.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "anorexia",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 1,
      "meaning": "Anorexia",
      "analysisType": "Binary response with an unlabelled entry",
      "unit": "Not applicable",
      "issue": "One entry is code 20, outside labelled 1/2; it must not be treated as “no” or assigned zero in scoring.",
      "nonmissing": 85,
      "objectives": [
        1
      ]
    },
    {
      "name": "Vomiting",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Nausea/vomiting item",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "The proforma combines nausea/vomiting; the SAV field name is Vomiting. Preserve that distinction.",
      "nonmissing": 85,
      "objectives": [
        1
      ]
    },
    {
      "name": "fever",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Fever checkbox",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Reported fever is not a measured temperature >37.5°C, the protocol MAS scoring criterion.",
      "nonmissing": 85,
      "objectives": [
        1
      ]
    },
    {
      "name": "diarrhea",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Diarrhoea",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Clinical description, not a primary diagnostic reference.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "tendernessRIF",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Right iliac fossa tenderness",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "This is the recorded tenderness item and a MAS component; no additional generic tenderness field exists.",
      "nonmissing": 85,
      "objectives": [
        1
      ]
    },
    {
      "name": "reboundtenderness",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Rebound tenderness",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "Recorded MAS component; do not give it a negative weight.",
      "nonmissing": 85,
      "objectives": [
        1
      ]
    },
    {
      "name": "signs",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "pointing sign",
        "2.0": "rovsings",
        "3.0": "psoas",
        "4.0": "obturator",
        "5.0": "generalised"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Recorded clinical sign category",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "One coded sign category, not separate yes/no fields for each sign. “generalised” is retained without guessing its meaning.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "comorbidity",
      "label": null,
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
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Comorbidity category",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "RVS is unexpanded; hepatitis does not establish active infection. Neither label alone proves protocol ineligibility.",
      "nonmissing": 85,
      "objectives": [
        1,
        2
      ]
    },
    {
      "name": "diagnostic_confi1",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "not confident at all",
        "2.0": "slightly confident",
        "3.0": "moderately confident",
        "4.0": "very confident",
        "5.0": "extremely confident"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Diagnostic confidence before combined assessment",
      "analysisType": "Ordered five-category rating",
      "unit": "Category code 1–5",
      "issue": "Timing and same-rater pairing were confirmed by the liaison; not documented by a SAV variable label.",
      "nonmissing": 85,
      "objectives": [
        5
      ]
    },
    {
      "name": "pcv",
      "label": null,
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Packed cell volume",
      "analysisType": "Numerical blood measure",
      "unit": "Unit not recorded; confirmation required",
      "issue": "Do not assume percentages from the field name alone.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "wbc",
      "label": null,
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "White blood cell count",
      "analysisType": "Numerical blood measure",
      "unit": "Protocol scoring threshold: >10 × 10⁹/L; source unit unverified",
      "issue": "Supports the MAS audit. The absence of a source unit limits independent reconstruction.",
      "nonmissing": 85,
      "objectives": [
        1
      ]
    },
    {
      "name": "neutrophil",
      "label": null,
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Neutrophil measurement",
      "analysisType": "Numerical blood measure",
      "unit": "Count versus percentage unverified",
      "issue": "Not a primary marker in these objectives; do not add it as a predictor without justification.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "MAS",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Modified Alvarado Score",
      "analysisType": "Bounded ordered clinical score",
      "unit": "Protocol maximum: 9 points",
      "issue": "Recorded totals were retained after the earlier component audit found discrepancies; no silent correction or fabricated combined rule.",
      "nonmissing": 85,
      "objectives": [
        1,
        3,
        4,
        6
      ]
    },
    {
      "name": "AIR",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Appendicitis Inflammatory Response score",
      "analysisType": "Stored clinical score",
      "unit": "Scoring construction not verified",
      "issue": "Available but not the approved MAS exposure. No AIR performance analysis is added automatically.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "CRP",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Protocol hsCRP measurement",
      "analysisType": "Numerical concentration",
      "unit": "mg/L: protocol and liaison confirmation, not a SAV unit label",
      "issue": "Retain continuous values. >3 mg/L is assay elevation; it is not a validated appendicitis threshold or combined rule.",
      "nonmissing": 85,
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
      "label": null,
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
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Abdominal scan category",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "The code 3 label combines normal and inconclusive; those outcomes cannot be separated from that code alone.",
      "nonmissing": 85,
      "objectives": [
        6
      ]
    },
    {
      "name": "diagnostic_confi2",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "not confident at all",
        "2.0": "slightly confident",
        "3.0": "moderately confident",
        "4.0": "very confident",
        "5.0": "extremely confident"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Diagnostic confidence after combined assessment",
      "analysisType": "Ordered five-category rating",
      "unit": "Category code 1–5",
      "issue": "Paired within patient by liaison confirmation. Confidence is not recorded likely/unlikely diagnosis or accuracy.",
      "nonmissing": 85,
      "objectives": [
        5
      ]
    },
    {
      "name": "INTRAOP_FINDING",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "inflamed appendix",
        "2.0": "ruptured appendix",
        "3.0": "normal appendix",
        "4.0": "gangrenous"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Intraoperative appearance",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Supports evidence of surgery. Normal operative appearance does not equal normal histology.",
      "nonmissing": 85,
      "objectives": [
        2,
        4
      ]
    },
    {
      "name": "Appendix_position",
      "label": null,
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
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Appendix position",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Anatomical description and supporting operation evidence; no primary diagnostic association is implied.",
      "nonmissing": 85,
      "objectives": [
        4
      ]
    },
    {
      "name": "length_of_appendix",
      "label": null,
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Appendix length",
      "analysisType": "Numerical measurement",
      "unit": "Unit not recorded; confirmation required",
      "issue": "Specimen-related evidence of operation; do not invent centimetres.",
      "nonmissing": 85,
      "objectives": [
        4
      ]
    },
    {
      "name": "histology",
      "label": null,
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
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Appendix histology reference",
      "analysisType": "Nominal pathology category",
      "unit": "Category code",
      "issue": "Protocol reference standard. Codes 1–5 are appendicitis labels; code 6 is negative only assuming isolated reactive lymphoid hyperplasia. Normal/abscess proforma crosswalk remains unresolved.",
      "nonmissing": 85,
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
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "yes",
        "2.0": "no"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Faecolith present",
      "analysisType": "Binary category",
      "unit": "Not applicable",
      "issue": "An appendix finding; not a reference diagnosis or required predictor in the approved primary analyses.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "time_to_diagnosis",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Time to diagnosis",
      "analysisType": "Numerical duration",
      "unit": "Unit not recorded; confirmation required",
      "issue": "Only one time field exists, not separate before/after times. Faster diagnosis cannot be inferred.",
      "nonmissing": 85,
      "objectives": [
        5
      ]
    },
    {
      "name": "time_to_surgery",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Time to surgery",
      "analysisType": "Numerical duration",
      "unit": "Unit not recorded; confirmation required",
      "issue": "Clinical timeline context, not a priced resource or a paired diagnostic-time outcome.",
      "nonmissing": 85,
      "objectives": []
    },
    {
      "name": "postop_complication",
      "label": null,
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
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Postoperative complication category",
      "analysisType": "Nominal category",
      "unit": "Not applicable",
      "issue": "Complication labels exist, but their treatment amounts are not separately recorded.",
      "nonmissing": 85,
      "objectives": [
        6
      ]
    },
    {
      "name": "Duration_of_admission",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Duration of admission",
      "analysisType": "Numerical duration",
      "unit": "Hospital days intended in protocol; source unit unlabelled",
      "issue": "May describe resource use, but there is no bed-day price to calculate a component cost.",
      "nonmissing": 85,
      "objectives": [
        6
      ]
    },
    {
      "name": "total_costs",
      "label": null,
      "storage": "double",
      "measure": "scale",
      "codes": {},
      "systemMissing": 0,
      "userMissing": [],
      "invalid": null,
      "meaning": "Recorded total amount",
      "analysisType": "Numerical monetary amount",
      "unit": "NGN: liaison confirmation",
      "issue": "Components, price year and charges-versus-resource-cost basis are unknown. No hsCRP component or comparator amount is available.",
      "nonmissing": 85,
      "objectives": [
        6
      ]
    },
    {
      "name": "diagnosis_satisfaction",
      "label": null,
      "storage": "double",
      "measure": "nominal",
      "codes": {
        "1.0": "not satisfied",
        "2.0": "satisfied",
        "3.0": "very satisfied"
      },
      "systemMissing": 0,
      "userMissing": [],
      "invalid": 0,
      "meaning": "Patient satisfaction with diagnosis",
      "analysisType": "Ordered categories",
      "unit": "Category code",
      "issue": "The proforma identifies this as patient satisfaction, not clinician ease. Preserve the distinction.",
      "nonmissing": 85,
      "objectives": [
        5
      ]
    }
  ]
};
