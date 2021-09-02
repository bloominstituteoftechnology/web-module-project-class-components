// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import Todo from "./Todo"

function TodoList (props) {

  



    return (
       <div>
          {props.tasks.map(task => (
             <Todo key={task.id} tasks={task} completed={props.completed} />
          ))}
       </div>
    )
};

export default TodoList;