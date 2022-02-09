import React from 'react'

export default class Todo extends React.Component {

  handleClick = () => {
    console.log(`clicked`)
  }

  render() {
    return (<li onClick={this.handleClick}>{this.props.todo.task} { this.props.todo.completed ? <span>-completed</span> : <span></span> }</li>)
  }

}
