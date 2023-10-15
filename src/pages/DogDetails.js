import { useParams } from "react-router-dom";

const DogDetails = () => {
    const { dogId } = useParams();
    console.log(dogId);
    return <>DogDetails: {dogId}</>
}

export default DogDetails;  