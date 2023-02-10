import styled from "styled-components";

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;


  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DivAlign = styled.div`
  background: #001334;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  p {
    margin-bottom: 0;
  }

  img {
    width: 200px;
    height: 100px;
    object-fit: contain;
  }

  span {
    color: ##2d3e59;
  }
`;

export const Rarity = styled.p`
  margin-top: 10px;
  color: #312b63;
`;

export const Title = styled.p`
  font-weight: bold;
  color: white;
`;

export const Description = styled.p`
  color: #1d3150;
  font-family: 200;
  padding-bottom: 40px;
`;

export const Price = styled.p`
  margin-top: 40px;
  font-weight: bold;
  font-size: 30px;
  color: white;
`;
