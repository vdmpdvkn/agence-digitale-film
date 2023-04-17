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

export function onClickMyLibraryButton() {
  refs.divRefButtonLibrary.classList.add('header-logo__library--position');
  refs.buttonRefLibrary.classList.add('header-nav--active');
  refs.buttonRefHome.classList.remove('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'flex';

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
