export const API_KEY = 'cb1bcc244723619ea7f2217b5a84ccd8';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p';
export const apiRefs = {
  TRENDING: 'trending',
  SEARCH: 'search',
  MOVIE_DETAILS: 'movieDetails',
  MOVIE_VIDEO: 'movieVideo',
};
export default async function fetchApi(param, id = 0, page = 1) {
  const endpoints = {
    trending: `/trending/all/day?api_key=${API_KEY}`,
    search: `/search/movie?api_key=${API_KEY}&${page}`,
    movieDetails: `/movie/${id}?api_key=${API_KEY}`,
    movieVideo: `/movie/${id}/videos?api_key=${API_KEY}`,
  };

  return await fetch(`${BASE_URL}${endpoints[param]}`).then(r => {
    return r.json();
  });
}
