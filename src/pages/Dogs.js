import { Link, useSearchParams } from "react-router-dom";

const Dogs = () => {

const [searchParams, setSearchParams ] = useSearchParams();

    // useEffect(() => {
    //HTTP запрос 
    // }, [])


    return (
    <div>
        <input type="text" />
        <button onClick={() => setSearchParams}>change sp</button>
        <ul>
        {['dog-1','dog-2','dog-3','dog-4','dog-5'].map(dog => {
          return (
          <li key={dog}>
            <Link to={`${dog}`}>{dog}</Link>;
        </li>)
    })}
        </ul>
    </div>
    ) 

}

export default Dogs;