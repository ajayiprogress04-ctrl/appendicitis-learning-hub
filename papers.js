/* Manuscript planning only: stable catalogue links, no new analyses or persisted patient data. */
(()=>{'use strict';const root=document.getElementById('papers'),tab=document.getElementById('papers-tab'),esc=RESULT_EXPORTS.esc;
const plans=[
{id:'diagnosis',title:'Diagnostic Performance of the Modified Alvarado Score and High-Sensitivity C-Reactive Protein Against Histopathology in Suspected Acute Appendicitis',focus:'Primary diagnostic evaluation; exploratory combined prediction and AIR analyses remain clearly labelled within this paper.',scopes:['1','3','B','D'],questions:['How do MAS and hs-CRP perform against histopathology at the documented operating points?','Does exploratory combined modelling improve held-out performance, and how uncertain are the estimates?'],keys:['baseline','d1_population','d1_performance','d1_predictive','d1_auc','d1_calibration','d1_paired','d1_roc','age_population','age_performance','age_rates'],terms:['accuracy','sensitivity','specificity'],qualification:'Only eight reference-negative cases occur in the supplied cohort, including one child. AIR thresholds and combined models are operational/exploratory; no independent validation or recovered prespecified combination rule supports a definitive clinical-benefit claim.'},
{id:'severity',title:'High-Sensitivity C-Reactive Protein and Histopathological Severity of Acute Appendicitis: A Secondary Cohort Analysis',focus:'Secondary biomarker–severity question, distinct from diagnosis of appendicitis versus its absence.',scopes:['2'],questions:['How does hs-CRP differ between simple and complicated histopathology?','How well does continuous hs-CRP discriminate complicated disease within confirmed appendicitis?'],keys:['s2_descriptive','s2_comparison','s2_severityPerformance','s2_box','s2_severityROC'],terms:['hscrp','auc','ci'],qualification:'Only eight complicated cases are recorded. Severity estimates need cautious precision reporting; the laboratory elevation threshold is not a validated severity cutoff.'},
{id:'resources',title:'Histopathological Findings, Negative Appendicectomy and Recorded Hospital Resource Use in an Operated Appendicitis Cohort',focus:'Objective 4 and the recorded expenditure component of Objective 6, with exploratory three-group resource comparisons. This is not a cost-effectiveness study.',scopes:['4','6','A'],questions:['What proportion of evaluable operated specimens is negative for appendicitis?','How do recorded total expenditure and hospital stay vary between negative, simple and complicated histopathology?'],keys:['neg_histology','neg_rate','neg_subgroups','o4_cost_summary','o4_stay','o4_diagnosis_time','o4_surgery_time','neg_histology_bar'],terms:['reference','negative'],qualification:'The supplied source records total hospital cost, not itemised hs-CRP/pathway incremental costs. Operated status is specimen-linked; do not generalise negative appendicectomy to unverified non-operated patients or claim cost-effectiveness.'},
{id:'confidence',title:'Paired Diagnostic-Confidence Ratings Before and After Provision of MAS and hs-CRP Information in Suspected Appendicitis',focus:'Secondary descriptive clinician-reported outcome; separate from objective diagnostic performance.',scopes:['5'],questions:['How do ordinal confidence ratings move within the recorded before/after pairs?','What proportions increase, remain unchanged or decrease?'],keys:['conf_distribution','conf_transition','conf_change','conf_heatmap'],terms:['paired'],qualification:'All 85 source records contain paired ratings, but clinician identifiers, repeated-case linkage and professional-group assignments are absent. Descriptive transitions are supported; independent-pair inference, resident-versus-officer comparisons and claims of easier or more accurate diagnosis need additional data.'}
];

// Plans are complementary questions or explicit alternatives, never automatic additional publications.
plans.push(...[
 {
  "id": "strategies",
  "title": "Clinical Scores and Biomarker Combinations for Appendicitis: A Paired Comparison of Existing Diagnostic Strategies",
  "focus": "Alternative framing of the primary diagnostic manuscript, not an additional independent paper on the same performance estimates.",
  "scopes": [
   "B",
   "D",
   "1"
  ],
  "questions": [
   "How do implemented MAS, AIR, hs-CRP, AND/OR combinations and existing fitted models compare on a common cohort?"
  ],
  "keys": [
   "db_population",
   "master_performance",
   "master_comparisons",
   "master_rates",
   "db_calibration"
  ],
  "terms": [
   "accuracy",
   "auc"
  ],
  "variables": [
   "MAS",
   "AIR",
   "CRP",
   "histology"
  ],
  "feasibility": "Existing exploratory outputs; alternative to the primary paper",
  "family": "diagnostic",
  "qualification": "Fixed rules and fitted leave-one-out models must remain separate. AND/OR rules are exploratory, not recovered prespecified combinations. Eight reference-negative cases limit precision; no superiority or added clinical benefit may be presumed."
 },
 {
  "id": "air-triage",
  "title": "Histopathology Across AIR Probability Categories: Risk Stratification in an Operated Appendicitis Cohort",
  "focus": "Category composition rather than a duplicate ranking of diagnostic methods; consider an integrated section of the diagnostic paper.",
  "scopes": [
   "D"
  ],
  "questions": [
   "What proportions are histopathology-positive and negative within each working AIR category?",
   "How are AIR categories associated with histological severity?"
  ],
  "keys": [
   "air_category_histology",
   "air_category_severity",
   "air_histology_proportions"
  ],
  "terms": [
   "air",
   "reference"
  ],
  "variables": [
   "AIR",
   "histology"
  ],
  "feasibility": "Existing exploratory outputs; overlap with diagnostic paper",
  "family": "diagnostic",
  "qualification": "AIR 0–4, 5–8 and 9–12 are working categories; full component/protocol verification is missing. This operated cohort cannot establish triage safety in all suspected cases, especially with only eight negative specimens."
 },
 {
  "id": "age",
  "title": "MAS–hs-CRP Performance in Children and Adults: A Descriptive Subgroup Analysis",
  "focus": "Alternative subgroup focus within the primary diagnostic manuscript; not a claim that age modifies performance.",
  "scopes": [
   "3"
  ],
  "questions": [
   "How do pooled held-out operating-point estimates differ descriptively between children under 16 and adults?"
  ],
  "keys": [
   "age_population",
   "age_performance",
   "age_rates",
   "age_roc"
  ],
  "terms": [
   "sensitivity",
   "specificity"
  ],
  "variables": [
   "age",
   "MAS",
   "CRP",
   "histology"
  ],
  "feasibility": "Descriptive subgroup outputs; standalone inference not supported",
  "family": "diagnostic",
  "qualification": "Only one reference-negative child occurs in the supplied dataset. Reliable paediatric AUC uncertainty and between-age performance inference require additional independent negative children. Do not independently optimise thresholds by subgroup."
 },
 {
  "id": "pcv",
  "title": "Packed Cell Volume and Histopathological Appendicitis: Exploratory Clinical Associations",
  "focus": "Haematological context distinct from the hs-CRP severity and diagnostic-score questions.",
  "scopes": [
   "E"
  ],
  "questions": [
   "How is PCV distributed across histopathology status and severity?",
   "Are external PCV reference categories associated with histopathology, and what uncertainty remains?"
  ],
  "keys": [
   "pcv_distribution",
   "pcv_references",
   "pcv_histology",
   "pcv_severity",
   "pcv_category_histology",
   "pcv_box_histology"
  ],
  "terms": [
   "pcv",
   "ci"
  ],
  "variables": [
   "pcv",
   "age",
   "sex",
   "histology"
  ],
  "feasibility": "Existing secondary exploratory analyses",
  "family": "pcv",
  "qualification": "PCV is not an established appendicitis diagnostic test in this study. External age/sex reference categories, sparse cells and multiplicity must be explicit; observational association does not establish diagnostic usefulness."
 },
 {
  "id": "clinical-presentation",
  "title": "Clinical Presentation Across Histological Appendicitis Severity: Documented Symptoms and Examination Findings",
  "focus": "Descriptive clinical phenotype, not independent information added to MAS or AIR.",
  "scopes": [
   "F",
   "4"
  ],
  "questions": [
   "Which explicitly recorded symptoms and examination findings distinguish the observed histological groups?"
  ],
  "keys": [
   "sign_distribution",
   "sign_severity",
   "o4_pain_findings",
   "sign_bar",
   "sign_combination_unavailable"
  ],
  "terms": [
   "reference",
   "paired"
  ],
  "variables": [
   "histology",
   "abdominal_pain",
   "migratory",
   "tendernessRIF",
   "reboundtenderness",
   "signs"
  ],
  "feasibility": "Existing descriptive and exploratory group comparisons",
  "family": "clinical",
  "qualification": "Abdominal pain and RIF tenderness are constant in the supplied cohort. Unselected single-choice signs are unknown, not absent. MAS/AIR contain overlapping components; this paper cannot claim independent incremental diagnostic value."
 },
 {
  "id": "pathway",
  "title": "Diagnostic and Surgical Timelines, Hospital Stay and Expenditure in Suspected Appendicitis",
  "focus": "Secondary resource-use associations; complementary to, but overlapping with, the histopathology/cost manuscript.",
  "scopes": [
   "C",
   "D",
   "4"
  ],
  "questions": [
   "How are recorded time intervals, admission duration and total expenditure associated?"
  ],
  "keys": [
   "assoc_continuous",
   "assoc_forest",
   "o4_diagnosis_time",
   "o4_surgery_time",
   "o4_stay"
  ],
  "terms": [
   "spearman",
   "ci"
  ],
  "variables": [
   "time_to_diagnosis",
   "time_to_surgery",
   "Duration_of_admission",
   "total_costs",
   "histology"
  ],
  "feasibility": "Existing exploratory associations; resource-paper overlap",
  "family": "resources",
  "qualification": "Recorded interval definitions must be checked against original collection documents, which are not bundled. Existing correlations do not establish that delays cause higher costs; costs are total recorded NGN expenditure, not priced resource components."
 },
 {
  "id": "postoperative",
  "title": "Recorded AIR Score and Packed Cell Volume by Postoperative-Complication Status",
  "focus": "Sparse-outcome secondary association; no new complication prediction model.",
  "scopes": [
   "D",
   "E"
  ],
  "questions": [
   "How do recorded AIR and PCV distributions compare across explicit postoperative-complication categories?"
  ],
  "keys": [
   "air_postop",
   "pcv_postop"
  ],
  "terms": [
   "air",
   "pcv"
  ],
  "variables": [
   "AIR",
   "pcv",
   "postop_complication"
  ],
  "feasibility": "Existing exploratory comparisons; sparse outcome and follow-up review",
  "family": "postoperative",
  "qualification": "The source records five code-1 and two code-8 complications versus 78 code-7 none. Use verified source labels and existing coding; surveillance and follow-up completeness are unverified. Seven recorded events cannot justify an automatic multivariable model."
 },
 {
  "id": "wbc-biomarkers",
  "title": "White Blood Cell Count and hs-CRP in Relation to Histopathological Appendicitis: A Joint Biomarker Analysis",
  "focus": "Candidate complementary biomarker description and association; not a proposed diagnostic improvement.",
  "scopes": [
   "1",
   "2"
  ],
  "questions": [
   "How do continuous WBC and hs-CRP relate to histopathological status and severity?"
  ],
  "keys": [],
  "contextKeys": [
   "baseline",
   "d1_population",
   "s2_descriptive"
  ],
  "terms": [
   "hscrp",
   "reference"
  ],
  "variables": [
   "wbc",
   "CRP",
   "histology"
  ],
  "feasibility": "Recorded variables; dedicated analyses not implemented",
  "needs": true,
  "family": "biomarkers",
  "qualification": "Both markers are recorded, but no standalone WBC diagnostic rule or dedicated joint analysis is implemented. MAS/AIR already incorporate leucocyte information. Do not add WBC redundantly or fit a new prediction model merely to generate this paper."
 },
 {
  "id": "scan-description",
  "title": "Recorded Abdominal Scan Findings and Histopathology in Suspected Appendicitis",
  "focus": "Candidate descriptive imaging–pathology cross-tabulation, not validated ultrasound diagnostic accuracy.",
  "scopes": [
   "4",
   "1"
  ],
  "questions": [
   "How do the original recorded scan categories align with histopathological findings?"
  ],
  "keys": [],
  "contextKeys": [
   "neg_histology",
   "d1_population"
  ],
  "terms": [
   "reference"
  ],
  "variables": [
   "abd_SCAN",
   "histology"
  ],
  "feasibility": "Recorded categories; dedicated cross-tabulation and coding review needed",
  "needs": true,
  "family": "imaging",
  "qualification": "abd_SCAN is categorical: 58 acute-appendicitis, eight other-diagnosis, 11 normal/inconclusive, one appendiceal-mass and seven inconclusive source records. Modality is unverified. Code 3 must remain mixed; do not recode it as negative. No appendix imaging dimensions or PACS variables are identified."
 },
 {
  "id": "imaging-combination",
  "title": "Clinical Scores, Biomarkers and Abdominal Imaging for Appendicitis: A Candidate Integrated Diagnostic Evaluation",
  "focus": "Future integrated-test question, not an implemented combination or a demonstrated improvement.",
  "scopes": [
   "B",
   "1"
  ],
  "questions": [
   "Could a prespecified imaging rule add nonredundant information beyond existing clinical and biomarker strategies?"
  ],
  "keys": [],
  "contextKeys": [
   "db_population",
   "master_performance"
  ],
  "terms": [
   "reference",
   "accuracy"
  ],
  "variables": [
   "MAS",
   "AIR",
   "CRP",
   "abd_SCAN"
  ],
  "feasibility": "Additional coding/protocol clarification and validation data needed",
  "needs": true,
  "family": "imaging",
  "qualification": "No verified imaging modality, binary rule, quantitative ultrasound/PACS measurements or complete treatment of equivocal scans is available. Eight negative cases and component overlap limit new model development. This proposal is blocked pending a justified rule and adequate validation."
 },
 {
  "id": "anatomy",
  "title": "Appendiceal Position, Specimen Length and Faecoliths in Relation to Histopathological Severity",
  "focus": "Candidate surgical/specimen-characteristic analysis distinct from diagnostic prediction.",
  "scopes": [
   "4"
  ],
  "questions": [
   "Are recorded operative/specimen characteristics associated with histological severity?"
  ],
  "keys": [],
  "contextKeys": [
   "neg_histology"
  ],
  "terms": [
   "reference"
  ],
  "variables": [
   "Appendix_position",
   "length_of_appendix",
   "faecolith",
   "histology"
  ],
  "feasibility": "Recorded variables; dedicated analyses and measurement definitions needed",
  "needs": true,
  "family": "anatomy",
  "qualification": "These fields are recorded, but verified length units, collection timing and dedicated comparisons are required. Specimen length is not an ultrasound appendix diameter. Sparse complicated cases limit inference; do not infer causation or create unverified thresholds."
 },
 {
  "id": "affordability",
  "title": "Affordability of Appendicitis Care: Relating Hospital Expenditure to Patient Financial Capacity",
  "focus": "Future affordability question, distinct from observed expenditure differences.",
  "scopes": [
   "6"
  ],
  "questions": [
   "What share of patient/household financial resources is consumed by appendicitis care?"
  ],
  "keys": [],
  "contextKeys": [
   "overallcost_summary"
  ],
  "terms": [
   "ci"
  ],
  "variables": [
   "total_costs"
  ],
  "feasibility": "Additional financial-capacity and payer data needed",
  "needs": true,
  "family": "economics-future",
  "qualification": "Total hospital costs are recorded, but household income, expenditure, payer coverage and catastrophic-expenditure definitions are absent. Occupation alone is not financial capacity. No affordability or financial-hardship conclusion can be calculated."
 },
 {
  "id": "cost-effectiveness",
  "title": "Incremental Cost-Effectiveness of Combined MAS–hs-CRP Evaluation: A Future Comparative Study",
  "focus": "Future economic evaluation; current total-cost data cannot support it.",
  "scopes": [
   "6"
  ],
  "questions": [
   "What additional costs and clinically meaningful outcomes arise from adding hs-CRP to an explicitly defined routine pathway?"
  ],
  "keys": [],
  "contextKeys": [
   "overallcost_summary",
   "incremental_cost_unavailable"
  ],
  "terms": [
   "accuracy"
  ],
  "variables": [
   "total_costs",
   "MAS",
   "CRP"
  ],
  "feasibility": "Additional itemised costs, comparator and outcome evidence needed",
  "needs": true,
  "family": "economics-future",
  "qualification": "No verified itemised test prices/resource quantities, comparable pathway, outcome valuation, QALYs or adequate comparative clinical effects are present. Current costs do not establish savings, cost-effectiveness or an incremental ratio."
 }
]);
const initialMeta={diagnosis:{variables:['MAS','CRP','AIR','age','histology'],feasibility:'Primary outputs; exploratory combinations and age subgroups qualified',family:'diagnostic'},severity:{variables:['CRP','histology'],feasibility:'Existing secondary severity analyses; eight complicated cases',family:'severity'},resources:{variables:['histology','INTRAOP_FINDING','total_costs','Duration_of_admission','time_to_diagnosis','time_to_surgery'],feasibility:'Existing descriptive and exploratory resource analyses',family:'resources'},confidence:{variables:['diagnostic_confi1','diagnostic_confi2'],feasibility:'Descriptive paired ratings only; clinician linkage missing',family:'confidence'}};for(const p of plans)Object.assign(p,initialMeta[p.id]||{});
const settings=new Map(plans.map(p=>[p.id,{title:p.title,scopes:new Set(p.scopes),selected:new Set(RESULT_CATALOG.entries.filter(e=>p.keys.includes(e.key)).map(e=>e.id)),interpretations:new Set(RESULT_CATALOG.entries.filter(e=>p.keys.includes(e.key)).map(e=>e.id))}]));let selected=plans[0].id,query='',message='',savedViews=[],batchSelected=new Set(),batchBusy=false,batchStatus='';
const candidates=p=>RESULT_CATALOG.entries.filter(e=>p.scopes.includes(e.scope)&&(!p.contextKeys||[...p.keys,...p.contextKeys].includes(e.key)));const chosenFor=p=>candidates(p).filter(e=>settings.get(p.id).scopes.has(e.scope)&&settings.get(p.id).selected.has(e.id));
const plan=()=>plans.find(p=>p.id===selected),config=()=>settings.get(selected),entries=()=>candidates(plan()),ready=()=>new Map(HUB_RESULTS.allReportItems().map(i=>[i.id,i]));
function render(){const p=plan(),s=config(),available=ready(),chosen=entries().filter(e=>s.scopes.has(e.scope)&&s.selected.has(e.id)),missing=chosen.filter(e=>!available.has(e.id));const source=HUB_RESULTS.navSnapshot().dataset,rows=source?.records;const overlapFamilies=[...new Set(plans.filter(x=>batchSelected.has(x.id)).map(x=>x.family))].filter(f=>plans.filter(x=>batchSelected.has(x.id)&&x.family===f).length>1);const matching=plans.filter(p=>(p.title+' '+p.focus+' '+p.questions.join(' ')+' '+p.variables.join(' ')+' '+p.feasibility).toLowerCase().includes(query.toLowerCase()));root.innerHTML=`<div class="section-label">Distinct manuscript planning</div><h2>Papers</h2><p>Plan complementary papers from one cohort. Report the shared cohort and secondary analyses transparently; selection does not establish publication readiness.</p><label>Search papers<input id="paper-search" type="search" value="${esc(query)}" placeholder="Diagnostic performance, severity, costs or confidence"></label><p class="small-note">${rows?rows.length+' records in the active dataset.':'Load your study dataset in Tables & Figures to calculate outputs.'} Original protocol/questionnaire files are not bundled; these plans use documented objectives, dictionary and existing analyses.</p><section class="paper-batch" aria-label="Separate paper reports"><div class="result-export-actions"><button class="quiet-button" data-paper-batch-all ${batchBusy?'disabled':''}>Select supported papers</button><button class="quiet-button" data-paper-batch-none ${batchBusy?'disabled':''}>Clear paper selection</button><button class="copy-button" data-paper-batch-export ${batchBusy||!batchSelected.size?'disabled':''}>${batchBusy?'Preparing reports…':'Export selected papers as separate Word files'}</button></div><p role="status">${batchSelected.size} papers selected. ${overlapFamilies.length?'Overlapping alternatives selected: '+esc(overlapFamilies.join(', '))+'. ':''}${esc(batchStatus)}</p><p class="small-note">One download contains separate .docx files. Each paper uses its own title and checked outputs; unresolved proposals block export. Overlapping options are alternatives or sections, not automatically separate publications.</p></section><div class="papers-layout"><nav aria-label="Proposed papers">${matching.map(x=>`<div class="paper-choice"><label><input type="checkbox" data-paper-batch-pick="${x.id}" ${batchSelected.has(x.id)?'checked':''} ${batchBusy?'disabled':''}>Select paper</label><button class="quiet-button" data-paper="${x.id}" aria-pressed="${x.id===selected}">${esc(settings.get(x.id).title)}</button><span class="small-note">${esc(x.feasibility)}</span></div>`).join('')||'<p>No papers match this search.</p>'}</nav><article><label>Editable paper title<input id="paper-title" value="${esc(s.title)}" maxlength="300"></label><p>${esc(p.focus)}</p><p><strong>Feasibility:</strong> ${esc(p.feasibility)}</p><p><strong>Available variables:</strong> ${p.variables.map(name=>{const count=rows?.filter(r=>r[name]!==null&&r[name]!==undefined).length;return esc(name)+(rows?' ('+count+'/'+rows.length+' recorded)':'');}).join(', ')}</p><ul>${p.questions.map(q=>'<li>'+esc(q)+'</li>').join('')}</ul><p class="paper-qualification"><strong>Scope and evidence:</strong> ${esc(p.qualification)}</p><details open><summary>Relevant objectives and analysis scopes</summary>${p.scopes.map(id=>{const o=RESULT_CATALOG.scopes.find(x=>x.id===id);return `<div><label><input type="checkbox" data-paper-scope="${id}" ${s.scopes.has(id)?'checked':''}>${esc(o.name)}</label> <button class="quiet-button" data-paper-objective="${id}">Open objective</button><p>${esc(o.statement)}</p></div>`;}).join('')}</details><div class="result-export-actions"><button class="quiet-button" data-paper-all>Select supported outputs</button><button class="quiet-button" data-paper-none>Deselect all</button></div><p role="status">${chosen.length} outputs selected · ${chosen.length-missing.length} calculated · ${missing.length} need calculation</p><div class="paper-outputs">${entries().filter(e=>s.scopes.has(e.scope)).map(e=>`<div class="paper-output"><label><input type="checkbox" data-paper-output="${e.id}" ${s.selected.has(e.id)?'checked':''} ${e.requires||p.needs?'disabled':''}>${esc(e.type==='table'?'Table':'Figure')}: ${esc(e.title)}</label><p class="small-note">${esc(e.requires||(p.needs?'Context only — does not complete this proposed analysis.':(!available.has(e.id)?'Not calculated — open the existing output to generate it.':'Calculated; existing export validation still applies.')))}</p><div class="result-export-actions"><button class="quiet-button" data-paper-output-link="${e.id}">Open output</button><button class="quiet-button" data-paper-interpretation-link="${e.id}">Interpretation</button><label><input type="checkbox" data-paper-narrative="${e.id}" ${s.interpretations.has(e.id)?'checked':''}>Use associated interpretation</label></div></div>`).join('')}</div><p>Related glossary: ${p.terms.map(id=>{const e=HUB_GLOSSARY.entries.find(x=>x.id===id||x.aliases.some(a=>a.toLowerCase()===id));return e?`<button class="quiet-button" data-paper-term="${e.id}">${esc(e.term)}</button>`:'';}).join(' ')}</p><button class="copy-button" data-paper-report ${p.needs||batchBusy||!chosen.length||missing.length||!s.title.trim()?'disabled':''}>Open focused report (${chosen.length} outputs)</button><p class="small-note">Uncalculated selections block transfer; nothing is silently omitted. The report contains only checked outputs and retains one scientific results paragraph per output.</p><p role="status" id="paper-status">${esc(message)}</p></article></div>`;}
function open(){if(!root.hidden){render();return;}HUB_HISTORY?.before();HUB_GLOSSARY.close(false);HUB_ABOUT.close(false);HUB_RESULTS.leave();HUB_RESULT_VIEWER?.leave();savedViews=[...document.querySelectorAll('#main,#objective-nav,#analysis-workspace,#objective-results,#statistical-glossary,#about-developer,#global-search-results,#analysis-search-status,.hero,.research-overview,.learning-tools,.progress-strip')].map(el=>[el,el.hidden]);for(const [el] of savedViews)el.hidden=true;document.body.classList.remove('analysis-active');for(const b of document.querySelectorAll('.workspace-tabs button,.supporting-actions button'))b.setAttribute('aria-pressed',String(b===tab));document.querySelectorAll('[data-side-target]').forEach(b=>b.setAttribute('aria-current',b.dataset.sideTarget==='papers-tab'?'page':'false'));root.hidden=false;render();root.focus({preventScroll:true});root.scrollIntoView({block:'start'});}
function hide(){for(const [el,hidden] of savedViews)el.hidden=hidden;root.hidden=true;tab.setAttribute('aria-pressed','false');}
function route(run){HUB_HISTORY?.before();hide();run();}
function resultAction(id,kind){route(()=>{HUB_RESULTS.openResult(id);if(kind==='interpretation'){const b=document.createElement('button');b.dataset.viewInterpretation=id;document.getElementById('objective-results').append(b);b.click();b.remove();}});}
root.addEventListener('input',e=>{if(e.target.id==='paper-title')config().title=e.target.value;if(e.target.id==='paper-search'){query=e.target.value;const pos=e.target.selectionStart;render();const field=root.querySelector('#paper-search');field.focus();field.setSelectionRange(pos,pos);}});
root.addEventListener('change',e=>{const d=e.target.dataset,s=config();if(d.paperBatchPick){e.target.checked?batchSelected.add(d.paperBatchPick):batchSelected.delete(d.paperBatchPick);batchStatus='';render();return;}if(d.paperScope){e.target.checked?s.scopes.add(d.paperScope):s.scopes.delete(d.paperScope);}if(d.paperOutput){e.target.checked?s.selected.add(d.paperOutput):s.selected.delete(d.paperOutput);}if(d.paperNarrative){e.target.checked?s.interpretations.add(d.paperNarrative):s.interpretations.delete(d.paperNarrative);}render();});
root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset;if('paperBatchAll'in d){plans.filter(p=>!p.needs).forEach(p=>batchSelected.add(p.id));batchStatus='';render();return;}if('paperBatchNone'in d){batchSelected.clear();batchStatus='';render();return;}if('paperBatchExport'in d){exportBatch();return;}if(d.paper){HUB_HISTORY?.before();selected=d.paper;message='';render();}if('paperAll'in d&&!plan().needs){entries().filter(e=>!e.requires&&config().scopes.has(e.scope)).forEach(e=>config().selected.add(e.id));render();}if('paperNone'in d){config().selected.clear();render();}if(d.paperOutputLink)resultAction(d.paperOutputLink);if(d.paperInterpretationLink)resultAction(d.paperInterpretationLink,'interpretation');if(d.paperObjective)route(()=>{if(/^\d$/.test(d.paperObjective))HUB_NAV.openObjective(Number(d.paperObjective));else{HUB_RESULTS.selectObjective(d.paperObjective);document.getElementById('results-tab').click();}});if(d.paperTerm)route(()=>HUB_GLOSSARY.open(d.paperTerm));if('paperReport'in d){const chosen=entries().filter(e=>config().scopes.has(e.scope)&&config().selected.has(e.id)),available=ready();if(plan().needs||!chosen.length||chosen.some(e=>!available.has(e.id)))return;HUB_REPORTS.setPaperSelection(config().title,chosen.map(e=>e.id),[...config().interpretations]);route(()=>document.getElementById('reports-tab').click());}});

