import React from "react";


export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h2>{props.data.city}</h2>
        <p> {Math.round(props.data.temperature)} ºC</p>
        <img alt="icon" src={props.data.icon} />
      </div>
      <div className="col-6">
        <ul>
          <li> Description: {props.data.description} </li>
          <li> Humidity: {Math.round(props.data.humidity)} % </li>
          <li> Wind: {Math.round(props.data.wind)} Km/h </li>
        </ul>
      </div>
    </div>
  );
}
