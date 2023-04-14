import Notiflix from 'notiflix';
import axios from 'axios';
import {BASE_URL} from './api_key'


async function fetchPhotos(BASE_URL) {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function loadingPhotos(BASE_URL) {
  Notiflix.Loading.dots('Loading...');
  const response = await fetchPhotos(BASE_URL);
  Notiflix.Loading.remove();
}
// const spinner = document.getElementById('spinner');

// function loadData() {
//   spinner.removeAttribute('hidden');
//   fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms')
//     .then(response => response.json())
//     .then(data => {
//       spinner.setAttribute('hidden', '');
//       console.log(data);
//     });
// }
