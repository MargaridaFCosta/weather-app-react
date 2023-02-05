import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <div className="card">
      <div className="card-body">
        <App />
      </div>
    </div>
    <footer>
      This project was coded by{" "}
      <a
        href="https://bejewelled-selkie-c4b494.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Margarida Costa
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/MargaridaFCosta/weather-app-react"
        target="_blank"
        rel="noreferrer"
      >
        GitHub{" "}
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://harmonious-cheesecake-6fde0a.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify{" "}
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
