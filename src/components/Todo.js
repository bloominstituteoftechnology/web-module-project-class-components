import React from 'react';

const Todo = (props) => {
    
    return (
        <div>
            <h3>{props.todo.task}</h3>
        </div>
    )
}

export default Todo;