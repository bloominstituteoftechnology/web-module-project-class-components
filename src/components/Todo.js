import React from 'react'
import "./Todo.css"

class Todo extends React.Component {
    render() {
        return (
            <div className={`item${this.props.todo.completed ? "Completed" : "EachTodo"}`} onClick={this.props.handleTodoToggle(this.props.todo.name)}>
                <p>{this.props.todo}</p>
            </div>
        )
    }
}

export default Todo;