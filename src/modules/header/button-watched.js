import { refs } from '../refs';
import { paginationStorage } from '../pagination/pagination';

let paginationWatched;

export function onClickButtonWatched() {
  refs.buttonRefWatched.classList.add('header-button__library--active');
  refs.buttonRefQueue.classList.remove('header-button__library--active');
  paginationStorage(refs.WATCHED, paginationWatched);
}
