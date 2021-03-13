import React from 'react';
//<div onClick={()=> props.toggleCompleted(props.thingToDo.id)}className=>
const Todo = props => {
    return (
        <div onClick={() => props.toggleCompleted(props.thingToDo.id)}className={`task${props.thingToDo.completed ?' completed' : ''}`}>
            <p>{props.thingToDo.task}</p>
        </div>
    )
}

export default Todo;