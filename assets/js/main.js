// --- I18N dictionary (lass deinen bisherigen Inhalt) ---
const i18n = { /* ... wie gehabt ... */ };

// Sprache aus localStorage lesen (Fallback 'de')
let lang = localStorage.getItem('lang') || 'de';

function applyLang(){
  // wende Übersetzungen auf alle data-i18n Elemente an
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    const v = (i18n[lang] && i18n[lang][k]);
    if (v) el.textContent = v;
  });
}

function setLang(next){
  lang = next;
  localStorage.setItem('lang', lang);
  applyLang();
}

// globaler Click-Handler: Header wird dynamisch geladen, daher delegieren
document.addEventListener('click', (e)=>{
  if (e.target && e.target.id === 'langToggle') {
    setLang(lang === 'de' ? 'en' : 'de');
  }
});

// initial anwenden
applyLang();

// --- Countdown (läuft nur, wenn #countdown existiert) ---
const weddingDate = new Date('2026-07-12T13:00:00');
function tick(){
  const el = document.getElementById('countdown');
  if (!el) return;
  const d = weddingDate - new Date();
  if (d <= 0) { el.textContent = 'Heute ist es so weit!'; return; }
  const days = Math.floor(d/86400000),
        hrs  = Math.floor(d%86400000/3600000),
        mins = Math.floor(d%3600000/60000);
  el.textContent = `Countdown: ${days}d ${hrs}h ${mins}m`;
}
setInterval(tick, 30000); tick();
