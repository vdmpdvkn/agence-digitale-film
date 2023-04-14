import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';

const startingFetch = async () => {
  const response = await fetchApi(apiRefs.TRENDING);

  return response.results;
};

const startingArr = [];

export const getStartingArray = async () => {
  try {
    const result = await startingFetch();
    startingArr.push(...result);
    // console.log(startingArr);
  } catch (error) {
    console.error('Error:', error);
  }
};
getStartingArray().then(() => {
  renderMoviesList(startingArr);
});
