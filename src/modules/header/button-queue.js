import { refs } from '../refs';
import {
  setStorage,
  getStorage,
  delFromStorage,
  clearStorage,
  getItemFromStorage,
} from '../localStorage/localStorage';

import renderMoviesList from '../html-render';

export function onClickButtonQueue() {
  refs.buttonRefQueue.classList.add('header-button__library--active');
  refs.buttonRefWatched.classList.remove('header-button__library--active');
  const queue = getStorage(refs.QUEUE);
  renderMoviesList(queue);
}
