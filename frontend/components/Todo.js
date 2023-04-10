import React from 'react'

export default class ToDo extends React.Component {
  render() {
    return(
    <li>{this.props.todo.name}{this.props.todo.completed ? <span>- completed</span> : <span></span>}</li>
  )}

}

