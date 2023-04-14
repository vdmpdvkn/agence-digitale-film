import { refs } from './modules/refs';
import { onClickMyLibraryButton } from './modules/header/button-my-library';
import { onClickHomeButton } from './modules/header/button-home';

import { openFilmInfoOnPosterClick } from './modules/film-info/openFilmInfoOnPosterClick';
import './modules/starting-fetch/starting-fetch';
refs.galleryListRef.addEventListener('click', openFilmInfoOnPosterClick);
