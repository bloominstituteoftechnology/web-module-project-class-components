import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {




  render() {
    return (
      <div className='Todo-list'>
        {this.props.data.map(task => (
          <Todo toggleCompleted={this.props.toggleCompleted} key={task.id} task={task}/>
        ))}

      </div>
    )
  }
}