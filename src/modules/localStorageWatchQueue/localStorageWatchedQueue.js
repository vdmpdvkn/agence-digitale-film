import {
  setStorage,
  delFromStorage,
  getStorage,
} from '../localStorage/localStorage';
import { refs } from '../refs';
import { toggleWatchedBtn } from './toggleButton';
import renderMoviesList from '../html-render';

export function handleWatchedClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = button.dataset.original_title;
  const fullPosterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const posterPath = fullPosterPath.slice(fullPosterPath.lastIndexOf('/') + 0);
  const genreIdsString = button.dataset.genre_ids;
  const genreIds = genreIdsString
    ? genreIdsString.split(' ').map(id => parseInt(id))
    : [12];
  const releaseDate = button.dataset.release_date;
  const name = button.dataset.name;
  const title = button.dataset.title;

  if (button.classList.contains('add-watched')) {
    const filmInfo = {
      id: trailerId,
      name,
      title,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      release_date: releaseDate,
    };

    setStorage(refs.WATCHED, filmInfo);
    toggleWatchedBtn();
    return;
  }
  delFromStorage(refs.WATCHED, trailerId);
  toggleWatchedBtn();
  if (
    !refs.buttonRefHome.classList.contains('header-nav--active') &&
    refs.buttonRefWatched.classList.contains('header-button__library--active')
  ) {
    renderMoviesList(getStorage(refs.WATCHED));
  }
}

export function handleQueueClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById('original-title').textContent;
  const fullPosterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const posterPath = fullPosterPath.slice(fullPosterPath.lastIndexOf('/') + 0);
  const genreIdsString = document
    .getElementById('js-queue')
    .getAttribute('data-genre_ids');
  const genreIds = genreIdsString
    ? genreIdsString.split(' ').map(id => parseInt(id))
    : [12];
  const releaseDate = document
    .getElementById('js-queue')
    .getAttribute('data-release_date');
  const name = button.dataset.name;
  const title = button.dataset.title;

  if (button.classList.contains('add-queue')) {
    const filmInfo = {
      id: trailerId,
      name,
      title,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      release_date: releaseDate,
    };

    setStorage(refs.QUEUE, filmInfo);
    toggleWatchedBtn();
    return;
  }
  delFromStorage(refs.QUEUE, trailerId);
  toggleWatchedBtn();

  if (
    !refs.buttonRefHome.classList.contains('header-nav--active') &&
    refs.buttonRefQueue.classList.contains('header-button__library--active')
  ) {
    renderMoviesList(getStorage(refs.QUEUE));
  }
}
