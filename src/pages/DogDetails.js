import { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

const DogDetails = () => {

    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? "/dogs");
    const { dogId } = useParams();
    // console.log(dogId);

    // useEffect(() => {
    //HTTP запрос 
    // }, [])

    console.log(location);
    return (
    <>
      <h2>DogDetails: {dogId}</h2>
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

export default DogDetails;  