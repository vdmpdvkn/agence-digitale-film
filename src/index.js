import { refs } from './modules/refs';
import _debounce from 'debounce';
import { onClickMyLibraryButton } from './modules/header/button-my-library';
import { onClickHomeButton } from './modules/header/button-home';
import { onClickButtonWatched } from './modules/header/button-watched';
import { onClickButtonQueue } from './modules/header/button-queue';
import { openFilmInfoOnPosterClick } from './modules/film-info/openFilmInfoOnPosterClick';
import { errorSearch } from './modules/search/search';
import { startingRender } from './modules/starting-fetch/starting-fetch';
import { fetchFilmOnSearch } from './modules/search/search';
import { toggleTheme, setSavedTheme } from './modules/theme-switcher/theme';

setSavedTheme();
refs.switchThemeRef.addEventListener('click', toggleTheme);
refs.buttonRefWatched.addEventListener('click', onClickButtonWatched);
refs.buttonRefQueue.addEventListener('click', onClickButtonQueue);
refs.formRef.addEventListener('submit', fetchFilmOnSearch);
refs.buttonRefHome.addEventListener('click', onClickHomeButton);
refs.buttonRefLibrary.addEventListener('click', onClickMyLibraryButton);
refs.galleryListRef.addEventListener('click', openFilmInfoOnPosterClick);
refs.errorSearchRef.addEventListener('input', _debounce(errorSearch, 250));

startingRender();
import './modules/theme-switcher/theme';
import './modules/modal-team/modalTeamOpenClose';
