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
  const fullPosterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const posterPath = fullPosterPath.slice(fullPosterPath.lastIndexOf('/') + 0);
  const genreIdsString = document.getElementById('js-watched').getAttribute('data-genre_ids');

const genreIds = genreIdsString ? genreIdsString.split(' ').map(id => parseInt(id)) : [12];
console.log(genreIds);
const releaseDate = document.getElementById('js-watched').getAttribute('data-release_date');
console.log(releaseDate);

  const watchedMovies = getStorage('watched');

  if (button.classList.contains('add-watched')) {
    const filmInfo = {
      id: trailerId,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      release_date: releaseDate,
    };
    watchedMovies.push(filmInfo);
    setStorage('watched', watchedMovies);
  } else if (button.classList.contains('remove-watched')) {
    delFromStorage('watched', trailerId);
  }

  toggleWatchedBtn();
}

function handleQueueClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById('original-title').textContent;
  const fullPosterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const posterPath = fullPosterPath.slice(fullPosterPath.lastIndexOf('/') + 0);
  const genreIdsString = document.getElementById('js-queue').getAttribute('data-genre_ids');

const genreIds = genreIdsString ? genreIdsString.split(' ').map(id => parseInt(id)) : [12];
console.log(genreIds);
  
  const queuedMovies = getStorage('queue');

  if (button.classList.contains('add-queue')) {
    const filmInfo = {
      id: trailerId,
      original_title: originalTitle,
      poster_path: posterPath,
      genre_ids: genreIds,
      popularity: popularity,
    };
    queuedMovies.push(filmInfo);
    setStorage('queue', queuedMovies);
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

{
  /* <button type="button" class="buttons-list__button buttons-list__button--red add-watched" id="js-watched" data-id="70796" data-original_title="K1 HERO's 3.2" data-title="K1 HERO's 3.2" data-name="undefined" data-poster_path="null" data-genre_ids="" data-release_date="">Add to Watched</button> */
}

{
  /* <button type="button" class="add-queue buttons-list__button buttons-list__button--transparent" id="js-queue" data-id="948713" data-original_title="The Last Kingdom: Seven Kings Must Die" data-title="The Last Kingdom: Seven Kings Must Die" data-name="undefined" data-poster_path="/xUvSeFhdsJbKFOaHnB9TeTZpJKs.jpg" data-genre_ids="28 12 36 18 10752" data-release_date="2023-04-14">
  Add to Queue
  </button> */
}

// const genreIds = document.getElementById('genre').textContent.split(', ');
