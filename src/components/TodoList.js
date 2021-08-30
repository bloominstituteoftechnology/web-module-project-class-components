import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    const handleClick = () => {
        props.handleClear()
    }

    
    return(
        <div>
            {
                props.todos.map(item => (
                    <Todo handleToggleComplete={props.handleToggleComplete} key={item.id} item={item} />
                  ))}
            <button onClick={handleClick}>Clear Todo</button>
        </div>
    )
}

export default TodoList
