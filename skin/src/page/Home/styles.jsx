import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;
  background: #060d25;
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const Header = styled.div`
  text-align: center;
  
  h1 {
    color: white;
    font-size: 5rem;

    @media only screen and (max-width: 600px) {
      font-size: 24px;
      padding-top: 8px;
    }
  }
`;

export const Line = styled.div`
  border: 1px solid #060f2c;
`;
