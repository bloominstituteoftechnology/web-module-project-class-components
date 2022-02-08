import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (<li >{this.todo.task} { this.todo.completed ? <span>-completed</span> : <span></span> }</li>)
  }
}
