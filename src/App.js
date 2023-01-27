import "./styles.css";

import Form from "./Form";
import Description from "./Description";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Form />
      <Weather temperature={12} />
      <Description humidity={80} wind={5} />
    </div>
  );
}
