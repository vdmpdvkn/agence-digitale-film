import Pagination from 'tui-pagination';
import { refs } from '../refs';
import fetchApi from '../api-service';
import renderMoviesList from '../html-render';

import { getStorage, getStorageLength } from '../localStorage/localStorage';

export function paginationFunc(total_results, fetch_refs, pagination) {
  if (pagination) {
    pagination.reset();
  }

  const paginationParams = {
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 3,
    currentPage: 1,
    centerAlign: true,
  };

  refs.paginationRef.style.display =
    total_results <= paginationParams.itemsPerPage ? 'none' : 'block';

  pagination = new Pagination(refs.paginationRef, paginationParams);

  pagination.on('afterMove', eventData => {
    paginationParams.currentPage = eventData.page;
    performMovieSearch({ ...fetch_refs, page: paginationParams.currentPage });
  });
}

export function paginationStorage(ref, pagination) {
  if (pagination) {
    pagination.reset();
  }
  pagination = new Pagination(refs.paginationRef, {
    totalItems: getStorageLength(ref),
    itemsPerPage: 5,
    visiblePages: 3,
    currentPage: 1,
    centerAlign: true,
  });

  refs.paginationRef.style.display =
    getStorageLength(ref) <= pagination._options.itemsPerPage ? 'none' : 'block';

  pagination.on('afterMove', eventData => {
    const page = eventData.page;

    const queue = getStorage(ref, {
      page,
      perPage: 5,
    });
    renderMoviesList(queue);
  });

  const queue = getStorage(ref, { page: 1, perPage: 5 });
  renderMoviesList(queue);
}

function performMovieSearch(fetch_refs) {
  fetchApi(fetch_refs)
    .then(data => {
      renderMoviesList(data.results);
    })
    .catch(error => {
      console.error('Error performing movie search:', error);
    });
}
