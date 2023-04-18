import { globalGenres } from './starting-fetch/globalGenres';
import { IMAGE_URL } from './api-service';
import { refs } from './refs';
const imageSize = 'w500';
import samplePlaceholder from '../images/sample_placeholder.jpg';

export default function renderMoviesList(moviesArr) {
  if (moviesArr.length === 0) {
    refs.galleryListRef.innerHTML =
      '<p class="error_localstoragy">Nothing here...🤷🏽‍♀️</p>';
    return;
  }
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
      let maxCharactersPerMovieTitle = 30;
      movieName =
        movieName.length > maxCharactersPerMovieTitle
          ? movieName.slice(0, maxCharactersPerMovieTitle) + '...'
          : movieName;
      const movieGenres = getMovieGenres(genre_ids, globalGenres);
      let fullImageUrl = poster_path
        ? `${IMAGE_URL}/${imageSize}${poster_path}`
        : samplePlaceholder;
      return `<li class="movie" data-id=${id}>
  <div class = "movie-image__wrapper">
  <img src="${fullImageUrl}" alt="${movieName}"/></div>
  <p class="movie__title">${movieName}</p>
  <div class="movie__position">
   <p class="movie__genres">${movieGenres}</p>
  <p class="movie__genres">|</p>
  <p class="movie__year">${movieYear}</p>
  </div>
 
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
    const genre = genres.find(genreObj => genreObj.id === id);
    if (genre) {
      genreNames.push(genre.name);
    }
  });
  if (genreNames.length > 2) {
    genreNames.splice(2, genreNames.length - 2, 'Other');
  }
  return genreNames.join(', ');
}
