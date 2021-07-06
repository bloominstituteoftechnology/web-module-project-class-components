import React from 'react';

function Todo(props) {
    return(
        <div>
            <p onClick = {() => props.toggleItem(props.todo.id)}>{props.todo.task}</p>
        </div>
    )
}

export default Todo;