import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todo = 
[
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

  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  toggleCompleted = (todoId) => {
    const newTodo = this.state.todo.map(todo => {
      if(todoId === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      else { return todo }
    })
    this.setState({
      ...this.state,
      todo: newTodo
    })
  }

  addTodo = (todoName, e) => {
    e.preventDefault();
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div className='App'>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
      </div>
      <TodoList clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
