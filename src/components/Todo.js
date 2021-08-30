import React from 'react';

const Todo = props => {

    return (
        <div onClick={() => props.handleToggle(props.item.id)} >
            {props.item.task}
        </div>
    )
}

export default Todo;