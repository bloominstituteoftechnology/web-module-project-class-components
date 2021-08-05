// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from '../components/Todo'

const TodoList = props => {

    return (
        <div className='todo-list'>
            {props.todo.map(todo => (
        <Todo toggleCompleted={props.toggleCompleted} key={todo.id} todo={todo} />
    ))}
    <button onClick={() => props.clearCompleted() } className='clear-btn'
    > Clear Completed Objective </button>
        </div>
    )
}

export default TodoList; 