import { useEffect, useState } from "react";
import { getTrendingMovies } from "components/movie-api";
import { MovieList, MovieItem } from "./Home.styled";

const Home = () => {

    const [trandingMovies, setTrandingMovies] = useState([]);

    useEffect(() => {

    const fetchData = async () => {
        try {
            const movies = getTrendingMovies();
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
        <MovieList>
            {trandingMovies.map(({id, title}) => (
                <MovieItem key={id}>
                    <h2>{title}</h2>
                </MovieItem>
            ))} 
        </MovieList>
    );
};

export default Home;