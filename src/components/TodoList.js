// your components will all go in this `component` directory. ??? what does this mean ???
// feel free to change this component.js into TodoList.js

import React from "react";
// ??? exactly why are we pulling Todo in here ??? is it because of the map only
import Todo from "./Todo";

const TodoList = props => {
    // for sorting the list based whether a task has been completed or not
    return (
        <div>
            {/* ??? don't 100% get what this is doing ??? */}
            {props.todos.map(item => (
              <Todo key={item.id} item={item} toggleFinished={props.toggleFinished} />   
             ))}
            
            <button onClick={props.clearCompleted} className="">Clear Completed</button>
        </div>
    );
};

export default TodoList;