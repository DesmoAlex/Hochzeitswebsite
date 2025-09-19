async function include(selector, url) {
    const mount = document.querySelector(selector);
    if (!mount) return;
    const res = await fetch(url, { cache: "no-cache" });
    mount.outerHTML = await res.text();
}

function markActiveNav() {
    const here = location.pathname.replace(/\/$/, "/index.html");
    document.querySelectorAll('nav a.tab').forEach(a => {
      if (a.getAttribute('href') === here) a.setAttribute('aria-selected', 'true');
    });
  }
  
include("#site-header", "/components/header.html").then(() => {
    // Sprache anwenden, wenn definiert
    if (window.applyLang) applyLang();
    // aktiven Link markieren
    markActiveNav();
  });

include("#site-footer", "/components/footer.html").then(() => {
    const y = document.querySelector("#year");
    if (y) y.textContent = new Date().getFullYear();
  });