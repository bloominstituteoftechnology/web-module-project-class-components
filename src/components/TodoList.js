// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.thingsToDo.map(thingToDo =>(
                <Todo key={thingToDo.id} thingToDo={thingToDo} toggleCompleted={props.toggleCompleted}/>
            ))}
            <button onClick={props.clearCompleted}>
            Clear Todo List
            </button>
        </div>
    )
}

export default TodoList;
