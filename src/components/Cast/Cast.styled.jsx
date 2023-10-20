import styled from "styled-components";

export const Container = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
`;

export const MovieInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const Actorcard = styled.div`
    max-width: 200px;
    text-align: center;
`;

export const ActorImage = styled.img`
    width: 100%;
    height: auto;
`;

export const NoImage = styled.div`
    background-color: #ccc;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
`;

export const Message = styled.div`
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
`