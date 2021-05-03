import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';


const todo = [
  {
    name: 'English',
    id: 0,
    clicked: false
  },
  {
    name: 'Math',
    id: 1,
    clicked: false
  },
  {
    name: 'Science',
    id: 2,
    clicked: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  toggleItem = (id) => {
    const newToDo = this.state.todo.map(item => {
      if(item.id === id) {
        return {
          ...item,
          clicked: !item.clicked
        }
      } else {
        return(item)
      }
    })
    this.setState({
      todo: newToDo
    })
  }

  addItem = (title) => {
    const newItem = {
      name:title,
      id: this.state.todo.length,
      clicked: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  clearClicked = () => {
    const newToDo = this.state.todo.filter(item => {
      return(item.clicked === false)
    })
    this.setState( {
      todo: newToDo
    })
  }

  render() {
    return (
      <div className = 'App'>
        <div className = 'Header'>
          <h2>To Do List!</h2>
           <TodoForm addItem = {this.addItem} />
        </div>
          <TodoList clearClicked = {this.clearClicked} toggleItem = {this.toggleItem} todo = {this.state.todo}/>
         
      </div>
    );
  }
}

export default App;