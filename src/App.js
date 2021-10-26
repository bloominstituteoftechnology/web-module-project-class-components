import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialTodos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
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
      todos: initialTodos
    };
  }

  addTodo = value => {
    const newTodo = {
      task: value,
      id: Date.now(),
      completed: false
    }

    this.setState({ ...this.state, todos: [newTodo, ...this.state.todos]})
  }

  completeTodo = todo => {
    this.setState({ 
      ...this.state,
      todos: this.state.todos.map(elem => {
        if (elem.id === todo.id) {
          return { ...elem, completed: !elem.completed }
        }
        return elem;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} complete={this.completeTodo} />
        <TodoForm sumbit={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
