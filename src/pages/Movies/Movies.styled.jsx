import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

export const NoResultsMessage = styled.div`
  color: #ff0000;
  font-size: 18px;
  margin-top: 20px;
`;