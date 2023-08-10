import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './css/bootstrap.min.css';
import './css/bootstrap.min.css.map';
import './css/bundle.css';
import './css/plugin.css';
import './css/responsive.css';
import './css/style.css';
// import Product from './product/listProduct.js';
// import Router from './router/router';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
