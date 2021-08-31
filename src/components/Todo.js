import React, { useState } from 'react';

const Todo = (props) => 

{
    const handleClick = () => {
        console.log(props.chore.name, props.chore.id);
        props.handleCompleted(props.chore.id);
      }
    

    return (
        <h2 onClick={handleClick} className={`chore${props.chore.completed ? 'Completed' : ''}`}>
          {props.chore.name}
        </h2>
      )
    }

export default Todo;
