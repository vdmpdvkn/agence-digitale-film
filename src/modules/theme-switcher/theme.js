import { refs } from '../refs';
export function toggleTheme() {
  const currentTheme = !document.body.classList.contains('dark')
    ? 'dark'
    : 'light';

  document.body.classList.toggle('dark');
  refs.switchThemeRef.classList.toggle('checked');
  localStorage.setItem('theme', currentTheme);
}
export function setSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    refs.switchThemeRef.classList.add('checked');
    return;
  }
  document.body.classList.remove('dark');
  refs.switchThemeRef.classList.remove('checked');
}
