import styled from "styled-components";

export const MovieContainer = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    gap: 20px;
    padding: 20px;
`;

export const PosterImage = styled.img`
    width: 300px;
    height: auto;
    border: 1px solid #ccc;
`;

export const MovieDetails = styled.div`
    flex: 1;
`;

export const NoImage = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    color: #fff;
    border: 1px solid #ccc;
`;

export const MovieTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
`;

export const InfoParagraph = styled.p`
    margin-bottom: 10px;
`;

export const OverviewHeading = styled.h2`
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const GenreList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const GenreItem = styled.li`
    font-size: 16px;
    margin-bottom: 5px;
`