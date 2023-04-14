import { refs } from '../refs';
import getFilmInfo from './getFilmInfo';
import { renderFilmInfo } from './renderFilmInfo';
import {
  closeFilmInfoOnBackdropClick,
  closeFilmInfoOnEsc,
  closeFilmInfoOnCloseBtnClick,
} from './closeFilmInfoModal';

export function openFilmInfoOnPosterClick(evt) {
  if (evt.target.nodeName !== 'LI' && evt.target.parentNode.nodeName !=='LI') {
    // console.log(evt.target.parentNode.nodeName);
    // console.log(evt.target.nodeName);
    return;
  }

  // console.log(evt.target.parentNode.dataset.id);
  const { backdropRef, filmInfoCloseBtnRef } = refs;
  getFilmInfo(Number(evt.target.dataset.id ?? evt.target.parentNode.dataset.id))
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
