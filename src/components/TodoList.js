// your components will all go in this `component` directory.
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div className='todo-list'>
            {props.todos.map(todo=> (
                <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo}/>
            ))}
            
        </div>
    )
}

export default TodoList
