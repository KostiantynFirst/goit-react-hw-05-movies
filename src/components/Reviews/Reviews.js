import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "components/movie-api";

const Reviews = () => {
    const {movieId} = useParams;
    const [reviewsDetails, setReviewsDetails] = useState;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!movieId) {
            return;
        }

        const getReviewsDetails = async () => {
            const res = await getReviews(movieId);
            
        }
    })

}

export default Reviews;