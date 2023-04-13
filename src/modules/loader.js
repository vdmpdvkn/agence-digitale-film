import Notiflix from 'notiflix';
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
