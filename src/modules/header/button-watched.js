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

export function onClickButtonWatched() {
  refs.buttonRefWatched.classList.add('header-button__library--active');
  console.log(refs.buttonRefWatched);
  refs.buttonRefQueue.classList.remove('header-button__library--active');
  const watched = getStorage(refs.WATCHED);
  renderMoviesList(watched);

  const pagination = new Pagination(refs.paginationRef, {
    totalItems: getStorageLength(refs.WATCHED),
    itemsPerPage: 5,
    visiblePages: 5,
    currentPage: 1,
    centerAlign: true,
  });

  pagination.on('afterMove', eventData => {
    const page = eventData.page;

    const queue = getStorage(refs.WATCHED, {
      page,
      perPage: 5,
    });
    renderMoviesList(queue);
  });

  const queue = getStorage(refs.WATCHED, { page: 1, perPage: 5 });
  renderMoviesList(watched);
}
