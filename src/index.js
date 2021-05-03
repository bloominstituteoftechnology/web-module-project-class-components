import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";

const todo = [
  {
    name: "Drink Whiskey",
    id: 1,
    finished: false,
  },
  {
    name: "Play Call of Duty",
    id: 2,
    finished: false,
  },
  {
    name: "Code",
    id: 3,
    finished: false,
  },
  {
    name: "More Coding",
    id: 4,
    finished: false,
  },
  {
    name: "Even More Coding",
    id: 5,
    finished: false,
  },
];

ReactDOM.render(<App />, document.getElementById("root"));
