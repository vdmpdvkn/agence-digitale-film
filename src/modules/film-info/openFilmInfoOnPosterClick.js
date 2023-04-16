import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import { renderFilmInfo } from './renderFilmInfo';
import {
  closeFilmInfoOnBackdropClick,
  closeFilmInfoOnEsc,
  closeFilmInfoOnCloseBtnClick,
} from './closeFilmInfoModal';
import { handleFilmInfoData } from './handelFilmInfoData';

export function openFilmInfoOnPosterClick(evt) {
  if (
    evt.target.nodeName !== 'LI' &&
    evt.target.parentNode.nodeName !== 'LI' &&
    evt.target.parentNode.parentNode.nodeName !== 'LI'
  ) {
    return;
  }

  const { backdropRef, filmInfoCloseBtnRef, watchedBtnRef, queueBtnRef } = refs;

  fetchApi({
    param: apiRefs.MOVIE_DETAILS,
    id: Number(
      evt.target.dataset.id ??
      evt.target.parentNode.dataset.id ??
      evt.target.parentNode.parentNode.dataset.id
    )
  }
  )
    .then(data => {
      handleFilmInfoData(data, watchedBtnRef, queueBtnRef);
      renderFilmInfo(data);
      setBackdropStyle(data);
      console.log('data = ', data);
    })
    .then(() => {
      backdropRef.classList.remove('is-hidden');
    });

  document.body.style.overflow = 'hidden';
  document.addEventListener('click', closeFilmInfoOnEsc);
  backdropRef.addEventListener('click', closeFilmInfoOnBackdropClick);
  filmInfoCloseBtnRef.addEventListener('click', closeFilmInfoOnCloseBtnClick);
}


function setBackdropStyle(data) {
  const imageLink = 'https://image.tmdb.org/t/p/original/';
  const poster_path = data.poster_path;
  const bgImageForBcdrop = poster_path ? `${imageLink}${poster_path}` : samplePlaceholder;
  const elementWithBgImage = document.querySelector('.backdrop');
  elementWithBgImage.style.backgroundImage = `url(${bgImageForBcdrop})`;

  // Установить другие стили фона, если нужно
  elementWithBgImage.style.backgroundSize = 'cover';
  elementWithBgImage.style.backgroundPosition = 'center';
  elementWithBgImage.style.backgroundRepeat = 'no-repeat';
}

      