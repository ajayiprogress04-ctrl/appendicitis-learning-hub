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
  get innerHTML(){return this.html||'';} getAttribute(k){return this.attrs[k]??null;} querySelectorAll(){return [];} click(){return this.fire('click');}
  setAttribute(k,v){this.attrs[k]=v;}
  addEventListener(n,f){const prior=this.listeners[n];this.listeners[n]=prior?async e=>{await prior(e);await f(e);}:f;}
  async fire(n,e={}){return this.listeners[n]?.({target:this,...e});}
  focus(){this.focused=true;}scrollIntoView(){this.scrolled=true;}select(){this.selected=true;}remove(){this.removed=true;}closest(){return this;}
 }
 for(const id of ids)elements[id]=new El(id);
 elements.notes.hidden=true;
 const document={getElementById:id=>{if(id==='results-status'&&!elements[id])elements[id]=new El(id);assert(elements[id],`Missing DOM id ${id}`);return elements[id];},querySelectorAll:selector=>selector.includes('.variable-card')?variables.filter(v=>v.open):cards.filter(c=>c.open),querySelector:selector=>{const m=selector.match(/data-method="([^"]+)".*data-context="([^"]+)"/);if(m)return cards.find(c=>c.dataset.method===m[1]&&c.dataset.context===m[2]);const v=selector.match(/data-name="([^"]+)"/);if(v)return variables.find(e=>e.dataset.name===v[1]);if(selector.startsWith("button[data-review"))return new El();return null;},createElement:()=>new El(),body:{appendChild(){}},execCommand:()=>fallback};
 document.body.classList={add(){},remove(){},toggle(){}}; const originalQuery=document.querySelectorAll;document.querySelectorAll=selector=>selector.startsWith('[data-side-')?[]:originalQuery(selector);
 const window={__HUB_TEST__:true,isSecureContext:true};const storage={getItem:key=>{if(blockedStorage)throw Error('blocked');return memory.get(key)||null;},setItem:(key,value)=>{if(blockedStorage)throw Error('blocked');memory.set(key,value);}};
 const downloadedBlobs=[];
 const context=vm.createContext({Blob,URL:{createObjectURL:blob=>{downloadedBlobs.push(blob);return 'blob:test';},revokeObjectURL(){}},window,document,localStorage:storage,navigator:{clipboard:{writeText:async text=>{copied=text;}}},setTimeout:()=>1,clearTimeout(){}});
 vm.runInContext(fs.readFileSync(path.join(dir,'content.js'),'utf8'),context);
 vm.runInContext(fs.readFileSync(path.join(dir,'variables.js'),'utf8'),context);
 vm.runInContext(fs.readFileSync(path.join(dir,'script.js'),'utf8'),context);
 vm.runInContext(fs.readFileSync(path.join(dir,'workspace.js'),'utf8'),context);
 return {context,window,document,elements,memory,downloadedBlobs,get cards(){return cards;},get variables(){return variables;},get copied(){return copied;},setFallback:v=>{fallback=v;},click:async data=>{const b=new El();b.dataset=data;await elements.main.fire('click',{target:b});return b;}};
}
module.exports=harness;
