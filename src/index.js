import { refs } from './modules/refs';
import { onClickMyLibraryButton } from './modules/button-my-library';
import { onClickHomeButton } from './modules/button-home';
import './modules/starting-fetch/starting-fetch';
import { openFilmInfoOnPosterClick } from './modules/film-info/openFilmInfoOnPosterClick';
refs.galleryListRef.addEventListener('click', openFilmInfoOnPosterClick);
