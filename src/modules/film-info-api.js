import { API_KEY, BASE_URL } from './api_key';
async function getFilmInfo(id) {
  const data = await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`).then(r => {
    return r.json();
  });
  console.log(data);
}
getFilmInfo(594767);
function renderFilmInfo() {}
