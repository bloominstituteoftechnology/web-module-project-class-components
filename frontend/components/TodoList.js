import React from 'react'
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
export default class TodoList extends React.Component {

  render() {
    return (
      <div>
        {this.props.toDos.map(item => (
          <Todo 
            item={item}
            key={uuid()}
            handleToggle={this.props.handleToggle}
          />
        ))}
      </div>
    )
  }
}
