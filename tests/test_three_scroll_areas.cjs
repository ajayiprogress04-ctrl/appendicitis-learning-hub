const assert=require('assert'),p=require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES?process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES+'/playwright-core':'playwright-core');
(async()=>{const server=require('child_process').spawn('python',['-m','http.server','8097','--directory',require('path').resolve(__dirname,'..')],{stdio:'ignore'});await new Promise(r=>setTimeout(r,300));const browser=await p.chromium.launch({executablePath:process.env.HUB_CHROMIUM_PATH,headless:true,args:['--no-sandbox']});try{for(const size of [{width:1440,height:900},{width:390,height:844}]){const page=await browser.newPage({viewport:size,hasTouch:size.width===390,isMobile:size.width===390});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.addInitScript(()=>window.__HUB_TEST__=true);await page.goto('http://127.0.0.1:8097');await page.waitForFunction(()=>window.__CATALOG_TEST__);await page.evaluate(async()=>{const a=window.__CATALOG_TEST__;await a.load({schema:'appendicitis-private-rows-v1',records:Array.from({length:36},(_,i)=>({diagnostic_confi1:i%5+1,diagnostic_confi2:(i+1)%5+1}))});a.open('5');const es=['conf_distribution','conf_bars'].map(k=>RESULT_CATALOG.entries.find(e=>e.key===k));for(const e of es){await a.generate(e);a.state.selected.add(e.id);}a.state.preview=es[0].id;a.render();});await page.waitForTimeout(100);
 // Three independent areas are tested in ordinary page mode; explicit focus is panel-only.
 if(await page.locator('.result-workspace').evaluate(e=>e.classList.contains('list-collapsed')))await page.locator('[data-result-layout="toggle"]').click();const left=page.locator('.result-catalogue'),right=page.locator('.catalog-preview');
 await page.evaluate(()=>{const a=__CATALOG_TEST__,e=RESULT_CATALOG.entries.find(e=>e.key==='conf_distribution'),r=a.state.completed.get(e.id);r.interpretation='Synthetic lengthy interpretation layout fixture. '.repeat(220);r.rows=Array.from({length:120},(_,i)=>['Synthetic row '+i,...r.rows[0].slice(1)]);a.render();});
 await left.scrollIntoViewIfNeeded();await left.evaluate(e=>e.scrollTop=0);await right.evaluate(e=>e.scrollTop=180);
 const rb=await right.evaluate(e=>e.scrollTop);await left.hover();await page.mouse.wheel(0,400);await page.waitForTimeout(150);const la=await left.evaluate(e=>e.scrollTop);assert(la>0);assert.equal(await right.evaluate(e=>e.scrollTop),rb);
 await right.scrollIntoViewIfNeeded();const lb=await left.evaluate(e=>e.scrollTop);const rbox=await right.boundingBox();await page.mouse.move(rbox.x+rbox.width-8,rbox.y+rbox.height-20);await page.mouse.wheel(0,400);await page.waitForTimeout(150);assert((await right.evaluate(e=>e.scrollTop))>rb);assert.equal(await left.evaluate(e=>e.scrollTop),lb);

 // Document scrollbar remains intentional and reachable, even in Focus Workspace.
 const positions=()=>page.evaluate(()=>({page:scrollY,left:document.querySelector('.result-catalogue').scrollTop,right:document.querySelector('.catalog-preview').scrollTop}));
 let beforePage=await positions();
 await page.mouse.move(size.width-2,size.height/2);await page.mouse.wheel(0,240);await page.waitForTimeout(150);
 let afterPage=await positions();assert(afterPage.page>beforePage.page,'document wheel must scroll the page');assert.equal(afterPage.left,beforePage.left);assert.equal(afterPage.right,beforePage.right);
 await page.locator('.result-workspace').evaluate(e=>e.scrollIntoView({block:'start'}));
 for(const panel of [left,right]){
  await panel.evaluate(e=>e.scrollTop=e.scrollHeight);const prior=await positions();const box=await panel.boundingBox();
  await page.mouse.move(box.x+box.width-8,Math.min(size.height-10,box.y+box.height-20));await page.mouse.wheel(0,450);await page.waitForTimeout(150);
  const next=await positions();for(const key of ['page','left','right'])assert(Math.abs(next[key]-prior[key])<=1,'boundary must not chain: '+key);
  await panel.evaluate(e=>e.scrollTop=0);await panel.focus();const keyboardBefore=await positions();await page.keyboard.press('PageDown');await page.waitForTimeout(250);const keyboardAfter=await positions();assert.equal(keyboardAfter.page,keyboardBefore.page);assert(keyboardAfter[panel===left?'left':'right']>0,'focused region keyboard scrolling');
 }
 for(const theme of ['light','dark','colored']){await page.locator('#theme-toggle').selectOption(theme);assert(await page.evaluate(()=>getComputedStyle(document.body).overflowY!=='hidden'&&document.scrollingElement.scrollHeight>innerHeight));}

 if(size.width===390){
  const cdp=await page.context().newCDPSession(page);
  await page.locator('.result-workspace').evaluate(e=>e.scrollIntoView({block:'start'}));
  for(const panel of [left,right]){await panel.evaluate(e=>e.scrollTop=0);const prior=await positions(),box=await panel.boundingBox();
   const x=Math.round(box.x+box.width-12),y=Math.round(panel===left?Math.min(size.height-60,box.y+box.height-70):box.y+120);
   await cdp.send('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:1});
   await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});
   for(let i=1;i<=10;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x,y:y-i*(panel===left?15:7)}]});await page.waitForTimeout(25);}
   await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await page.waitForTimeout(300);
   const next=await positions();assert(next[panel===left?'left':'right']>prior[panel===left?'left':'right'],'touch scroll region '+(panel===left?'left':'right')+' '+JSON.stringify({prior,next,box}));assert.equal(next.page,prior.page);assert.equal(next[panel===left?'right':'left'],prior[panel===left?'right':'left']);
  }
  await cdp.detach();
 }
 const selected=await page.evaluate(()=>__CATALOG_TEST__.state.preview);await page.locator('[data-result-layout="toggle"]').click();await page.locator('[data-result-layout="toggle"]').click();assert.equal(await page.evaluate(()=>__CATALOG_TEST__.state.preview),selected);
 const before=await page.evaluate(()=>({l:document.querySelector('.result-catalogue').scrollTop,r:document.querySelector('.catalog-preview').scrollTop,selected:__CATALOG_TEST__.state.preview}));await page.evaluate(()=>{const a=__CATALOG_TEST__;const e=RESULT_CATALOG.entries.find(e=>e.key==='conf_distribution');a.moveResult(e.id,1,'selected');});await page.waitForTimeout(100);const after=await page.evaluate(()=>({l:document.querySelector('.result-catalogue').scrollTop,r:document.querySelector('.catalog-preview').scrollTop,selected:__CATALOG_TEST__.state.preview}));assert.equal(after.selected,before.selected);
 // Numbering changes the rendered caption; the new preview retains its independent offset.
 assert.equal(after.r,before.r);assert.equal(after.l,before.l);
 await page.evaluate(()=>{const input=document.querySelector('.catalog-item input[data-title]');input.value='Unsaved title draft';const right=document.querySelector('.catalog-preview');right.dataset.identity='retained';__CATALOG_TEST__.render();});await page.waitForTimeout(50);assert.equal(await page.locator('.catalog-item input[data-title]').first().inputValue(),'Unsaved title draft');
 await page.evaluate(()=>{const a=__CATALOG_TEST__;a.state.preview=RESULT_CATALOG.entries.find(e=>e.key==='conf_bars').id;a.render();});assert(await right.locator('svg').count()>0);await page.evaluate(()=>{const panel=document.querySelector('.catalog-preview'),svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('height','1400');svg.setAttribute('width','200');svg.setAttribute('viewBox','0 0 200 1400');svg.setAttribute('aria-label','Synthetic tall-figure layout fixture');panel.append(svg);panel.scrollTop=panel.scrollHeight;});assert(await right.evaluate(e=>e.scrollHeight>e.clientHeight&&e.scrollTop>0));await page.evaluate(()=>{const a=__CATALOG_TEST__;a.state.preview=RESULT_CATALOG.entries.find(e=>e.key==='conf_distribution').id;a.render();});
 assert(await right.locator('table').count()>0);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.equal(errors.length,0,errors.join('\n'));
 console.log(size.width+'px: actual wheel scrolling independent; reorder retains both offsets/selection; drafts survive render; table/figure selection and horizontal overflow checks passed.');await page.close();}}finally{await browser.close();server.kill();}})().catch(e=>{console.error(e);process.exit(1)});
