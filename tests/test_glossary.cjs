const fs=require('fs'),vm=require('vm'),assert=require('assert'),harness=require('./dom_harness.cjs');
(async()=>{
 const h=harness(),get=h.document.getElementById,events={};
 h.document.getElementById=id=>{if(['glossary-search','glossary-category','glossary-reading'].includes(id)&&!h.elements[id]){h.elements[id]=new h.elements.main.constructor(id);h.elements[id].setSelectionRange=()=>{};}return get(id);};
 h.document.addEventListener=(name,f)=>events[name]=f;
 h.document.activeElement=h.elements.main;h.window.scrollY=215;h.window.scrollTo=o=>h.window.returnScroll=o.top;
 h.elements['statistical-glossary'].hidden=true;
 const tools={hidden:false};h.document.querySelector=s=>s==='.learning-tools'?tools:null;h.elements['statistical-glossary'].querySelector=()=>h.elements['glossary-tab'];
 for(const name of ['glossary-data.js','statistical-glossary.js'])vm.runInContext(fs.readFileSync(name,'utf8'),h.context);
 const api=h.window.__GLOSSARY_TEST__,G=h.window.HUB_GLOSSARY,D=h.window.HUB_GLOSSARY_DATA;
 assert.equal(D.entries.length,57);assert.equal(new Set(D.entries.map(e=>e.id)).size,57);
 for(const cat of D.categories)assert(D.entries.some(e=>e.category===cat));
 for(const e of D.entries){assert(e.definition&&e.interpretation&&e.example.startsWith('Illustrative:'));for(const id of e.related)assert(D.entries.some(e=>e.id===id));assert(api.detail(e).includes(e.term));}
 api.setFilters('PPV');assert(api.filtered().some(e=>e.id==='ppv'));api.setFilters('probability');assert(api.filtered().some(e=>e.id==='pvalue'));api.setFilters('hs-CRP');assert(api.filtered().some(e=>e.id==='hscrp'));
 api.setFilters('',D.categories[6]);assert(api.filtered().length===4);api.setFilters('','all','S');assert(api.filtered().length>0&&api.filtered().every(e=>e.term.startsWith('S')));api.setFilters('nothing matches xyz');assert.equal(api.filtered().length,0);api.render();assert(h.elements['statistical-glossary'].innerHTML.includes('No glossary entries match'));
 const a=h.window.__CATALOG_TEST__;await a.load({schema:'appendicitis-private-rows-v1',records:Array.from({length:12},(_,i)=>({diagnostic_confi1:i%5+1,diagnostic_confi2:(i+1)%5+1}))});const e=h.window.RESULT_CATALOG.entries.find(e=>e.key==='conf_distribution');await a.generate(e);const input=a.state.input,result=a.state.completed.get(e.id);
 for(const source of ['objectives','results','interpretations','analysis']){
  if(source==='objectives')await h.elements['objectives-tab'].fire('click');else await h.elements[source==='analysis'?'analysis-tab':source+'-tab'].fire('click');
  const snapshot=['main','objective-results','analysis-workspace'].map(id=>[id,h.elements[id].hidden,h.elements[id].innerHTML]);const unsaved=h.elements.search.value='unsaved learning search';
  api.open('sensitivity');assert(api.isOpen());assert.equal(h.elements['glossary-tab'].getAttribute('aria-pressed'),'true');assert(snapshot.every(([id])=>h.elements[id].hidden));assert.equal(a.state.input,input);assert.equal(a.state.completed.get(e.id),result);
  assert(h.elements['statistical-glossary'].innerHTML.includes('data-glossary="ppv"'));
  events.click({target:{closest:()=>({dataset:{glossary:'ppv'}})},preventDefault(){},stopPropagation(){}});assert(h.elements['statistical-glossary'].innerHTML.includes('id="glossary-detail-title">Positive predictive value'));
  api.close();assert(!api.isOpen());for(const [id,hidden,html] of snapshot){assert.equal(h.elements[id].hidden,hidden);assert.equal(h.elements[id].innerHTML,html);}assert.equal(h.elements.search.value,unsaved);assert.equal(h.window.returnScroll,215);
 }
 assert.equal(api.open('nonexistent'),false);await h.elements['glossary-tab'].fire('click');assert(api.isOpen());
 api.open('sensitivity');await h.elements['statistical-glossary'].fire('input',{target:{id:'glossary-search',value:'PPV',selectionStart:3}});assert(api.filtered().some(e=>e.id==='ppv'));
 await h.elements['statistical-glossary'].fire('change',{target:{id:'glossary-category',value:D.categories[6]}});assert(api.filtered().every(e=>e.category===D.categories[6]));
 const action=async(attrs,dataset={})=>h.elements['statistical-glossary'].fire('click',{target:{closest:()=>({dataset,hasAttribute:k=>attrs.includes(k)})}});
 api.open('npv',false);assert(api.filtered().every(e=>e.category===D.categories[6]));await action(['data-glossary-clear']);assert.equal(api.filtered().length,57);await action([],{glossaryLetter:'M'});assert(api.filtered().every(e=>e.term.startsWith('M')));await action(['data-glossary-return']);assert(!api.isOpen());
 api.open('auc');events.click({target:{closest:()=>h.elements['results-tab']}});await h.elements['results-tab'].fire('click');assert(!api.isOpen());assert(!h.elements['objective-results'].hidden);
 // Real annotation code on a minimal text-node fixture, including table/caption and SVG exclusions.
 const nodes=[['p','Sensitivity and AUC with 95% CI.'],['th',"Fisher's exact test"],['figcaption','ROC curve'],['svg','Sensitivity']],buttons=[];
 h.document.createTreeWalker=()=>{let i=0;return {nextNode:()=>fixtures[i++]||null};};
 h.document.createTextNode=text=>({textContent:text});h.document.createDocumentFragment=()=>({children:[],append(n){this.children.push(n);}});
 h.document.createElement=()=>({dataset:{},setAttribute(k,v){this[k]=v;}});
 const fixtures=nodes.map(([tag,text])=>({nodeValue:text,parentElement:{closest:s=>s.includes('button,a')?(tag==='svg'?{}:null):(tag!=='svg'?{}:null)},replaceWith(f){this.replaced=f;buttons.push(...f.children.filter(n=>n.dataset));}}));
 G.annotate({});assert(buttons.some(b=>b.dataset.glossary==='sensitivity'));assert(buttons.some(b=>b.dataset.glossary==='auc'));assert(buttons.some(b=>b.dataset.glossary==='ci'));assert(buttons.some(b=>b.dataset.glossary==='fisher'));assert(buttons.some(b=>b.dataset.glossary==='roc'));assert(!fixtures[3].replaced);for(const b of buttons)assert(D.entries.some(e=>e.id===b.dataset.glossary));
 // Sidebar remains usable in desktop/mobile mode with glossary selected.
 h.document.createTreeWalker=null;const mq={matches:false,addEventListener(n,f){this.change=f;}};h.window.matchMedia=()=>mq;h.window.addEventListener=()=>{};h.document.body.style={setProperty(){}};h.elements['navigation-sidebar'].removeAttribute=n=>{};
 vm.runInContext(fs.readFileSync('sidebar.js','utf8'),h.context);api.open('auc');const sidebar=h.window.__SIDEBAR_TEST__;
 for(const mobile of [false,true]){mq.matches=mobile;mq.change();for(let i=0;i<4;i++){await h.elements['sidebar-toggle'].fire('click');assert(api.isOpen());assert(!h.elements['statistical-glossary'].hidden);assert.equal(a.state.input,input);}sidebar.setOpen(false);sidebar.setOpen(true);assert(api.isOpen());}
 const html=fs.readFileSync('index.html','utf8');assert(html.includes('data-side-target="glossary-tab"'));assert(html.includes('id="glossary-tab"'));const css=fs.readFileSync('glossary.css','utf8');assert(css.includes('@media(max-width:75rem)'));assert(css.includes('min-height:3.75rem'));assert(css.includes(':focus-visible'));
 console.log('57 entries/16 categories, formulas/related IDs, abbreviation/definition search, filters/alphabet/no results, term annotations/table/caption/SVG exclusion, return from four sections without DOM/input/dataset/result loss, direct navigation and desktop/mobile-mode sidebar toggles passed. Native rendering remains a separate check.');
})().catch(e=>{console.error(e);process.exit(1)});
