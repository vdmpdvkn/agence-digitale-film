import { refs } from '../refs';
import { startingRender } from '../starting-fetch/starting-fetch';

export function onClickHomeButton() {
  refs.divRefButtonLibrary.classList.remove('header-logo__library--position');
  refs.buttonRefLibrary.classList.remove('header-nav--active');
  refs.buttonRefHome.classList.add('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'none';
  startingRender();
}
