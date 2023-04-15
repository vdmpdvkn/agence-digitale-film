import {
  setStorage,
  delFromStorage,
  getStorage,
} from '../localStorage/localStorage';

const watchedBtn = document.getElementById('js-watched');
const queueBtn = document.getElementById('js-queue');

watchedBtn.addEventListener('click', handleWatchedClick);
queueBtn.addEventListener('click', handleQueueClick);

function toggleWatchedBtn() {
  if (watchedBtn.classList.contains('add-watched')) {
    watchedBtn.classList.remove('add-watched');
    watchedBtn.classList.add('remove-watched');
    watchedBtn.textContent = 'Remove from Watched';
    watchedBtn.disabled = false;
    queueBtn.disabled = true;
  } else {
    watchedBtn.classList.remove('remove-watched');
    watchedBtn.classList.add('add-watched');
    watchedBtn.textContent = 'Add to Watched';
    watchedBtn.disabled = false;
    queueBtn.disabled = false;
  }
}

function toggleQueueBtn() {
  if (queueBtn.classList.contains('add-queue')) {
    queueBtn.classList.remove('add-queue');
    queueBtn.classList.add('remove-queue');
    queueBtn.textContent = 'Remove from Queue';
    queueBtn.disabled = false;
    watchedBtn.disabled = true;
  } else {
    queueBtn.classList.remove('remove-queue');
    queueBtn.classList.add('add-queue');
    queueBtn.textContent = 'Add to Queue';
    queueBtn.disabled = false;
    watchedBtn.disabled = false;
  }
}

function handleWatchedClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById('original-title').textContent;
  const posterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  // const genreIds = document.getElementById('genre').textContent.split(', ');
  const genreIds = document.getElementById('genre').textContent;
  const popularity = document.getElementById('popularity').textContent;
  const watchedMovies = getStorage('watched');
  if (button.classList.contains('add-watched')) {
    const filmInfo = {
      id: trailerId,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      popularity: popularity,
    };
    setStorage('watched', filmInfo);
  } else if (button.classList.contains('remove-watched')) {
    delFromStorage('watched', trailerId);
  }
  console.log(watchedBtn.classList.contains('add-watched'));
  toggleWatchedBtn();
}
function handleQueueClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById('original-title').textContent;
  const posterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const genreIds = document.getElementById('genre').textContent;
  // const genreIds = document.getElementById('genre').textContent.split(', ');
  const popularity = document.getElementById('popularity').textContent;
  const queuedMovies = getStorage('queue');
  if (button.classList.contains('add-queue')) {
    const filmInfo = {
      id: trailerId,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      popularity: popularity,
    };
    setStorage('queue', filmInfo);
  } else if (button.classList.contains('remove-queue')) {
    delFromStorage('queue', trailerId);
  }
  toggleQueueBtn();
}

export {
  toggleWatchedBtn,
  toggleQueueBtn,
  handleWatchedClick,
  handleQueueClick,
};
