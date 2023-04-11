import React from 'react'

export default class ToDo extends React.Component {

  handleclick = () =>{
  this.props.handletoggle(this.props.todo.id)
  }
  render() {
    return(
    <li  onClick={this.handleclick}>{this.props.todo.name}{this.props.todo.completed ? <span>- completed</span> : <span></span>}</li>
  )}

}

