/* Manuscript planning only: stable catalogue links, no new analyses or persisted patient data. */
(()=>{'use strict';const root=document.getElementById('papers'),tab=document.getElementById('papers-tab'),esc=RESULT_EXPORTS.esc;
const plans=[
{id:'diagnosis',title:'Diagnostic Performance of the Modified Alvarado Score and High-Sensitivity C-Reactive Protein Against Histopathology in Suspected Acute Appendicitis',focus:'Primary diagnostic evaluation; exploratory combined prediction and AIR analyses remain clearly labelled within this paper.',scopes:['1','3','7'],questions:['How do MAS and hs-CRP perform against histopathology at the documented operating points?','Does exploratory combined modelling improve held-out performance, and how uncertain are the estimates?'],keys:['baseline','d1_population','d1_performance','d1_predictive','d1_auc','d1_calibration','d1_paired','d1_roc','age_population','age_performance','age_rates'],terms:['accuracy','sensitivity','specificity'],qualification:'Only eight reference-negative cases occur in the supplied cohort, including one child. AIR thresholds and combined models are operational/exploratory; no independent validation or recovered prespecified combination rule supports a definitive clinical-benefit claim.'},
{id:'severity',title:'High-Sensitivity C-Reactive Protein and Histopathological Severity of Acute Appendicitis: A Secondary Cohort Analysis',focus:'Secondary biomarker–severity question, distinct from diagnosis of appendicitis versus its absence.',scopes:['2'],questions:['How does hs-CRP differ between simple and complicated histopathology?','How well does continuous hs-CRP discriminate complicated disease within confirmed appendicitis?'],keys:['s2_descriptive','s2_comparison','s2_severityPerformance','s2_box','s2_severityROC'],terms:['hscrp','auc','ci'],qualification:'Only eight complicated cases are recorded. Severity estimates need cautious precision reporting; the laboratory elevation threshold is not a validated severity cutoff.'},
{id:'resources',title:'Histopathological Findings, Negative Appendicectomy and Recorded Hospital Resource Use in an Operated Appendicitis Cohort',focus:'Objective 4 and the recorded expenditure component of Objective 6, with exploratory three-group resource comparisons. This is not a cost-effectiveness study.',scopes:['4','6'],questions:['What proportion of evaluable operated specimens is negative for appendicitis?','How do recorded total expenditure and hospital stay vary between negative, simple and complicated histopathology?'],keys:['neg_histology','neg_rate','neg_subgroups','o4_cost_summary','o4_stay','o4_diagnosis_time','o4_surgery_time','neg_histology_bar'],terms:['reference','negative'],qualification:'The supplied source records total hospital cost, not itemised hs-CRP/pathway incremental costs. Operated status is specimen-linked; do not generalise negative appendicectomy to unverified non-operated patients or claim cost-effectiveness.'},
{id:'confidence',title:'Paired Diagnostic-Confidence Ratings Before and After Provision of MAS and hs-CRP Information in Suspected Appendicitis',focus:'Secondary paired ordinal clinician-reported outcome; separate from objective diagnostic performance.',scopes:['5'],questions:['How do ordinal confidence ratings move within the recorded before/after pairs?','What proportions increase, remain unchanged or decrease?'],keys:['conf_distribution','conf_transition','conf_change','conf_inference_unavailable','conf_heatmap'],terms:['paired'],qualification:'All 85 source records contain paired ratings, but clinician identifiers, repeated-case linkage and professional-group assignments are absent. Exact paired sign-test inference assumes a unique doctor for each patient and no doctor assessing multiple patients, as directed; original-protocol confirmation is required. Resident-versus-officer comparisons remain unsupported.'}
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
   "How do the two fixed MAS–hs-CRP strategies compare between children under 16 and adults aged 16 or above?"
  ],
  "keys": [
   "age_population",
   "age_performance",
   "age_rates",
   "age_rates"
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
// Obsolete exploratory proposal categories are no longer selectable.
for(let i=plans.length-1;i>=0;i--)if(!['diagnosis','severity','resources','confidence'].includes(plans[i].id))plans.splice(i,1);
const initialMeta={diagnosis:{variables:['MAS','CRP','AIR','age','histology'],feasibility:'Primary outputs; exploratory combinations and age subgroups qualified',family:'diagnostic'},severity:{variables:['CRP','histology'],feasibility:'Existing secondary severity analyses; eight complicated cases',family:'severity'},resources:{variables:['histology','INTRAOP_FINDING','total_costs','Duration_of_admission','time_to_diagnosis','time_to_surgery'],feasibility:'Existing descriptive and exploratory resource analyses',family:'resources'},confidence:{variables:['diagnostic_confi1','diagnostic_confi2'],feasibility:'Paired ordinal inference under assumed unique doctors; protocol confirmation required',family:'confidence'}};for(const p of plans)Object.assign(p,initialMeta[p.id]||{});

// Editorial consolidation is based on questions/endpoints, not shared predictors alone.
const mergeMap={strategies:'diagnosis','air-triage':'diagnosis',age:'diagnosis',pcv:'severity','clinical-presentation':'severity',pathway:'resources',postoperative:'resources','wbc-biomarkers':'severity','scan-description':'diagnosis','imaging-combination':'diagnosis',anatomy:'resources',affordability:'resources','cost-effectiveness':'resources'};
const originalityMeta={
 diagnosis:{outcome:'Histopathology-confirmed appendicitis versus its absence; diagnostic operating-point performance and discrimination',predictors:'Recorded MAS, AIR and hs-CRP; existing exploratory combinations kept separate from fixed rules',contribution:'One integrated comparison of the existing diagnostic strategies, including qualified age and AIR analyses.',priority:'Core manuscript',originality:'Distinct',reason:'Disease detection is distinct from hospital resource use or clinician-reported confidence.'},
 severity:{outcome:'Complicated versus simple histopathology among confirmed appendicitis',predictors:'hs-CRP as the principal marker; PCV and documented signs are optional exploratory supporting angles',contribution:'Addresses disease severity rather than presence of appendicitis; not another ranking of the same diagnostic strategies.',priority:'Conditional secondary manuscript',originality:'Potential overlap',reason:'Shares hs-CRP and the cohort with the diagnostic manuscript. Separate only if the severity question and substantive findings remain distinct; eight complicated cases constrain the contribution.'},
 resources:{outcome:'Negative appendicectomy proportion, recorded total expenditure and hospital resource use',predictors:'Histopathological group and recorded hospital intervals; no invented priced resource components',contribution:'Combines pathology, negative appendicectomy and resource consequences in one coherent service-focused paper.',priority:'Core manuscript',originality:'Distinct',reason:'Resource use and expenditure are different outcomes from diagnostic discrimination; consolidate timing, anatomy and complication angles here if relevant.'},
 confidence:{outcome:'Within-case before/after ordinal diagnostic-confidence ratings',predictors:'Provision of MAS and hs-CRP information; unique doctor per patient assumed; no professional-group assignment invented',contribution:'Describes perceived confidence rather than correct diagnosis, clinical benefit or expenditure.',priority:'Conditional secondary manuscript',originality:'Distinct',reason:'A distinct clinician-reported endpoint, but standalone contribution is conditional on informative paired results and a transparently stated, protocol-confirmable independence assumption.'}
};
for(const p of plans){p.mergeInto=mergeMap[p.id]||null;if(p.mergeInto){p.originality='Merge with another paper';p.priority='Integrated angle / future work';p.reason='Integrate this angle into '+plans.find(x=>x.id===p.mergeInto).title+' rather than generate a standalone report from overlapping or incomplete evidence.';p.outcome=p.focus;p.predictors=p.variables.join(', ');p.contribution=p.qualification;}else Object.assign(p,originalityMeta[p.id]);p.primaryQuestion=p.questions[0];}
// Supporting analyses from merged, already implemented angles become optional choices in the parent.
for(const p of plans.filter(x=>!x.mergeInto)){const children=plans.filter(x=>x.mergeInto===p.id&&!x.needs);p.consolidatedKeys=[...new Set([...p.keys,...children.flatMap(x=>x.keys)])];p.scopes=[...new Set([...p.scopes,...children.flatMap(x=>x.scopes)])];p.variables=[...new Set([...p.variables,...children.flatMap(x=>x.variables)])];}
const editorialGroup=p=>p.mergeInto||p.id;
const supportingKeys=new Set(['baseline','d1_population','db_population','age_population']);
function pairAudit(a,b){const commonVariables=a.variables.filter(v=>b.variables.includes(v)),sharedOutputs=a.keys.filter(k=>b.keys.includes(k));const ga=editorialGroup(a),gb=editorialGroup(b);let status='Distinct',reason='Different primary endpoint and contribution; common participants or variables alone do not establish redundancy.';if(ga===gb){status='Merge with another paper';reason='Both belong to the '+ga+' manuscript question; retain one integrated paper or choose an explicitly justified alternative.';}else if([ga,gb].includes('diagnosis')&&[ga,gb].includes('severity')){status='Potential overlap';reason='Related biomarker/clinical questions use the same histopathology cohort, but disease presence and disease severity are different endpoints. Keep only distinct major analyses and conclusions.';}else if(sharedOutputs.some(k=>!supportingKeys.has(k))){status='Potential overlap';reason='Substantive outputs are reused; move them to one manuscript or justify a genuinely different question.';}return {a:a.id,b:b.id,status,reason,sharedOutputs,commonVariables};}
const pairInventory=plans.flatMap((a,i)=>plans.slice(i+1).map(b=>pairAudit(a,b)));for(const p of plans)p.overlapsWith=[...new Set(plans.filter(x=>x.id!==p.id&&pairAudit(p,x).status!=='Distinct').map(editorialGroup))].filter(id=>id!==p.id);
function selectionOverlap(ids){const chosen=plans.filter(p=>ids.includes(p.id)),problems=[];for(let i=0;i<chosen.length;i++)for(const b of chosen.slice(i+1)){const a=chosen[i],common=chosenFor(a).filter(e=>chosenFor(b).some(x=>x.id===e.id)&&!supportingKeys.has(e.key));if(editorialGroup(a)===editorialGroup(b)||common.length)problems.push({a:a.id,b:b.id,outputs:common.map(e=>e.id),reason:common.length?'Same substantive tables/figures selected for both papers.':'Both ideas should form one manuscript.'});}return problems;}
const settings=new Map(plans.map(p=>[p.id,{title:p.title,scopes:new Set(p.scopes),selected:new Set(RESULT_CATALOG.entries.filter(e=>p.keys.includes(e.key)).map(e=>e.id)),interpretations:new Set(RESULT_CATALOG.entries.filter(e=>p.keys.includes(e.key)).map(e=>e.id))}]));let selected=plans[0].id,query='',message='',savedViews=[],batchSelected=new Set(),batchBusy=false,batchStatus='',relatedAcknowledged=false;
const candidates=p=>RESULT_CATALOG.entries.filter(e=>p.scopes.includes(e.scope)&&(p.consolidatedKeys||[...p.keys,...(p.contextKeys||[])]).includes(e.key));const chosenFor=p=>candidates(p).filter(e=>settings.get(p.id).scopes.has(e.scope)&&settings.get(p.id).selected.has(e.id));
const plan=()=>plans.find(p=>p.id===selected),config=()=>settings.get(selected),entries=()=>candidates(plan()),ready=()=>new Map(HUB_RESULTS.allReportItems().map(i=>[i.id,i]));
const paperPanels=new Map();
function rememberPanels(){root.querySelectorAll('details[data-paper-panel]').forEach(d=>paperPanels.set(d.dataset.paperPanel,d.open));}
function panel(name,title,content,open=false){const key=selected+':'+name;return `<details class="${name==='merged-angles'?'paper-merged-angles':''}" data-paper-panel="${key}" ${paperPanels.get(key)===true?'open':''}><summary>${title}</summary>${content}</details>`;}
function shortFeasibility(p){return p.needs?'Additional evidence needed':p.mergeInto?'Integrate into parent paper':p.priority==='Core manuscript'?'Existing outputs · core question':'Conditional secondary analysis';}
function paperCard(p){const c=settings.get(p.id);return `<article class="paper-card ${p.id===selected?'is-current':''}"><div class="paper-card-top"><span class="paper-status">${esc(p.originality)}</span>${!p.mergeInto?`<label class="paper-export-pick"><input type="checkbox" data-paper-batch-pick="${p.id}" ${batchSelected.has(p.id)?'checked':''} ${batchBusy?'disabled':''}>Include in export</label>`:''}</div><button class="paper-card-title" data-paper="${p.id}" aria-pressed="${p.id===selected}">${esc(c.title)}</button><p class="paper-card-question"><span>Question</span> ${esc(p.primaryQuestion)}</p><p class="paper-card-contribution"><span>Contribution</span> ${esc(p.mergeInto?'Supporting angle for '+settings.get(p.mergeInto).title:p.contribution)}</p><small>${esc(shortFeasibility(p))}</small></article>`;}
function render(){rememberPanels();const active=document.activeElement,inside=root.contains(active),dataKey=inside?Object.keys(active.dataset||{}).find(k=>k.startsWith('paper')):null,panelKey=inside&&active.tagName==='SUMMARY'?active.parentElement.dataset.paperPanel:null,focusSelector=!inside?null:active.id?'#'+CSS.escape(active.id):dataKey?'[data-'+dataKey.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())+'="'+CSS.escape(active.dataset[dataKey])+'"]':panelKey?'details[data-paper-panel="'+CSS.escape(panelKey)+'"] > summary':null,selection=inside&&typeof active.selectionStart==='number'?[active.selectionStart,active.selectionEnd]:null;const listScroll=root.querySelector('.paper-proposal-list')?.scrollTop||0,p=plan(),s=config(),available=ready(),chosen=chosenFor(p),missing=chosen.filter(e=>!available.has(e.id)),rows=HUB_RESULTS.navSnapshot().dataset?.records;const conflicts=selectionOverlap([...batchSelected]),matching=plans.filter(x=>(settings.get(x.id).title+' '+x.focus+' '+x.questions.join(' ')+' '+x.variables.join(' ')).toLowerCase().includes(query.toLowerCase())),cores=matching.filter(x=>!x.mergeInto&&x.priority==='Core manuscript'),secondary=matching.filter(x=>!x.mergeInto&&x.priority!=='Core manuscript');
const objectives=p.scopes.map(id=>{const o=RESULT_CATALOG.scopes.find(x=>x.id===id),count=chosen.filter(e=>e.scope===id).length;return `<div class="paper-relation"><label><input type="checkbox" data-paper-scope="${id}" ${s.scopes.has(id)?'checked':''}>${esc(o.name)} <small>${count} selected</small></label><button class="quiet-button" data-paper-objective="${id}">Open</button><p>${esc(o.statement)}</p></div>`;}).join('');
const outputGroup=type=>{const list=entries().filter(e=>s.scopes.has(e.scope)&&e.type===type),count=list.filter(e=>s.selected.has(e.id)).length;return panel(type,`${type==='table'?'Tables':'Figures'} · ${count} selected / ${list.length} available`,list.map(e=>`<div class="paper-output-row"><label><input type="checkbox" data-paper-output="${e.id}" ${s.selected.has(e.id)?'checked':''} ${e.requires||p.needs||p.mergeInto?'disabled':''}>${esc(e.title)}</label><span class="paper-output-state">${e.requires?'Requires evidence':available.has(e.id)?'Calculated':'Needs calculation'}</span><div class="paper-output-tools"><button class="quiet-button" data-paper-output-link="${e.id}">View output</button><button class="quiet-button" data-paper-interpretation-link="${e.id}">Read explanation</button><label><input type="checkbox" data-paper-narrative="${e.id}" ${s.interpretations.has(e.id)?'checked':''}>Use interpretation</label></div>${e.requires?panel('require-'+e.id,'Why this needs review','<p>'+esc(e.requires)+'</p>'):''}</div>`).join('')||'<p>No outputs in the selected objective scopes.</p>');};
const comparison=`<p class="small-note">${pairInventory.length} pairs reviewed. Shared variables alone do not imply duplication.</p><div class="paper-overlap-table"><table><thead><tr><th>Related idea</th><th>Status</th><th>Reason</th></tr></thead><tbody>${plans.filter(x=>x.id!==p.id).map(x=>{const a=pairAudit(p,x);return `<tr><td>${esc(settings.get(x.id).title)}</td><td>${esc(a.status)}</td><td>${esc(a.reason)}${a.sharedOutputs.length?' Shared outputs: '+esc(a.sharedOutputs.join(', ')):''}</td></tr>`;}).join('')}</tbody></table></div>`;
const variables=p.variables.map(name=>`${esc(name)}${rows?' · '+rows.filter(r=>r[name]!==null&&r[name]!==undefined).length+'/'+rows.length+' recorded':''}`).map(t=>'<li>'+t+'</li>').join('');
root.innerHTML=`<header class="papers-heading"><div><span class="section-label">Manuscript workspace</span><h2>Papers</h2></div><p>${batchSelected.size} papers included · ${chosen.length} outputs in the current paper</p></header><nav class="paper-workflow" aria-label="Paper workflow">${[['paper-proposals','Proposals'],['paper-details','Details'],['paper-overlap','Overlap'],['paper-selection','Outputs'],['paper-export','Word export']].map(([id,label],i)=>`<button class="quiet-button" data-paper-step="${id}"><span>${i+1}</span> ${label}</button>`).join('')}</nav><div class="papers-layout paper-workbench"><nav id="paper-proposals" tabindex="-1" class="paper-proposal-list" aria-label="Proposed papers"><label class="paper-search-label">Find a paper<input id="paper-search" type="search" value="${esc(query)}" placeholder="Diagnostic, severity, costs…"></label><div class="paper-list-tools"><button class="quiet-button" data-paper-batch-all ${batchBusy?'disabled':''}>Select core papers</button><button class="quiet-button" data-paper-batch-none ${batchBusy?'disabled':''}>Clear selection</button></div>${cores.length?'<h3>Core manuscripts</h3>'+cores.map(paperCard).join(''):''}${secondary.length?'<h3>Conditional secondary papers</h3>'+secondary.map(paperCard).join(''):''}${panel('merged-angles',`Integrated angles and future work · ${matching.filter(x=>x.mergeInto).length}`,plans.filter(x=>matching.includes(x)&&!x.mergeInto).map(parent=>{const children=matching.filter(x=>x.mergeInto===parent.id);return children.length?`<section class="paper-merged-group"><h4>${esc(settings.get(parent.id).title)}</h4>${children.map(x=>`<button class="quiet-button" data-paper="${x.id}" aria-pressed="${selected===x.id}">${esc(settings.get(x.id).title)} <small>Merge${x.needs?' · needs evidence':''}</small></button>`).join('')}</section>`:'';}).join('')||matching.filter(x=>x.mergeInto).map(x=>`<button class="quiet-button" data-paper="${x.id}">${esc(settings.get(x.id).title)} · merge into ${esc(settings.get(x.mergeInto).title)}</button>`).join(''),Boolean(query||p.mergeInto))}${!matching.length?'<p>No papers match this search.</p>':''}</nav><article class="paper-detail-workspace"><section id="paper-details" tabindex="-1"><div class="paper-stage-heading"><h3>2. Paper details</h3><span class="paper-status">${esc(p.originality)}</span></div><label>Paper title<textarea id="paper-title" rows="2" maxlength="300">${esc(s.title)}</textarea></label><p class="paper-primary-question">${esc(p.primaryQuestion)}</p><p class="paper-contribution">${esc(p.contribution)}</p>${panel('research-details','Research scope, variables and feasibility',`<dl><dt>Main outcome</dt><dd>${esc(p.outcome)}</dd><dt>Predictors / exposures</dt><dd>${esc(p.predictors)}</dd><dt>Feasibility</dt><dd>${esc(p.feasibility)}</dd></dl><p>${esc(p.qualification)}</p><ul class="paper-variable-list">${variables}</ul><p class="small-note">${rows?rows.length+' active records.':'Load your dataset to calculate outputs.'} Original protocol/questionnaire documents are not bundled; scope follows the documented dictionary, objectives and analyses.</p>`)}</section><section id="paper-overlap" tabindex="-1"><h3>3. Overlap assessment</h3><p class="paper-overlap-summary">${esc(p.reason)}</p>${p.overlapsWith.length?`<p class="small-note">Related: ${p.overlapsWith.map(id=>esc(settings.get(id).title)).join('; ')}</p>`:''}${p.mergeInto?`<button class="quiet-button" data-paper="${p.mergeInto}">Open consolidated manuscript</button>`:''}${panel('overlap','Compare with other ideas · '+(plans.length-1),comparison)}<p class="small-note">Different papers must disclose the shared cohort and related manuscripts. This assesses within-study overlap, not worldwide novelty or journal acceptance.</p></section><section id="paper-selection" tabindex="-1"><div class="paper-stage-heading"><h3>4. Analyses and outputs</h3><span>${chosen.filter(e=>e.type==='table').length} tables · ${chosen.filter(e=>e.type==='figure').length} figures</span></div>${panel('objectives','Linked objectives and analysis scopes',objectives)}<div class="paper-selection-toolbar"><button class="quiet-button" data-paper-all ${p.needs||p.mergeInto?'disabled':''}>Select eligible outputs</button><button class="quiet-button" data-paper-none>Clear outputs</button><span role="status">${chosen.length-missing.length} calculated · ${missing.length} need calculation</span></div>${outputGroup('table')}${outputGroup('figure')}${panel('glossary','Related statistical concepts',p.terms.map(id=>{const e=HUB_GLOSSARY.entries.find(x=>x.id===id||x.aliases.some(a=>a.toLowerCase()===id));return e?`<button class="quiet-button" data-paper-term="${e.id}">${esc(e.term)}</button>`:'';}).join(''))}</section><section id="paper-export" tabindex="-1" class="paper-batch"><h3>5. Word report export</h3><div class="paper-current-export"><p><strong>Current paper:</strong> ${chosen.length} outputs · ${missing.length?missing.length+' need calculation':'all selected outputs calculated'}</p><button type="button" class="quiet-button" data-paper-preview="${p.id}">Preview Report</button><button class="quiet-button" data-paper-report ${p.mergeInto||p.needs||batchBusy||!chosen.length||missing.length||!s.title.trim()?'disabled':''}>Review current paper in Reports</button></div><p><strong>${batchSelected.size} papers included</strong>${batchSelected.size?' · '+plans.filter(x=>batchSelected.has(x.id)).map(x=>esc(settings.get(x.id).title)).join('; '):' — use the card checkboxes to include papers.'}</p>${conflicts.length?`<p role="alert">Resolve ${conflicts.length} substantive overlap(s): ${conflicts.map(x=>esc(settings.get(x.a).title)+' ↔ '+esc(settings.get(x.b).title)).join('; ')}</p>`:''}${batchSelected.size>1?`<label><input type="checkbox" data-paper-related-ack ${relatedAcknowledged?'checked':''}>I will disclose the shared cohort and related manuscripts and keep substantive findings distinct.</label>`:''}<div class="result-export-actions"><button class="copy-button" data-paper-batch-export ${batchBusy||!batchSelected.size?'disabled':''}>${batchBusy?'Preparing reports…':'Export included papers (.docx files)'}</button></div><p role="status" aria-live="polite">${esc(batchStatus||'One ZIP contains separate Word documents. Missing analyses and substantive duplication block export.')}</p><p id="paper-status" role="status">${esc(message)}</p></section></article></div>`;
root.querySelector('.paper-proposal-list').scrollTop=listScroll;if(focusSelector){const next=root.querySelector(focusSelector);next?.focus({preventScroll:true});if(selection&&next?.setSelectionRange)next.setSelectionRange(...selection);}}

function open(){if(!root.hidden){render();return;}HUB_HISTORY?.before();HUB_GLOSSARY.close(false);HUB_ABOUT.close(false);HUB_RESULTS.leave();HUB_RESULT_VIEWER?.leave();savedViews=[...document.querySelectorAll('#main,#objective-nav,#analysis-workspace,#objective-results,#statistical-glossary,#about-developer,#global-search-results,#analysis-search-status,.hero,.research-overview,.learning-tools,.progress-strip')].map(el=>[el,el.hidden]);for(const [el] of savedViews)el.hidden=true;document.body.classList.remove('analysis-active');for(const b of document.querySelectorAll('.workspace-tabs button,.supporting-actions button'))b.setAttribute('aria-pressed',String(b===tab));document.querySelectorAll('[data-side-target]').forEach(b=>b.setAttribute('aria-current',b.dataset.sideTarget==='papers-tab'?'page':'false'));root.hidden=false;render();root.focus({preventScroll:true});root.scrollIntoView({block:'start'});}
function hide(){for(const [el,hidden] of savedViews)el.hidden=hidden;root.hidden=true;tab.setAttribute('aria-pressed','false');}
function route(run){HUB_HISTORY?.before();hide();run();}
function resultAction(id,kind){route(()=>{HUB_RESULTS.openResult(id);if(kind==='interpretation'){const b=document.createElement('button');b.dataset.viewInterpretation=id;document.getElementById('objective-results').append(b);b.click();b.remove();}});}
function previewPaper(id=selected){const p=plans.find(p=>p.id===id),s=settings.get(id);if(!p||!s)return;const chosen=chosenFor(p),items=HUB_REPORTS.paperItems(chosen.map(e=>e.id),[...s.interpretations]);return HUB_PREVIEW.open({title:s.title,items,definitions:chosen,notices:[p.mergeInto?'Supporting angle: merge with '+settings.get(p.mergeInto).title+'. This is a review, not a separate cleared manuscript.':p.needs?p.feasibility:p.qualification]});}
root.addEventListener('input',e=>{if(e.target.id==='paper-title')config().title=e.target.value;if(e.target.id==='paper-search'){query=e.target.value;const pos=e.target.selectionStart;render();const field=root.querySelector('#paper-search');field.focus();field.setSelectionRange(pos,pos);}});
root.addEventListener('change',e=>{if(e.target.closest('.objective-flow'))return;const d=e.target.dataset,s=config();if('paperRelatedAck'in d){relatedAcknowledged=e.target.checked;render();return;}relatedAcknowledged=false;if(d.paperBatchPick){e.target.checked?batchSelected.add(d.paperBatchPick):batchSelected.delete(d.paperBatchPick);batchStatus='';render();return;}if(d.paperScope){e.target.checked?s.scopes.add(d.paperScope):s.scopes.delete(d.paperScope);}if(d.paperOutput){e.target.checked?s.selected.add(d.paperOutput):s.selected.delete(d.paperOutput);}if(d.paperNarrative){e.target.checked?s.interpretations.add(d.paperNarrative):s.interpretations.delete(d.paperNarrative);}render();});
root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset;if(d.paperPreview){previewPaper(d.paperPreview);return;}if(d.paperStep){const target=root.querySelector('#'+d.paperStep);target?.focus({preventScroll:true});target?.scrollIntoView({block:'start',behavior:'auto'});return;}if('paperBatchAll'in d){plans.filter(p=>p.priority==='Core manuscript').forEach(p=>batchSelected.add(p.id));relatedAcknowledged=false;batchStatus='';render();return;}if('paperBatchNone'in d){batchSelected.clear();relatedAcknowledged=false;batchStatus='';render();return;}if('paperBatchExport'in d){exportBatch();return;}if(d.paper){HUB_HISTORY?.before();selected=d.paper;message='';render();if(matchMedia('(max-width:60rem)').matches)root.querySelector('#paper-details')?.scrollIntoView({block:'start',behavior:'auto'});}if('paperAll'in d&&!plan().mergeInto&&!plan().needs){relatedAcknowledged=false;entries().filter(e=>!e.requires&&config().scopes.has(e.scope)).forEach(e=>config().selected.add(e.id));render();}if('paperNone'in d){relatedAcknowledged=false;config().selected.clear();render();}if(d.paperOutputLink)resultAction(d.paperOutputLink);if(d.paperInterpretationLink)resultAction(d.paperInterpretationLink,'interpretation');if(d.paperObjective)route(()=>{if(/^\d$/.test(d.paperObjective))HUB_NAV.openObjective(Number(d.paperObjective));else{HUB_RESULTS.selectObjective(d.paperObjective);document.getElementById('results-tab').click();}});if(d.paperTerm)route(()=>HUB_GLOSSARY.open(d.paperTerm));if('paperReport'in d){const chosen=entries().filter(e=>config().scopes.has(e.scope)&&config().selected.has(e.id)),available=ready();if(plan().mergeInto||plan().needs||!chosen.length||chosen.some(e=>!available.has(e.id)))return;HUB_REPORTS.setPaperSelection(config().title,chosen.map(e=>e.id),[...config().interpretations]);route(()=>document.getElementById('reports-tab').click());}});

