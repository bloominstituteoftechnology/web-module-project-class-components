import React from 'react';
import './Todo.css';

const Todo = (props) => {
    
    const toggleDone = () => {

        props.handleDone(props.item.id);
    }

    return(
        <div onClick={toggleDone} className={props.item.completed ? 'done' : 'notdone'}>
            {props.item.task}
        </div>
    )
}

export default Todo;