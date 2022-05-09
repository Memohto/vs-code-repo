import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

localStorage.setItem("baseURL", "http://150.230.35.17");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

