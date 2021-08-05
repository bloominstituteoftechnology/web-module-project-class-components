// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";



const TodoList = (props) => {

    console.log(props.toggleCompleted);
    console.log(props);
    {let list = props.TodoData.map((item) => {
      return (
          <Todo id={item.id} key={item.id} task = {item.task} completed = {item.completed} />
      );
    }); 
    return (
      <div className="main-content">
        <h2>TASKS</h2>
        <ol className="taskslist">
          {list}    
        </ol>
      </div>
    );
  }
}

export default TodoList;