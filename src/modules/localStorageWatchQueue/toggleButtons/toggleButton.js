import { refs } from '../../refs';
const { watchedBtnRef, queueBtnRef } = refs;


export function toggleWatchedBtn() {
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
export function toggleQueueBtn() {
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