async function exportBatch(){if(batchBusy)return;const chosen=plans.filter(p=>batchSelected.has(p.id)),source=HUB_RESULTS.navSnapshot().dataset,available=ready(),issues=[],jobs=[];if(!chosen.length)return;const conflicts=selectionOverlap(chosen.map(p=>p.id));if(conflicts.length)issues.push('Resolve shared substantive outputs or merge the overlapping manuscripts.');if(chosen.length>1&&!relatedAcknowledged)issues.push('Acknowledge transparent disclosure of the shared cohort and related manuscripts.');for(const p of chosen){const s=settings.get(p.id),outputs=chosenFor(p);if(p.mergeInto){issues.push(s.title+': merge with '+settings.get(p.mergeInto).title);continue;}if(p.needs){issues.push(s.title+': '+p.feasibility);continue;}if(!s.title.trim()||!outputs.length){issues.push(s.title+': choose a title and at least one output.');continue;}const missing=outputs.filter(e=>!available.has(e.id));if(missing.length){issues.push(s.title+': '+missing.length+' selected outputs need calculation.');continue;}const items=HUB_REPORTS.paperItems(outputs.map(e=>e.id),[...s.interpretations]);const checks=HUB_REPORTS.warnings(items);if(checks.length)issues.push(s.title+': '+checks.join(' '));else jobs.push({p,title:s.title,items});}if(issues.length){batchStatus='Export blocked — '+issues.join(' | ');render();return;}const groups=new Map();for(const j of jobs)groups.set(j.p.family,(groups.get(j.p.family)||0)+1);const overlap=[...groups].filter(([,n])=>n>1).map(([g])=>g);batchBusy=true;const files={},version=JSON.stringify(HUB_RESULTS.allReportItems().map(i=>[i.id,i.result]));try{for(let i=0;i<jobs.length;i++){const j=jobs[i];batchStatus='Preparing '+(i+1)+' of '+jobs.length+': '+j.title;render();if(source!==HUB_RESULTS.navSnapshot().dataset)throw Error('Dataset changed; no mixed-source reports exported.');const bytes=await RESULT_EXPORTS.docx(j.items,j.title,undefined,{paperTitle:j.title});if(source!==HUB_RESULTS.navSnapshot().dataset||version!==JSON.stringify(HUB_RESULTS.allReportItems().map(i=>[i.id,i.result])))throw Error('Dataset or calculated results changed during export.');files[String(i+1).padStart(2,'0')+'-'+j.p.id+'.docx']=bytes;}const bytes=RESULT_EXPORTS.zip(files),url=URL.createObjectURL(new Blob([bytes],{type:'application/zip'})),a=document.createElement('a');a.href=url;a.download='Appendicitis_Selected_Papers.zip';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);batchStatus=jobs.length+' separate Word reports created.'+(overlap.length?' Related/overlapping selections: '+overlap.join(', ')+'. Treat these as alternatives or disclose shared analyses.':'');}catch(error){batchStatus='Export failed — '+error.message+'. No incomplete report archive was downloaded.';}finally{batchBusy=false;render();}}
tab.addEventListener('click',open);document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||root.hidden)return;if(b.id!=='papers-tab'&&(b.matches('.workspace-tabs button')||['home','about-tab','variables-tab','analysis-tab','interpretations-tab'].includes(b.id)||b.dataset.sideTarget&&b.dataset.sideTarget!=='papers-tab'))hide();},true);
const viewVersion=()=>JSON.stringify({ready:HUB_RESULTS.allReportItems().map(i=>i.id),settings:[...settings].map(([id,s])=>[id,s.title,[...s.scopes],[...s.selected],[...s.interpretations]]),batch:[...batchSelected],relatedAcknowledged});
window.HUB_PAPERS={open,plans,pairInventory,pairAudit,selectionOverlap,navSnapshot:()=>({selected,query,savedViews,version:viewVersion()}),navRestore:v=>{selected=v.selected;query=v.query;savedViews=v.savedViews;if(v.version!==viewVersion())requestAnimationFrame(()=>{if(!root.hidden&&selected===v.selected)render();});},selected:()=>({plan:plan(),title:config().title,ids:entries().filter(e=>config().scopes.has(e.scope)&&config().selected.has(e.id)).map(e=>e.id)})};})();
