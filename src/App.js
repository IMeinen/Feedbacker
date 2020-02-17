import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
