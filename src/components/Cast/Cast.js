import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from "components/movie-api";

const Cast = () => {

    const {movieId} = useParams;
    const [castData, setCastData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if(!movieId) {
            return;
        }

        const getCAstDetails = async () => {
            
        }

    })






}



export default Cast