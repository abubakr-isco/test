// Год в подвале сайта
document.getElementById('year').textContent = new Date().getFullYear();

// Переключение светлой/тёмной темы с запоминанием выбора
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function applySavedTheme(){
  try{
    const saved = localStorage.getItem('theme');
    if(saved === 'dark' || saved === 'light'){
      root.setAttribute('data-theme', saved);
      toggle.textContent = saved === 'dark' ? '☀️' : '🌙';
    }
  }catch(e){
    // localStorage может быть недоступен — просто используем тему системы
  }
}

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  toggle.textContent = next === 'dark' ? '☀️' : '🌙';
  try{ localStorage.setItem('theme', next); }catch(e){}
});

applySavedTheme();
