import React from 'react'

export default class Todo extends React.Component {

  render() {
    return (
      <div className={`item${this.props.task.completed ? 'completed' : ''}`}
      onClick={() => this.props.toggleCompleted(this.props.task.id)}>
        <h2>{this.props.task.name}</h2>
        
      </div>
    )
  }
}
