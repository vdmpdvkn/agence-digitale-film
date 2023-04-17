import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';
import Pagination from 'tui-pagination';

refs.formRef.addEventListener('submit', fetchFilmOfSearch);
refs.errorSearchRef.addEventListener('input', errorSearch);

export function errorSearch() {
  refs.alertMessage.style.display = 'none';
}

let pagination;

export async function fetchFilmOfSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.film.value.trim();

  if (pagination) {
    pagination.reset();
  }

  const data = await fetchApi({
    param: apiRefs.SEARCH,
    page: 1,
    query: searchQuery,
  });
  const dataEl = data.total_results;
  // console.log(dataEl);
  // console.log(data);

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

  const paginationParams = {
    totalItems: data.total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    currentPage: 1,
    centerAlign: true,
  };

  pagination = new Pagination(refs.paginationRef, paginationParams);

  pagination.on('afterMove', eventData => {
    paginationParams.currentPage = eventData.page;

    performMovieSearch();
  });

  function performMovieSearch() {
    fetchApi({
      param: apiRefs.SEARCH,
      page: paginationParams.currentPage,
      query: searchQuery,
    })
      // const searchURL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${paginationParams.currentPage}`;
      // fetch(searchURL)
      // .then(response => response.json())
      .then(data => {
        // Update the UI with the movie search results
        renderMoviesList(data.results);
      })
      .catch(error => {
        console.error('Error performing movie search:', error);
      });
  }
}
