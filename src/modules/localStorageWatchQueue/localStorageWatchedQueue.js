
import { setStorage, delFromStorage, getStorage } from "../localStorage/localStorage";

const watchedBtn = document.getElementById('js-watched');
const queueBtn = document.getElementById('js-queue');

const buttonStates = {
  watched: { state: 'add', text: 'Add to Watched' },
  queue: { state: 'add', text: 'Add to Queue' },
};

watchedBtn.addEventListener('click', handleWatchedClick);
queueBtn.addEventListener('click', handleQueueClick);

function toggleWatchedBtn() {
  const buttonState = buttonStates.watched;

  if (buttonState.state === 'add') {
    watchedBtn.classList.remove('add-watched');
    watchedBtn.classList.add('remove-watched');
    watchedBtn.textContent = 'Remove from Watched';
    watchedBtn.disabled = false;
    queueBtn.disabled = true;
    buttonState.state = 'remove';
    buttonState.text = 'Remove from Watched';
  } else {
    watchedBtn.classList.remove('remove-watched');
    watchedBtn.classList.add('add-watched');
    watchedBtn.textContent = 'Add to Watched';
    watchedBtn.disabled = false;
    queueBtn.disabled = false;
    buttonState.state = 'add';
    buttonState.text = 'Add to Watched';
  }
}

function toggleQueueBtn() {
  const buttonState = buttonStates.queue;

  if (buttonState.state === 'add') {
    queueBtn.classList.remove('add-queue');
    queueBtn.classList.add('remove-queue');
    queueBtn.textContent = 'Remove from Queue';
    queueBtn.disabled = false;
    watchedBtn.disabled = true;
    buttonState.state = 'remove';
    buttonState.text = 'Remove from Queue';
  } else {
    queueBtn.classList.remove('remove-queue');
    queueBtn.classList.add('add-queue');
    queueBtn.textContent = 'Add to Queue';
    queueBtn.disabled = false;
    watchedBtn.disabled = false;
    buttonState.state = 'add';
    buttonState.text = 'Add to Queue';
  }
}

function handleWatchedClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById("original-title").textContent;
  const posterPath = document.getElementById("film-modal-image").getAttribute("src");
  const genreIds = document.getElementById("genre").textContent;
  const popularity = document.getElementById("popularity").textContent;
  const watchedMovies = getStorage("watched");
  if (button.classList.contains("add-watched")) {
  const filmInfo = {
  id: trailerId,
  original_title: originalTitle,
  poster_path: posterPath,
  genre_ids: genreIds,
  popularity: popularity
  };
  setStorage("watched", filmInfo, watchedMovies);
  } else if (button.classList.contains("remove-watched")) {
  delFromStorage("watched", trailerId);
  }
  toggleWatchedBtn();
  }
  function handleQueueClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = document.getElementById("original-title").textContent;
  const posterPath = document.getElementById("film-modal-image").getAttribute("src");
  const genreIds = document.getElementById("genre").textContent;
  const popularity = document.getElementById("popularity").textContent;
  const queuedMovies = getStorage("queue");
  if (button.classList.contains("add-queue")) {
  const filmInfo = {
  id: trailerId,
  original_title: originalTitle,
  poster_path: posterPath,
  genre_ids: genreIds,
  popularity: popularity
  };
  setStorage("queue", filmInfo, queuedMovies);
  } else if (button.classList.contains("remove-queue")) {
  delFromStorage("queue", trailerId);
  }
  toggleQueueBtn();
  }
  

  export {toggleWatchedBtn, toggleQueueBtn, handleWatchedClick, handleQueueClick}