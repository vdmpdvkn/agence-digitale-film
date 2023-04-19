import { Loading } from 'notiflix';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';
import { paginationFunc } from '../pagination/pagination';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const startingFetch = async () => {
  const response = await fetchApi({ page: 1 });
  return response;
};

const startingArr = [];

const getStartingArray = async () => {
  try {
    const result = await startingFetch();
    startingArr.push(...result.results);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
};

let paginationStart;

export const startingRender = async () => {
  Loading.hourglass('Loading...', {
    svgColor: '#b92f2c',
  });
  await getStartingArray().then(data => {
    renderMoviesList(startingArr);
    paginationFunc(
      data.total_results,
      { param: apiRefs.TRENDING },
      paginationStart
    );
    startingArr.length = 0;
    Loading.remove();
  });
};
