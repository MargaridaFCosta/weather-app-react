import React from "react";

import "./Form.css";

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
  crossorigin="anonymous"
></script>;

export default function Form() {
  return (
    <div className="form">
      <form>
        <input
          className="form-group"
          type="text"
          placeholder="Enter a city"
          autoComplete="off"
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );
}
