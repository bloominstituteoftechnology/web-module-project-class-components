import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (<ul>
      {this.props.todos.map(element => {
        return (<Todo handleToggle={this.props.handleToggle} element={element}  key={element.id}></Todo>)
      })}
    </ul>)
  }
}
