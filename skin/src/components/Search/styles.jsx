import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const ContainerSearch = styled.div`
border: 1px solid black;
padding: 10px;
width: 20%;
align-items: center;
border-radius: 3px;
display: flex;
background-color: #001334;

@media only screen and (max-width: 600px) {
    width: 160px;
    
}
`;

export const SearchImage = styled(SearchIcon)`
color: #0F54AA;
background: none;
margin-right:20px;
`;

export const SearchInput = styled.input`
border: none;
background: none;
color:#31405B;

@media only screen and (max-width: 600px) {
    width: 100%;
    
}
`;
