import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const DogDetails = () => {

   const location = useLocation();
    const { dogId } = useParams();
    // console.log(dogId);

    // useEffect(() => {
    //HTTP запрос 
    // }, [])

    console.log(location);
    return (
    <>
      <h2>DogDetails: {dogId}</h2>
      <Link to={location.state?.fromn ?? "/dogs"}>Назад к странице коллекции</Link>
      {/* {location.state && location.state.from === location.state?.from} */}
        <ul>
            <li>
                <Link to="subbreads">Подпороды</Link>
            </li>
            <li>
                <Link to="gallery">Галлерея</Link>
            </li>
        </ul>
        <Outlet />
    </>
    )

    
  
}

export default DogDetails;  