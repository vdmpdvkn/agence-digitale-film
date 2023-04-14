import { refs } from '../refs';
import getFilmInfo from './getFilmInfo';
import { renderFilmInfo } from './renderFilmInfo';
import {
  closeFilmInfoOnBackdropClick,
  closeFilmInfoOnEsc,
  closeFilmInfoOnCloseBtnClick,
} from './closeFilmInfoModal';

function openFilmInfoOnPosterClick(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  const { backdropRef, filmInfoCloseBtnRef } = refs;
  getFilmInfo(Number(evt.target.dataset.id))
    .then(data => {
      renderFilmInfo(data);
    })
    .then(() => {
      refs.backdropRef.classList.remove('is-hidden');
    });
  document.addEventListener('keydown', closeFilmInfoOnEsc);
  backdropRef.addEventListener('click', closeFilmInfoOnBackdropClick);
  filmInfoCloseBtnRef.addEventListener('click', closeFilmInfoOnCloseBtnClick);
}
