const fs=require('fs');const vm=require('vm');const assert=require('assert');const path=require('path');
const dir=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(dir,'index.html'),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);
let passed=0;function check(test){test();passed++;}
function harness(blockedStorage=false,memory=new Map()){
 let cards=[];let variables=[];const elements={};let copied='';let fallback=true;
 class El{
  constructor(id){this.id=id;this.hidden=false;this.disabled=false;this.value='';this.dataset={};this.attrs={};this.listeners={};this.textContent='';this.style={};this.classList={add:()=>{},remove:()=>{}};}
  set innerHTML(v){this.html=v;if(this.id==='main'){cards=[...v.matchAll(/<details class="method-card" data-method="([^"]+)" data-context="([^"]+)"/g)].map(m=>{let e=new El();e.dataset={method:m[1],context:m[2]};e.open=false;return e;});variables=[...v.matchAll(/<details class="variable-card" data-name="([^"]+)"/g)].map(m=>{let e=new El();e.dataset={name:m[1]};e.open=false;return e;});}}
  get innerHTML(){return this.html||'';}
  setAttribute(k,v){this.attrs[k]=v;}
  addEventListener(n,f){this.listeners[n]=f;}
  async fire(n,e={}){return this.listeners[n]?.({target:this,...e});}
  focus(){this.focused=true;}scrollIntoView(){this.scrolled=true;}select(){this.selected=true;}remove(){this.removed=true;}closest(){return this;}
 }
 for(const id of ids)elements[id]=new El(id);
 elements.notes.hidden=true;
 const document={getElementById:id=>{assert(elements[id],`Missing DOM id ${id}`);return elements[id];},querySelectorAll:selector=>selector.includes('.variable-card')?variables.filter(v=>v.open):cards.filter(c=>c.open),querySelector:selector=>{const m=selector.match(/data-method="([^"]+)".*data-context="([^"]+)"/);if(m)return cards.find(c=>c.dataset.method===m[1]&&c.dataset.context===m[2]);const v=selector.match(/data-name="([^"]+)"/);if(v)return variables.find(e=>e.dataset.name===v[1]);if(selector.startsWith("button[data-review"))return new El();return null;},createElement:()=>new El(),body:{appendChild(){}},execCommand:()=>fallback};
 const window={__HUB_TEST__:true,isSecureContext:true};const storage={getItem:key=>{if(blockedStorage)throw Error('blocked');return memory.get(key)||null;},setItem:(key,value)=>{if(blockedStorage)throw Error('blocked');memory.set(key,value);}};
 const context=vm.createContext({window,document,localStorage:storage,navigator:{clipboard:{writeText:async text=>{copied=text;}}},setTimeout:()=>1,clearTimeout(){}});
 vm.runInContext(fs.readFileSync(path.join(dir,'content.js'),'utf8'),context);
 vm.runInContext(fs.readFileSync(path.join(dir,'variables.js'),'utf8'),context);
 vm.runInContext(fs.readFileSync(path.join(dir,'script.js'),'utf8'),context);
 return {context,window,document,elements,memory,get cards(){return cards;},get variables(){return variables;},get copied(){return copied;},setFallback:v=>{fallback=v;},click:async data=>{const b=new El();b.dataset=data;await elements.main.fire('click',{target:b});return b;}};
}
(async()=>{
 const h=harness();const api=h.window.__HUB_TEST_API__;const data=h.window.HUB_DATA;
 check(()=>assert.equal(data.objectives.length,6));check(()=>assert.equal(Object.keys(data.methods).length,23));
 check(()=>assert.equal((h.elements.main.innerHTML.match(/class="objective-card"/g)||[]).length,6));
 const required=['Full name','Why is it called that?','What does it do?','What does it mean in my research?','Practical interpretation','Hypothetical example — not a study finding','Practical takeaway','When is it useful?'];
 for(const o of data.objectives){
  await h.click({open:String(o.id)});
  check(()=>assert.equal(api.state.objective,o.id));
  check(()=>assert.equal(h.cards.length,o.methods.length));
  check(()=>assert(h.elements.main.innerHTML.includes(api.esc(o.approved))));
  check(()=>required.forEach(label=>assert(h.elements.main.innerHTML.includes(label))));
  for(const entry of api.getEntries(o)){
   check(()=>['name','origin','purpose','here','meaning','interpret','example','client','limits'].forEach(k=>assert(entry[k]&&entry[k].length>12,`${entry.id} missing ${k}`)));
   await h.click({copy:entry.id,objective:String(o.id)});check(()=>assert.equal(h.copied,entry.client));
  }
 }
 await h.elements.home.fire('click');check(()=>assert.equal(api.state.objective,null));
 for(const term of ['ROC','AUC','Firth','Wilson','paired','costs','Mann–Whitney']){h.elements.search.value=term;await h.elements.search.fire('input');check(()=>assert(h.cards.length>0,`${term} no results`));}
 h.elements.search.value='xyzzy-no-method';await h.elements.search.fire('input');check(()=>assert(h.elements.main.innerHTML.includes('No matching entries')));
 await h.click({action:'clear'});check(()=>assert.equal(api.state.query,''));check(()=>assert(h.elements.main.innerHTML.includes('Choose a research objective')));
 await h.click({open:'4'});h.elements.search.value='logistic';await h.elements.search.fire('input');check(()=>assert.equal(h.cards.length,0));await h.elements['clear-search'].fire('click');
 await h.elements['mode-quick'].fire('click');check(()=>assert.equal(api.state.mode,'quick'));check(()=>assert(!h.elements.main.innerHTML.includes('Hypothetical example')));check(()=>assert(h.elements.main.innerHTML.includes('When is it useful?')));
 h.cards[0].open=true;await h.elements['mode-detail'].fire('click');check(()=>assert(h.cards[0].open));
 await h.elements['mode-quick'].fire('click');await h.click({full:'rate',objective:'4'});check(()=>assert.equal(api.state.mode,'detail'));check(()=>assert(h.cards.find(c=>c.dataset.method==='rate').open));
 await h.elements['notes-toggle'].fire('click');check(()=>assert.equal(h.elements.notes.hidden,false));check(()=>assert.equal(h.elements['notes-toggle'].attrs['aria-expanded'],'true'));await h.elements['notes-toggle'].fire('click');check(()=>assert.equal(h.elements.notes.hidden,true));
 h.context.navigator.clipboard.writeText=async()=>{throw Error('clipboard unavailable');};check(()=>assert.equal(h.elements['mode-detail'].attrs['aria-pressed'],'true'));
 check(()=>assert.equal(api.esc('<script>"&'), '&lt;script&gt;&quot;&amp;'));
 assert(await api.copyText('fallback'));passed++;h.setFallback(false);assert(!(await api.copyText('fallback')));passed++;
 const blocked=harness(true);await blocked.elements['mode-quick'].fire('click');check(()=>assert.equal(blocked.window.__HUB_TEST_API__.state.mode,'quick'));
 for(const file of ['styles.css','content.js','variables.js','script.js'])check(()=>assert(fs.existsSync(path.join(dir,file))));
 check(()=>assert(!html.match(/<script[^>]+src="https?:/)));check(()=>assert(!fs.readFileSync(path.join(dir,'script.js'),'utf8').includes('fetch(')));
 const css=fs.readFileSync(path.join(dir,'styles.css'),'utf8');check(()=>assert(css.includes('@media(max-width:580px)')));check(()=>assert(css.includes('grid-template-columns:1fr')));check(()=>assert(css.includes(':focus-visible')));
 
 const schema=h.window.HUB_VARIABLES;check(()=>assert.equal(schema.variables.length,92));check(()=>assert.equal(schema.n,null));
 for(const m of Object.values(data.methods))check(()=>m.terms.forEach(t=>assert(data.glossary[t],t)));
 const baseline=require('./approved_objectives.json');
 data.objectives.forEach((o,i)=>check(()=>assert.deepEqual([o.title,o.short,o.approved],[baseline.objectives[i].title,baseline.objectives[i].short,baseline.objectives[i].approved])));
 await h.elements.home.fire('click');await h.elements['variables-tab'].fire('click');check(()=>assert.equal(h.variables.length,92));
 for(const o of data.objectives){await h.elements.main.fire('change',{target:{id:'variable-objective',value:String(o.id)}});check(()=>assert.equal(h.variables.length,schema.variables.filter(v=>v.objectives.includes(o.id)).length));check(()=>assert(h.elements.main.innerHTML.includes(api.esc(o.approved))));for(const b of data.bindings[String(o.id)])check(()=>assert(schema.variables.some(v=>v.name===b.name)));}
 await h.elements.main.fire('change',{target:{id:'variable-objective',value:'1'}});await h.elements.main.fire('change',{target:{id:'variable-role',value:'Main diagnostic predictor'}});check(()=>assert.equal(h.variables.length,2));
 await h.elements.main.fire('change',{target:{id:'variable-objective',value:'all'}});h.elements.search.value='anorexia';await h.elements.search.fire('input');check(()=>assert.equal(h.variables.length,2));check(()=>assert(h.elements.main.innerHTML.includes('completeness and category-validity counts are unavailable')));await h.elements['clear-search'].fire('click');
 await h.click({variable:'histology',objective:'1'});check(()=>assert(h.variables.find(v=>v.dataset.name==='histology').open));await h.elements['mode-quick'].fire('click');check(()=>assert(h.variables.find(v=>v.dataset.name==='histology').open));await h.elements['mode-detail'].fire('click');await h.click({focusMethod:'roc',objective:'1'});check(()=>assert(h.cards.find(c=>c.dataset.method==='roc').open));
 await h.click({review:'roc',objective:'1'});check(()=>assert(api.state.reviews.has('1:roc')));check(()=>assert.equal(h.elements['progress-bar'].value,1));check(()=>assert(h.cards.find(c=>c.dataset.method==='roc').open));
 const reload=harness(false,h.memory);check(()=>assert(reload.window.__HUB_TEST_API__.state.reviews.has('1:roc')));await h.click({review:'roc',objective:'1'});check(()=>assert(!api.state.reviews.has('1:roc')));
 for(const o of data.objectives)for(const m of o.methods){await h.click({open:String(o.id)});await h.click({review:m.id,objective:String(o.id)});}
 check(()=>assert.equal(api.state.reviews.size,34));check(()=>assert.equal(h.elements['progress-bar'].value,34));
 const corrupt=harness(false,new Map([['appendicitis-hub-reviewed','not-json']]));check(()=>assert.equal(corrupt.window.__HUB_TEST_API__.state.reviews.size,0));
 const poisoned=harness(false,new Map([['appendicitis-hub-reviewed',JSON.stringify(['1:roc','1:roc','999:fake'])]]));check(()=>assert.equal(poisoned.window.__HUB_TEST_API__.state.reviews.size,1));
 check(()=>assert(!h.elements.main.innerHTML.includes('What to tell the client')));check(()=>assert(!h.elements.main.innerHTML.includes('Copy client')));
 console.log(`${passed} assertions passed. DOM-stub logic tests, not a real browser or visual-layout test.`);
})().catch(e=>{console.error(e);process.exit(1);});
