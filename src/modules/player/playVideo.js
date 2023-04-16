import {apiRefs } from '../api-service';
import fetchApi from '../api-service';
import { refs } from '../refs';
import Plyr from 'plyr';

export { playVideo, closePlayerOnEsc };
  
const playerEl = document.querySelector('.plyr__video-embed');

async function playVideo() {
  const id = refs.filmWatchTrailerBtnRef.dataset.id;
  playerEl.style.display = 'block';
  playerEl.innerHTML = '';
  const data = await fetchApi(apiRefs.MOVIE_VIDEO, id);
  const keyVideo = await data.results[0].key;
  const player = new Plyr('#player', {});
  const htmlIframe = `<iframe
    src="https://www.youtube.com/embed/${keyVideo}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>`;
  playerEl.innerHTML = htmlIframe;
  document.addEventListener('keydown',closePlayerOnEsc);
  try {
    window.player = player;
  }
  catch (e) {
    console.log(e);
  }
  }
function closePlayerOnEsc(e) {
      if (e.code !== 'Escape') {
      return;
  }
  player.destroy();
  
  console.log(e.target);
    playerEl.style.display = 'none';
    playerEl.innerHTML='';
}
