// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react' 
import Todo from './Todo'

const TodoList = (props) => {

    const handleClick = () => {
        props.handleCompletedTask()
    }
    return (
        <div className='todo-list'>
        {props.todoItems.map((todo) => (
            <Todo
            key={todo.id}
            todo={todo}
            handleToggleTask={props.handleToggleTask}
            />
        ))}
        <button className='clear-button' onClick={handleClick}>Clear Completed Tasks</button>
        </div>
    )
}
export default TodoList