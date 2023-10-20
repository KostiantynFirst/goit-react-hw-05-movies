import { useEffect, useState, useRef, Suspense} from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesInfo } from "components/movie-api";
import { MainWrapper, BackLink, InfoBox, InfoLinksList, InfoItemLink } from "./MovieDetails.styled";


const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from);
    const { movieId } = useParams();
   

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
    // console.log(location);
    
    
    return (

        <MainWrapper>
            <BackLink to={backLinkLocation.current ?? '/'}>
            Go back
            </BackLink>

            <InfoBox>
                <p>Additional information</p>
                <InfoLinksList>
                    <li>
                        <InfoItemLink to={'cast'}>Cast</InfoItemLink>
                    </li>
                    <li>
                        <InfoItemLink to={'reviews'}>Reviews</InfoItemLink>
                    </li>

                </InfoLinksList>

            </InfoBox>

        <Suspense fallback={<div>Loading...</div>}>
             <Outlet />
         </Suspense>

        </MainWrapper>

    );

    
  
};

export default MovieDetails;  