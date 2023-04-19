import { apiRefs } from '../api-service';
import fetchApi from '../api-service';
import { refs } from '../refs';
import Plyr from 'plyr';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const modalPlayer = document.getElementById('modal-player');
const playerEl = document.getElementById('player');

export async function playVideo() {
  const id = refs.filmWatchTrailerBtnRef.dataset.id;
  modalPlayer.classList.remove('is-hidden');
  playerEl.style.display = 'block';
  playerEl.innerHTML = '';
  try {
    Loading.hourglass('Loading...', {
      svgColor: '#b92f2c',
    });
    const data = await fetchApi({ param: apiRefs.MOVIE_VIDEO, id: id });
    const keyVideo = await data.results.find(element => {
      return element.type === 'Trailer';
    }).key;
    const player = new Plyr('#player', {});
    const htmlIframe = `<iframe
    src="https://www.youtube.com/embed/${keyVideo}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>`;
    playerEl.innerHTML = htmlIframe;
    document.addEventListener('click', closePlayerOnBackdropClick);
    Loading.remove();
    window.player = player;
    player.on(error, () => {
      console.log('error= ' + error);
    });
  } catch (e) {
    return;
  }
}
function closePlayerOnBackdropClick(e) {
  if (!e.target.classList.contains('backdrop')) {
    return;
  }
  player.destroy();
  modalPlayer.classList.add('is-hidden');
  playerEl.innerHTML = '';
  document.removeEventListener('click', closePlayerOnBackdropClick);
}
// 1
