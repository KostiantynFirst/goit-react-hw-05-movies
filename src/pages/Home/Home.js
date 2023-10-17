import { useEffect, useState } from "react";
import { getTrendingMovies } from "components/movie-api";
import { MovieList, MovieItem, MovieContainer, MovieTitle, MovieHeading} from "./Home.styled";

const Home = () => {

    const [trandingMovies, setTrandingMovies] = useState([]);

    useEffect(() => {

    const fetchData = async () => {
        try {
            const  res = await getTrendingMovies();
            const movies = res.data.results;
            console.log(movies);
            if (movies) {
                setTrandingMovies(movies);
                }
        } catch (error) {
            console.error("Error receiving data:", error);
        } 

    };
        fetchData();
    }, [])

    return (
        <MovieContainer>
            <MovieHeading>Trending today</MovieHeading>
            <MovieList>
                {trandingMovies.map(({id, title}) => (
                    <MovieItem key={id}>
                        <MovieTitle>{title}</MovieTitle>
                    </MovieItem>
                ))} 
            </MovieList>
        </MovieContainer>
    );
};

export default Home;