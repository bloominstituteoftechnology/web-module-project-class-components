import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='list'>
        Todos:
        <br />
        <br />
        {this.props.todoItems.map(item => {
          return <Todo todoItem={item} key={item.id} toggleCompleted={this.props.toggleCompleted} hideCompleted={this.props.hideCompleted} />
        })}
      </div>
    )
  }
}
