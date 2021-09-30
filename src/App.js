import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        }
      ]
    }
}

  handleClear = (e) => {
   e.preventDefault();
   this.setState({
     todos: this.state.todos.filter (todo =>  !todo.completed)
   })
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id ) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        else{
          return todo;
        }
      })
    })
  }

  addTodo = (taskName) => {
    const newTodo = {
      task: taskName,
        id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    );
  };
}

export default App;
