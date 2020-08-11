import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './style/global';
function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle></GlobalStyle>
    </BrowserRouter>
  );
}

export default App;
