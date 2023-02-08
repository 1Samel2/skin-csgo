import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";

export const SignLink = styled.a`
  padding: 10px 30px;
  color: white;
  background-color: #147de5;
  align-items: center;
  display: flex;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
    font-size: 13px;
  }
`;

export const IconSign = styled(PersonIcon)`
  background: none;
  margin-right: 10px;

  @media only screen and (max-width: 600px) {
    margin-right: 5px;
  }
`;
