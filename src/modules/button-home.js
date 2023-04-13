import { refs } from './refs';

refs.buttonRefHome.addEventListener('click', onClickHomeButton);

export function onClickHomeButton() {
  refs.divRefButtonLibrary.classList.remove('header-logo__library--position');
  refs.buttonRefLibrary.classList.remove('header-nav--active');
  refs.buttonRefHome.classList.toggle('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'none';
}
