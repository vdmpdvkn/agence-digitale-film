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
  try {
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
    document.addEventListener('click', closePlayerOnEsc);

    window.player = player;
    player.on(error, () => {
      console.log('error= ' + error);
    });
  } catch (e) {
    return;
  }
}
function closePlayerOnEsc(e) {
  if (!e.target.classList.contains('backdrop')) {
    return;
  }
  player.destroy();
  modalPlayer.classList.add('is-hidden');
  playerEl.innerHTML = '';
}
// 1
