import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    border:none;
    outline:none;
    font-family: 'Varela Round', sans-serif;
    
}
@keyframes move {
    50%{background-position:50% ;}
}

`;

export default Global