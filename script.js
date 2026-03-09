const SUPPORTED_LANGS = ['sk', 'en', 'cs'];
let currentLang = 'sk';
let T = {};

function detectLang() {
  const saved = localStorage.getItem('tomenu_lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const browser = (navigator.language || 'sk').toLowerCase();
  if (browser.startsWith('cs')) return 'cs';
  if (browser.startsWith('en')) return 'en';
  return 'sk';
}

async function loadLang(lang) {
  try {
    const res = await fetch(`locales/${lang}.json`);
    if (!res.ok) throw new Error();
    T = await res.json();
    currentLang = lang;
    localStorage.setItem('tomenu_lang', lang);
  } catch {
    if (lang !== 'sk') {
      const res = await fetch('locales/sk.json');
      T = await res.json();
      currentLang = 'sk';
    }
  }
}

function t(key) { return T[key] ?? key; }

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.documentElement.lang = currentLang;
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang.toUpperCase();
}

async function toggleLang() {
  const cycle = { sk: 'en', en: 'cs', cs: 'sk' };
  await loadLang(cycle[currentLang] || 'sk');
  applyTranslations();
}

(async () => {
  currentLang = detectLang();
  await loadLang(currentLang);
  applyTranslations();
})();