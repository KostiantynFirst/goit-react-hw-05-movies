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
      }
    });
    return res;
  
  } catch (error) {
    console.log('error', error);
}
}

// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

export const getMovieSearch = async (search) => {
  try {
    const res = await axios.get(`/search/movie`, {
      params: {
        api_key: MOVIEKEY,
        adult: false,
        language: 'en-US',
        page: 1,
      }
    });
    return res;
    
  } catch (error) {
      console.log('error', error);
  }
}