import Pagination from 'tui-pagination';
import { refs } from '../refs';
import fetchApi from '../api-service';
import renderMoviesList from '../html-render';
import { onClickHomeButton } from '../header/button-home';

let pagination;

export function paginationFunc (total_results, fetch_refs) {
    if (pagination) {
      pagination.reset();
    }

    // onClickHomeButton();

    const paginationParams = {
      totalItems: total_results,
      itemsPerPage: 20,
      visiblePages: 5,
      currentPage: 1,
      centerAlign: true,
    };

    pagination = new Pagination(refs.paginationRef, paginationParams);

    pagination.on('afterMove', eventData => {
      paginationParams.currentPage = eventData.page;
      performMovieSearch({ ...fetch_refs, page: paginationParams.currentPage });
    });
}

function performMovieSearch(fetch_refs) {
    // console.log(fetch_refs);
    fetchApi(fetch_refs)
//     {
//     param: apiRefs.SEARCH,
//     page: paginationParams.currentPage,
//     query: searchQuery,
//   }
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
