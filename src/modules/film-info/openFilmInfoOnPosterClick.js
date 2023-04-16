import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import { renderFilmInfo } from './renderFilmInfo';
import {
  closeFilmInfoOnBackdropClick,
  closeFilmInfoOnEsc,
  closeFilmInfoOnCloseBtnClick,
} from './closeFilmInfoModal';
import {
  handleQueueClick,
  handleWatchedClick,
} from '../localStorageWatchQueue/localStorageWatchedQueue';
import { getItemFromStorage } from '../localStorage/localStorage';

export function openFilmInfoOnPosterClick(evt, trailerId) {
  if (evt.target.nodeName !== 'LI' && evt.target.parentNode.nodeName !== 'LI') {
    return;
  }

  const { backdropRef, filmInfoCloseBtnRef, watchedBtnRef, queueBtnRef } = refs;
  fetchApi(
    apiRefs.MOVIE_DETAILS,
    Number(evt.target.dataset.id ?? evt.target.parentNode.dataset.id)
  )
    .then(data => {
      renderFilmInfo(data);
    })
    .then(() => {
      refs.backdropRef.classList.remove('is-hidden');
    });
  document.addEventListener('keydown', closeFilmInfoOnEsc);
  backdropRef.addEventListener('click', closeFilmInfoOnBackdropClick);
  filmInfoCloseBtnRef.addEventListener('click', closeFilmInfoOnCloseBtnClick);

  const itemInWatched = getItemFromStorage(refs.WATCHED, trailerId);
  if (itemInWatched) {
    watchedBtnRef.classList.remove('add-watched');
    watchedBtnRef.classList.add('remove-watched');
    watchedBtnRef.textContent = 'Remove from Watched';
  } else {
    watchedBtnRef.classList.remove('remove-watched');
    watchedBtnRef.classList.add('add-watched');
    watchedBtnRef.textContent = 'Add to Watched';
  }
  watchedBtnRef.addEventListener('click', handleWatchedClick);

  const itemInQueue = getItemFromStorage(refs.QUEUE, trailerId);

  if (itemInQueue) {
    queueBtnRef.classList.remove('add-queue');
    queueBtnRef.classList.add('remove-queue');
    queueBtnRef.textContent = 'Remove from Queue';
  } else {
    queueBtnRef.classList.remove('remove-queue');
    queueBtnRef.classList.add('add-queue');
    queueBtnRef.textContent = 'Add to Queue';
  }
  queueBtnRef.addEventListener('click', handleQueueClick);
}
