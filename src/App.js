import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './components/Todo.css'

const todoItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Clean Room',
    id: 1528817084368,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoItems:todoItems
    }
  }


  toggleItem = (itemId) => {
    console.log("toggle Item", itemId)
    const updatedTodoList = this.state.todoItems.map(item => {
      if (item.id === itemId) {
        return {...item, completed: !item.completed}
      } 
      else {
        return item
      }
    })
    console.log("updated todo list", updatedTodoList)
      this.setState({
      ...this.state,
      todoItems: updatedTodoList
    })
  }

  addItem = (newItem) => {
    this.setState({
      ...this.state,
      todoItems: [
        ...this.state.todoItems,  
      {
        task: newItem,
        id: Date.now(),
        completed: false
      }]
    })
  }

  clearItem = () => {
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.filter(item => !item.completed)
    })
    console.log("test", this.state.todoItems)
  }
  
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm addItem={this.addItem} />
        <TodoList todoItems={this.state.todoItems}
        toggleItem={this.toggleItem}
        clearItem={this.clearItem} 
        />
      </div>
    );
  }
}

export default App;
