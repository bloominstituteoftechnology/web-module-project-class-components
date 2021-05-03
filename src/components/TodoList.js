import React from "react";
import Todo from "./Todo";
import '../components/Todo.css';

const TodoList = props =>{

    return(
        <div className ="todo-list">
            {props.todo.map(item =>(
                <Todo key ={item.id} toggleItem = {props.toggleItem} item = {item}/>
            ))}
        </div>
    );
}

export default TodoList;