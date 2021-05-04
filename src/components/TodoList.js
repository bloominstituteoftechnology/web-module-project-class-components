// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// receives Todo data and interates over it creating a new todo for each element in the array
import React, { useState } from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todoData.map((item) => (
        <Todo toggleTask={props.toggleTask} key={item.id} task={item} />
      ))}
    </div>
  );
};

export default TodoList;
