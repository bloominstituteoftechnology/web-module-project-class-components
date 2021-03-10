import React from 'react';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

class App extends React.Component {
  
  constructor() {
    super();
    const todos = this.setState();
  }

  render() {
    
    return (
      <div>
        <h2>This Todo App Bussin.</h2>
        <Todo></Todo>
        <TodoForm></TodoForm>
        <TodoList todos={todos} />
        <input type="text"/>
        <button>Add Todo</button>
        <button>Clear Completed Todos</button>
      </div>
    );
  }
}

export default App;
