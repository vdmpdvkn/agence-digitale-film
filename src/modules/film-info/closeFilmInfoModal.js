import { refs } from '../refs';
import {
  handleQueueClick,
  handleWatchedClick,
} from '../localStorageWatchQueue/localStorageWatchedQueue';
const { backdropRef, watchedBtnRef, queueBtnRef } = refs;

export function closeFilmInfoOnBackdropClick(evt) {
  if (!evt.target.classList.contains('backdrop')) {
    return;
  }
  evt.currentTarget.classList.add('is-hidden');
  revertChangesOnModalClose(evt);
}
export function closeFilmInfoOnEsc(evt) {
  if (evt.code !== 'Escape') {
    return;
  }

  backdropRef.classList.add('is-hidden');
  revertChangesOnModalClose(evt);
}
export function closeFilmInfoOnCloseBtnClick(evt) {
  backdropRef.classList.add('is-hidden');
  revertChangesOnModalClose(evt);
}
function revertChangesOnModalClose(evt) {
  document.body.style.overflow = '';
  evt.currentTarget.removeEventListener('click', closeFilmInfoOnCloseBtnClick);
  watchedBtnRef.removeEventListener('click', handleWatchedClick);
  queueBtnRef.removeEventListener('click', handleQueueClick);
}
