// async function loadingFilms(BASE_URL) {
//   Notiflix.Loading.dots('Loading...');
//   const response = await fetchFilms(BASE_URL);
//   Notiflix.Loading.remove();
// }


import { BASE_URL } from './api_key';
import { refs } from './refs';

refs.loaderButton.addEventListener('click', loadData);

refs.backdropRef.document.querySelector('#backdrop')

export function loadData() {
  refs.backdropRef.removeAttribute('hidden');
  fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
      refs.backdropRef.setAttribute('hidden', '');
      console.log(data);
    });
}
