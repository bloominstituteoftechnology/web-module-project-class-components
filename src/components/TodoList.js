// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const StyledList = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;

    button{
        border-radius:10px;
        height:20vh;
    }
`


const TodoList = props => {
   
    const Click = ()=> {
        props.Clear();
    }

    return (
        <StyledList>
        <div className='todo-list'>
          {props.task.map(item => (
              <Todo ToggleComplete={props.ToggleComplete} key={item.id} item={item} />
          ))}
          <button onClick={Click} className="clear-btn">Clear Complete</button>
        </div>
        </StyledList>
    );
};

export default TodoList;