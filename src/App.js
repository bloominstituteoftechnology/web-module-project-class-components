import React from 'react';
// import ReactDOM from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todos = [
  {
    // task: "",
    // id: "",
    // completed: false
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

  toggleTodo = (id) => {
    // console.log("id: ", id);
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
          } 
        } else {
          return (todo);
        }
      
    });

    this.setState({
      todos: newTodos
    })
  }

  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      task: title,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearTodo = () => {
    const newTodos = this.state.todos.filter(todo => {
      return(todo.completed === false);
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} clearTodo={this.clearTodo}/>
      </div>
    );
  }
}
export default App;
