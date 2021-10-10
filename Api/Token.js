

const API_TOKEN = "e3dab14bf6cb1e2b712c6022b0fc95b0";

const  getFilmsFromApiWithSearchedText = (text)  => {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}
export default getFilmsFromApiWithSearchedText


