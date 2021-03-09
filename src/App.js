import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import SearchBar from './components/SearchBar'
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

  handleChanges = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    })
};

  delTodo = (id) => {
    console.log(id)
    this.setState ({todos: [...this.state.todos.filter(todo => todo.completed !== true)]})
  }

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <div className='header'> 
          <SearchBar />
          
          <TodoForm 
            handleChanges = {this.handleChanges}
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
