// import Notiflix from 'notiflix';
// import axios from 'axios';
import {BASE_URL} from './api_key'
import { refs } from './refs';
// import { refs } from './refs';

// async function fetchPhotos(BASE_URL) {
//   try {
//     const response = await axios.get(BASE_URL);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function loadingPhotos(BASE_URL) {
//   Notiflix.Loading.dots('Loading...');
//   const response = await fetchPhotos(BASE_URL);
//   Notiflix.Loading.remove();
// }


 refs.loaderButton.addEventListener('click', loadData)
 refs.spinner.document.querySelector('#spinner');

export function loadData() {
  refs.spinner.removeAttribute('hidden');
  fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
      refs.spinner.setAttribute('hidden', '');
      console.log(data);
    });
}
