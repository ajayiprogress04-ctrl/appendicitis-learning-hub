/* Shares only the public app address, never dataset links, tokens, filters or results. */
(()=>{'use strict';
 const copy=document.getElementById('copy-app-link'),share=document.getElementById('share-app-link'),status=document.getElementById('public-share-status'),fallback=document.getElementById('public-share-fallback'),field=document.getElementById('public-share-url');
 // Share the verified public production domain, even when opened on a protected preview.
 // Never include deployment-specific URLs, query parameters or private workspace state.
 function url(){return 'https://appendicitis-learning-hub.vercel.app/';}
 function manual(){fallback.hidden=false;field.value=url();field.focus();field.select();status.textContent='Select and copy the app link below.';}
 async function copyLink(){try{if(!navigator.clipboard?.writeText)return manual();await navigator.clipboard.writeText(url());fallback.hidden=true;status.textContent='App link copied.';}catch{manual();}}
 copy?.addEventListener('click',copyLink);
 share?.addEventListener('click',async()=>{if(!navigator.share)return copyLink();share.disabled=true;try{await navigator.share({title:'Appendicitis Research | Statistical Learning Hub',text:'Explore appendicitis research, statistical methods and scientific reporting.',url:url()});status.textContent='Sharing request completed.';}catch(e){if(e.name==='AbortError')status.textContent='Sharing cancelled.';else manual();}finally{share.disabled=false;}});
})();
