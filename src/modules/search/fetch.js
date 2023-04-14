import { refs } from '../refs';
import { Notify } from 'notiflix';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';

export async function fetchFilmOfSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.film.value.trim();

  if (searchQuery === '') {
    Notify.warning('Searching starts after providing data to search!');
    return;
  }
  const data = await fetchApi(apiRefs.SEARCH, '', '', searchQuery);
  console.log(data);

  renderMoviesList(data.results);
}
