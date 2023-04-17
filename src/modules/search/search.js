import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';

import { paginationFunc } from '../pagination/pagination';
import { onClickHomeButton } from '../header/button-home';

export function errorSearch() {
  refs.alertMessage.style.display = 'none';
}

let paginationSearch;

export async function fetchFilmOnSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.film.value.trim();
  onClickHomeButton();

  const data = await fetchApi({
    param: apiRefs.SEARCH,
    page: 1,
    query: searchQuery,
  });
  const dataEl = data.total_results;

  if (searchQuery === '') {
    refs.alertMessage.textContent =
      'Searching starts after providing data to search!';
    refs.alertMessage.style.display = 'flex';
    return;
  } else if (dataEl === 0) {
    refs.alertMessage.textContent =
      'Search result not successful. Enter the correct movie name!';
    refs.alertMessage.style.display = 'flex';
    return;
  } else {
    refs.alertMessage.textContent = 'Successful!';
    refs.alertMessage.style.display = 'block';
    refs.formRef.reset();
  }

  renderMoviesList(data.results);

  paginationFunc(
    data.total_results,
    {
      param: apiRefs.SEARCH,
      query: searchQuery,
    },
    paginationSearch
  );
}
