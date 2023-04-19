import { refs } from '../refs';
import { paginationStorage } from '../pagination/pagination';

let paginationQueue;

export function onClickButtonQueue() {
  refs.buttonRefQueue.classList.add('header-button__library--active');
  refs.buttonRefWatched.classList.remove('header-button__library--active');
  paginationStorage(refs.QUEUE, paginationQueue);
}
