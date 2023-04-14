const watchedBtn = document.getElementById('js-watched');
const queueBtn = document.getElementById('js-queue');

const buttonStates = {
  watched: { state: 'add', text: 'Add to Watched' },
  queue: { state: 'add', text: 'Add to Queue' },
};

watchedBtn.addEventListener('click', toggleWatchedBtn);
queueBtn.addEventListener('click', toggleQueueBtn);

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

  

  export {toggleWatchedBtn, toggleQueueBtn, toggleButtonClass}