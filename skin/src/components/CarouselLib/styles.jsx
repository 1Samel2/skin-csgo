import styled from "styled-components";

export const Container = styled.div`
  .carousel {
    margin: 70px;
    @media only screen and (max-width: 600px) {
      margin: 10px;
      margin-top: 40px;
    }
  }

  .carousel-indicators {
    margin-bottom: -4rem;
    button {
      border-radius: 100%;
      width: 10px;
      height: 10px;
    }

    @media only screen and (max-width: 600px) {
      margin-bottom: -3rem;
    }
  }

  .carousel-control-next,
  .carousel-control-prev {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
