import { API_KEY, BASE_URL } from '../api_key';

export default async function getFilmInfo(id) {
  return await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(r => {
    return r.json();
  });
}
