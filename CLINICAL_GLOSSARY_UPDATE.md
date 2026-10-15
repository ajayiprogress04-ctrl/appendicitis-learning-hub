# Clinical glossary update

Changed: clinical-glossary.js (new educational entries and laboratory guides), statistical-glossary.js (clinical source links and live cost guide), index.html (load order/cache version).

Added clinical signs, medical history, pathology and appendix-position explanations; updated existing PCV, WBC, neutrophil and cost-group entries rather than replacing analyses. Ruptured/perforated share one entry. Search includes original source spellings and common abbreviations.

Verified against the dictionary and imported 85-record SAV. Costs have 85 nonnegative evaluable values, observed NGN178,060–293,130; type-7 tertile cut-points NGN217,450 and NGN238,900. These values are calculated privately at runtime, not embedded in application content. Existing cost-category equality allocation is undocumented and remains flagged; no category is recoded. Missing/negative costs are excluded, real zeros retained.

External lab intervals: Mayo Clinic Laboratories CBC catalog9109; neutrophil percentages: Children’s Minnesota CBC Reference Value Table (25 April2025). Existing PCV classifier intervals retained. WBC/neutrophil derived-reference numeric definitions remain incomplete; external guides are not silently substituted into classifications. Neutrophils are recorded as percentage, not ANC. MAS WBC component remains >10×10⁹/L, distinct from laboratory normality.

Pointing-sign elicitation and the exact meaning of the single “generalised” signs label require original-questionnaire confirmation. Single-choice sign/comorbidity labels do not prove absence of unselected conditions. McBurney’s point is educational, not asserted as a new recorded variable. Histology source spellings are explained without modifying data.

Checks performed: JavaScript syntax; 29 requested search terms/aliases opened in Chromium; unique glossary IDs; actual SAV import; live numerical cost guide; desktop1440px and mobile390px in Light, Dark and Colored themes; screenshots reviewed; no page runtime errors. Independent cost cut-point check matched. No deployment performed.

Deployment: replace matching runtime files with the supplied updated project; retain current environment configuration. Manual upload and statistical engine unchanged.
