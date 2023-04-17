import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';
import { paginationFunc } from '../pagination/pagination';

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
  await getStartingArray().then(data => {
    renderMoviesList(startingArr);
    paginationFunc(
      data.total_results,
      { param: apiRefs.TRENDING },
      paginationStart
    );
  });
};