async function exportBatch(){if(batchBusy)return;const chosen=plans.filter(p=>batchSelected.has(p.id)),source=HUB_RESULTS.navSnapshot().dataset,available=ready(),issues=[],jobs=[];if(!chosen.length)return;for(const p of chosen){const s=settings.get(p.id),outputs=chosenFor(p);if(p.needs){issues.push(s.title+': '+p.feasibility);continue;}if(!s.title.trim()||!outputs.length){issues.push(s.title+': choose a title and at least one output.');continue;}const missing=outputs.filter(e=>!available.has(e.id));if(missing.length){issues.push(s.title+': '+missing.length+' selected outputs need calculation.');continue;}const items=HUB_REPORTS.paperItems(outputs.map(e=>e.id),[...s.interpretations]);const checks=HUB_REPORTS.warnings(items);if(checks.length)issues.push(s.title+': '+checks.join(' '));else jobs.push({p,title:s.title,items});}if(issues.length){batchStatus='Export blocked — '+issues.join(' | ');render();return;}const groups=new Map();for(const j of jobs)groups.set(j.p.family,(groups.get(j.p.family)||0)+1);const overlap=[...groups].filter(([,n])=>n>1).map(([g])=>g);batchBusy=true;const files={},version=JSON.stringify(HUB_RESULTS.allReportItems().map(i=>[i.id,i.result]));try{for(let i=0;i<jobs.length;i++){const j=jobs[i];batchStatus='Preparing '+(i+1)+' of '+jobs.length+': '+j.title;render();if(source!==HUB_RESULTS.navSnapshot().dataset)throw Error('Dataset changed; no mixed-source reports exported.');const bytes=await RESULT_EXPORTS.docx(j.items,j.title,undefined,{paperTitle:j.title});if(source!==HUB_RESULTS.navSnapshot().dataset||version!==JSON.stringify(HUB_RESULTS.allReportItems().map(i=>[i.id,i.result])))throw Error('Dataset or calculated results changed during export.');files[String(i+1).padStart(2,'0')+'-'+j.p.id+'.docx']=bytes;}const bytes=RESULT_EXPORTS.zip(files),url=URL.createObjectURL(new Blob([bytes],{type:'application/zip'})),a=document.createElement('a');a.href=url;a.download='Appendicitis_Selected_Papers.zip';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);batchStatus=jobs.length+' separate Word reports created.'+(overlap.length?' Related/overlapping selections: '+overlap.join(', ')+'. Treat these as alternatives or disclose shared analyses.':'');}catch(error){batchStatus='Export failed — '+error.message+'. No incomplete report archive was downloaded.';}finally{batchBusy=false;render();}}
tab.addEventListener('click',open);document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||root.hidden)return;if(b.id!=='papers-tab'&&(b.matches('.workspace-tabs button')||['home','about-tab','variables-tab','analysis-tab'].includes(b.id)||b.dataset.sideTarget&&b.dataset.sideTarget!=='papers-tab'))hide();},true);
window.HUB_PAPERS={open,plans,navSnapshot:()=>({selected,query,savedViews}),navRestore:v=>{selected=v.selected;query=v.query;savedViews=v.savedViews;},selected:()=>({plan:plan(),title:config().title,ids:entries().filter(e=>config().scopes.has(e.scope)&&config().selected.has(e.id)).map(e=>e.id)})};})();
