import React from 'react'

const Todo = (props) => {

        return (
            <div >
                <div
                    className={`todo${props.todo.completed ? " completed" : ""}`}
                
                    onClick={() => props.toggleTodo(props.todo.id)}>

                   <div className="flex-container" > 
                        <div className="cards-flex">
                            <p>{props.todo.task}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}
export default Todo