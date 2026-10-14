/* Navigation UI preference only. Never reads or resets research state. */
(()=>{
 'use strict';
 const body=document.body,panel=document.getElementById('navigation-sidebar'),toggle=document.getElementById('sidebar-toggle'),close=document.getElementById('sidebar-close'),backdrop=document.getElementById('sidebar-backdrop');
 const mobile=window.matchMedia('(max-width:75rem)');let opened=false;
 const key=()=>mobile.matches?'appendicitis-hub-sidebar-mobile':'appendicitis-hub-sidebar-desktop';
 function preference(){try{const v=localStorage.getItem(key());return v===null?!mobile.matches:v==='open';}catch{return !mobile.matches;}}
 function layout(){const height=document.querySelector('.topbar')?.getBoundingClientRect().height||56;body.style.setProperty('--navigation-top',height+'px');}
 function setOpen(value,{persist=true,focus=false}={}){opened=Boolean(value);body.classList.toggle('sidebar-expanded',opened);body.classList.toggle('sidebar-collapsed',!opened);body.classList.toggle('nav-drawer-open',mobile.matches&&opened);panel.inert=!opened;panel.setAttribute('aria-hidden',String(!opened));toggle.setAttribute('aria-expanded',String(opened));const label=opened?'Close navigation':'Open navigation';toggle.setAttribute('aria-label',label);toggle.title=label;backdrop.hidden=!(mobile.matches&&opened);panel.setAttribute('role',mobile.matches&&opened?'dialog':'navigation');if(mobile.matches&&opened)panel.setAttribute('aria-modal','true');else panel.removeAttribute('aria-modal');if(persist)try{localStorage.setItem(key(),opened?'open':'closed');}catch{}if(focus){if(opened&&mobile.matches)close.focus();else if(!opened)toggle.focus();}layout();}
 toggle.addEventListener('click',()=>setOpen(!opened,{focus:true}));close.addEventListener('click',()=>setOpen(false,{focus:true}));backdrop.addEventListener('click',()=>setOpen(false,{focus:true}));
 document.addEventListener('keydown',event=>{if(!opened)return;if(event.key==='Escape'){event.preventDefault();setOpen(false,{focus:true});return;}if(event.key==='Tab'&&mobile.matches){const controls=[toggle,...panel.querySelectorAll('button:not(:disabled),a[href]')],i=controls.indexOf(document.activeElement);if(event.shiftKey&&(i<=0)){event.preventDefault();controls.at(-1)?.focus();}else if(!event.shiftKey&&(i===controls.length-1||i<0)){event.preventDefault();controls[0]?.focus();}}});
 panel.addEventListener('click',event=>{if(mobile.matches&&event.target.closest('[data-side-target],[data-side-analysis],[data-side-about]'))setOpen(false,{focus:false});});
 const changed=()=>setOpen(preference(),{persist:false});if(mobile.addEventListener)mobile.addEventListener('change',changed);else mobile.addListener(changed);
 window.addEventListener('resize',layout);if(window.ResizeObserver)new ResizeObserver(layout).observe(document.querySelector('.topbar'));
 setOpen(preference(),{persist:false});
 window.HUB_SIDEBAR={setOpen,isOpen:()=>opened};
 if(window.__HUB_TEST__)window.__SIDEBAR_TEST__={setOpen,isOpen:()=>opened,preference};
})();
