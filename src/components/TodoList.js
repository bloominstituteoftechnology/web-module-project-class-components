import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    // console.log(props);
    return (
        <div>
            <h2>Todo List</h2>
            {
                props.todoItems.map(item => {
                    return (
                       <Todo key={item.id} item={item} handleToggle={props.handleToggle}/> 
                    )
                })
            }
        </div>
    )
}

export default TodoList;