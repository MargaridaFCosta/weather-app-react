import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="text-center">{props.data.city}</h2>
      <FormattedDate date={props.data.date} />
      <img alt="icon" src={props.data.icon} className="icon" />
      <WeatherTemperature celsius={props.data.temperature} />

      <div className="row">
        <div className="col-6">
          <ul>
            {" "}
            <li> Feels like: {Math.round(props.data.feels)} ºC</li>
            <li className="text-capitalize">
              {" "}
              Description: {props.data.description}{" "}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="text-center">
            <li> Humidity: {Math.round(props.data.humidity)} % </li>
            <li> Wind: {Math.round(props.data.wind)} Km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
