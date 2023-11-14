import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.font.primary};
    }

    *::after{
        box-sizing: border-box;
    }
    *::before{
        box-sizing: border-box;
    }
    *:focus{
        outline:0;
    }

    body{              
        -webkit-font-smoothing: antialiased;
        background: ${props => props.theme.colors.baseProduct2};
        color: ${props => props.theme.colors.baseProduct3};
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button{
        cursor: pointer;
    }

     ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.baseProduct2};
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.baseProduct1};
      border-radius: 20px;
    }

    @supports (font: -apple-system-body) and (-webkit-appearance: none) { img[loading="lazy"] { clip-path: inset(0.6px) } }
`;
