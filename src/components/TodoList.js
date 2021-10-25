import React from 'react'

export default function TodoList(props){
    return (
        <div>
            {props.todos.map(todo => {
                <Todo key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default TodoList

