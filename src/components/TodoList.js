// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
   
    const Click = ()=> {
        props.Clear();
    }

    return (
        <div className='todo-list'>
          {props.task.map(item => (
              <Todo ToggleComplete={props.ToggleComplete} key={item.id} item={item} />
          ))}
          <button onClick={Click} className="clear-btn">Clear Complete</button>
        </div>
    );
};

export default TodoList;