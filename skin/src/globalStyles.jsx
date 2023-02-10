import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
}

.buttonAdd{
  margin-top: 10px;
  background-color: #137fe5;
  color: white;
  text-decoration: none;
  padding: 9px;
  border-radius: 5px;
  border: 0;

  &:hover{
    opacity: 0.6;
    color: white;
  }
}


`;


