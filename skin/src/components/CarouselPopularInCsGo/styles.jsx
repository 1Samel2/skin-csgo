import styled from "styled-components";

export const Container = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 240px;
    background-color: #001434;
    padding: 10px;
    border-radius: 5px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

export const DivContent = styled.div`
  
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 15px;

  p {
    margin-bottom: 0 !important;
  }
`;

export const Rarity = styled.p`
margin-top: 10px;
color: #312B63;

`;

export const Title = styled.p`
font-weight: bold;
color: white;
`;

export const Description = styled.p`
color: #1D3150;
font-family: 200;
`;

export const Price = styled.p`
font-weight: bold;
font-size: 30px;
color: white;
`;

export const Button = styled.button`
    margin-top: 10px;
    background-color: #137FE5;
    color: white;
    height: 40px;
    border-radius: 5px;
    border: 0;
`