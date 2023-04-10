import React from 'react'
import ToDo from './Todo'

export default class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => { return (<ToDo todo={todo} />) })}
      </ul>

    )

  }
}

