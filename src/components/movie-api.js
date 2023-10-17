import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = process.env.REACT_APP_CAT_API_KEY;

export const getTrendingMovies = async () => {
  const res = await axios.get(
    `trending/movie/day?`, {
        params: {
            api_key: KEY,
        }
    }
  );
 return res;
}

// export const getMovie = async () => {
//   const res = await axios.get('/breeds', 
// );
//   return res.data
// }