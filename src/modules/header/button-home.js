import { refs } from '../refs';

export function onClickHomeButton() {
  refs.divRefButtonLibrary.classList.remove('header-logo__library--position');
  refs.buttonRefLibrary.classList.remove('header-nav--active');
  refs.buttonRefHome.classList.add('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'none';
}
