import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const MOVIEKEY = process.env.REACT_APP_CAT_API_KEY;

export const getTrendingMovies = async () => {

  try {
    const res = await axios.get(
      `trending/movie/day?`, {
          params: {
              api_key: MOVIEKEY,
          }
      }
    );
   return res;
  } catch (error) {
    console.log('error', error);
  }
}

export const getMoviesInfo = async (movieId) => {
  try {
    const res = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: MOVIEKEY,
        language: 'en-US' 
      }
    });
    return res;
  
  } catch (error) {
    console.log('error', error);
}
}