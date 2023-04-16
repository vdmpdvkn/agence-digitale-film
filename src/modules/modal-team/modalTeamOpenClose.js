const modalTeamOpen = document.getElementById('modal-team-open');
const modalTeam = document.getElementById('modal-team');
const modalTeamClose = document.querySelectorAll('.modal-team__close');

modalTeamOpen.addEventListener('click', () => {
  modalTeam.classList.remove('is-hidden');
});

modalTeamClose.forEach(btn => {
  btn.addEventListener('click', () => {
    modalTeam.classList.add('is-hidden');
  });
});

modalTeam.addEventListener('click', event => {
  if (event.target === modalTeam) {
    modalTeam.classList.add('is-hidden');
  }
});
