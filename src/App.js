import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const todos = [
  {

    task: 're-string guitar',
    id: 111,
    completed: false
  },
  {
    task: 'organize bedroom',
    id: 112,
    completed: false,
  },
  {
    task: 'read current book',
    id: 113,
    completed: false
  },
  {
    task: 'increase level in overwatch',
    id: 114,
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
  addTodo = (item) => {
    const newTodo = {
      task: item,
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
    this.setState({
      ...this.state,
      todoArray: this.state.todoArray.filter(item => {
        return (item.completed === false)
      })
    });
  }

  handleComplete = (id) => {
    this.setState({
      ...this.state,
      todoArray: this.state.todoArray.map(item => {
        if(item.id===id) {
          return ({
            ...item,
            completed: !item.completed
          })
        }
        return item
      })
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todoArray} handleComplete={this.handleComplete} />
        <TodoForm addTodo={this.addTodo} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
