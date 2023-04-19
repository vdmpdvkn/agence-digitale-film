import { refs } from '../refs';
import { paginationStorage } from '../pagination/pagination';
import { onClickButtonWatched, onClickButtonQueue } from './button-home';
let paginationMyLibrary;

export function onClickMyLibraryButton() {
  refs.divRefButtonLibrary.classList.add('header-logo__library--position');
  refs.buttonRefLibrary.classList.add('header-nav--active');
  refs.buttonRefHome.classList.remove('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'flex';
  paginationStorage(refs.QUEUE, paginationMyLibrary);
}
