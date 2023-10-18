import { useEffect, useState, useRef, Suspense} from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesInfo } from "components/movie-api";


const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? "/dogs");
    const { movieId } = useParams();
    // console.log(dogId);

    useEffect(() => {
        if(!movieId){
            return;
        }

        const getMovieDetails = async () => {
            const res = await getMoviesInfo(movieId);
            if (res.data.length === 0) {
                return;
            }
            setMovieDetails(res.data);
        }
        
        getMovieDetails();


    }, [movieId]);


    console.log(movieDetails);
    console.log(location);
    return (
    <>
      <h2>movieDetails: {movieId}</h2>
      <Link to={backLinkLocation.current}>Назад к странице коллекции</Link>
      {/* {location.state && location.state.from === location.state?.from} */}
        <ul>
            <li>
                <Link to="subbreads">Подпороды</Link>
                {/* {state={{from: location.state.from}}} */}
            </li>
            <li>
                <Link to="gallery">Галлерея</Link>
            </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </>
    )

    
  
}

export default MovieDetails;  