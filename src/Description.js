import React from "react";

import "./Description.css";

export default function Description(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">Wednesday, 11 January, 22:18</div>
        <br />
        <div className="col">
          <ul>
            <li>
              <strong className="description">Clear Sky</strong>
            </li>
            <li>Humidity: {props.humidity} %</li>
            <li>Wind: {props.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
