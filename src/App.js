import React from 'react';


import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todoItems = [
  {
    task: 'Clean kitchen',
    id: 120,
    completed: false
  },
  {
    task: 'Do dishes',
    id: 121,
    completed: false
  },
  {
    task: 'Clean shed',
    id: 122,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super();
    this.state = {
      todoItems: todoItems
    }
  }

  handleAdd = (task) => {
    const item = {
      task: task,
      id: this.state.todoItems.length,
      completed: false
    }

    const newTasks = [...this.state.todoItems, item]
    this.setState({
      todoItems: newTasks
    })
    
  }

  handleToggle = (itemId) => {
    this.setState({
      task: this.state.todoItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  }

  handleClear = () => {
    const newTasks = this.state.todoItems.filter(item => {
      return !item.completed
    })
    this.setState({
      task: newTasks
    })
  }

  render() {
    return (
      <div>
         <div>
            <h2>Welcome to your To-do App!</h2>
            <TodoForm handleAdd={this.handleAdd} />
          </div>
        <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} handleAdd={this.handleAdd} todoItems={this.state.todoItems} />
        
      </div> 
    
      
    );
  }
}

export default App;
