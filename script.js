(() => {
  const toggle = document.getElementById('languageToggle');
  const label = document.getElementById('languageLabel');
  const translatable = document.querySelectorAll('[data-en][data-zh]');
  const year = document.getElementById('year');

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    translatable.forEach((el) => {
      el.textContent = el.dataset[lang];
    });
    label.textContent = lang === 'en' ? '中文' : 'English';
    toggle.setAttribute(
      'aria-label',
      lang === 'en' ? '切换到中文' : 'Switch to English'
    );
    document.title = lang === 'en' ? 'Zhibin Tan | 谭志斌' : '谭志斌 | Zhibin Tan';
    try {
      localStorage.setItem('zhibin-language', lang);
    } catch (_) {}
  };

  // English is the default on first visit; a returning visitor's explicit choice is remembered.
  let initial = 'en';
  try {
    const saved = localStorage.getItem('zhibin-language');
    if (saved === 'zh' || saved === 'en') initial = saved;
  } catch (_) {}

  setLanguage(initial);

  toggle.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en');
  });

  if (year) year.textContent = new Date().getFullYear();
})();