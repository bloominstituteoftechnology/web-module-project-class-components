import React from 'react';

import './Todo.css'

export default function ToDo(props){

    const toggleComplete =()=>{
        props.toggleComplete(props.todo.id)
    }
    return(
        <div onClick={toggleComplete} className={`Task ${props.todo.completed ? 'completed' : ''}`}>
            <p>
                {props.todo.task}
            </p>
        </div>
    )
}