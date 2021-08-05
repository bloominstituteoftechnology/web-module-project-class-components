import React from 'react';


const ToDo = props => {
    
    return (
        <div style={{display: "flex", alignItems: "center"}} onClick={() => props.toggleCompleted(props.id)} >
            <p className={`${props.completed ? 'completed' : 'defaultItem'}`}>{props.task}</p>
        </div>
    )
}

export default ToDo;