import React from 'react';
import ReactDOM from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: '',
    // be careful to check data looks okay since id is currently an empty string
    // start at 1 or todos.length()?
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  addTodo = (title) => {
    const newTodo = {
      task: title,
      id: this.state.todos.length,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    console.log(todos);
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
