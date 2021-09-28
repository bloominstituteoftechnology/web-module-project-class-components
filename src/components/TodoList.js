import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        { this.props.todos.map((item, index) => <Todo text={item.text} done={item.done} completeItem={this.props.completeItem(index)}/>) }
      </div>
    );
  }
}

export default TodoList;