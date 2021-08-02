// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//.map
import React from 'react';
import TodoTask from './Todo'

const TodoList =props=> {
    const handleClick=()=>{
        props.handleClear();
    }
    return (
        <div >
            {props.thingsToDo.map(item=> (
                <TodoTask handleCompleted={props.handleCompleted} key={item.id} item={item}/>
            ))}
            <button onClick={handleClick}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList