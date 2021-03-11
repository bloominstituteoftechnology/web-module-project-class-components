import React, { Component } from 'react';
import "./Todo.css"



class Todo extends Component {
    render() {
        console.log('this.props', this.props)
        return (
            <div onClick= {()=> this.props.toggleItem(this.props.id)}
            className={`item${this.props.completed ? " completed" : ""}`}>
                <p className="todoItem">{" "} {this.props.item}</p>
            </div>
        );
    }
}

export default Todo;
