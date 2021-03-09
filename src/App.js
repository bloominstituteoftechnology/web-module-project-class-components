import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const todos = [
  // {
  //   name: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  {
    name: 'Bake Cookies',
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
      todos : todos,
    }
  }

  toggleTodo = (clickOnId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickOnId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  addTodo = (todoName) => {
    const newItem = {
      name: todoName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todos:[...this.state.todos, newItem],
    });
  };

  delTodo = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            addTodo = {this.addTodo} 
            delTodo = {this.delTodo}
          />
          <TodoList
            toggleTodo = {this.toggleTodo}
            todos = {this.state.todos} />
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
