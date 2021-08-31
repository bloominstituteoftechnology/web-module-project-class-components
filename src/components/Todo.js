import React, { useState } from 'react';
import styled from 'styled-components'
import './Todo.css'

const Todo = props => {
    console.log(props)
  const handleClick = ()=> {
    props.toggleComplete(props.item.id);
  }

  return (
    <TodoStyle onClick={handleClick} >
      <p className={`item${props.item.completed ? ' completed' : ''}`}>{props.item.task}</p>
    </TodoStyle>
  );
};

export default Todo;


const TodoStyle = styled.div `
/* background-color: ; */
height: auto;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
color: #000000;

.completed{
    text-decoration: line-through;
    background-color: rgba(255, 170, 0, 0.5);
}
p{
    cursor: pointer;
}
`