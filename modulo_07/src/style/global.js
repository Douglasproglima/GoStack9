import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:400&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root  {
    margin: 0 auto;
    ${'' /* max-width: 1020px; */}
    ${'' /* padding: 0 20px 50px; */}
    min-height: 100%;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #f47b00;
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
