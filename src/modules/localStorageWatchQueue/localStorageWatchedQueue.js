import {
  setStorage,
  delFromStorage,
  getItemFromStorage,
  } from '../localStorage/localStorage';
  import { refs } from '../refs';
  import { toggleWatchedBtn, toggleQueueBtn} from './toggleButtons/toggleButton';
    
  export function handleWatchedClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById('js-watched').getAttribute('original_title');
  const fullPosterPath = document
  .getElementById('film-modal-image')
  .getAttribute('src');
  const posterPath = fullPosterPath.slice(fullPosterPath.lastIndexOf('/') + 0);
  const genreIdsString = document.getElementById('js-watched').getAttribute('data-genre_ids');
  const genreIds = genreIdsString ? genreIdsString.split(' ').map(id => parseInt(id)) : [12];
  const releaseDate = document.getElementById('js-watched').getAttribute('data-release_date');
    const name = button.dataset.name;
    const title = button.dataset.title;
  // const watchedMovies = getStorage(refs.WATCHED);
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
  const genreIdsString = document.getElementById('js-queue').getAttribute('data-genre_ids');
  const genreIds = genreIdsString ? genreIdsString.split(' ').map(id => parseInt(id)) : [12];
  const releaseDate = document.getElementById('js-queue').getAttribute('data-release_date');
  const name = button.dataset.name;
    const title = button.dataset.title;
  // const queuedMovies = getStorage(refs.QUEUE);
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
  // queuedMovies.push(filmInfo);
  // setStorage(refs.QUEUE, queuedMovies);
  setStorage(refs.QUEUE, filmInfo);
  } else if (button.classList.contains('remove-queue')) {
  delFromStorage(refs.QUEUE, trailerId);
  }
  toggleQueueBtn();
  }
  
