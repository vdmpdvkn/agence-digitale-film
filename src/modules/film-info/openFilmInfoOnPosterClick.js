import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import { renderFilmInfo } from './renderFilmInfo';
import {
  closeFilmInfoOnBackdropClick,
  closeFilmInfoOnEsc,
  closeFilmInfoOnCloseBtnClick,
} from './closeFilmInfoModal';

export function openFilmInfoOnPosterClick(evt) {
  if (evt.target.nodeName !== 'LI' && evt.target.parentNode.nodeName !== 'LI') {
    return;
  }

  const { backdropRef, filmInfoCloseBtnRef } = refs;
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
}
