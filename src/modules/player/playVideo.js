import { apiRefs } from '../api-service';
import fetchApi from '../api-service';
import { refs } from '../refs';
import Plyr from 'plyr';
const modalPlayer = document.getElementById('modal-player');
const playerEl = document.getElementById('player');

export async function playVideo() {
  const id = refs.filmWatchTrailerBtnRef.dataset.id;
  modalPlayer.classList.remove('is-hidden');
  playerEl.style.display = 'block';
  playerEl.innerHTML = '';
  const data = await fetchApi({ param: apiRefs.MOVIE_VIDEO, id: id });
  const keyVideo = await data.results[0].key;
  const player = new Plyr('#player', {});
  const htmlIframe = `<iframe
    src="https://www.youtube.com/embed/${keyVideo}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>`;
  playerEl.innerHTML = htmlIframe;
  player.addEventListener('keydown', closePlayerOnEsc);
  try {
    window.player = player;
  } catch (e) {
    console.log(e);
  }
}
function closePlayerOnEsc(e) {
  if (e.code !== 'Escape') {
    return;
  }
  player.destroy();
  console.log(e.currentTarget);
  modalPlayer.classList.add('is-hidden');
  playerEl.innerHTML = '';
}
