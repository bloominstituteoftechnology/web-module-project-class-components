import React from 'react'

export default class Todo extends React.Component {

  handleClick = () => {
    this.props.handleToggle(this.props.element.id);
  }

  render() {
    return (<li key={this.props.element.id} onClick={this.handleClick}>{this.props.element.name} {this.props.element.completed?<span>- completed</span> : <span></span>}</li>)
  }
}
