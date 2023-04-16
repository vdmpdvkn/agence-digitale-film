import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import { renderFilmInfo } from './renderFilmInfo';
import {
closeFilmInfoOnBackdropClick,
closeFilmInfoOnEsc,
closeFilmInfoOnCloseBtnClick,
} from './closeFilmInfoModal';
import {handleFilmInfoData} from './handelFilmInfoData';


export function openFilmInfoOnPosterClick(evt) {
if (evt.target.nodeName !== 'LI' && evt.target.parentNode.nodeName !== 'LI') {
return;
}

const { backdropRef, filmInfoCloseBtnRef, watchedBtnRef, queueBtnRef } = refs;

fetchApi(
apiRefs.MOVIE_DETAILS,
Number(evt.target.dataset.id ?? evt.target.parentNode.dataset.id)
)
.then(data => {
handleFilmInfoData(data, watchedBtnRef, queueBtnRef);
renderFilmInfo(data);
})
.then(() => {
backdropRef.classList.remove('is-hidden');
});

document.body.style.overflow = 'hidden';
backdropRef.addEventListener('click', closeFilmInfoOnBackdropClick);
filmInfoCloseBtnRef.addEventListener('click', closeFilmInfoOnCloseBtnClick);
}

