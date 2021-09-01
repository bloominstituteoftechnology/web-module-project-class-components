import React, { Component } from 'react'
import './Todo.css'

 class Todo extends Component {
     handleClick = () => {
         this.props.toggleCompleted(this.props.todo.id)
        
     }
    render() {
        return (
            <div onClick={this.handleClick} className={this.props.todo.completed ? 'completed' : ''}>
                <p>{this.props.todo.name}</p>
            </div>
        )
    }
}

export default Todo
