import { refs } from '../refs';
import fetchApi from '../api-service';
import { apiRefs } from '../api-service';
import renderMoviesList from '../html-render';

refs.formRef.addEventListener('submit', fetchFilmOfSearch);

export function errorSearch() {
  refs.alertMessage.style.display = 'none';
}
 
export async function fetchFilmOfSearch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.film.value.trim();

  const data = await fetchApi({
    param: apiRefs.SEARCH,
    page: 1,
    query: searchQuery,
  });
  const dataEl = data.total_results;
  // console.log(dataEl);
  // console.log(data);

if (searchQuery === '') {
    refs.alertMessage.textContent =
      'Searching starts after providing data to search!';
    refs.alertMessage.style.display = 'flex';
    return;
} else if (dataEl === 0) {
    refs.alertMessage.textContent =
      'Search result not successful. Enter the correct movie name!';
    refs.alertMessage.style.display = 'flex';
    return;
} else {
    refs.alertMessage.textContent =
      'Successful!';
    refs.alertMessage.style.display = 'flex';

}
refs.errorSearchRef.addEventListener('input', (errorSearch));

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




// export function errorSearch() {
//   refs.alertMessage.style.display = 'none';
//   setTimeout(() => {
//   refs.alertMessage.style.display = 'none';
//   }, 2000);
// }