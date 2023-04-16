import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';

const startingFetch = async () => {
  const response = await fetchApi({ page: 1 });

  return response.results;
};

const startingArr = [];

const getStartingArray = async () => {
  try {
    const result = await startingFetch();
    startingArr.push(...result);
    // console.log(startingArr);
  } catch (error) {
    console.error('Error:', error);
  }
};
export const startingRender = async () => {
  await getStartingArray().then(() => {
    renderMoviesList(startingArr);
    startingArr.length = 0;
  });
};
