import { API_KEY, BASE_URL } from '../api_key';

import { Notify } from "notiflix";

export async function fetchSearchFilms() {
  return await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}`)
  .then(response  => {
    if (response.status === 404) {
      throw new Error(Notify.failure('Search result not successful. Enter the correct movie name.'));
    }
    return response.json();
  });
}

// let language = 'en-US';

//  export async function fetchSearchFilms() {
//     try {
//       const response = await fetch(
//         `${BASE_URL}search/movie?api_key=${API_KEY}`,
//       );
//       const data = await response.json();
//       const results = await data;
//       return results;
//     } catch (error) {
//       error;
//     }
//   }

// export async function fetchTrailer(id) {
//     try {
//       const response = await fetch(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=${language}`);
//       const data = await response.json();
//       const results = await data
//       return results;
//     } catch (error) {
//       error
//     }
//   }
