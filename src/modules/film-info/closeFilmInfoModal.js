import { refs } from '../refs';
const { backdropRef } = refs;

export function closeFilmInfoOnBackdropClick(evt) {
  if (!evt.target.classList.contains('backdrop')) {
    return;
  }
  evt.currentTarget.classList.add('is-hidden');
  evt.currentTarget.removeEventListener('click', closeFilmInfoOnBackdropClick);
}
export function closeFilmInfoOnEsc(evt) {
  if (evt.code !== 'Escape') {
    return;
  }

  backdropRef.classList.add('is-hidden');
  document.removeEventListener('keydown', closeFilmInfoOnEsc);
}
export function closeFilmInfoOnCloseBtnClick(evt) {
  backdropRef.classList.add('is-hidden');
  evt.currentTarget.removeEventListener('click', closeFilmInfoOnCloseBtnClick);
}
