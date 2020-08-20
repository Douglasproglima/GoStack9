import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
/* import { Bounce, Slide, Flip, Zoom } */
import { ToastContainer, Flip } from 'react-toastify';
import './config/ReactotronConfig';

import Routes from './routes';
import GlobalStyle from './style/global';
import Header from './components/Header';
import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      {/* <Router history={history}> */}
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer
          className="toast-container"
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
          draggable={true}
          progress={undefined}
          transition={Flip}
        />
      {/* </Router> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
