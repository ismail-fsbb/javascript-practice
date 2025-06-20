import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import Drilling from './Drilling';
import App from './dynamic-route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Nav />
    <Drilling />
    <h2>Dynamic Route</h2>
    <App />
  </BrowserRouter>  
);
