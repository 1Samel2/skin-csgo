import styled from "styled-components";

export const Container = styled.main``;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 0 8%;

  h1 {
    color: white;
    font-size: 2rem;

    @media only screen and (max-width: 600px) {
      font-size: 24px;
      padding-top: 8px;
    }
  }


  @media only screen and (max-width: 600px) {
    margin: 12px 0 0 4%;
  }

`;
