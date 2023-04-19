import { refs } from '../refs';
import samplePlaceholder from '../../images/sample_placeholder.jpg';
const imageLink = 'https://image.tmdb.org/t/p/w500';
export function renderFilmInfo(object) {
  const {
    original_title,
    name,
    title,
    genres,
    overview,
    popularity = '0',
    vote_count,
    vote_average,
    poster_path,
    id,
    release_date,
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
    filmAddToWatchedBtnRef,
    filmAddToQueueBtnRef,
    filmWatchTrailerBtnRef,
  } = refs;

  filmImageRef.src = `${imageLink}${poster_path}`;
  if (!poster_path) {
    filmImageRef.src = samplePlaceholder;
  }
  filmImageRef.alt = original_title;

  filmNameRef.textContent = original_title;

  filmOriginalTitleRef.textContent = original_title;

  filmOverviewRef.textContent = overview;

  filmPopularityRef.textContent = popularity.toFixed(1);

  filmVotesRef.textContent = vote_count;
  filmAverageVotesRef.textContent = vote_average.toFixed(1);

  const filmGenres = genres.map(genre => genre.name);
  filmGenreRef.textContent = filmGenres.join(', ');

  const filmGenresIds = genres.map(genre => genre.id).join(' ');

  filmAddToWatchedBtnRef.dataset.id = id;
  filmAddToWatchedBtnRef.dataset.original_title = original_title;
  if (title) {
    filmAddToWatchedBtnRef.dataset.title = title;
  }
  if (name) {
    filmAddToWatchedBtnRef.dataset.name = name;
  }
  filmAddToWatchedBtnRef.dataset.poster_path = poster_path;
  filmAddToWatchedBtnRef.dataset.genre_ids = filmGenresIds;
  filmAddToWatchedBtnRef.dataset.release_date = release_date;

  filmAddToQueueBtnRef.dataset.id = id;
  filmAddToQueueBtnRef.dataset.original_title = original_title;
  if (title) {
    filmAddToQueueBtnRef.dataset.title = title;
  }
  if (name) {
    filmAddToQueueBtnRef.dataset.name = name;
  }
  filmAddToQueueBtnRef.dataset.poster_path = poster_path;
  filmAddToQueueBtnRef.dataset.genre_ids = filmGenresIds;
  filmAddToQueueBtnRef.dataset.release_date = release_date;

  filmWatchTrailerBtnRef.dataset.id = id;
}
