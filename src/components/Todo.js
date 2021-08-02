import React, { Component } from 'react';

class Todo extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.handleComplete(this.props.task.id)
    }

    render(){
        return (
            <div onClick={this.handleClick} className={`task ${this.props.task.completed ? 'complete' : ''}`}>
                <h3>{this.props.task.task}</h3>
            </div>
        )
    }
}

export default Todo