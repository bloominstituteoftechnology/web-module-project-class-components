// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo.js';

const ToDoList = props => {
    
    

    return (
        <div>
            {props.ToDoTasks.map(item => (
            <ToDo id={item.id} task={item.task} completed={item.completed} toggleCompleted={props.toggleCompleted}/>
      ))}
        </div>
    )
}

export default ToDoList;