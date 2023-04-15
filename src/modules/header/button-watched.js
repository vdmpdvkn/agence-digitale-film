import { refs } from '../refs';
import {
  setStorage,
  getStorage,
  delFromStorage,
  clearStorage,
  getItemFromStorage,
} from '../localStorage/localStorage';

import renderMoviesList from '../html-render';

export function onClickButtonWatched() {
  refs.buttonRefWatched.classList.add('header-button__library--active');
  console.log(refs.buttonRefWatched);
  refs.buttonRefQueue.classList.remove('header-button__library--active');
  const watched = getStorage(refs.WATCHED);
  renderMoviesList(watched);
}
