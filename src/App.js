import React from 'react';


import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const todos = [
  {
    name: "Finish Project",
    id: 111,
    done: false
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
  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.done)
    })
  }

  handleAddTodo = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      done: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleToggleTodo = (item) => {

    this.setState({
      ...this.state,
      todos: this.state.todos.map(chore => {
        if (chore.id === item.id) {
          return {
            ...chore,
            done: !chore.done
          }
        }
        return chore;
      })
    })

  } 

  render() {
    return (
      <div>
        <div>
          <h1>Todo List: </h1>
          <TodoForm handleAddTodo={this.handleAddTodo}/>
        </div>
        <TodoList handleToggleTodo={this.handleToggleTodo} todos={this.state.todos}/>
        <button onClick={this.handleClear}>Clear Selected</button> 
      </div>
    );
  }
}

export default App;
