// Countdown (läuft nur, wenn #countdown existiert)
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

// Mini-I18N
const i18n = { /* ... dein bestehendes Objekt ... */ };
let lang = 'de';
function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    el.textContent = (i18n[lang] && i18n[lang][k]) || el.textContent;
  });
}
applyLang();
document.addEventListener('click', (e)=>{
  if (e.target && e.target.id === 'langToggle') {
    lang = lang === 'de' ? 'en' : 'de';
    applyLang();
  }
});