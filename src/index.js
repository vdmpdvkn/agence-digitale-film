import { refs } from './modules/refs';

import {
  toggleWatchedBtn,
  toggleQueueBtn,
  toggleButtonClass,
} from './modules/localStorageWatchQueue/localStorageWatchedQueue';

import { onClickMyLibraryButton } from './modules/header/button-my-library';
import { onClickHomeButton } from './modules/header/button-home';
import { openFilmInfoOnPosterClick } from './modules/film-info/openFilmInfoOnPosterClick';
// import { getStartingArray } from './modules/starting-fetch/starting-fetch';
// import renderMoviesList from './modules/html-render';
import './modules/starting-fetch/starting-fetch';
import { fetchFilmOfSearch } from './modules/search/fetch';
// getStartingArray().then(() => {
//   renderMoviesList(startingArr);
// });
// refs.buttonRefHome.addEventListener('click', () => {
//   getStartingArray().then(() => {
//     renderMoviesList(startingArr);
//   });
// });
refs.formRef.addEventListener('submit', fetchFilmOfSearch);
refs.buttonRefHome.addEventListener('click', onClickHomeButton);
refs.buttonRefLibrary.addEventListener('click', onClickMyLibraryButton);
refs.galleryListRef.addEventListener('click', openFilmInfoOnPosterClick);
