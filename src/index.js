import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Footer from "./Footer";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Wheater App</h1>
    <div className="card">
      <div className="card-body">
        <App />
      </div>
    </div>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();