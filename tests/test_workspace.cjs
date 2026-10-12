const fs=require('fs'),path=require('path'),assert=require('assert');const harness=require('./dom_harness.cjs');
(async()=>{const h=harness(),api=h.window.__WORKSPACE_TEST__,root=h.elements['analysis-workspace'];const file=process.argv[2];if(!file)throw Error('Pass locally generated aggregate results JSON for integration checks');const data=JSON.parse(fs.readFileSync(file,'utf8'));let count=0;function test(fn){fn();count++;}
 await h.elements['analysis-tab'].fire('click');test(()=>assert(!root.hidden));test(()=>assert(root.innerHTML.includes('From question to evidence')));test(()=>assert(root.innerHTML.includes('No sample findings')));
 api.load(data);test(()=>assert.equal(api.getBundle().records,85));
 async function click(dataset){await root.fire('click',{target:{closest:()=>({dataset})}});}
 await click({analysis:'costs'});test(()=>assert(root.innerHTML.includes('Mann–Whitney U')));test(()=>assert(root.innerHTML.includes('69')));test(()=>assert(root.innerHTML.includes('95% interval')));test(()=>assert(root.innerHTML.includes('<svg')));test(()=>assert(root.innerHTML.includes('observational comparison')));
 await click({analysis:'diagnostics'});test(()=>assert(root.innerHTML.includes('Leave-one-out')));test(()=>assert(root.innerHTML.includes('0.810')));test(()=>assert(root.innerHTML.includes('Highest point estimates')));test(()=>assert(root.innerHTML.includes('Calibration')||root.innerHTML.includes('calibration')));test(()=>assert(root.innerHTML.includes('TP / TN / FP / FN')));
 await root.fire('change',{target:{id:'diagnostic-evaluation',value:'models',dataset:{}}});test(()=>assert(!root.innerHTML.includes('data-strategy="AIR"')));test(()=>assert(root.innerHTML.includes('data-strategy="model_AIR"')));
 await root.fire('change',{target:{id:'',dataset:{strategy:'model_MAS_CRP'},checked:false}});test(()=>assert(!root.innerHTML.includes('MAS + hsCRP model · AUC'))); // Checkbox changes execute without losing results.
 await click({analysis:'associations'});test(()=>assert(root.innerHTML.includes('Spearman')));test(()=>assert(root.innerHTML.includes('Holm')));test(()=>assert(root.innerHTML.includes('Quantile-cell centres')));
 await root.fire('change',{target:{id:'association-pair',value:'3',dataset:{}}});test(()=>assert(root.innerHTML.includes('n=85')));
 await h.elements['variables-tab'].fire('click');test(()=>assert(root.hidden));test(()=>assert(h.elements.main.innerHTML.includes('HISTOLOGY_SEVERITY')));
 await h.elements['theme-toggle'].fire('click');test(()=>assert.equal(h.elements['theme-toggle'].getAttribute('aria-pressed'),'true'));
 test(()=>assert.throws(()=>api.validate({schema_version:1,contains_patient_rows:true})));const bad=structuredClone(data);bad.diagnostics.strategies[0].roc=[[2,0]];test(()=>assert.throws(()=>api.validate(bad)));
 api.open('data');await root.fire('change',{target:{id:'results-file',files:[{size:5,text:async()=>'{bad'}],dataset:{}}});test(()=>assert(root.innerHTML.includes('Could not load file')));test(()=>assert.equal(api.getBundle().records,85));
 for(const kind of ['costs','diagnostics','associations']){api.exportCsv(kind);const csv=await h.downloadedBlobs.at(-1).text();test(()=>assert(csv.includes(kind==='costs'?'mean_difference_NGN':kind==='diagnostics'?'sensitivity_CI_low':'Group comparison')));}
 await click({action:'unload'});test(()=>assert.equal(api.getBundle(),null));test(()=>assert(root.innerHTML.includes('removed from memory')));
 console.log(`${count} workspace integration assertions passed; DOM-stub checks, not real-browser visual QA.`);
})().catch(e=>{console.error(e);process.exit(1);});
