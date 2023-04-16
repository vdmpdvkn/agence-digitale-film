import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import { renderFilmInfo } from './renderFilmInfo';
import {
closeFilmInfoOnBackdropClick,
closeFilmInfoOnEsc,
closeFilmInfoOnCloseBtnClick,
} from './closeFilmInfoModal';
import {
handleQueueClick,
handleWatchedClick,
} from '../localStorageWatchQueue/localStorageWatchedQueue';
import { getItemFromStorage, getStorage } from '../localStorage/localStorage';

export function openFilmInfoOnPosterClick(evt) {
if (evt.target.nodeName !== 'LI' && evt.target.parentNode.nodeName !== 'LI') {
return;
}

const { backdropRef, filmInfoCloseBtnRef, watchedBtnRef, queueBtnRef } = refs;
let filmId;

fetchApi(
apiRefs.MOVIE_DETAILS,
Number(evt.target.dataset.id ?? evt.target.parentNode.dataset.id)
)
.then(data => {
renderFilmInfo(data);
console.log(data.id);
const filmId = data.id;

const localStorageDataWatched = getStorage(refs.WATCHED);
const itemInWatched = localStorageDataWatched ? localStorageDataWatched.find(item => item.id === filmId.toString()) : null;

const localStorageDataQueue = getStorage(refs.QUEUE);
const itemInQueue = localStorageDataQueue ? localStorageDataQueue.find(item => item.id === filmId.toString()) : null;

if (!!itemInWatched) {
watchedBtnRef.classList.remove('add-watched');
watchedBtnRef.classList.add('remove-watched');
watchedBtnRef.textContent = 'Remove from Watched';
} else {
watchedBtnRef.classList.remove('remove-watched');
watchedBtnRef.classList.add('add-watched');
watchedBtnRef.textContent = 'Add to Watched';
}

if (!!itemInQueue) {
queueBtnRef.classList.remove('add-queue');
queueBtnRef.classList.add('remove-queue');
queueBtnRef.textContent = 'Remove from Queue';
} else {
queueBtnRef.classList.remove('remove-queue');
queueBtnRef.classList.add('add-queue');
queueBtnRef.textContent = 'Add to Queue';
}

watchedBtnRef.addEventListener('click', handleWatchedClick);
queueBtnRef.addEventListener('click', handleQueueClick);
})
.then(() => {
backdropRef.classList.remove('is-hidden');
});

document.addEventListener('keydown', closeFilmInfoOnEsc);
backdropRef.addEventListener('click', closeFilmInfoOnBackdropClick);
filmInfoCloseBtnRef.addEventListener('click', closeFilmInfoOnCloseBtnClick);
}

