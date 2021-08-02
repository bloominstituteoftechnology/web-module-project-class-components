import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
    render(){
        return (
            <div className='list'>
                {this.props.todo.map(task => <Todo task={task} key={task.id} handleComplete={this.props.handleComplete} />)}
            </div>
        )
    }
}

export default TodoList