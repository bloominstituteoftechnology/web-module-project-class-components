import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './Todo.css';

const todolist = [
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
      todolist: todolist
    }
  }

  toggleCompleted = (todoId) => {
    const updatedTodolist = this.state.todolist.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    });
    this.setState({
      ...this.state,
      todolist: updatedTodolist
    });
  }

  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todolist: [
        ...this.state.todolist,
        newTodo
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList todolist={this.state.todolist} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
