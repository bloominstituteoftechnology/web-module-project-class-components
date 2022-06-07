import React, {useEffect} from 'react'

export default class Todo extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div 
        className={`list-item ${this.props.hideCompleted && this.props.todoItem.completed ? 'hidden' : ''}`} 
        onClick={()=> this.props.toggleCompleted(this.props.todoItem.id)}
        >
        {this.props.todoItem.name}{this.props.todoItem.completed ? ' ✓' : ''}
      </div>
    )
  }
}
