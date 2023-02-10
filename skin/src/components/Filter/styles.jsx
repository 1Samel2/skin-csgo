import styled from "styled-components";

export const DivAlign = styled.div`
  display: none;
  text-align: center;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Container = styled.div`
  width: 300px;
  height: 100%;
  background: #001334;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-top: 20px;
    display: ${({ isOpenFilter }) => (isOpenFilter ? "block" : "none")};
    transition: height 0.3s ease-out;
    height: ${({ isOpenFilter }) => (isOpenFilter ? "auto" : 0)};
    overflow: hidden;
  }


  .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root{
    color:#082250;
  }
`;

export const ButtonFilter = styled.button`
  background: #147de5;
  width: 200px;
  height: 35px;
  border: 0;
  color: white;
  font-weight: 500;
  border-radius: 5px;

  &:active {
    opacity: 0.6;
  }
`;

export const AccordionContainer = styled.div`
  cursor: pointer;
`;

export const AccordionHeader = styled.div`
  color: white;

  svg {
    float: right;
    transition: transform 0.2s ease-out;
    transform: rotate(${(props) => (props.isOpen ? "0" : "180deg")});
  }
`;

export const AccordionPanel = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;


export const Line = styled.div`
 border: 1px solid #060f2c;
 margin-top: 20px;
 margin-bottom: 20px;
`