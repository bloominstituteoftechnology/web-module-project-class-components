// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import ToDo from "./Todo"

const TodoList = props => {
    return (
        <div className="toDo-list">
          {props.list.map(task => (
            <ToDo handleToggleTask={props.handleToggleTask} key={task.id} task={task} />
          ))}
        </div>
      );
}

export default TodoList