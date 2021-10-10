
const API_TOKEN = "e3dab14bf6cb1e2b712c6022b0fc95b0";
const  getFilmDetailFromApi = (id) => {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
export default getFilmDetailFromApi