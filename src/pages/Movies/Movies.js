import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMovieSearch } from "components/movie-api";
import { SearchContainer, SearchInput, ResultsList, NoResultsMessage } from "./Movies.styled";

const Movies = () => {

const [movieSearch, setMovieSearch] = useState([]);
const [noResultsFound, setNoResultsFound] = useState(false);
 
const location = useLocation();

const [searchParams, setSearchParams ] = useSearchParams();
const query = searchParams.get('search'); 
   
useEffect(() => {
if(!query) {
    setMovieSearch([]);
    return;
}

const findMovie = async () => {

    try {
        const res = await getMovieSearch(query);
        const movies = res.data.results;
            if (movies.length === 0) {
                setNoResultsFound(true);
            } else {
                setMovieSearch(movies);
            }
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
        
}

findMovie();

    }, [query])

return (
    <SearchContainer>
        <SearchInput 
            name="search" 
            type="text" 
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={query}
            onChange={(e) => setSearchParams(e.target.value)} 
        />
        {query && !noResultsFound && (
            <ResultsList>
                {movieSearch.map (({id, name, title}) => (
                 <li key={id}>
                    <Link to={`${id}`} state={{from:location}} key={id}>
                    {title} {name}
                    </Link>
                 </li>   
                ))}
            </ResultsList>
        )}
        {noResultsFound && <NoResultsMessage>Sorry, there are no results for your query!</NoResultsMessage>}

    </SearchContainer>
    ) 

}

export default Movies;

