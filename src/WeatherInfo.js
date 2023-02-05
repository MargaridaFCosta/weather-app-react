import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h2>{props.data.city}</h2>
          <FormattedDate date={props.data.date} />
          <WeatherTemperature celsius={props.data.temperature} />

          <img alt="icon" src={props.data.icon} />
        </div>
        <div className="col-6">
          <ul className="text-center">
            <li className="text-capitalize">
              {" "}
              Description: {props.data.description}{" "}
            </li>
            <li> Humidity: {Math.round(props.data.humidity)} % </li>
            <li> Wind: {Math.round(props.data.wind)} Km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
