
// const startingFetch = async () => {
//   const response = await fetch(
//     `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
//   );
//   const data = await response.json();
//   return data.results;
// };


// export default async function getFilmInfo(id) {
//   return await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(r => {
//     return r.json();
//   });
// }

// const to be add to refs!!!
// TRENDING:'trending',
// SEARCH:'search',
// MOVIE_DETAILS:'movieDetails',
// MOVIE_VIDEO:'movieVideo',

// param === refs.SOME_MEANING


export default async function fetch(param, id=0, page=1) {
const endpoints = {
    'trending':`/trending/all/day?api_key=${API_KEY}&${page}`,
    'search':`/search/movie?api_key=${API_KEY}&${page}`,
    'movieDetails':`/movie/${id}?api_key=${API_KEY}`,
    'movieVideo':`/movie/${id}/videos?api_key=${API_KEY}`,
}

  return await fetch(`${BASE_URL}${endpoints[param]}`).then(r => {
    return r.json();
  });
}


