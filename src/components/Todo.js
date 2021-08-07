// this Component is for sending props up when task is completed
import React from 'react';

const Todo = props => {
    return (
        // ??? not exactly sure what this is doing ???
        // line 8 is supposed to be adding the .done class which adds a strike-through if item is completed, still confused ???
        <div onClick={ () => props.toggleFinished(props.item.id)}
        className={`done${props.item.completed ? ' completed' : ''}`}
        // className="done"
        >
           
            
           
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;