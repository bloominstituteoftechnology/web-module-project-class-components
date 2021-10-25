import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.todo.map(item => {
                return <Todo key = {item.id} 
                             toggleItem ={props.toggleItem}
                             item = {item}
                        />
            })}
        </div>
    )
}

export default TodoList;