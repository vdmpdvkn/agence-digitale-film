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
  const posterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  // const genreIds = document.getElementById('genre').textContent.split(', ');
  const genreIds = document.getElementById('genre').textContent;
  const popularity = document.getElementById('popularity').textContent;
  const watchedMovies = getStorage('watched');
  if (button.classList.contains('add-watched')) {
    const filmInfo = {
      id: trailerId,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      popularity: popularity,
    };
    setStorage('watched', filmInfo);
  } else if (button.classList.contains('remove-watched')) {
    delFromStorage('watched', trailerId);
  }
  console.log(watchedBtnRef.classList.contains('add-watched'));
  toggleWatchedBtn();
}
export function handleQueueClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById('original-title').textContent;
  const posterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const genreIds = document.getElementById('genre').textContent;
  // const genreIds = document.getElementById('genre').textContent.split(', ');
  const popularity = document.getElementById('popularity').textContent;
  const queuedMovies = getStorage('queue');
  if (button.classList.contains('add-queue')) {
    const filmInfo = {
      id: trailerId,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      popularity: popularity,
    };
    setStorage('queue', filmInfo);
  } else if (button.classList.contains('remove-queue')) {
    delFromStorage('queue', trailerId);
  }
  toggleQueueBtn();
}
