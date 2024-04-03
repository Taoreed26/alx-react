import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, then you have to pass a function
// to log results (for example: reportWebVitals(console.log))
// or if you will send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
