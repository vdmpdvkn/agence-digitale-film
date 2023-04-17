// import Notiflix from 'notiflix';
// import axios from 'axios';
// import {BASE_URL} from './api_key'
// import { refs } from './refs';
// import { refs } from './refs';

// async function fetchPhotos(BASE_URL) {
//   try {
//     const response = await axios.get(BASE_URL);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
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
