import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

refs.formRef.addEventListener('submit', fetchFilmOfSearch);

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
    refs.alertMessage.style.display = 'flex';
  }
  refs.errorSearchRef.addEventListener('input', errorSearch);

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

// refs.formRef.addEventListener('submit', fetchFilmOfSearch);

// export async function fetchFilmOfSearch(e) {
//   e.preventDefault();
//   const searchQuery = e.currentTarget.elements.film.value.trim();

//   if (searchQuery === '') {
//     Notify.warning('Searching starts after providing data to search!');
//     return;
//   }

//   const data = await fetchApi(apiRefs.SEARCH, '', '', searchQuery);
//   console.log(data);

//   renderMoviesList(data.results);

// }

// export function errorSearch() {
//   refs.alertMessage.style.display = 'none';
//   setTimeout(() => {
//   refs.alertMessage.style.display = 'none';
//   }, 2000);
// }
