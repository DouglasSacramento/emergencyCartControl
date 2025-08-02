import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Exo 2", sans-serif;
    transition: linear 0.02s;
  }

  :root {
    --primary-color: #06283D;
    --white-color: #DFF6FF;
    --black-color: #000;

    font-size: 62.5%;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  body {
    font-size: 1.6rem;
    overflow-y: overlay;
    overflow-x: hidden;
    background-color: #F7F7F7

    #emptyCart {
      color: #ad3939;
      text-align: center;
      margin-top: 16rem;

      @media (max-width: 760px) {
      font-size: 2.5rem;
      }
    }
    overflow-x: hidden;   
    background-color: #f4f4f4 ;
  }  
`;
