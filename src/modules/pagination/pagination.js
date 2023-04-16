import { refs } from '../refs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import renderMoviesList from '../html-render';
import { BASE_URL, API_KEY } from '../api-service';
import fetchApi, { apiRefs } from '../api-service';

// let paginationActive = false;

// const container = refs.paginationRef;
const searchQueryParameter = 'ukraine';

const searchQueryOptions = {
  searchURL: `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQueryParameter}`,
  page: 1,
  totalPages: 7,
};

// const pagination = new Pagination(container, {
//   totalItems: searchQueryOptions.totalPages * 20, // Assuming 20 items per page
//   itemsPerPage: 20, // Number of items to display per page
//   visiblePages: 5, // Number of visible pages in the pagination
//   currentPage: searchQueryOptions.page, // Current page
//   centerAlign: true,
// });

// pagination.on('afterMove', eventData => {
//   searchQueryOptions.page = eventData.page;

//   performMovieSearch();
// });

// function performMovieSearch() {
//   const searchURL = `${searchQueryOptions.searchURL}&page=${searchQueryOptions.page}`;
//   fetch(searchURL)
//     .then(response => response.json())
//     .then(data => {
//       // Update the UI with the movie search results
//       renderMoviesList(data.results);
//     })
//     .catch(error => {
//       console.error('Error performing movie search:', error);
//     });
// }

// if (paginationActive) {
//   const pagination = new Pagination(container, options);
// } else {
//   refs.paginationRef.style.display = 'none';
// }
