import { Notify } from 'notiflix';
import { fetchSearchFilms } from './fetch';
// import { refs } from './refs';

const ref = {
    form: document.querySelector('.header-form'),
    input: document.querySelector('.header-form__input'),
    alertMessage: document.querySelector('.header-form--search')
}


let searchQuery = '';
ref.form.addEventListener('submit', onCLickSubmit);



function onCLickSubmit(e) {
    e.preventDefault();
    searchQuery = ref.input.value.trim();

    if (searchQuery === '') {
      Notify.warning('Searching starts after providing data to search!');
      return;
    }
    if (data.length === 0) {
        alertMessage.classList.add('is-hidden');
        return Notify.warning(
          'Search result not successful. Enter the correct movie name!'
        );
      }
  }
  
