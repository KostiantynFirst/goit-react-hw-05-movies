import { MovieContainer, PosterImage, MovieDetails, NoImage, MovieTitle, InfoParagraph, OverviewHeading, GenreList, GenreItem } from "./MovieInfo.styled";

export const MovieInfo = ({ movieInfoDetails }) => {
    const { title, original_title, release_date, overview = 'There is no overview', popularity, genres = [], poster_path, status,} = movieInfoDetails;
}

const date = new Date(release_date).getFullYear();