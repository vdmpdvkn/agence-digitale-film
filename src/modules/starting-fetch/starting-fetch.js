import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import { refs } from '../refs';
import renderMoviesList from '../html-render';
import Pagination from 'tui-pagination';

const startingFetch = async () => {
  const response = await fetchApi({ page: 1 });

  return response.results;
};

const startingArr = [];

const getStartingArray = async () => {
  try {
    const result = await startingFetch();
    startingArr.push(...result);
  } catch (error) {
    console.error('Error:', error);
  }
};

let pagination;

export const startingRender = async () => {
  if (pagination) {
    pagination.reset();
  }
  await getStartingArray().then(() => {
    renderMoviesList(startingArr);
  });

  const paginationParams = {
    totalItems: 20000,
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
      param: apiRefs.TRENDING,
      page: paginationParams.currentPage,
    })
      .then(data => {
        renderMoviesList(data.results);
      })
      .catch(error => {
        console.error('Error performing movie search:', error);
      });
  }
};
