import React from "react";
import styled from 'styled-components';
import Item from "./Todo";

const List = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 80%;
height:80%;
`

const TodoList = (props) => {
  
  return (
    <List>
        {props.toDo.map((item) => (
            <Item id={item.id} item={item.task} completed={item.completed} toggleItem={props.toggleItem} />
            
        ))}
        <button onClick={props.clear} >Clear</button>
    </List>
  );
};

export default TodoList;