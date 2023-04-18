import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import { renderFilmInfo } from './renderFilmInfo';
import {
  closeFilmInfoOnBackdropClick,
  closeFilmInfoOnEsc,
  closeFilmInfoOnCloseBtnClick,
} from './closeFilmInfoModal';
import { handleFilmInfoData } from './handleFilmInfoData';
import { playVideo } from '../player/playVideo';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
export function openFilmInfoOnPosterClick(evt) {
  if (
    evt.target.nodeName !== 'LI' &&
    evt.target.parentNode.nodeName !== 'LI' &&
    evt.target.parentNode.parentNode.nodeName !== 'LI'
  ) {
    return;
  }

  const {
    backdropRef,
    filmInfoCloseBtnRef,
    watchedBtnRef,
    queueBtnRef,
    filmWatchTrailerBtnRef,
  } = refs;
  Loading.hourglass('Loading...', {
    svgColor: '#b92f2c',
  });

  fetchApi({
    param: apiRefs.MOVIE_DETAILS,
    id: Number(
      evt.target.dataset.id ??
        evt.target.parentNode.dataset.id ??
        evt.target.parentNode.parentNode.dataset.id
    ),
  }).then(data => {
    Loading.remove();
    if (data.status_code === 34) {
      Notify.failure('No info');
      return;
    }

    handleFilmInfoData(data, watchedBtnRef, queueBtnRef);
    renderFilmInfo(data);
    backdropRef.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('click', closeFilmInfoOnEsc);
    backdropRef.addEventListener('click', closeFilmInfoOnBackdropClick);
    filmInfoCloseBtnRef.addEventListener('click', closeFilmInfoOnCloseBtnClick);
    filmWatchTrailerBtnRef.addEventListener('click', playVideo);
  });
}
