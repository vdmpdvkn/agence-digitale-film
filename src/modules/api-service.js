export const API_KEY = 'cb1bcc244723619ea7f2217b5a84ccd8';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p';
export const apiRefs = {
  TRENDING: 'trending',
  SEARCH: 'search',
  MOVIE_DETAILS: 'movieDetails',
  MOVIE_VIDEO: 'movieVideo',
};

// пропоную замінити набір вхідних параметрів (param, id = 0, page = 1, query = '') на обєкт параметрів
//
// ви передаєте у функцію НЕ окремі параметри а цей обєкт де заповнюєте потрібні параметри
// { param: apiRefs.TRENDING, id : 0, page : 1, query : '' }
//
// це перший рядок функції
// export default async function fetchApi({param = apiRefs.TRENDING, id = 0, page = 1, query = ''}) {

export default async function fetchApi({
  param = apiRefs.TRENDING,
  id = 0,
  page = 1,
  query = '',
}) {
  const endpoints = {
    trending: `/trending/all/day?api_key=${API_KEY}&page=${page}`,
    search: `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    movieDetails: `/movie/${id}?api_key=${API_KEY}`,
    movieVideo: `/movie/${id}/videos?api_key=${API_KEY}`,
  };

  return await fetch(`${BASE_URL}${endpoints[param]}`).then(r => {
    return r.json();
  });
}
