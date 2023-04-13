import { refs } from './refs';

refs.buttonRefLibrary.addEventListener('click', onClickMyLibraryButton);

export function onClickMyLibraryButton() {
  refs.divRefButtonLibrary.classList.add('header-logo__library--position');
  refs.buttonRefLibrary.classList.add('header-nav--active');
  refs.buttonRefHome.classList.remove('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'flex';
}
