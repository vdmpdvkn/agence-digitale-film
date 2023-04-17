import { refs } from '../refs';
import {
  setStorage,
  getStorage,
  delFromStorage,
  clearStorage,
  getItemFromStorage,
  getStorageLength,
} from '../localStorage/localStorage';

import renderMoviesList from '../html-render';

import Pagination from 'tui-pagination';

export function onClickButtonQueue() {
  refs.buttonRefQueue.classList.add('header-button__library--active');
  refs.buttonRefWatched.classList.remove('header-button__library--active');
  const pagination = new Pagination(refs.paginationRef, {
    totalItems: getStorageLength(refs.QUEUE),
    itemsPerPage: 5,
    visiblePages: 5,
    currentPage: 1,
    centerAlign: true,
  });

  pagination.on('afterMove', eventData => {
    const page = eventData.page;

    const queue = getStorage(refs.QUEUE, {
      page,
      perPage: 5,
    });
    renderMoviesList(queue);
  });

  const queue = getStorage(refs.QUEUE, { page: 1, perPage: 5 });
  renderMoviesList(queue);
}
