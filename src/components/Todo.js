import React, {useState} from 'react';

const Todo = props => {
    const Click = ()=> {
        props.ToggleComplete(props.item.id);
    }

    return (
        <div onClick={Click} className={`task${props.item.complete ? ' complete' : ''}`}>
          <p>{props.item.task}</p>
        </div>
    );
};

export default Todo;