import React from "react";
import reactDom from "react-dom";

//components
const Button = () => <button>Add!</button>;
const Display = props => <p>Score:{props.score}</p>;

// app
const App = () => (
  <div>
    <Display score="10" />
    <Button />
  </div>
);

reactDom.render(<App />, document.getElementById("app"));
