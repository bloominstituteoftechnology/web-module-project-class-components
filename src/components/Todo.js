import React from 'react'
import "./Todo.css"

class Todo extends React.Component {
    render() {
        return (
            <div className={`${this.props.todo.completed ? "Completed" : "EachTodo"}`} onClick={() => { this.props.handleTodoToggle(this.props.todo.name) }}>
                <p>{this.props.todo.name}</p>
            </div>
        )
    }
}

export default Todo;