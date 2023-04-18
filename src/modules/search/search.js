import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';

import { paginationFunc } from '../pagination/pagination';
import { onClickHomeButton } from '../header/button-home';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function errorSearch() {
  refs.alertMessage.style.display = 'none';
}

let paginationSearch;

export async function fetchFilmOnSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.film.value.trim();
  refs.divRefButtonLibrary.classList.remove('header-logo__library--position');
  refs.buttonRefLibrary.classList.remove('header-nav--active');
  refs.buttonRefHome.classList.add('header-nav--active');
  refs.divRefWatchedQueue.style.display = 'none';
  Loading.hourglass('Loading...', {
    svgColor: '#b92f2c',
  });
  const data = await fetchApi({
    param: apiRefs.SEARCH,
    page: 1,
    query: searchQuery,
  });
  const dataEl = data.total_results;
  Loading.remove();

  if (searchQuery === '') {
    refs.alertMessage.textContent =
      'Searching starts after providing data to search!';
    refs.alertMessage.style.display = 'flex';
    return;
  }
  if (dataEl === 0) {
    refs.alertMessage.textContent =
      'Search result not successful. Enter the correct movie name!';
    refs.alertMessage.style.display = 'flex';
    renderMoviesList(data.results);
    return;
  } else {
    // refs.alertMessage.textContent = 'Successful!';
    // refs.alertMessage.style.display = 'block';
    refs.formRef.reset();
    renderMoviesList(data.results);
  }

  paginationFunc(
    data.total_results,
    {
      param: apiRefs.SEARCH,
      query: searchQuery,
    },
    paginationSearch
  );
}
