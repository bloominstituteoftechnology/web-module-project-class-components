// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";


const TodoList = (props) => {
    console.log(props.TodoData, "From List");

    {let list = props.TodoData.map((teacher) => {
      return (
          <Todo key={teacher.id} task = {teacher.task} completed = {teacher.completed} />
      );
    }); 
    
    return (
      <div className="main-content">
        <h2>Teachers</h2>
        <ul className="group">
          {list}    
        </ul>
      </div>
    );
  }
}

export default TodoList;