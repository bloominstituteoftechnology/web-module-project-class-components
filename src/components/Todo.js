import React from 'react';

const Todo = props => {  
    
   const handleClick = () => {
        props.toggleItem(props.item.id)
    }

    return (
        <div 
            onClick={handleClick}
            className={`item ${props.item.completed ? 'completed' : ''}`}
        >
            <h3>{props.item.task}</h3>  
        </div>    
    )   
}

export default Todo;