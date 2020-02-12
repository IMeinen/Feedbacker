import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #285AEB;
  }

  h1{
    font-size: 18px;
  }
  button {
    cursor: pointer;
  }
`;
