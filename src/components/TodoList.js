import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

    const handleClearClick = id => {
        props.handleClearComplete()
    }

    return (
        <div>
            {props.todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleToggleComplete={props.handleToggleComplete}
                    />
                )
            })}
            <button onClick={handleClearClick}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList