import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    border-top: 1px solid #060f2c;
    border-bottom: 1px solid #060f2c;
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
    width: 200px;
    height: 100px;
    object-fit: contain;
  }

  .swiper-pagination-bullet {
    background-color: white;
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
  font-weight: bold;
  font-size: 30px;
  color: white;
  margin-top: 40px;
`;

export const Button = styled.button`
  margin-top: 10px;
  background-color: #137fe5;
  color: white;
  height: 40px;
  border-radius: 5px;
  border: 0;
`;

export const ContainerLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`;

export const H3 = styled.h3`
  color: white;
`;

export const LinkPage = styled(Link)`
  color: white;

  &:hover {
    color: #137fe5;
  }
`;
