import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'normalize.css'
import { BrowserRouter} from 'react-router-dom';
import {GlobalStyles} from './global-styles.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyles/>
    <App />
  </BrowserRouter>
);
