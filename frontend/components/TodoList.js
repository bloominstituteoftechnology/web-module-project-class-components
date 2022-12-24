import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
    {
      this.props.theListArr.map(list =>
        <Todo
         list={list}
         key={list.id} 
         toggleCompleted={this.props.toggleCompleted}
          />)
    }
      </div>
    )
  }
}
