import React, {useState} from 'react';
import styled from 'styled-components';

const StyledTodo = styled.div`
display:flex;
flex-direction:column;
   .task{
    display:flex;
    flex-direction:row;
    justify-content: center;
    justify-content: space around;
    border:black 1px solid;
    padding-top:10px;
    padding-bottom:10px;
    background-color:lightblue;
    border-radius:10px;
   }
   .task:hover{
       background-color:lightgreen;
   }
`

const Todo = props => {
    const Click = ()=> {
        props.ToggleComplete(props.item.id);
    }

    return (
        <StyledTodo>
        <div onClick={Click} >
          <p className={`task ${props.item.complete ? 'complete' : ''}`}>{props.item.task}</p>
        </div>
        </StyledTodo> 
    );
};

export default Todo;