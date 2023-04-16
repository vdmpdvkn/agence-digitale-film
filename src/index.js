import { refs } from './modules/refs';

import { onClickMyLibraryButton } from './modules/header/button-my-library';
import { onClickHomeButton } from './modules/header/button-home';
import { onClickButtonWatched } from './modules/header/button-watched';
import { onClickButtonQueue } from './modules/header/button-queue';
import { openFilmInfoOnPosterClick } from './modules/film-info/openFilmInfoOnPosterClick';
// import { getStartingArray } from './modules/starting-fetch/starting-fetch';
// import renderMoviesList from './modules/html-render';
import { startingRender } from './modules/starting-fetch/starting-fetch';
import { fetchFilmOfSearch } from './modules/search/fetch';

import { pagination } from './modules/pagination/pagination';
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
refs.buttonRefWatched.addEventListener('click', onClickButtonWatched);
refs.buttonRefQueue.addEventListener('click', onClickButtonQueue);

startingRender();
import './modules/modal-team/modalTeamOpenClose';
