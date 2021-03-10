import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ]
    };
  }

  addItem = (taskName) => {
    const newTodo = {
      task: taskName,
      id: Date(),
      completed: false
    };
    this.setState({
      todos: [... this.state.todos, newTodo],
    });
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    })
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    
    return (
      <div>
        <h2>This Todo App Bussin.</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addItem={this.addItem}/>
        <br />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
