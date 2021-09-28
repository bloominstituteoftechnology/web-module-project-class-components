import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    // console.log(props);

    const handleClick = (e) => {
        e.preventDefault();
        props.handleClear();
    }
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
            <button onClick={handleClick}>Clear Completed</button>
        </div>
    )
}

export default TodoList;