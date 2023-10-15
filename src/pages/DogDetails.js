import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const DogDetails = () => {
    const { dogId } = useParams();
    // console.log(dogId);

    // useEffect(() => {
    //HTTP запрос 
    // }, [])

    return (
    <>
      <h1>DogDetails: {dogId}</h1>
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