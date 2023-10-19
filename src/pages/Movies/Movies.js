import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMovieSearch } from "components/movie-api";

const Movies = () => {

const [movieSearch, setMovieSearch] = useState([]);
const [noResultsFound, setNoResultsFound] = useState(false)
 
const location = useLocation();

const [searchParams, setSearchParams ] = useSearchParams();
const query = searchParams.get('search'); 
   
// useEffect(() => {
    //HTTP запрос 
    // }, [])

const updateQueryString = e => {
    e.preventDefault();
    
    const dogIdValue = e.target.value
    if( dogIdValue === '') {
        return setSearchParams({})
    }

    setSearchParams({dogId: dogIdValue});
}


const visibleDogs = dogs.filter(dog => dog.includes(dogId));

console.log(location);
console.log(setDogs);

return (
    <div>
        <input type="text" value={dogId} onChange={updateQueryString} />
        {/* <button onClick={() => setSearchParams({c: 'hello'})}>change sp</button> */}
        <ul>
        {visibleDogs.map(dog => {
          return (
          <li key={dog}>
            <Link to={`${dog}`} state={{ from: location }}>
                {dog}
            </Link>
        </li>)
    })}
        </ul>
    </div>
    ) 

}

export default Movies;

