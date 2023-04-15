import { refs } from '../refs';
import {
  setStorage,
  getStorage,
  delFromStorage,
  clearStorage,
  getItemFromStorage,
} from '../localStorage/localStorage';

import renderMoviesList from '../html-render';

export function onClickMyLibraryButton() {
  refs.divRefButtonLibrary.classList.add('header-logo__library--position');
  refs.buttonRefLibrary.classList.add('header-nav--active');
  refs.buttonRefHome.classList.remove('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'flex';
  const queue = getStorage(refs.QUEUE);
  renderMoviesList(queue);
}
