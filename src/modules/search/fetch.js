import { refs } from '../refs';
import { Notify } from 'notiflix';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';


// ref.alertMessage = document.querySelector('.header-form--search'),
refs.formRef.addEventListener('submit', fetchFilmOfSearch);

export async function fetchFilmOfSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.film.value.trim();
  e.currentTarget.reset(); 

  const data = await fetchApi({
    param: apiRefs.SEARCH,
    page: 1,
    query: searchQuery,
  });
  const dataEl = data.total_results;
  console.log(dataEl);
  console.log(data);


if (searchQuery === '') {
  refs.alertMessage.style.display = 'none';
  Notify.warning('Searching starts after providing data to search!');
  return;
} else if (dataEl === 0) {
  // refs.alertMessage.classList.add('visually-hidden');
  refs.alertMessage.style.display = 'flex';
  Notify.warning('Search result not successful. Enter the correct movie name!');
  return;

} else {
  refs.alertMessage.style.display = 'none';
  Notify.success(` We found ${data.total_results} films.`);
}
renderMoviesList(data.results);
}





// refs.formRef.addEventListener('submit', fetchFilmOfSearch);

// export async function fetchFilmOfSearch(e) {
//   e.preventDefault();
//   const searchQuery = e.currentTarget.elements.film.value.trim();

//   if (searchQuery === '') {
//     Notify.warning('Searching starts after providing data to search!');
//     return;
//   }

//   const data = await fetchApi(apiRefs.SEARCH, '', '', searchQuery);
//   console.log(data);

//   renderMoviesList(data.results);

// }
