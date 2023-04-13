import globalGenres from './globalGenres';
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';
const API_KEY = 'cb1bcc244723619ea7f2217b5a84ccd8';
const imageSize = 'w500';

const startingFetch = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

const startingArr = [];

const getStartingArray = async () => {
  try {
    const result = await startingFetch();
    startingArr.push(...result);
    console.log(startingArr);
  } catch (error) {
    console.error('Error:', error);
  }
};

getStartingArray();

function renderStartingMoviesList(moviesArr) {
  const markup = moviesArr
    .map(movie => {
      const { title, poster_path, id, release_date, genre_ids = [] } = movie;
      const movieYear = getMovieYear(release_date);
      const movieGenres = getMovieGenres(genre_ids, globalGenres);
      const fullImageUrl = `${BASE_IMAGE_URL}${imageSize}${poster_path}`;
      return `<li><div class="movie" data-id=${id}>
<img src="${fullImageUrl}" width="395"/>
<p class="movie__title">${title}</p>
<p class="movie__genres">${movieGenres}</p>
<p class="movie__year">${movieYear}</p>
</div></li>
`;
    })
    .join('');
  // refs.DOMel.insertAdjacentHTML('afterbegin', markup);
}

function getMovieYear(releasedate) {
  return releasedate.slice(0, 4);
}

function getMovieGenres(genreIdsArray, genres) {
  const genreNames = [];
  genreIdsArray.forEach(id => {
    const genre = genres.find(genreObj => genreObj.id === id);
    if (genre) {
      genreNames.push(genre.name);
    }
  });
  return genreNames.join(', ');
}
