import getFilmInfo from './getFilmInfo';
import { refs } from '../refs';
const imageLink = 'https://image.tmdb.org/t/p/w400';
console.log('refs->', refs);
export function renderFilmInfo(object) {
  const {
    original_title,
    genres,
    overview,
    popularity,
    vote_count,
    vote_average,
    poster_path,
  } = object;

  const {
    filmNameRef,
    filmVotesRef,
    filmAverageVotesRef,
    filmPopularityRef,
    filmOriginalTitleRef,
    filmGenreRef,
    filmOverviewRef,
    filmImageRef,
  } = refs;

  const image = document.createElement('img');
  image.src = `${imageLink}${poster_path}`;
  image.alt = original_title;
  filmImageRef.append(image);

  filmNameRef.textContent = original_title;
  filmOriginalTitleRef.textContent = original_title;
  filmOverviewRef.textContent = overview;
  filmPopularityRef.textContent = popularity.toFixed(1);
  filmVotesRef.textContent = vote_count;
  filmAverageVotesRef.textContent = vote_average.toFixed(1);
  const filmGenres = genres.map(genre => genre.name);
  filmGenreRef.textContent = filmGenres.join(', ');
}
