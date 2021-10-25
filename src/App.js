import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const items = [
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
    constructor() {
      super();
      this.state = {
        items: items
      }
    }

  handleClear = () => {
    this.setState({
      ...this.state,
      items: this.state.items.filter(item => !item.completed)
    })
  }

  handleAddItem = (task) => {

    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      items: [...this.state.items, newItem]
    });
  }

  handleToggleItem = (item) => {
    this.setState({
      ...this.state,
      items: this.state.items.map(todoItem => {
        if(todoItem.id === item.id){
          return {
            ...todoItem,
            completed: !todoItem.completed
          }
        }
        return todoItem;
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className= 'App'>
        <div> 
          <h2>Welcome to your Todo App!</h2>
          <TodoForm  handleAddItem= {this.handleAddItem}/> 
        </div>
        <TodoList handleToggleItem= {this.handleToggleItem} items={this.state.items} />
        <button className= 'clear-btn' onClick= {this.handleClear}> Clear Completed!</button>
      </div>
    );
  }
}

export default App;
