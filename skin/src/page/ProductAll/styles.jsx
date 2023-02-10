import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: #060d25;
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  a {
    color: white;
    font-size: 2rem;
    text-decoration:none;
    cursor: pointer;
    
    @media only screen and (max-width: 600px) {
      font-size: 24px;
      padding-top: 8px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin: 12px;
  }
`;

export const DivItemsLink = styled.ul`
 padding-top: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
  color: white;
  list-style-type: none;
  cursor: pointer;
  padding-left: 0;
`;



export const DivAlign = styled.div`
display:flex;
justify-content: space-around;

@media only screen and (max-width: 600px) {
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
`