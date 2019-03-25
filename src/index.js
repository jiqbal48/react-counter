import React from "react";
import reactDom from "react-dom";

const Button = () => <button>Add!</button>;

const Display = props => <p>Score:{props.score}</p>;

const App = () => (
  <div>
    <Display score="10" />
    <Button />
  </div>
);

reactDom.render(<App />, document.getElementById("app"));
