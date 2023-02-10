import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #060d26;

  button {
    margin: 20px;
    width: 90px;
    height: 50px;
    border-radius: 5px;
    background: #001434;
    color: white;
    border: none;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 100px;
  gap: 50px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
  }
`;
export const ContainerImg = styled.div`
  background: #001434;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px black;

  img {
    width: 200px;
    height: 100px;
    object-fit: contain;
  }
`;

export const ContainerInfo = styled.div`
  background: #001434;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px black;
`;
