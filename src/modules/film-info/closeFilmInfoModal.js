import { refs } from '../refs';
const { backdropRef, watchedBtnRef, queueBtnRef } = refs;

export function closeFilmInfoOnBackdropClick(evt) {
  if (!evt.target.classList.contains('backdrop')) {
    return;
  }
  evt.currentTarget.classList.add('is-hidden');

  evt.currentTarget.removeEventListener('click', closeFilmInfoOnBackdropClick);
  watchedBtnRef.removeEventListener('click', handleWatchedClick);
  queueBtnRef.removeEventListener('click', handleQueueClick);
}
export function closeFilmInfoOnEsc(evt) {
  if (evt.code !== 'Escape') {
    return;
  }

  backdropRef.classList.add('is-hidden');

  document.removeEventListener('keydown', closeFilmInfoOnEsc);
  watchedBtnRef.removeEventListener('click', handleWatchedClick);
  queueBtnRef.removeEventListener('click', handleQueueClick);
}
export function closeFilmInfoOnCloseBtnClick(evt) {
  backdropRef.classList.add('is-hidden');

  evt.currentTarget.removeEventListener('click', closeFilmInfoOnCloseBtnClick);
  watchedBtnRef.removeEventListener('click', handleWatchedClick);
  queueBtnRef.removeEventListener('click', handleQueueClick);
}
