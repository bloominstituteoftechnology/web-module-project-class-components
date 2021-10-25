import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  // From ReadMe
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
    this.state  = {
      todo: list
    }
  };

  toggleItem = id => {
    const newList = this.state.todo.map(item => {
      if( item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }

      } else {
        return(item);
      }

    })

    this.setState({
      todo: newList
    })
  };


  addItem = title => {
    const newItem = {
      task: title,
      id: this.state.todo.length,
      completed: false
    }

    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  clearCompleted = evt => {
    evt.preventDefault();
    const newList = this.state.todo.filter(item => {
      return(item.completed === false)
    })

    this.setState({
      todo: newList
    })
  }

  render() {
    return (
      <div className="App">
        <div className = "JSXError">
          <h2>Welcome to your Todo App!</h2>
          <TodoList clearCompleted = {this.clearCompleted} 
                    todo = {this.state.todo}
                    toggleItem = {this.toggleItem}
          />
        </div>

        <div className = "formList">
          <TodoForm addItem = {this.addItem}
                    clearCompleted = {this.clearCompleted}
          />
        </div>
      </div>
    )
  }
}

export default App;
