import { MovieContainer, PosterImage, MovieDetails, NoImage, MovieTitle, InfoParagraph, OverviewHeading, GenresHeading, GenreList, GenreItem } from "./MovieInfo.styled";

export const MovieDetailsComponent = ({ movieInfoDetails }) => {
    const { title, original_title, release_date, overview = 'There is no overview', popularity, genres = [], poster_path, status,} = movieInfoDetails;


    const date = new Date(release_date).getFullYear();

    return (
        <MovieContainer>
            {poster_path ? (
                <PosterImage src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="poster" />
            ) : (
                <NoImage>No image</NoImage>
            )}
            <MovieDetails>
                <MovieTitle>
                    {title}/{original_title}
                </MovieTitle>
                <InfoParagraph>
                    <b>Release date:</b> {date}
                </InfoParagraph>
                <InfoParagraph>
                    <b>User Score:</b>
                    {Math.round(popularity)} %
                </InfoParagraph>
                <InfoParagraph>
                    <b>Status:</b> {status}
                </InfoParagraph>
                <OverviewHeading>Overview</OverviewHeading>
                <p>{overview}</p>
                <GenresHeading>Genres</GenresHeading>
                <GenreList>
                    {genres.map(genre => (
                        <GenreItem key={genre.id}>{genre.name}</GenreItem>
                    ))}
                </GenreList>
                </MovieDetails>
            </MovieContainer>
    );

};
