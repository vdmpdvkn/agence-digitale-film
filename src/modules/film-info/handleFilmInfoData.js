import { refs } from '../refs';
import {
  handleQueueClick,
  handleWatchedClick,
} from '../localStorageWatchQueue/localStorageWatchedQueue';
import { getStorage } from '../localStorage/localStorage';

export function handleFilmInfoData(data, watchedBtnRef, queueBtnRef) {
  const filmId = data.id;
  const localStorageDataWatched = getStorage(refs.WATCHED);
  const itemInWatched = localStorageDataWatched
    ? localStorageDataWatched.find(item => item.id === filmId.toString())
    : null;
  const localStorageDataQueue = getStorage(refs.QUEUE);
  const itemInQueue = localStorageDataQueue
    ? localStorageDataQueue.find(item => item.id === filmId.toString())
    : null;
  if (!!itemInWatched) {
    watchedBtnRef.classList.remove('add-watched');
    watchedBtnRef.classList.add('remove-watched');
    watchedBtnRef.textContent = 'Remove from Watched';
    watchedBtnRef.classList.add('buttons-list__button--black');
  } else {
    watchedBtnRef.classList.remove('remove-watched');
    watchedBtnRef.classList.add('add-watched');
    watchedBtnRef.textContent = 'Add to Watched';
    watchedBtnRef.classList.remove('buttons-list__button--black');
  }
  if (!!itemInQueue) {
    queueBtnRef.classList.remove('add-queue');
    queueBtnRef.classList.add('remove-queue');
    queueBtnRef.textContent = 'Remove from Queue';
    queueBtnRef.classList.add('buttons-list__button--black');
    console.log(queueBtnRef);
  } else {
    queueBtnRef.classList.remove('remove-queue');
    queueBtnRef.classList.add('add-queue');
    queueBtnRef.textContent = 'Add to Queue';
    queueBtnRef.classList.remove('buttons-list__button--black');
  }
  watchedBtnRef.addEventListener('click', handleWatchedClick);
  queueBtnRef.addEventListener('click', handleQueueClick);
}
