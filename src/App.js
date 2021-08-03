import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  {

    task: 're-string guitar',
    id: Date.now(),
    completed: false
  },
  {
    task: 'organize bedroom',
    id: Date.now(),
    completed: false,
  },
  {
    task: 'read current book',
    id: Date.now(),
    completed: false
  },
  {
    task: 'increase level in overwatch',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoArray: todos,

    }
  }
  handleClick = (todo) => {
    
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoArray: [
        ...todos,
        newTodo
      ]
    })
  }

  handleClear = () => {

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todoArray} />
        <TodoForm handleClick={this.handleClick} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
