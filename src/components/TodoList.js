// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    const handleClick = () => {
        props.clearTodo()
    }
    return (
        <div className='todoList'>
            {props.todoList.map(todo => (
                <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
            ))}
            <button onClick={handleClick} className='clearButton'>
                Clear Todo!
            </button>
        </div>
    )
}
export default TodoList