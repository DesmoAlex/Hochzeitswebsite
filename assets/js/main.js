// Tabs & Sichtbarkeiten
const tabs = document.querySelectorAll('.tab[data-target]');
const sections = ['#start','#beispiel','#kontakt'].map(id=>document.querySelector(id));
function show(id){
  sections.forEach(s=>s.classList.toggle('hidden', '#'+s.id!==id));
  tabs.forEach(t=>t.setAttribute('aria-selected', t.dataset.target===id));
  // Nur auf Start die start-only Sections einblenden
  document.querySelectorAll('.start-only').forEach(el=>{
    el.classList.toggle('hidden', id!=='#start');
  });
}
tabs.forEach(t=>t.addEventListener('click',()=>show(t.dataset.target)));

// Countdown (Demo)
const date = new Date('2026-07-12T13:00:00');
function tick(){
  const el=document.getElementById('countdown'); if(!el) return;
  const d=date - new Date(); if(d<=0){el.textContent='Heute ist es so weit!';return}
  const days=Math.floor(d/86400000),hrs=Math.floor(d%86400000/3600000),mins=Math.floor(d%3600000/60000);
  el.textContent=`Countdown: ${days}d ${hrs}h ${mins}m`;
}
setInterval(tick, 30000); tick();

// Mini-I18N (rudimentär; Ausbau später)
const i18n = { de:{
  hero_title:'Die papierlose Einladung für euren schönsten Tag.',
  hero_lead:'Versendet eine stilvolle Website statt Papier: mit RSVP-Formular, Tagesablauf, Locations, Fotogalerie & mehr – mobiloptimiert, schnell und mehrsprachig.',
  cta_demo:'Beispiel ansehen', cta_offer:'Angebot anfragen',
  badge_gallery:'Fotogalerie & Upload', badge_languages:'Mehrsprachig', badge_fast:'Schnell & mobil', badge_domain:'Individuelle Subdomain',
  kpi_paper:'Papier sparen', kpi_paper_sub:'Einladung, Infos & Dankesmail digital',
  kpi_rsvp:'Schnelle Rückmeldungen', kpi_rsvp_sub:'Gäste sagen direkt per Formular zu',
  kpi_gallery:'Alle Fotos an einem Ort', kpi_gallery_sub:'Dropbox/Drive-Anbindung möglich',
  offer_title:'Was eure Seite kann'
}, en:{
  hero_title:'The paperless invitation for your big day.',
  hero_lead:'Send a beautiful website instead of paper: RSVP, schedule, venues, photo gallery & more – mobile-optimized, fast, multilingual.',
  cta_demo:'View example', cta_offer:'Request offer',
  badge_gallery:'Photo gallery & uploads', badge_languages:'Multilingual', badge_fast:'Fast & mobile', badge_domain:'Custom subdomain',
  kpi_paper:'Save paper', kpi_paper_sub:'Invites, info & thank-you emails go digital',
  kpi_rsvp:'Fast RSVPs', kpi_rsvp_sub:'Guests confirm via form',
  kpi_gallery:'All photos in one place', kpi_gallery_sub:'Dropbox/Drive supported',
  offer_title:'What your site provides'
}};
let lang='de';
function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n'); el.textContent=(i18n[lang]&&i18n[lang][k])||el.textContent;
  })
}
applyLang();
document.getElementById('langToggle').addEventListener('click',()=>{lang=lang==='de'?'en':'de';applyLang();});
document.getElementById('year').textContent=new Date().getFullYear();

// Initialzustand
show('#start');