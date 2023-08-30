import React from 'react'
import ToDo from './Todo'
export default class TodoList extends React.Component {
  render() {
    return (
     <ul>
      {this.props.todos.map(todo => { return (<ToDo key={todo.id} handleToggle={this.props.handleToggle} todo={todo} />) })}
     </ul>
    )
  }
}
