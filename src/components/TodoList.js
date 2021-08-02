import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    render(){
        return (
            <div>
                {this.props.todo.map(task => <Todo task={task} />)}
            </div>
        )
    }
}

export default TodoList