import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from "components/movie-api";
import { Container, MovieInfo, Actorcard, ActorImage, NoImage, Message } from "./Cast.styled";

const Cast = () => {

    const {movieId} = useParams();
    const [castData, setCastData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if(!movieId) {
            return;
        }

        const getCastDetails = async () => {
            const res = await getCast(movieId);
            setCastData(res.data.cast);
            setLoading(false);
        }

        getCastDetails();

    }, [movieId]);


return (
    <Container>
        {loading && <MovieInfo>Loading...</MovieInfo> }
        {loading && (
            <MovieInfo>
              {castData.map(({id, character, name, profile_path}) => {
                return (
                    <Actorcard key={id}>
                        {profile_path ? (
                          <ActorImage src={'https://image.tmdb.org/t/p/w500' + profile_path} alt={name} />  
                        ) : (
                            <NoImage>Image not found</NoImage>
                        )}
                        <p>
                            <b>Character: </b>
                            {character}
                        </p>
                        <p>
                            <b>Name: </b>
                            {name}
                        </p>

                    </Actorcard>
                );
              })}  
            </MovieInfo>
            )}
             {!loading && castData.length === 0 && <Message> We don't have information for this movie</Message>}

    </Container>

    );
};

export default Cast;