// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { todos, complete } = this.props;

    return (
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} complete={complete} />
        ))}
      </div>
    )
  }
}

export default TodoList;