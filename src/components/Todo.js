import React, { Component } from 'react'
import './Todo.css'
export class Todo extends Component {
    render() {
     
        return (
            <div className={`${this.props.list.completed ? "purchased":""}`}>         
               <li  onClick={()=>this.props.toggleItem(this.props.list.id)}key={this.props.id}>{this.props.list.task} </li>
            </div>
        )
    }
}

export default Todo
