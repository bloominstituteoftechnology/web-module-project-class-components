import React from 'react'

const Todo = (props) => {

        return (
            <div
                className={`todo${props.todo.completed ? " completed" : ""}`}
            
                onClick={() => props.toggleTodo(props.todo.id)}>

                
                <div className="cards-flex">
                <p>{props.todo.task}</p>
                </div>
            </div>
        )
    
}
export default Todo