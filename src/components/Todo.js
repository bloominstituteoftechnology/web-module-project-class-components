import React from 'react';


const Todo = props => {
    let color = 'none';

    if (props.item.completed) {
        color = 'line-through'
    }

    return (
        <div onClick={() => props.toggleCompleted(props.item.id)} style={{textDecoration: color, backgroundColor: 'red'}}>
            {props.item.task} 
        </div>
    )


}

export default Todo;