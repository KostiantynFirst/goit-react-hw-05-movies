import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

// https://kostiantynfirst.github.io/goit-react-hw-05-movies/dogs?dogId=4


const Dogs = () => {

const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
    ]);

const [searchParams, setSearchParams ] = useSearchParams();
const dogId = searchParams.get('dogId') ?? '';
   
// useEffect(() => {
    //HTTP запрос 
    // }, [])

const visibleDogs = dogs.filter(dog => dog.includes(dogId));

return (
    <div>
        <input type="text" value={dogId} onChange={e => setSearchParams({dogId: e.target.value})} />
        {/* <button onClick={() => setSearchParams({c: 'hello'})}>change sp</button> */}
        <ul>
        {visibleDogs.map(dog => {
          return (
          <li key={dog}>
            <Link to={`${dog}`}>
                {dog}
            </Link>
        </li>)
    })}
        </ul>
    </div>
    ) 

}

export default Dogs;

