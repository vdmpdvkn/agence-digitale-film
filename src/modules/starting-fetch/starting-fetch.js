import { globalGenres } from './globalGenres';
import { refs } from '../refs';
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
    // console.log(startingArr);
  } catch (error) {
    console.error('Error:', error);
  }
};

getStartingArray().then(() => {
  renderStartingMoviesList(startingArr);
});

function renderStartingMoviesList(moviesArr) {
  const markup = moviesArr
    .map(movie => {
      const {
        title,
        name,
        poster_path,
        id,
        release_date,
        first_air_date = '',
        genre_ids = [],
      } = movie;
      let movieYear = release_date
        ? getMovieYear(release_date)
        : getMovieYear(first_air_date);
      let movieName = title ? title : name;
      const movieGenres = getMovieGenres(genre_ids, globalGenres);
      const fullImageUrl = `${BASE_IMAGE_URL}${imageSize}${poster_path}`;
      return `<li class="movie" data-id=${id}>
<img src="${fullImageUrl}" width="395"/>
<p class="movie__title">${movieName}</p>
<p class="movie__genres">${movieGenres}</p>
<p class="movie__year">${movieYear}</p>
</li>
`;
    })
    .join('');
  refs.galleryListRef.innerHTML = markup;
}

function getMovieYear(releasedate) {
  return releasedate.slice(0, 4);
}

function getMovieGenres(genreIdsArray, genres) {
  const genreNames = [];
  genreIdsArray.forEach(id => {
    if (genreNames.length >= 2) {
      return;
    }
    const genre = genres.find(genreObj => genreObj.id === id);
    if (genre) {
      genreNames.push(genre.name);
    }
  });
  return genreNames.join(', ');
}
