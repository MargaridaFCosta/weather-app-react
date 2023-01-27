import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col className="current-city">
            <span>Lisbon</span>
          </Col>
          <Col>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
              alt="clear sky"
            />
            <strong className="celsius">{props.temperature}ºC</strong>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
