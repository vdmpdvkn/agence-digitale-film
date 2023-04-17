import { refs } from '../refs';
const { watchedBtnRef, queueBtnRef } = refs;
import { getStorage } from '../localStorage/localStorage';

export function toggleWatchedBtn() {
  const watchedBtn = watchedBtnRef;
  const queueBtn = queueBtnRef;
  const trailerId = watchedBtn.dataset.id;
  const isInWatched = getStorage(refs.WATCHED).some(
    movie => movie.id === trailerId
  );
  const isInQueue = getStorage(refs.QUEUE).some(
    movie => movie.id === trailerId
  );

  if (isInWatched) {
    watchedBtn.textContent = 'Remove from watched';
    watchedBtn.classList.remove('add-watched');
    watchedBtn.classList.add('remove-watched');
    watchedBtn.classList.add('buttons-list__button--black');
  } else {
    watchedBtn.textContent = 'Add to watched';
    watchedBtn.classList.remove('remove-watched');
    watchedBtn.classList.add('add-watched');
    watchedBtn.classList.remove('buttons-list__button--black');
  }

  if (isInQueue) {
    queueBtn.textContent = 'Remove from queue';
    queueBtn.classList.remove('add-queue');
    queueBtn.classList.add('remove-queue');
    queueBtn.classList.add('buttons-list__button--black');
  } else {
    queueBtn.textContent = 'Add to queue';
    queueBtn.classList.remove('remove-queue');
    queueBtn.classList.add('add-queue');
    queueBtn.classList.remove('buttons-list__button--black');
  }
}
