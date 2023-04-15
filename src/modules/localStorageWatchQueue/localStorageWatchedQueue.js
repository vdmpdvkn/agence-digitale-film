import {
  setStorage,
  delFromStorage,
  getStorage,
} from '../localStorage/localStorage';
import { refs } from '../refs';
const { watchedBtnRef, queueBtnRef } = refs;
function toggleWatchedBtn() {
  if (watchedBtnRef.classList.contains('add-watched')) {
    watchedBtnRef.classList.remove('add-watched');
    watchedBtnRef.classList.add('remove-watched');
    watchedBtnRef.textContent = 'Remove from Watched';
    watchedBtnRef.disabled = false;
    queueBtnRef.disabled = true;
  } else {
    watchedBtnRef.classList.remove('remove-watched');
    watchedBtnRef.classList.add('add-watched');
    watchedBtnRef.textContent = 'Add to Watched';
    watchedBtnRef.disabled = false;
    queueBtnRef.disabled = false;
  }
}
function toggleQueueBtn() {
  if (queueBtnRef.classList.contains('add-queue')) {
    queueBtnRef.classList.remove('add-queue');
    queueBtnRef.classList.add('remove-queue');
    queueBtnRef.textContent = 'Remove from Queue';
    queueBtnRef.disabled = false;
    watchedBtnRef.disabled = true;
  } else {
    queueBtnRef.classList.remove('remove-queue');
    queueBtnRef.classList.add('add-queue');
    queueBtnRef.textContent = 'Add to Queue';
    queueBtnRef.disabled = false;
    watchedBtnRef.disabled = false;
  }
}
export function handleWatchedClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById('original-title').textContent;
  const fullPosterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const posterPath = fullPosterPath.slice(fullPosterPath.lastIndexOf('/') + 0);
  const genreIdsString = document
    .getElementById('js-watched')
    .getAttribute('data-genre_ids');
  const genreIds = genreIdsString
    ? genreIdsString.split(' ').map(id => parseInt(id))
    : [12];
  const releaseDate = document
    .getElementById('js-watched')
    .getAttribute('data-release_date');
  const watchedMovies = getStorage(refs.WATCHED);
  if (button.classList.contains('add-watched')) {
    const filmInfo = {
      id: trailerId,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      release_date: releaseDate,
    };
    // watchedMovies.push(filmInfo);
    // setStorage(refs.WATCHED, watchedMovies);
    setStorage(refs.WATCHED, filmInfo);
  } else if (button.classList.contains('remove-watched')) {
    delFromStorage(refs.WATCHED, trailerId);
  }
  toggleWatchedBtn();
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
  const queuedMovies = getStorage(refs.QUEUE);
  if (button.classList.contains('add-queue')) {
    const filmInfo = {
      id: trailerId,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      popularity: popularity,
    };
    // queuedMovies.push(filmInfo);
    // setStorage(refs.QUEUE, queuedMovies);
    setStorage(refs.QUEUE, filmInfo);
  } else if (button.classList.contains('remove-queue')) {
    delFromStorage(refs.QUEUE, trailerId);
  }
  toggleQueueBtn();
}
