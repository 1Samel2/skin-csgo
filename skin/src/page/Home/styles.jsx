import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;
  background: #060D25;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;

  h1 {
    color: white;
    font-size: 2rem;

    @media only screen and (max-width: 600px) {
      font-size: 24px;
      padding-top: 8px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin: 12px;
  }
`;

export const Line = styled.div`
  border: 1px solid #060f2c;
`;
