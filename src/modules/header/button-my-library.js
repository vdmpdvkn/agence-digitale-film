import { refs } from '../refs';
import {
  setStorage,
  getStorage,
  delFromStorage,
  clearStorage,
  getItemFromStorage,
} from '../localStorage/localStorage';
import { renderFilmInfo } from '../film-info/renderFilmInfo';

export function onClickMyLibraryButton() {
  refs.divRefButtonLibrary.classList.add('header-logo__library--position');
  refs.buttonRefLibrary.classList.add('header-nav--active');
  refs.buttonRefHome.classList.remove('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'flex';
  // const watched = getStorage(refs.WATCHED);
  // renderFilmInfo(watched);
}
