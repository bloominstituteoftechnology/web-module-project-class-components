// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState } from 'react';
import styled from 'styled-components'

import Todo from './Todo'

const TodoList = props => {

  const handleClick = ()=> {
    props.handleClear();
  }

  return (
    <ListStyle className="todo-list">
      {props.tasks.map(item => (
        <Todo toggleComplete={props.toggleComplete} key={item.id} item={item} />
      ))}
      {/* <div className='btn-container'> */}
      <button onClick={handleClick} className="clear-btn">
        Clear All
      </button>
      {/* </div> */}
    </ListStyle>
  );
};

export default TodoList;

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .clear-btn{
        width: 25%;
        height: 7vh;
        margin-bottom: 5%;
        margin-right: 2%;
        border-radius: 5rem;

    }
`